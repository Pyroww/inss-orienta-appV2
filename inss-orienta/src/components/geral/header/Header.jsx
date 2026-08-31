import { useEffect, useRef, useState } from 'react';
import {
  FaBars,
  FaComments,
  FaFileContract,
  FaHome,
  FaQuestionCircle,
  FaRobot,
  FaTimes,
  FaUniversalAccess,
  FaUserShield,
} from 'react-icons/fa';
import './header.css';

const ITENS_PRINCIPAIS = [
  { tela: 'inicio', rotulo: 'Início', Icone: FaHome },
  { tela: 'assistente', rotulo: 'Assistente virtual', Icone: FaRobot },
  { tela: 'comunidade', rotulo: 'Comunidade', Icone: FaComments },
  { tela: 'acessibilidade', rotulo: 'Acessibilidade', Icone: FaUniversalAccess },
  { tela: 'ajuda', rotulo: 'Ajuda', Icone: FaQuestionCircle },
];

const ITENS_SOBRE = [
  { tela: 'termos', rotulo: 'Termos de uso', Icone: FaFileContract },
  { tela: 'privacidade', rotulo: 'Privacidade e segurança', Icone: FaUserShield },
];

function ItemMenu({ activeTab, item, navegarPara }) {
  const { tela, rotulo, Icone } = item;
  const itemAtual = activeTab === tela;

  return (
    <button
      type="button"
      className={`menu-link${itemAtual ? ' menu-link-atual' : ''}`}
      aria-current={itemAtual ? 'page' : undefined}
      onClick={() => navegarPara(tela)}
    >
      <Icone className="menu-link-icone" aria-hidden="true" focusable="false" />
      <span>{rotulo}</span>
    </button>
  );
}

export default function Header({ activeTab = 'inicio', setActiveTab }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const dialogRef = useRef(null);
  const botaoMenuRef = useRef(null);
  const devolverFocoRef = useRef(true);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (menuAberto && !dialog.open) {
      dialog.showModal();
    } else if (!menuAberto && dialog.open) {
      dialog.close();
    }
  }, [menuAberto]);

  const abrirMenu = () => {
    devolverFocoRef.current = true;
    setMenuAberto(true);
  };

  const fecharMenu = () => {
    devolverFocoRef.current = true;
    setMenuAberto(false);
  };

  const aoFecharDialog = () => {
    setMenuAberto(false);

    if (devolverFocoRef.current) {
      window.requestAnimationFrame(() => botaoMenuRef.current?.focus());
    }

    devolverFocoRef.current = true;
  };

  const focarConteudoPrincipal = () => {
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

  const navegarPara = (tela) => {
    devolverFocoRef.current = false;
    setActiveTab(tela);
    setMenuAberto(false);
    focarConteudoPrincipal();
  };

  const lidarComCliqueNoDialog = (evento) => {
    if (evento.target !== evento.currentTarget) return;

    const limites = evento.currentTarget.getBoundingClientRect();
    const clicouFora =
      evento.clientX < limites.left ||
      evento.clientX > limites.right ||
      evento.clientY < limites.top ||
      evento.clientY > limites.bottom;

    if (clicouFora) fecharMenu();
  };

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>

      <header className="app-header">
        <button
          ref={botaoMenuRef}
          type="button"
          className="menu-button"
          aria-label="Abrir menu principal"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={abrirMenu}
        >
          <FaBars aria-hidden="true" focusable="false" />
        </button>

        <button
          type="button"
          className="header-brand"
          aria-label="INSS Orienta — voltar ao início"
          onClick={() => navegarPara('inicio')}
        >
          <span className="header-brand-name">INSS ORIENTA</span>
          
        </button>

        <span className="header-balance" aria-hidden="true" />
      </header>

      <dialog
        id="menu-principal"
        ref={dialogRef}
        className="menu-lateral"
        aria-labelledby="titulo-menu-principal"
        aria-describedby="descricao-menu-principal"
        onCancel={() => setMenuAberto(false)}
        onClose={aoFecharDialog}
        onClick={lidarComCliqueNoDialog}
      >
        <div className="menu-lateral-estrutura">
          <div className="menu-lateral-header">
            <div>
              <h2 id="titulo-menu-principal">Menu principal</h2>
              <p id="descricao-menu-principal">Escolha para onde deseja ir</p>
            </div>

            <button
              type="button"
              className="btn-fechar"
              aria-label="Fechar menu"
              onClick={fecharMenu}
            >
              <FaTimes aria-hidden="true" focusable="false" />
            </button>
          </div>

          <div className="menu-lateral-conteudo">
            <nav className="menu-lateral-links" aria-label="Navegação principal">
              <p className="menu-grupo-titulo">Acesso rápido</p>
              {ITENS_PRINCIPAIS.map((item) => (
                <ItemMenu
                  key={item.tela}
                  activeTab={activeTab}
                  item={item}
                  navegarPara={navegarPara}
                />
              ))}

              <p className="menu-grupo-titulo menu-grupo-titulo-separado">Sobre o projeto</p>
              {ITENS_SOBRE.map((item) => (
                <ItemMenu
                  key={item.tela}
                  activeTab={activeTab}
                  item={item}
                  navegarPara={navegarPara}
                />
              ))}
            </nav>

            <aside className="menu-aviso" aria-label="Aviso importante">
              <strong>Projeto educativo e não oficial.</strong>
              <span> Para serviços e consultas pessoais, utilize o Meu INSS ou a Central 135.</span>
            </aside>
          </div>
        </div>
      </dialog>
    </>
  );
}