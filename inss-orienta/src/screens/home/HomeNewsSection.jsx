import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FaExternalLinkAlt,
  FaPlus,
  FaSpinner,
  FaTrash,
} from 'react-icons/fa';
import { supabase, supabaseConfigurado } from '../../services/supabase';

const LIMITE_NOTICIAS = 8;
const TAMANHO_MAXIMO_IMAGEM = 5 * 1024 * 1024;
const EXTENSOES_POR_TIPO = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

const NOTICIAS_DEMONSTRACAO = [
  {
    id: 'demo-calendario-2026',
    titulo: 'Calendário de pagamentos do INSS de 2026',
    link_oficial: 'https://www.gov.br/inss/pt-br/assuntos/noticias/calendario-de-pagamentos-do-inss-de-2026-esta-disponivel',
    imagem_url: '',
  },
  {
    id: 'demo-prova-vida',
    titulo: 'Prova de Vida: confira perguntas e respostas',
    link_oficial: 'https://www.gov.br/inss/pt-br/assuntos/noticias/prova-de-vida-confira-perguntas-respostas',
    imagem_url: '',
  },
  {
    id: 'demo-golpes',
    titulo: 'Alerta: o INSS não vai à sua casa pedir dados',
    link_oficial: 'https://www.gov.br/inss/pt-br/assuntos/e-golpe-inss-nao-vai-a-casa-dos-segurados-para-pedir-dados',
    imagem_url: '',
  },
];

const linkGovBrSeguro = (valor) => {
  try {
    const url = new URL(valor);
    return url.protocol === 'https:'
      && (url.hostname === 'gov.br' || url.hostname.endsWith('.gov.br'));
  } catch {
    return false;
  }
};

