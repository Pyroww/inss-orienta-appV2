import { lazy, Suspense, useState } from 'react';
import { FaInfoCircle, FaSearch, FaTimes } from 'react-icons/fa';
import ServicesGrid from '../../components/home/ServicesGrid';
import logoNormal from '../../assets/home/logo-cabecalho-v2.webp';
import logoEscura from '../../assets/home/logo-cabecalho-v2_modo_escuro.webp';
import logoAltoContraste from '../../assets/home/logo-cabecalho-v2_modo_AltoContraste.webp';
import './home.css';

const HomeNewsSection = lazy(() => import('./HomeNewsSection'));

const LOGOS_POR_TEMA = {
  light: logoNormal,
  dark: logoEscura,
  'high-contrast': logoAltoContraste,
};

export default function Home({ theme, setActiveTab }) {
  const [textoPesquisa, setTextoPesquisa] = useState('');
  const pesquisaAtiva = textoPesquisa.trim().length > 0;
  const logoAtual = LOGOS_POR_TEMA[theme] || logoNormal;

  return (
    <div className="home-screen animate-fade">
      <div className="home-logo-banner">
        <img
          src={logoAtual}
          alt="INSS Orienta"
          className="home-logo-banner-image"
          loading="eager"
        />
      </div>

      <section className="home-welcome" aria-labelledby="titulo-home">
        <div className="home-welcome-texto">
          <p className="home-kicker">Bem-vindo ao INSS Orienta</p>
          <h1 id="titulo-home">Informação previdenciária sem complicação</h1>
          <p>Encontre orientações simples sobre benefícios, pagamentos e serviços digitais.</p>
        </div>
      </section>

      <aside className="home-project-note" aria-label="Informação importante">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          <strong>Projeto educativo e não oficial.</strong>{' '}
          Para consultas pessoais e solicitações, utilize o Meu INSS ou a Central 135.
        </p>
      </aside>

      <form
        className="home-search"
        role="search"
        onSubmit={(evento) => evento.preventDefault()}
      >
        <label htmlFor="pesquisa-servicos">O que você precisa encontrar?</label>
        <p id="ajuda-pesquisa" className="home-search-help">
          Pesquise, por exemplo, aposentadoria, senha, pagamento ou documentos.
        </p>

        <div className="home-search-control">
          <FaSearch className="home-search-icon" aria-hidden="true" focusable="false" />
          <input
            id="pesquisa-servicos"
            type="search"
            inputMode="search"
            enterKeyHint="search"
            autoComplete="off"
            spellCheck="false"
            placeholder="Digite um assunto"
            value={textoPesquisa}
            aria-describedby="ajuda-pesquisa"
            aria-controls="lista-servicos-home"
            onChange={(evento) => setTextoPesquisa(evento.target.value)}
          />

          {pesquisaAtiva && (
            <button
              type="button"
              className="home-search-clear"
              aria-label="Limpar pesquisa"
              onClick={() => setTextoPesquisa('')}
            >
              <FaTimes aria-hidden="true" focusable="false" />
            </button>
          )}
        </div>
      </form>

      <ServicesGrid textoPesquisa={textoPesquisa} setActiveTab={setActiveTab} />

      {!pesquisaAtiva && (
        <Suspense
          fallback={(
            <section className="home-news-loading" aria-label="Carregando avisos">
              <div className="home-loading-line home-loading-line-short" />
              <div className="home-loading-card" />
              <span className="sr-only" role="status">Carregando avisos oficiais…</span>
            </section>
          )}
        >
          <HomeNewsSection />
        </Suspense>
      )}
    </div>
  );
}