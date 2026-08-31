import {
  FaCheck,
  FaEye,
  FaInfoCircle,
  FaMoon,
  FaPalette,
  FaSearchPlus,
  FaSun,
  FaUndoAlt,
  FaUniversalAccess,
} from 'react-icons/fa';
import './acessabilidade.css';

const TAMANHOS_TEXTO = [
  {
    valor: 'normal',
    amostra: 'A',
    titulo: 'Padrão',
    descricao: 'Tamanho original do aplicativo.',
  },
  {
    valor: 'grande',
    amostra: 'A+',
    titulo: 'Grande',
    descricao: 'Aumenta os principais textos.',
  },
];

const TEMAS = [
  {
    valor: 'light',
    titulo: 'Modo claro',
    descricao: 'Fundo claro e texto escuro.',
    Icone: FaSun,
  },
  {
    valor: 'dark',
    titulo: 'Modo escuro',
    descricao: 'Reduz a luminosidade da tela.',
    Icone: FaMoon,
  },
  {
    valor: 'high-contrast',
    titulo: 'Alto contraste',
    descricao: 'Amarelo e branco sobre fundo preto.',
    Icone: FaEye,
  },
];

const ROTULOS_TAMANHO = {
  normal: 'texto padrão',
  grande: 'texto grande',
};

const ROTULOS_TEMA = {
  light: 'modo claro',
  dark: 'modo escuro',
  'high-contrast': 'alto contraste',
};

export default function Acessibilidade({ theme, setTheme, textSize, setTextSize }) {
  const tamanhoAtual = ROTULOS_TAMANHO[textSize] || ROTULOS_TAMANHO.normal;
  const temaAtual = ROTULOS_TEMA[theme] || ROTULOS_TEMA.light;

  const restaurarPadrao = () => {
    setTextSize('normal');
    setTheme('light');
  };

  return (
    <section
      className="acessibilidade-screen animate-fade"
      aria-labelledby="titulo-acessibilidade"
    >
      <header className="accessibility-hero">
        <span className="accessibility-hero-icon" aria-hidden="true">
          <FaUniversalAccess focusable="false" />
        </span>

        <div>
          <p className="accessibility-eyebrow">Preferências de leitura</p>
          <h1 id="titulo-acessibilidade" className="accessibility-title">
            Acessibilidade
          </h1>
          <p className="accessibility-description">
            Personalize a leitura do aplicativo. As mudanças aparecem na hora.
          </p>
        </div>
      </header>

      <p
        className="accessibility-current-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <FaCheck aria-hidden="true" focusable="false" />
        <span>
          <strong>Configuração atual:</strong> {tamanhoAtual} e {temaAtual}.
        </span>
      </p>

      <fieldset className="accessibility-fieldset">
        <legend className="accessibility-legend">
          <span className="accessibility-legend-content">
            <span className="accessibility-legend-icon" aria-hidden="true">
              <FaSearchPlus focusable="false" />
            </span>
            <span>
              <strong>Tamanho do texto</strong>
              <small>Escolha a opção mais confortável para você.</small>
            </span>
          </span>
        </legend>

        <div className="accessibility-size-options">
          {TAMANHOS_TEXTO.map(({ valor, amostra, titulo, descricao }) => {
            const selecionado = textSize === valor;

            return (
              <button
                key={valor}
                type="button"
                className={`accessibility-size-option${selecionado ? ' is-selected' : ''}`}
                aria-pressed={selecionado}
                onClick={() => setTextSize(valor)}
              >
                <span className="accessibility-choice-state" aria-hidden="true">
                  {selecionado && <FaCheck focusable="false" />}
                </span>
                <span
                  className={`accessibility-font-sample${valor === 'grande' ? ' is-large' : ''}`}
                  aria-hidden="true"
                >
                  {amostra}
                </span>
                <span className="accessibility-option-copy">
                  <strong>{titulo}</strong>
                  <small>{descricao}</small>
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="accessibility-fieldset">
        <legend className="accessibility-legend">
          <span className="accessibility-legend-content">
            <span className="accessibility-legend-icon" aria-hidden="true">
              <FaPalette focusable="false" />
            </span>
            <span>
              <strong>Cores da tela</strong>
              <small>Escolha a combinação que facilita sua leitura.</small>
            </span>
          </span>
        </legend>

        <div className="accessibility-theme-options">
          {TEMAS.map(({ valor, titulo, descricao, Icone }) => {
            const selecionado = theme === valor;

            return (
              <button
                key={valor}
                type="button"
                className={`accessibility-theme-option${selecionado ? ' is-selected' : ''}`}
                aria-pressed={selecionado}
                onClick={() => setTheme(valor)}
              >
                <span className="accessibility-theme-icon" aria-hidden="true">
                  <Icone focusable="false" />
                </span>
                <span className="accessibility-option-copy">
                  <strong>{titulo}</strong>
                  <small>{descricao}</small>
                </span>
                <span className="accessibility-choice-state" aria-hidden="true">
                  {selecionado && <FaCheck focusable="false" />}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <button
        type="button"
        className="accessibility-reset-button"
        onClick={restaurarPadrao}
      >
        <FaUndoAlt aria-hidden="true" focusable="false" />
        Restaurar configurações padrão
      </button>

      <aside className="accessibility-tip" aria-label="Dica de acessibilidade">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          O INSS Orienta também pode ser utilizado com TalkBack, ampliação de tela
          e ajustes de fonte do Android.
        </p>
      </aside>
    </section>
  );
}