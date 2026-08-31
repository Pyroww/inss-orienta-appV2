import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FaArrowLeft,
  FaCheckCircle,
  FaComments,
  FaExclamationTriangle,
  FaInfoCircle,
  FaLock,
  FaPaperPlane,
  FaReply,
  FaShieldAlt,
  FaSignOutAlt,
  FaSync,
  FaTrash,
  FaUserSecret,
  FaUsers,
} from 'react-icons/fa';
import { supabase } from '../../../services/supabase';
import './Comunidade.css';

const PERGUNTAS_DEMONSTRACAO = [
  {
    id: 'demonstracao-aviso',
    texto: 'Este espaço permite compartilhar dúvidas gerais e trocar orientações sem exibir o nome dos participantes.',
    is_admin: true,
    criado_em: '2026-08-27T12:00:00.000Z',
  },
  {
    id: 'demonstracao-duvida',
    texto: 'Como encontro a data de pagamento usando o número do meu benefício?',
    is_admin: false,
    criado_em: '2026-08-27T12:30:00.000Z',
  },
];

const RESPOSTAS_DEMONSTRACAO = {
  'demonstracao-aviso': [
    {
      id: 'demonstracao-resposta-aviso',
      texto: 'Não publique CPF, senha, endereço, dados bancários ou número do benefício.',
      is_admin: true,
      criado_em: '2026-08-27T12:05:00.000Z',
    },
  ],
  'demonstracao-duvida': [
    {
      id: 'demonstracao-resposta-duvida',
      texto: 'Na página Calendário de pagamentos, use somente o algarismo anterior ao traço. Não publique o número completo aqui.',
      is_admin: true,
      criado_em: '2026-08-27T12:45:00.000Z',
    },
  ],
};

const copiarRespostasDemonstracao = () => Object.fromEntries(
  Object.entries(RESPOSTAS_DEMONSTRACAO).map(([id, respostas]) => [
    id,
    respostas.map((resposta) => ({ ...resposta })),
  ]),
);

const formatarData = (valor) => {
  if (!valor) return '';

  const data = new Date(valor);
  if (Number.isNaN(data.getTime())) return '';

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(data);
};

