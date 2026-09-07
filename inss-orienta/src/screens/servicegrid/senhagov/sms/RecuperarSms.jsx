import {
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaGlobeAmericas,
  FaIdCard,
  FaKey,
  FaMobileAlt,
  FaShieldAlt,
} from 'react-icons/fa';
import './RecuperarSms.css';

const ACCOUNT_URL = 'https://acesso.gov.br/';
const OFFICIAL_GUIDE_URL =
  'https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-na-conta-gov.br/recuperar-senha-da-conta-gov.br';
const CODE_HELP_URL =
  'https://acesso.gov.br/faq/_perguntasdafaq/naorecebioemaildeconfirmacao.html';

export default function RecuperarSms({ setActiveTab }) {
  const voltarParaMetodos = () => setActiveTab('senhaGov');

  return (
    <article
      className="message-recovery-screen animate-fade"
      aria-labelledby="message-recovery-title"
    >
      <header className="message-recovery-hero">
        <button
          type="button"
          className="message-recovery-back"
          onClick={voltarParaMetodos}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar aos métodos
        </button>

        <div className="message-recovery-hero-main">
          <span className="message-recovery-hero-icon" aria-hidden="true">
            <FaEnvelope focusable="false" />
          </span>

          <div>
            <p className="message-recovery-eyebrow">Conta Gov.br</p>
            <h1 id="message-recovery-title">Recuperar por e-mail ou SMS</h1>
            <p className="message-recovery-intro">
              Receba um código no contato que já está cadastrado em sua conta e crie
              uma nova senha.
            </p>
          </div>
        </div>
      </header>

      <aside
        className="message-recovery-critical-note"
        aria-label="Aviso importante de segurança"
      >
        <FaShieldAlt aria-hidden="true" focusable="false" />
        <div>
          <strong>O código é secreto e vale como uma chave de acesso</strong>
          <p>
            Digite o código somente na página oficial do Gov.br. Não envie por
            WhatsApp, ligação, e-mail, Assistente ou Comunidade — nem mesmo para quem
            disser que trabalha no INSS.
          </p>
        </div>
      </aside>

      <section
        className="message-recovery-section"
        aria-labelledby="message-recovery-before-title"
      >
        <div className="message-recovery-section-heading">
          <span aria-hidden="true"><FaCheckCircle focusable="false" /></span>
          <div>
            <p className="message-recovery-eyebrow">Antes de começar</p>
            <h2 id="message-recovery-before-title">Confira se este método serve para você</h2>
          </div>
        </div>

        <ul className="message-recovery-checklist">
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Você precisa ter acesso ao e-mail ou ao celular já cadastrado.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>O Gov.br mostrará somente parte do endereço ou do número para conferência.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>As opções podem aparecer em ordem diferente conforme a sua conta.</span>
          </li>
        </ul>
      </section>

      <section
        className="message-recovery-section message-recovery-section--steps"
        aria-labelledby="message-recovery-steps-title"
      >
        <div className="message-recovery-section-heading">
          <span aria-hidden="true"><FaKey focusable="false" /></span>
          <div>
            <p className="message-recovery-eyebrow">Passo a passo</p>
            <h2 id="message-recovery-steps-title">Como solicitar o código</h2>
          </div>
        </div>

        <ol className="message-recovery-steps">
          <li>
            <span className="message-recovery-step-number" aria-hidden="true">1</span>
            <div>
              <div className="message-recovery-step-title">
                <FaIdCard aria-hidden="true" focusable="false" />
                <h3>Entre no Gov.br</h3>
              </div>
              <p>
                Abra o canal oficial, informe seu CPF e toque em <strong>Continuar</strong>.
                Depois, selecione <strong>Esqueci minha senha</strong>.
              </p>
            </div>
          </li>

          <li>
            <span className="message-recovery-step-number" aria-hidden="true">2</span>
            <div>
              <div className="message-recovery-step-title">
                <FaGlobeAmericas aria-hidden="true" focusable="false" />
                <h3>Veja as opções da sua conta</h3>
              </div>
              <p>
                O Gov.br apresenta primeiro os métodos mais seguros disponíveis. Se não
                puder usar reconhecimento facial ou banco, escolha a opção para
                <strong> recuperar de outra forma</strong>.
              </p>
            </div>
          </li>

          <li>
            <span className="message-recovery-step-number" aria-hidden="true">3</span>
            <div>
              <div className="message-recovery-step-title">
                <FaEnvelope aria-hidden="true" focusable="false" />
                <h3>Escolha e-mail ou celular</h3>
              </div>
              <p>
                Para usar e-mail, confirme o endereço mostrado. Se não tiver acesso a ele,
                toque em <strong>Não tenho acesso a este e-mail</strong> para seguir pelo
                celular, quando essa opção estiver disponível.
              </p>
            </div>
          </li>

          <li>
            <span className="message-recovery-step-number" aria-hidden="true">4</span>
            <div>
              <div className="message-recovery-step-title">
                <FaMobileAlt aria-hidden="true" focusable="false" />
                <h3>Peça e informe o código</h3>
              </div>
              <p>
                Confira o contato exibido, toque em <strong>Enviar código</strong> e procure
                a mensagem recebida. Digite o código na página do Gov.br e toque em
                <strong> Continuar</strong>.
              </p>
            </div>
          </li>

          <li>
            <span className="message-recovery-step-number" aria-hidden="true">5</span>
            <div>
              <div className="message-recovery-step-title">
                <FaKey aria-hidden="true" focusable="false" />
                <h3>Crie a nova senha</h3>
              </div>
              <p>
                Siga as regras mostradas na tela, escolha uma senha exclusiva e finalize a
                recuperação. Guarde-a em um local privado.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section
        className="message-recovery-section"
        aria-labelledby="message-recovery-paths-title"
      >
        <div className="message-recovery-section-heading">
          <span aria-hidden="true"><FaEnvelope focusable="false" /></span>
          <div>
            <p className="message-recovery-eyebrow">Dois caminhos</p>
            <h2 id="message-recovery-paths-title">Onde procurar o código</h2>
          </div>
        </div>

        <div className="message-recovery-path-grid">
          <article className="message-recovery-path-card message-recovery-path-card--email">
            <span aria-hidden="true"><FaEnvelope focusable="false" /></span>
            <h3>Se escolheu e-mail</h3>
            <p>Abra a caixa de entrada do endereço cadastrado.</p>
            <p>Se a mensagem não aparecer, confira também a pasta de spam ou lixo eletrônico.</p>
          </article>

          <article className="message-recovery-path-card message-recovery-path-card--sms">
            <span aria-hidden="true"><FaMobileAlt focusable="false" /></span>
            <h3>Se escolheu SMS</h3>
            <p>Abra o aplicativo de mensagens do celular cadastrado.</p>
            <p>O envio pode não ser imediato. Aguarde alguns minutos e confira o sinal.</p>
          </article>
        </div>
      </section>

      <section
        className="message-recovery-section"
        aria-labelledby="message-recovery-problems-title"
      >
        <div className="message-recovery-section-heading">
          <span aria-hidden="true"><FaExclamationTriangle focusable="false" /></span>
          <div>
            <p className="message-recovery-eyebrow">Se algo der errado</p>
            <h2 id="message-recovery-problems-title">Problemas mais comuns</h2>
          </div>
        </div>

        <div className="message-recovery-problem-list">
          <article>
            <FaClock aria-hidden="true" focusable="false" />
            <div>
              <h3>O código não chegou</h3>
              <p>
                Aguarde alguns minutos. No e-mail, confira spam e lixo eletrônico. No
                celular, confira o sinal e se o recebimento de SMS está funcionando.
              </p>
            </div>
          </article>

          <article>
            <FaEnvelope aria-hidden="true" focusable="false" />
            <div>
              <h3>Não tenho acesso ao contato</h3>
              <p>
                Use a opção <strong>Não tenho acesso a este e-mail</strong> ou
                <strong> Não tenho acesso a este celular</strong>. O Gov.br poderá oferecer
                outro método ou o formulário oficial de atendimento.
              </p>
            </div>
          </article>

          <article>
            <FaShieldAlt aria-hidden="true" focusable="false" />
            <div>
              <h3>Não reconheço o contato mostrado</h3>
              <p>
                Não peça o código para outra pessoa. Escolha outro método e consulte a ajuda
                oficial para proteger e recuperar sua conta.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="message-recovery-section message-recovery-section--official"
        aria-labelledby="message-recovery-official-title"
      >
        <div className="message-recovery-section-heading">
          <span aria-hidden="true"><FaGlobeAmericas focusable="false" /></span>
          <div>
            <p className="message-recovery-eyebrow">Canais oficiais</p>
            <h2 id="message-recovery-official-title">Continue com segurança</h2>
          </div>
        </div>

        <p className="message-recovery-section-lead">
          Os links abaixo são externos ao INSS Orienta e levam aos canais oficiais da conta
          Gov.br.
        </p>

        <div className="message-recovery-official-links">
          <a href={ACCOUNT_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Abrir a conta Gov.br</strong>
              <small>Iniciar a recuperação com seu CPF</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="message-recovery-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={OFFICIAL_GUIDE_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Ler o guia oficial</strong>
              <small>Conferir os métodos atuais de recuperação</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="message-recovery-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={CODE_HELP_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Ajuda para código não recebido</strong>
              <small>Verificar e-mail e SMS no suporte oficial</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="message-recovery-sr-only"> (abre em nova guia)</span>
          </a>
        </div>

        <p className="message-recovery-reviewed">
          Orientações verificadas nos canais oficiais em{' '}
          <time dateTime="2026-09-07">7 de setembro de 2026</time>.
        </p>
      </section>

      <button
        type="button"
        className="message-recovery-bottom-back"
        onClick={voltarParaMetodos}
      >
        <FaArrowLeft aria-hidden="true" focusable="false" />
        Voltar para as formas de recuperação
      </button>
    </article>
  );
}