export default function HomeNewsSection() {
  const [noticias, setNoticias] = useState([]);
  const [adminLogado, setAdminLogado] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [publicando, setPublicando] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [titulo, setTitulo] = useState('');
  const [linkOficial, setLinkOficial] = useState('');
  const [imagemArquivo, setImagemArquivo] = useState(null);
  const inputArquivoRef = useRef(null);

  const buscarNoticias = useCallback(async () => {
    setCarregando(true);

    if (!supabaseConfigurado) {
      setNoticias(NOTICIAS_DEMONSTRACAO);
      setFeedback('Modo de demonstração: os avisos abaixo são exemplos com fontes oficiais.');
      setCarregando(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('noticias')
        .select('*')
        .order('criado_em', { ascending: false })
        .limit(LIMITE_NOTICIAS);

      if (error) throw error;

      const noticiasSeguras = (data || []).filter((noticia) =>
        linkGovBrSeguro(noticia.link_oficial));

      setNoticias(noticiasSeguras);
      setFeedback(
        noticiasSeguras.length < (data || []).length
          ? 'Alguns avisos foram ocultados porque não apontavam para um endereço oficial gov.br.'
          : '',
      );
    } catch (erro) {
      console.error('Não foi possível carregar os avisos:', erro);
      setNoticias(NOTICIAS_DEMONSTRACAO);
      setFeedback('Não foi possível atualizar os avisos. Exibindo referências oficiais de exemplo.');
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    let componenteAtivo = true;
    let assinaturaAutenticacao;

    const iniciar = async () => {
      if (supabaseConfigurado) {
        const { data } = await supabase.auth.getSession();
        if (componenteAtivo) setAdminLogado(Boolean(data.session));
      }

      if (componenteAtivo) await buscarNoticias();
    };

    const temporizador = window.setTimeout(() => void iniciar(), 0);

    if (supabaseConfigurado) {
      const { data } = supabase.auth.onAuthStateChange((_evento, sessao) => {
        if (componenteAtivo) setAdminLogado(Boolean(sessao));
      });
      assinaturaAutenticacao = data.subscription;
    }

    return () => {
      componenteAtivo = false;
      window.clearTimeout(temporizador);
      assinaturaAutenticacao?.unsubscribe();
    };
  }, [buscarNoticias]);

  const publicarNoticia = async (evento) => {
    evento.preventDefault();
    setFeedback('');

    if (!supabaseConfigurado) {
      setFeedback('Configure o Supabase para habilitar publicações reais.');
      return;
    }

    const tituloLimpo = titulo.trim();
    const linkLimpo = linkOficial.trim();
    const extensao = EXTENSOES_POR_TIPO[imagemArquivo?.type];

    if (!tituloLimpo || !linkGovBrSeguro(linkLimpo) || !imagemArquivo) {
      setFeedback('Informe título, imagem e um endereço HTTPS oficial terminado em gov.br.');
      return;
    }

    if (!extensao) {
      setFeedback('A imagem deve estar nos formatos JPG, PNG ou WebP.');
      return;
    }

    if (imagemArquivo.size > TAMANHO_MAXIMO_IMAGEM) {
      setFeedback('A imagem deve ter no máximo 5 MB.');
      return;
    }

    setPublicando(true);
    let caminhoArquivo = '';

    try {
      const identificador = globalThis.crypto?.randomUUID?.()
        || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      caminhoArquivo = `${identificador}.${extensao}`;

      const { error: erroUpload } = await supabase.storage
        .from('noticias_imagens')
        .upload(caminhoArquivo, imagemArquivo, {
          cacheControl: '3600',
          contentType: imagemArquivo.type,
          upsert: false,
        });

      if (erroUpload) throw erroUpload;

      const { data: dadosUrl } = supabase.storage
        .from('noticias_imagens')
        .getPublicUrl(caminhoArquivo);

      const { error: erroBanco } = await supabase.from('noticias').insert([{
        titulo: tituloLimpo,
        link_oficial: linkLimpo,
        imagem_url: dadosUrl.publicUrl,
      }]);

      if (erroBanco) {
        await supabase.storage.from('noticias_imagens').remove([caminhoArquivo]);
        throw erroBanco;
      }

      setTitulo('');
      setLinkOficial('');
      setImagemArquivo(null);
      if (inputArquivoRef.current) inputArquivoRef.current.value = '';
      await buscarNoticias();
      setFeedback('Aviso publicado com sucesso.');
    } catch (erro) {
      console.error('Não foi possível publicar o aviso:', erro);
      setFeedback('Não foi possível publicar. Verifique a conexão e as permissões do Supabase.');
    } finally {
      setPublicando(false);
    }
  };

  const deletarNoticia = async (noticia) => {
    if (!supabaseConfigurado) return;
    if (!window.confirm(`Excluir o aviso “${noticia.titulo}”?`)) return;

    const { error } = await supabase.from('noticias').delete().eq('id', noticia.id);

    if (error) {
      setFeedback('Não foi possível excluir o aviso.');
      return;
    }

    await buscarNoticias();
    setFeedback('Aviso excluído.');
  };

  const noticiasDestaque = noticias.slice(0, 3);
  const noticiasAnteriores = noticias.slice(3);

  return (
    <section className="home-news-section" aria-labelledby="titulo-avisos-home">
      <div className="home-section-heading">
        <div>
          <p className="home-kicker">Links verificados</p>
          <h2 id="titulo-avisos-home">Avisos e notícias oficiais</h2>
        </div>
        <span className="home-official-badge">Fonte gov.br</span>
      </div>

      <p className="home-section-description">
        Confira informações recentes e abra a matéria completa no portal oficial.
      </p>

      {carregando && (
        <p className="home-news-status" role="status">
          <FaSpinner className="girando" aria-hidden="true" /> Carregando avisos…
        </p>
      )}

      {feedback && <p className="home-news-feedback" role="status">{feedback}</p>}

      {!carregando && noticiasDestaque.length === 0 && (
        <p className="home-news-empty">Nenhum aviso oficial está disponível no momento.</p>
      )}

      <div className="home-news-list">
        {noticiasDestaque.map((noticia) => (
          <article key={noticia.id} className="home-news-card">
            {adminLogado && (
              <button
                type="button"
                className="home-news-delete"
                aria-label={`Excluir aviso: ${noticia.titulo}`}
                onClick={() => deletarNoticia(noticia)}
              >
                <FaTrash aria-hidden="true" focusable="false" />
              </button>
            )}

            <div className="home-news-media">
              {noticia.imagem_url ? (
                <img src={noticia.imagem_url} alt="" loading="lazy" />
              ) : (
                <span aria-hidden="true">INSS ORIENTA</span>
              )}
            </div>

            <div className="home-news-content">
              <span className="home-news-source">GOV.BR</span>
              <h3>{noticia.titulo}</h3>
              <a
                href={noticia.link_oficial}
                target="_blank"
                rel="noopener noreferrer"
                className="home-news-link"
              >
                Abrir matéria oficial
                <FaExternalLinkAlt aria-hidden="true" focusable="false" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {noticiasAnteriores.length > 0 && (
        <details className="home-news-history">
          <summary>Ver avisos anteriores ({noticiasAnteriores.length})</summary>
          <ul>
            {noticiasAnteriores.map((noticia) => (
              <li key={noticia.id}>
                <a href={noticia.link_oficial} target="_blank" rel="noopener noreferrer">
                  <span>{noticia.titulo}</span>
                  <FaExternalLinkAlt aria-hidden="true" focusable="false" />
                </a>
                {adminLogado && (
                  <button
                    type="button"
                    aria-label={`Excluir aviso anterior: ${noticia.titulo}`}
                    onClick={() => deletarNoticia(noticia)}
                  >
                    <FaTrash aria-hidden="true" focusable="false" />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </details>
      )}

      {adminLogado && (
        <details className="home-news-admin">
          <summary><FaPlus aria-hidden="true" /> Publicar novo aviso</summary>
          <form onSubmit={publicarNoticia}>
            <label htmlFor="titulo-novo-aviso">Título do aviso</label>
            <input
              id="titulo-novo-aviso"
              type="text"
              value={titulo}
              maxLength={100}
              required
              onChange={(evento) => setTitulo(evento.target.value)}
            />

            <label htmlFor="link-novo-aviso">Endereço oficial gov.br</label>
            <input
              id="link-novo-aviso"
              type="url"
              inputMode="url"
              value={linkOficial}
              placeholder="https://www.gov.br/..."
              required
              onChange={(evento) => setLinkOficial(evento.target.value)}
            />

            <label htmlFor="imagem-novo-aviso">Imagem de capa</label>
            <input
              ref={inputArquivoRef}
              id="imagem-novo-aviso"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              aria-describedby="ajuda-imagem-aviso"
              required
              onChange={(evento) => setImagemArquivo(evento.target.files?.[0] || null)}
            />
            <small id="ajuda-imagem-aviso">JPG, PNG ou WebP, com no máximo 5 MB.</small>

            <button type="submit" disabled={publicando}>
              {publicando ? (
                <><FaSpinner className="girando" aria-hidden="true" /> Publicando…</>
              ) : 'Publicar aviso'}
            </button>
          </form>
        </details>
      )}
    </section>
  );
}