export default function Comunidade({ setActiveTab }) {
  const [perguntas, setPerguntas] = useState([]);
  const [novaPergunta, setNovaPergunta] = useState('');
  const [carregandoPerguntas, setCarregandoPerguntas] = useState(true);
  const [enviandoPergunta, setEnviandoPergunta] = useState(false);
  const [erroPerguntas, setErroPerguntas] = useState('');

  const [perguntaAtivaId, setPerguntaAtivaId] = useState(null);
  const [respostas, setRespostas] = useState([]);
  const [novaResposta, setNovaResposta] = useState('');
  const [carregandoRespostas, setCarregandoRespostas] = useState(false);
  const [enviandoResposta, setEnviandoResposta] = useState(false);
  const [erroRespostas, setErroRespostas] = useState('');

  const [emailAdmin, setEmailAdmin] = useState('');
  const [senhaAdmin, setSenhaAdmin] = useState('');
  const [adminLogado, setAdminLogado] = useState(false);
  const [fazendoLogin, setFazendoLogin] = useState(false);
  const [mensagem, setMensagem] = useState(null);

  const perguntasDemonstracaoRef = useRef(
    PERGUNTAS_DEMONSTRACAO.map((pergunta) => ({ ...pergunta })),
  );
  const respostasDemonstracaoRef = useRef(copiarRespostasDemonstracao());
  const requisicaoPerguntasRef = useRef(0);
  const requisicaoRespostasRef = useRef(0);
  const acessoEquipeRef = useRef(null);

  const modoDemonstracao = !supabase;

  const avisar = useCallback((tipo, texto) => {
    setMensagem({ tipo, texto });
  }, []);

  const buscarPerguntas = useCallback(async (anunciarAtualizacao = false) => {
    const requisicaoAtual = requisicaoPerguntasRef.current + 1;
    requisicaoPerguntasRef.current = requisicaoAtual;
    setCarregandoPerguntas(true);
    setErroPerguntas('');

    if (!supabase) {
      setPerguntas([...perguntasDemonstracaoRef.current]);
      setCarregandoPerguntas(false);
      if (anunciarAtualizacao) {
        avisar('informacao', 'Os dados de demonstração foram atualizados nesta tela.');
      }
      return;
    }

    try {
      const { data, error } = await supabase
        .from('perguntas')
        .select('*')
        .order('criado_em', { ascending: false });

      if (requisicaoPerguntasRef.current !== requisicaoAtual) return;

      if (error) {
        setErroPerguntas('Não foi possível carregar as publicações agora.');
        return;
      }

      setPerguntas(data || []);
      if (anunciarAtualizacao) {
        avisar('sucesso', 'Publicações atualizadas.');
      }
    } catch {
      if (requisicaoPerguntasRef.current === requisicaoAtual) {
        setErroPerguntas('Não foi possível carregar as publicações agora.');
      }
    } finally {
      if (requisicaoPerguntasRef.current === requisicaoAtual) {
        setCarregandoPerguntas(false);
      }
    }
  }, [avisar]);

  const buscarRespostas = useCallback(async (perguntaId) => {
    const requisicaoAtual = requisicaoRespostasRef.current + 1;
    requisicaoRespostasRef.current = requisicaoAtual;
    setCarregandoRespostas(true);
    setErroRespostas('');

    if (!supabase) {
      const respostasLocais = respostasDemonstracaoRef.current[perguntaId] || [];
      setRespostas([...respostasLocais]);
      setCarregandoRespostas(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('respostas')
        .select('*')
        .eq('pergunta_id', perguntaId)
        .order('criado_em', { ascending: true });

      if (requisicaoRespostasRef.current !== requisicaoAtual) return;

      if (error) {
        setErroRespostas('Não foi possível carregar as respostas.');
        return;
      }

      setRespostas(data || []);
    } catch {
      if (requisicaoRespostasRef.current === requisicaoAtual) {
        setErroRespostas('Não foi possível carregar as respostas.');
      }
    } finally {
      if (requisicaoRespostasRef.current === requisicaoAtual) {
        setCarregandoRespostas(false);
      }
    }
  }, []);

  useEffect(() => {
    let componenteAtivo = true;
    let assinaturaAutenticacao;

    if (supabase) {
      supabase.auth.getSession().then(({ data, error }) => {
        if (!componenteAtivo) return;
        if (error) {
          setAdminLogado(false);
          return;
        }
        setAdminLogado(Boolean(data.session));
      });

      const { data } = supabase.auth.onAuthStateChange((_evento, sessao) => {
        if (componenteAtivo) setAdminLogado(Boolean(sessao));
      });
      assinaturaAutenticacao = data.subscription;
    }

    const temporizador = window.setTimeout(() => buscarPerguntas(), 0);

    return () => {
      componenteAtivo = false;
      window.clearTimeout(temporizador);
      assinaturaAutenticacao?.unsubscribe();
      requisicaoPerguntasRef.current += 1;
      requisicaoRespostasRef.current += 1;
    };
  }, [buscarPerguntas]);

  const fazerLoginAdmin = async (evento) => {
    evento.preventDefault();
    if (!supabase || fazendoLogin) return;

    setFazendoLogin(true);
    setMensagem(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: emailAdmin.trim(),
        password: senhaAdmin,
      });

      if (error) {
        avisar('erro', 'Não foi possível entrar. Confira o e-mail e a senha.');
        return;
      }

      setAdminLogado(true);
      setEmailAdmin('');
      setSenhaAdmin('');
      avisar('sucesso', 'Área da equipe ativada.');
      if (acessoEquipeRef.current) acessoEquipeRef.current.open = false;
    } catch {
      avisar('erro', 'Não foi possível entrar na área da equipe agora.');
    } finally {
      setFazendoLogin(false);
    }
  };

  const sairAdmin = async () => {
    if (!supabase) return;

    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        avisar('erro', 'Não foi possível encerrar a sessão.');
        return;
      }
      setAdminLogado(false);
      avisar('sucesso', 'Você saiu da área da equipe.');
    } catch {
      avisar('erro', 'Não foi possível encerrar a sessão.');
    }
  };

  const enviarPergunta = async (evento) => {
    evento.preventDefault();
    const texto = novaPergunta.trim();
    if (!texto || enviandoPergunta) return;

    setEnviandoPergunta(true);
    setMensagem(null);

    if (!supabase) {
      const perguntaLocal = {
        id: `pergunta-local-${Date.now()}`,
        texto,
        is_admin: false,
        criado_em: new Date().toISOString(),
      };
      perguntasDemonstracaoRef.current = [
        perguntaLocal,
        ...perguntasDemonstracaoRef.current,
      ];
      setPerguntas([...perguntasDemonstracaoRef.current]);
      setNovaPergunta('');
      avisar(
        'informacao',
        'Publicação adicionada somente à demonstração. Ela desaparecerá ao sair da página.',
      );
      setEnviandoPergunta(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('perguntas')
        .insert([{ texto, is_admin: adminLogado }]);

      if (error) {
        avisar('erro', 'Não foi possível publicar. Tente novamente mais tarde.');
        return;
      }

      setNovaPergunta('');
      avisar(
        'sucesso',
        adminLogado
          ? 'Comunicado publicado pela equipe do projeto.'
          : 'Sua dúvida foi publicada sem nome visível.',
      );
      await buscarPerguntas();
    } catch {
      avisar('erro', 'Não foi possível publicar. Verifique sua conexão e tente novamente.');
    } finally {
      setEnviandoPergunta(false);
    }
  };

  const alternarRespostas = async (perguntaId) => {
    if (perguntaAtivaId === perguntaId) {
      requisicaoRespostasRef.current += 1;
      setPerguntaAtivaId(null);
      setRespostas([]);
      setNovaResposta('');
      setErroRespostas('');
      setCarregandoRespostas(false);
      return;
    }

    setPerguntaAtivaId(perguntaId);
    setRespostas([]);
    setNovaResposta('');
    await buscarRespostas(perguntaId);
  };

  const enviarResposta = async (evento, perguntaId) => {
    evento.preventDefault();
    const texto = novaResposta.trim();
    if (!texto || enviandoResposta) return;

    setEnviandoResposta(true);
    setMensagem(null);

    if (!supabase) {
      const respostaLocal = {
        id: `resposta-local-${Date.now()}`,
        texto,
        is_admin: false,
        criado_em: new Date().toISOString(),
      };
      const respostasAtuais = respostasDemonstracaoRef.current[perguntaId] || [];
      respostasDemonstracaoRef.current = {
        ...respostasDemonstracaoRef.current,
        [perguntaId]: [...respostasAtuais, respostaLocal],
      };
      setRespostas([...respostasDemonstracaoRef.current[perguntaId]]);
      setNovaResposta('');
      avisar(
        'informacao',
        'Resposta adicionada somente à demonstração. Ela não foi enviada à internet.',
      );
      setEnviandoResposta(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('respostas')
        .insert([{ pergunta_id: perguntaId, texto, is_admin: adminLogado }]);

      if (error) {
        avisar('erro', 'Não foi possível publicar a resposta.');
        return;
      }

      setNovaResposta('');
      avisar('sucesso', 'Resposta publicada.');
      await buscarRespostas(perguntaId);
    } catch {
      avisar('erro', 'Não foi possível publicar a resposta. Tente novamente.');
    } finally {
      setEnviandoResposta(false);
    }
  };

  const deletarPergunta = async (id) => {
    if (!supabase) return;
    if (!window.confirm('Excluir esta publicação e todas as respostas relacionadas?')) return;

    try {
      const { error } = await supabase.from('perguntas').delete().eq('id', id);
      if (error) {
        avisar('erro', 'Não foi possível excluir a publicação.');
        return;
      }

      if (perguntaAtivaId === id) {
        setPerguntaAtivaId(null);
        setRespostas([]);
      }
      avisar('sucesso', 'Publicação excluída.');
      await buscarPerguntas();
    } catch {
      avisar('erro', 'Não foi possível excluir a publicação.');
    }
  };

  const deletarResposta = async (id, perguntaId) => {
    if (!supabase) return;
    if (!window.confirm('Excluir esta resposta?')) return;

    try {
      const { error } = await supabase.from('respostas').delete().eq('id', id);
      if (error) {
        avisar('erro', 'Não foi possível excluir a resposta.');
        return;
      }

      avisar('sucesso', 'Resposta excluída.');
      await buscarRespostas(perguntaId);
    } catch {
      avisar('erro', 'Não foi possível excluir a resposta.');
    }
  };

  return (
    <section className="comunidade-screen animate-fade" aria-labelledby="comunidade-titulo">
      <header className="comunidade-hero">
        <button
          type="button"
          className="comunidade-voltar"
          onClick={() => setActiveTab('inicio')}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar ao início
        </button>

        <div className="comunidade-hero-principal">
          <span className="comunidade-hero-icone" aria-hidden="true">
            <FaUsers focusable="false" />
          </span>
          <div>
            <p className="comunidade-sobretitulo">Dúvidas e orientações</p>
            <h1 id="comunidade-titulo">Comunidade</h1>
            <p className="comunidade-descricao">
              Compartilhe dúvidas gerais e veja orientações de outros participantes.
            </p>
          </div>
        </div>

        {adminLogado && (
          <div className="comunidade-sessao-equipe" role="status">
            <span>
              <FaCheckCircle aria-hidden="true" focusable="false" />
              Área da equipe ativa
            </span>
            <button type="button" onClick={sairAdmin}>
              <FaSignOutAlt aria-hidden="true" focusable="false" />
              Sair
            </button>
          </div>
        )}
      </header>

      <aside className="comunidade-alerta-privacidade" aria-label="Aviso de privacidade">
        <FaShieldAlt aria-hidden="true" focusable="false" />
        <div>
          <strong>Proteja seus dados pessoais</strong>
          <p>
            Este espaço é público e não é atendimento do INSS. Não informe CPF, senha,
            endereço, telefone, dados bancários, diagnóstico detalhado ou número do benefício.
          </p>
        </div>
      </aside>

      {modoDemonstracao && (
        <aside className="comunidade-aviso-demo" aria-label="Modo de demonstração">
          <FaInfoCircle aria-hidden="true" focusable="false" />
          <p>
            <strong>Modo de demonstração.</strong> Você pode testar publicações e respostas,
            mas elas não serão salvas ao sair desta página.
          </p>
        </aside>
      )}

      <section className="comunidade-publicar" aria-labelledby="comunidade-publicar-titulo">
        <div className="comunidade-publicar-cabecalho">
          <span className={adminLogado ? 'is-equipe' : ''} aria-hidden="true">
            {adminLogado
              ? <FaCheckCircle focusable="false" />
              : <FaUserSecret focusable="false" />}
          </span>
          <div>
            <h2 id="comunidade-publicar-titulo">
              {adminLogado ? 'Publicar como equipe do projeto' : 'Publicar uma dúvida'}
            </h2>
            <p>
              {adminLogado
                ? 'A publicação receberá o selo “Equipe do INSS Orienta”.'
                : 'Seu nome não será exibido na publicação.'}
            </p>
          </div>
        </div>

        <form className="comunidade-form-publicar" onSubmit={enviarPergunta}>
          <label htmlFor="comunidade-nova-pergunta">Texto da publicação</label>
          <p id="comunidade-ajuda-pergunta" className="comunidade-ajuda-campo">
            Escreva uma dúvida geral, sem incluir dados pessoais.
          </p>
          <textarea
            id="comunidade-nova-pergunta"
            value={novaPergunta}
            onChange={(evento) => setNovaPergunta(evento.target.value)}
            placeholder="Exemplo: como consultar a data do meu pagamento?"
            aria-describedby="comunidade-ajuda-pergunta comunidade-contador-pergunta"
            maxLength={300}
            rows={5}
          />
          <div className="comunidade-form-rodape">
            <span id="comunidade-contador-pergunta" className="comunidade-contador">
              {novaPergunta.length} de 300 caracteres
            </span>
            <button
              type="submit"
              className={adminLogado ? 'is-equipe' : ''}
              disabled={!novaPergunta.trim() || enviandoPergunta}
            >
              <FaPaperPlane aria-hidden="true" focusable="false" />
              {enviandoPergunta ? 'Publicando…' : 'Publicar'}
            </button>
          </div>
        </form>
      </section>

      {mensagem && (
        <div
          className={`comunidade-mensagem is-${mensagem.tipo}`}
          role={mensagem.tipo === 'erro' ? 'alert' : 'status'}
          aria-live={mensagem.tipo === 'erro' ? 'assertive' : 'polite'}
        >
          {mensagem.tipo === 'erro'
            ? <FaExclamationTriangle aria-hidden="true" focusable="false" />
            : <FaInfoCircle aria-hidden="true" focusable="false" />}
          <p>{mensagem.texto}</p>
        </div>
      )}

      <section
        className="comunidade-feed"
        aria-labelledby="comunidade-feed-titulo"
        aria-busy={carregandoPerguntas}
      >
        <div className="comunidade-feed-cabecalho">
          <div>
            <p className="comunidade-sobretitulo">Troca de experiências</p>
            <h2 id="comunidade-feed-titulo">Publicações recentes</h2>
          </div>
          <button
            type="button"
            className="comunidade-atualizar"
            onClick={() => buscarPerguntas(true)}
            disabled={carregandoPerguntas}
          >
            <FaSync
              className={carregandoPerguntas ? 'is-girando' : ''}
              aria-hidden="true"
              focusable="false"
            />
            <span>{carregandoPerguntas ? 'Atualizando…' : 'Atualizar'}</span>
          </button>
        </div>

        {carregandoPerguntas && (
          <div className="comunidade-estado" role="status">
            <FaSync className="is-girando" aria-hidden="true" focusable="false" />
            <p>Carregando publicações…</p>
          </div>
        )}

        {!carregandoPerguntas && erroPerguntas && (
          <div className="comunidade-estado is-erro" role="alert">
            <FaExclamationTriangle aria-hidden="true" focusable="false" />
            <div>
              <p>{erroPerguntas}</p>
              <button type="button" onClick={() => buscarPerguntas()}>
                Tentar novamente
              </button>
            </div>
          </div>
        )}

        {!carregandoPerguntas && !erroPerguntas && perguntas.length === 0 && (
          <div className="comunidade-estado">
            <FaComments aria-hidden="true" focusable="false" />
            <div>
              <strong>Ainda não há publicações</strong>
              <p>Use o formulário acima para iniciar uma conversa.</p>
            </div>
          </div>
        )}

        {!carregandoPerguntas && !erroPerguntas && perguntas.length > 0 && (
          <div className="comunidade-lista">
            {perguntas.map((pergunta) => {
              const respostasAbertas = perguntaAtivaId === pergunta.id;
              const dataFormatada = formatarData(pergunta.criado_em);
              const identificador = String(pergunta.id).replace(/[^a-zA-Z0-9_-]/g, '-');

              return (
                <article
                  key={pergunta.id}
                  className={`comunidade-card${pergunta.is_admin ? ' is-equipe' : ''}`}
                  aria-labelledby={`comunidade-autor-${identificador}`}
                >
                  <div className="comunidade-card-cabecalho">
                    <div className="comunidade-autor-data">
                      <span
                        id={`comunidade-autor-${identificador}`}
                        className={`comunidade-autor${pergunta.is_admin ? ' is-equipe' : ''}`}
                      >
                        {pergunta.is_admin
                          ? <FaCheckCircle aria-hidden="true" focusable="false" />
                          : <FaUserSecret aria-hidden="true" focusable="false" />}
                        {pergunta.is_admin ? 'Equipe do INSS Orienta' : 'Participante sem nome'}
                      </span>
                      {dataFormatada && (
                        <time dateTime={pergunta.criado_em}>{dataFormatada}</time>
                      )}
                    </div>

                    {adminLogado && (
                      <button
                        type="button"
                        className="comunidade-excluir"
                        aria-label="Excluir esta publicação"
                        onClick={() => deletarPergunta(pergunta.id)}
                      >
                        <FaTrash aria-hidden="true" focusable="false" />
                      </button>
                    )}
                  </div>

                  <p className="comunidade-texto-publicacao">{pergunta.texto}</p>

                  <button
                    type="button"
                    className={`comunidade-respostas-toggle${respostasAbertas ? ' is-aberto' : ''}`}
                    aria-expanded={respostasAbertas}
                    aria-controls={`comunidade-respostas-${identificador}`}
                    onClick={() => alternarRespostas(pergunta.id)}
                  >
                    <FaComments aria-hidden="true" focusable="false" />
                    {respostasAbertas ? 'Fechar respostas' : 'Ver ou responder'}
                  </button>

                  {respostasAbertas && (
                    <div
                      id={`comunidade-respostas-${identificador}`}
                      className="comunidade-respostas"
                    >
                      <h3 className="comunidade-respostas-titulo">Respostas</h3>

                      {carregandoRespostas && (
                        <p className="comunidade-respostas-estado" role="status">
                          Carregando respostas…
                        </p>
                      )}

                      {!carregandoRespostas && erroRespostas && (
                        <div className="comunidade-respostas-estado is-erro" role="alert">
                          <p>{erroRespostas}</p>
                          <button type="button" onClick={() => buscarRespostas(pergunta.id)}>
                            Tentar novamente
                          </button>
                        </div>
                      )}

                      {!carregandoRespostas && !erroRespostas && respostas.length === 0 && (
                        <p className="comunidade-respostas-estado">
                          Ainda não há respostas. Você pode escrever a primeira.
                        </p>
                      )}

                      {!carregandoRespostas && !erroRespostas && respostas.length > 0 && (
                        <div className="comunidade-lista-respostas">
                          {respostas.map((resposta) => {
                            const dataResposta = formatarData(resposta.criado_em);

                            return (
                              <div
                                key={resposta.id}
                                className={`comunidade-resposta${resposta.is_admin ? ' is-equipe' : ''}`}
                              >
                                <div className="comunidade-resposta-cabecalho">
                                  <div className="comunidade-autor-data">
                                    <span className={`comunidade-autor${resposta.is_admin ? ' is-equipe' : ''}`}>
                                      {resposta.is_admin
                                        ? <FaCheckCircle aria-hidden="true" focusable="false" />
                                        : <FaUserSecret aria-hidden="true" focusable="false" />}
                                      {resposta.is_admin ? 'Equipe do INSS Orienta' : 'Participante'}
                                    </span>
                                    {dataResposta && (
                                      <time dateTime={resposta.criado_em}>{dataResposta}</time>
                                    )}
                                  </div>

                                  {adminLogado && (
                                    <button
                                      type="button"
                                      className="comunidade-excluir"
                                      aria-label="Excluir esta resposta"
                                      onClick={() => deletarResposta(resposta.id, pergunta.id)}
                                    >
                                      <FaTrash aria-hidden="true" focusable="false" />
                                    </button>
                                  )}
                                </div>
                                <p>{resposta.texto}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <form
                        className="comunidade-form-responder"
                        onSubmit={(evento) => enviarResposta(evento, pergunta.id)}
                      >
                        <label htmlFor={`comunidade-resposta-${identificador}`}>
                          Escreva uma resposta
                        </label>
                        <input
                          id={`comunidade-resposta-${identificador}`}
                          type="text"
                          value={novaResposta}
                          onChange={(evento) => setNovaResposta(evento.target.value)}
                          placeholder="Responda sem incluir dados pessoais"
                          aria-describedby={`comunidade-contador-resposta-${identificador}`}
                          maxLength={250}
                        />
                        <div className="comunidade-form-resposta-rodape">
                          <span
                            id={`comunidade-contador-resposta-${identificador}`}
                            className="comunidade-contador"
                          >
                            {novaResposta.length} de 250 caracteres
                          </span>
                          <button
                            type="submit"
                            className={adminLogado ? 'is-equipe' : ''}
                            disabled={!novaResposta.trim() || enviandoResposta}
                          >
                            <FaReply aria-hidden="true" focusable="false" />
                            {enviandoResposta ? 'Enviando…' : 'Enviar resposta'}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      {!adminLogado && !modoDemonstracao && (
        <details ref={acessoEquipeRef} className="comunidade-acesso-equipe">
          <summary>
            <FaLock aria-hidden="true" focusable="false" />
            Acesso da equipe do projeto
          </summary>
          <div className="comunidade-acesso-conteudo">
            <p>Área restrita às pessoas responsáveis pela moderação.</p>
            <form onSubmit={fazerLoginAdmin}>
              <label htmlFor="comunidade-email-equipe">E-mail</label>
              <input
                id="comunidade-email-equipe"
                type="email"
                value={emailAdmin}
                onChange={(evento) => setEmailAdmin(evento.target.value)}
                autoComplete="username"
                required
              />
              <label htmlFor="comunidade-senha-equipe">Senha</label>
              <input
                id="comunidade-senha-equipe"
                type="password"
                value={senhaAdmin}
                onChange={(evento) => setSenhaAdmin(evento.target.value)}
                autoComplete="current-password"
                required
              />
              <button type="submit" disabled={fazendoLogin}>
                <FaLock aria-hidden="true" focusable="false" />
                {fazendoLogin ? 'Entrando…' : 'Entrar'}
              </button>
            </form>
          </div>
        </details>
      )}
    </section>
  );
}