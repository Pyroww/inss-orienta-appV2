import {
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaGlobeAmericas,
  FaKey,
  FaLock,
  FaShieldAlt,
} from 'react-icons/fa';
import SenhaGovGrid from '../../../components/senhagov/SenhaGovGrid';
import './SenhaGov.css';

export default function SenhaGov({ setActiveTab }) {
  const voltarParaHome = () => setActiveTab('inicio');

  return (
    <article
      className="gov-password-screen animate-fade"
      aria-labelledby="gov-password-title"
    >
      <header className="gov-password-hero">
        <button type="button" className="gov-password-back" onClick={voltarParaHome}>
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar ao início
        </button>

        <div className="gov-password-hero-main">
          <span className="gov-password-hero-icon" aria-hidden="true">
            <FaKey focusable="false" />
          </span>

          <div>
            <p className="gov-password-eyebrow">Acesso ao Meu INSS</p>
            <h1 id="gov-password-title">Recuperar senha da conta Gov.br</h1>
            <p className="gov-password-intro">
              Escolha uma forma segura de confirmar sua identidade e criar uma nova senha.
            </p>
          </div>
        </div>
      </header>

      <aside className="gov-password-critical-note" aria-label="Aviso de segurança">
        <FaExclamationTriangle aria-hidden="true" focusable="false" />
        <div>
          <strong>Faça a recuperação somente em um canal oficial</strong>
          <p>
            O INSS Orienta explica o caminho, mas não solicita sua senha. Digite CPF, senha
            ou código de confirmação somente quando o endereço pertencer ao domínio
            <strong> gov.br</strong> ou ao ambiente oficial do seu banco.
          </p>
        </div>
      </aside>

      <section
        className="gov-password-section gov-password-section--steps"
        aria-labelledby="gov-password-steps-title"
      >
        <div className="gov-password-section-heading">
          <span aria-hidden="true"><FaCheckCircle focusable="false" /></span>
          <div>
            <p className="gov-password-eyebrow">Visão geral</p>
            <h2 id="gov-password-steps-title">Como funciona</h2>
          </div>
        </div>

        <ol className="gov-password-steps">
          <li>
            <span aria-hidden="true">1</span>
            <div>
              <strong>Escolha um método</strong>
              <p>Use uma opção que esteja disponível para você e para sua conta.</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">2</span>
            <div>
              <strong>Confirme sua identidade</strong>
              <p>Siga as instruções apresentadas pelo Gov.br ou pelo banco credenciado.</p>
            </div>
          </li>
          <li>
            <span aria-hidden="true">3</span>
            <div>
              <strong>Crie a nova senha</strong>
              <p>Use uma senha exclusiva e guarde-a em um local privado e seguro.</p>
            </div>
          </li>
        </ol>
      </section>

      <section
        className="gov-password-section"
        aria-labelledby="gov-password-methods-title"
      >
        <div className="gov-password-section-heading">
          <span aria-hidden="true"><FaKey focusable="false" /></span>
          <div>
            <p className="gov-password-eyebrow">Passo a passo</p>
            <h2 id="gov-password-methods-title">Escolha como recuperar</h2>
          </div>
        </div>

        <p className="gov-password-section-lead">
          Toque em uma opção para ver as orientações. O Gov.br poderá mostrar métodos
          diferentes conforme os dados e recursos disponíveis na sua conta.
        </p>

        <SenhaGovGrid setActiveTab={setActiveTab} />
      </section>

      <section
        className="gov-password-section"
        aria-labelledby="gov-password-security-title"
      >
        <div className="gov-password-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="gov-password-eyebrow">Proteja sua conta</p>
            <h2 id="gov-password-security-title">Cuidados importantes</h2>
          </div>
        </div>

        <div className="gov-password-security-grid">
          <article>
            <FaLock aria-hidden="true" focusable="false" />
            <h3>Senha é pessoal</h3>
            <p>
              Não envie sua senha ou códigos por WhatsApp, ligação, e-mail ou Comunidade.
              Nenhum participante precisa desses dados para orientar você.
            </p>
          </article>

          <article>
            <FaGlobeAmericas aria-hidden="true" focusable="false" />
            <h3>Confira o endereço</h3>
            <p>
              Desconfie de links recebidos por mensagem. Prefira abrir diretamente o
              aplicativo Gov.br ou digitar o endereço oficial no navegador.
            </p>
          </article>

          <article>
            <FaShieldAlt aria-hidden="true" focusable="false" />
            <h3>Proteção adicional</h3>
            <p>
              Depois de recuperar o acesso, revise os dispositivos autorizados e considere
              ativar a verificação em duas etapas no aplicativo Gov.br.
            </p>
          </article>
        </div>

        <div className="gov-password-lock-note" role="note">
          <FaExclamationTriangle aria-hidden="true" focusable="false" />
          <p>
            <strong>Conta bloqueada por tentativas incorretas?</strong> O bloqueio pode ser
            removido automaticamente após algumas horas. Se precisar acessar antes, siga o
            processo oficial de recuperação de senha.
          </p>
        </div>
      </section>

      <section
        className="gov-password-section gov-password-section--official"
        aria-labelledby="gov-password-official-title"
      >
        <div className="gov-password-section-heading">
          <span aria-hidden="true"><FaGlobeAmericas focusable="false" /></span>
          <div>
            <p className="gov-password-eyebrow">Fonte oficial</p>
            <h2 id="gov-password-official-title">Continue no Gov.br</h2>
          </div>
        </div>

        <p className="gov-password-section-lead">
          Use os botões abaixo quando quiser iniciar a recuperação ou consultar orientações
          atualizadas. Os links abrem um serviço externo ao INSS Orienta.
        </p>

        <div className="gov-password-official-links">
          <a
            href="https://acesso.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>Abrir a conta Gov.br</strong>
              <small>Informe seu CPF e escolha “Esqueci minha senha”</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="gov-password-sr-only"> (abre em nova guia)</span>
          </a>

          <a
            href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-na-conta-gov.br/recuperar-senha-da-conta-gov.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>Ler a orientação oficial</strong>
              <small>Confira os métodos atuais de recuperação</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="gov-password-sr-only"> (abre em nova guia)</span>
          </a>
        </div>

        <p className="gov-password-reviewed">
          Orientações verificadas nos canais oficiais em{' '}
          <time dateTime="2026-09-07">7 de setembro de 2026</time>.
        </p>
      </section>

      <button type="button" className="gov-password-bottom-back" onClick={voltarParaHome}>
        <FaArrowLeft aria-hidden="true" focusable="false" />
        Voltar para a página inicial
      </button>
    </article>
  );
}
