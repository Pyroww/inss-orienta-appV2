import { useEffect, useRef } from 'react';
import { FaHome, FaQuestionCircle, FaUniversalAccess } from 'react-icons/fa';
import './footer.css';

const ITENS_NAVEGACAO = [
  { tela: 'inicio', rotulo: 'Início', Icone: FaHome },
  { tela: 'acessibilidade', rotulo: 'Acessibilidade', Icone: FaUniversalAccess },
  { tela: 'ajuda', rotulo: 'Ajuda', Icone: FaQuestionCircle },
];

export default function BottomNav({ activeTab, setActiveTab }) {
  const navegacaoRef = useRef(null);

  useEffect(() => {
    const navegacao = navegacaoRef.current;
    if (!navegacao) return undefined;

    const raiz = document.documentElement;
    const atualizarAltura = () => {
      const altura = Math.ceil(navegacao.getBoundingClientRect().height);
      raiz.style.setProperty('--bottom-nav-height', `${altura}px`);
    };

    atualizarAltura();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', atualizarAltura);
      return () => {
        window.removeEventListener('resize', atualizarAltura);
        raiz.style.removeProperty('--bottom-nav-height');
      };
    }

    const observador = new ResizeObserver(atualizarAltura);
    observador.observe(navegacao);

    return () => {
      observador.disconnect();
      raiz.style.removeProperty('--bottom-nav-height');
    };
  }, []);

  const navegarPara = (tela) => {
    setActiveTab(tela);

    window.requestAnimationFrame(() => {
      const conteudoPrincipal = document.getElementById('conteudo-principal');
      const container = document.querySelector('.app-container');

      if (container instanceof HTMLElement) {
        container.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }

      conteudoPrincipal?.focus({ preventScroll: true });
    });
  };

  return (
    <nav
      ref={navegacaoRef}
      className="bottom-nav"
      aria-label="Navegação principal inferior"
    >
      {ITENS_NAVEGACAO.map(({ tela, rotulo, Icone }) => {
        const itemAtual = activeTab === tela;

        return (
          <button
            key={tela}
            type="button"
            className={`nav-item${itemAtual ? ' nav-item-ativo' : ''}`}
            aria-current={itemAtual ? 'page' : undefined}
            aria-label={itemAtual ? `${rotulo}, página atual` : `Ir para ${rotulo}`}
            onClick={() => navegarPara(tela)}
          >
            <span className="nav-item-indicador" aria-hidden="true">
              <Icone focusable="false" />
            </span>
            <span className="nav-item-rotulo">{rotulo}</span>
          </button>
        );
      })}
    </nav>
  );
}