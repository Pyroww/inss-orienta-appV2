import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import './home.css';
import { FaSearch, FaTrash, FaPlus, FaSpinner, FaExternalLinkAlt } from 'react-icons/fa';
import ServicesGrid from '../../components/home/ServicesGrid';
import logoNormal from '../../assets/home/logo-cabecalho-v2.png';
import logoEscura from '../../assets/home/logo-cabecalho-v2_modo_escuro.png'; 
import logoAltoContraste from '../../assets/home/logo-cabecalho-v2_modo_AltoContraste.png'; 

export default function Home({ theme, setActiveTab }) {
  const [textoPesquisa, setTextoPesquisa] = useState('');
  
  // Estados de Notícias e Autenticação
  const [noticias, setNoticias] = useState([]);
  const [adminLogado, setAdminLogado] = useState(false);
  
  // Estados do Formulário de Upload
  const [titulo, setTitulo] = useState('');
  const [linkOficial, setLinkOficial] = useState('');
  const [imagemArquivo, setImagemArquivo] = useState(null);
  const [uploading, setUploading] = useState(false);
  // ADICIONE ESTA LINHA:
  const [carregando, setCarregando] = useState(true);
  // Executa assim que a tela abre
  useEffect(() => {
    verificarSessao();
    buscarNoticias();
  }, []);

  // Verifica se o painel secreto da Comunidade deixou o token salvo
  const verificarSessao = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setAdminLogado(!!session);
  };

  // Busca todas as notícias no banco de dados
  const buscarNoticias = async () => {
    setCarregando(true); // Começa a carregar
    const { data, error } = await supabase
      .from('noticias')
      .select('*')
      .order('criado_em', { ascending: false });
      
    if (!error && data) {
      setNoticias(data);
    }
    setCarregando(false); // Termina de carregar
  };

  // Envia a notícia e faz o upload da imagem
  const lidarEnviarNoticia = async (e) => {
    e.preventDefault();
    if (!titulo || !linkOficial || !imagemArquivo) {
      alert("Preencha o título, o link oficial e escolha uma imagem!");
      return;
    }

    setUploading(true);

    try {
      // 1. Gera nome único para o arquivo
      const extensao = imagemArquivo.name.split('.').pop();
      const nomeArquivo = `${Date.now()}_${Math.random().toString(36).substring(7)}.${extensao}`;
      
      // 2. Sobe para o Balde (Bucket) "noticias_imagens"
      const { error: uploadError } = await supabase.storage
        .from('noticias_imagens')
        .upload(nomeArquivo, imagemArquivo, { cacheControl: '3600', upsert: false });

      if (uploadError) throw uploadError;

      // 3. Pega o Link Público permanente
      const { data: urlData } = supabase.storage
        .from('noticias_imagens')
        .getPublicUrl(nomeArquivo);

      const imagemUrl = urlData.publicUrl;

      // 4. Salva no Banco de Dados
      const { error: dbError } = await supabase
        .from('noticias')
        .insert([{ 
          titulo, 
          link_oficial: linkOficial, 
          imagem_url: imagemUrl 
        }]);

      if (dbError) throw dbError;

      // Limpa os campos e atualiza a tela
      setTitulo('');
      setLinkOficial('');
      setImagemArquivo(null);
      document.getElementById('input-arquivo').value = ""; // reseta o visual do input
      buscarNoticias();

    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao publicar a notícia. Verifique as permissões do Supabase.");
    } finally {
      setUploading(false);
    }
  };

  // Exclui uma notícia da tela
  const deletarNoticia = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir esta notícia?")) return;
    await supabase.from('noticias').delete().eq('id', id);
    buscarNoticias();
  };

  const renderLogo = () => {
    if (theme === 'dark') return logoEscura;
    if (theme === 'high-contrast') return logoAltoContraste;
    return logoNormal;
  };

  // Divide as notícias: As 3 primeiras para o Carrossel, o resto para o Histórico
  const noticiasDestaque = noticias.slice(0, 3);
  const noticiasAnteriores = noticias.slice(3);

  return (
    <div className="home-screen animate-fade">
      
      <div className="logo-card">
        <img src={renderLogo()} alt="Logo INSS Orienta" className="logo-image" />
      </div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          className="search-input" 
          placeholder="O que você procura hoje?" 
          value={textoPesquisa}
          onChange={(e) => setTextoPesquisa(e.target.value)}
        />
      </div>

      {textoPesquisa === '' && (
        <>
          {/* MÓDULO ADMINISTRADOR INVISÍVEL PARA O CIDADÃO */}
          {adminLogado && (
            <div className="admin-painel-noticias">
              <h3><FaPlus /> Novo Comunicadoo</h3>
              <form onSubmit={lidarEnviarNoticia} className="admin-form-upload">
                <input 
                  type="text" 
                  placeholder="Título do aviso..." 
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  maxLength={100}
                />
                <input 
                  type="url" 
                  placeholder="Link da matéria no Gov.br..." 
                  value={linkOficial}
                  onChange={(e) => setLinkOficial(e.target.value)}
                />
                <input 
                  id="input-arquivo"
                  type="file" 
                  accept="image/*"
                  onChange={(e) => setImagemArquivo(e.target.files[0])}
                  className="input-arquivo"
                />
                <button type="submit" className="btn-publicar-noticia" disabled={uploading}>
                  {uploading ? <><FaSpinner className="girando"/> Enviando...</> : 'Publicar no App'}
                </button>
              </form>
            </div>
          )}

          <h2 className="section-title">Últimos mais recentes...</h2>

          {/* CARROSSEL DE NOTÍCIAS (TOP 3) */}
          <div className="carrossel-container">
            {noticiasDestaque.length === 0 && !carregando && (
              <p className="noticias-vazias">Nenhum aviso emitido no momento.</p>
            )}
            {noticiasDestaque.map((noticia) => (
              <div key={noticia.id} className="news-card">
                {adminLogado && (
                  <button className="btn-deletar-noticia" onClick={() => deletarNoticia(noticia.id)}>
                    <FaTrash />
                  </button>
                )}
                <span className="news-badge">GOV.BR</span>
                <div className="news-image-placeholder">
                  <img src={noticia.imagem_url} alt="Capa" className="imagem-noticia-real" />
                </div>
                <div className="news-content">
                  <h3>{noticia.titulo}</h3>
                  <a href={noticia.link_oficial} target="_blank" rel="noopener noreferrer" className="link-oficial-btn">
                    Ler matéria oficial <FaExternalLinkAlt className="icone-link" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* GRADE CENTRAL DE BOTÕES (Coração do App) */}
      <ServicesGrid textoPesquisa={textoPesquisa} setActiveTab={setActiveTab} />

      {/* HISTÓRICO DE AVISOS ANTERIORES (Abaixo da Grade) */}
      {textoPesquisa === '' && noticiasAnteriores.length > 0 && (
        <div className="historico-noticias-secao">
          <h2 className="section-title">Avisos Anteriores</h2>
          <div className="lista-historico">
            {noticiasAnteriores.map((noticia) => (
              <div key={noticia.id} className="card-historico-item">
                <img src={noticia.imagem_url} alt="Miniatura" className="historico-thumb" />
                <div className="historico-textos">
                  <h4>{noticia.titulo}</h4>
                  <a href={noticia.link_oficial} target="_blank" rel="noopener noreferrer" className="historico-link">
                    Acessar <FaExternalLinkAlt />
                  </a>
                </div>
                {adminLogado && (
                  <button className="btn-deletar-mini" onClick={() => deletarNoticia(noticia.id)}>
                    <FaTrash />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}