import {
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaGlobeAmericas,
  FaIdCard,
  FaKey,
  FaLock,
  FaMobileAlt,
  FaShieldAlt,
  FaUniversity,
} from 'react-icons/fa';
import './RecuperarBanco.css';

const ACCOUNT_URL = 'https://acesso.gov.br/';
const OFFICIAL_GUIDE_URL =
  'https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-na-conta-gov.br/recuperar-senha-da-conta-gov.br';
const BANK_HELP_URL =
  'https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-na-conta-gov.br/duvidas-para-aumentar-o-nivel-da-conta-gov.br/duvidas-na-autenticacao-dos-bancos';

export default function RecuperarBanco({ setActiveTab }) {
  const voltarParaMetodos = () => setActiveTab('senhaGov');

  return (
    <article
      className="bank-recovery-screen animate-fade"
      aria-labelledby="bank-recovery-title"
    >
      <header className="bank-recovery-hero">
        <button
          type="button"
          className="bank-recovery-back"
          onClick={voltarParaMetodos}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar aos métodos
        </button>

        <div className="bank-recovery-hero-main">
          <span className="bank-recovery-hero-icon" aria-hidden="true">
            <FaUniversity focusable="false" />
          </span>

          <div>
            <p className="bank-recovery-eyebrow">Conta Gov.br</p>
            <h1 id="bank-recovery-title">Recuperar senha pelo banco</h1>
            <p className="bank-recovery-intro">
              Confirme sua identidade no ambiente oficial de um banco credenciado e,
              depois, crie uma nova senha para a conta Gov.br.
            </p>
          </div>
        </div>
      </header>

      <aside
        className="bank-recovery-critical-note"
        aria-label="Aviso importante de segurança"
      >
        <FaShieldAlt aria-hidden="true" focusable="false" />
        <div>
          <strong>Seus dados bancários ficam no ambiente do banco</strong>
          <p>
            O Gov.br informa que não acessa seus dados bancários. O INSS Orienta também
            não pede CPF, agência, conta, senha ou código. Informe dados somente na página
            ou no aplicativo oficial do banco que você escolheu.
          </p>
        </div>
      </aside>

      <section
        className="bank-recovery-section"
        aria-labelledby="bank-recovery-before-title"
      >
        <div className="bank-recovery-section-heading">
          <span aria-hidden="true"><FaCheckCircle focusable="false" /></span>
          <div>
            <p className="bank-recovery-eyebrow">Antes de começar</p>
            <h2 id="bank-recovery-before-title">Confira se este método serve para você</h2>
          </div>
        </div>

        <ul className="bank-recovery-checklist">
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Você precisa ter conta em um dos bancos mostrados pelo próprio Gov.br.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Tenha acesso ao aplicativo ou ao internet banking oficial desse banco.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>A confirmação não exige Pix, transferência, pagamento ou empréstimo.</span>
          </li>
        </ul>
      </section>

      <section
        className="bank-recovery-section bank-recovery-section--steps"
        aria-labelledby="bank-recovery-steps-title"
      >
        <div className="bank-recovery-section-heading">
          <span aria-hidden="true"><FaKey focusable="false" /></span>
          <div>
            <p className="bank-recovery-eyebrow">Passo a passo</p>
            <h2 id="bank-recovery-steps-title">Como recuperar pelo banco</h2>
          </div>
        </div>

        <ol className="bank-recovery-steps">
          <li>
            <span className="bank-recovery-step-number" aria-hidden="true">1</span>
            <div>
              <div className="bank-recovery-step-title">
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
            <span className="bank-recovery-step-number" aria-hidden="true">2</span>
            <div>
              <div className="bank-recovery-step-title">
                <FaUniversity aria-hidden="true" focusable="false" />
                <h3>Escolha um banco credenciado</h3>
              </div>
              <p>
                O Gov.br mostrará as opções disponíveis para sua conta. Se aparecer outro
                método primeiro e você não puder usá-lo, escolha
                <strong> Recuperar de outra forma</strong>. Toque somente no banco em que
                você possui conta.
              </p>
            </div>
          </li>

          <li>
            <span className="bank-recovery-step-number" aria-hidden="true">3</span>
            <div>
              <div className="bank-recovery-step-title">
                <FaGlobeAmericas aria-hidden="true" focusable="false" />
                <h3>Confira o redirecionamento</h3>
              </div>
              <p>
                Você sairá temporariamente do Gov.br e entrará no ambiente do banco
                selecionado. Confira o nome do banco e interrompa o processo se a página
                parecer diferente ou solicitar uma ação financeira.
              </p>
            </div>
          </li>

          <li>
            <span className="bank-recovery-step-number" aria-hidden="true">4</span>
            <div>
              <div className="bank-recovery-step-title">
                <FaMobileAlt aria-hidden="true" focusable="false" />
                <h3>Siga as instruções do seu banco</h3>
              </div>
              <p>
                Cada instituição usa uma forma própria de confirmação. Informe apenas o que
                o aplicativo ou internet banking oficial solicitar. Em caso de dúvida nessa
                etapa, pare e fale diretamente com o banco.
              </p>
            </div>
          </li>

          <li>
            <span className="bank-recovery-step-number" aria-hidden="true">5</span>
            <div>
              <div className="bank-recovery-step-title">
                <FaKey aria-hidden="true" focusable="false" />
                <h3>Crie a nova senha Gov.br</h3>
              </div>
              <p>
                Depois da confirmação bancária, retorne ao Gov.br e siga as regras mostradas
                para criar uma nova senha. Ela será a senha da conta Gov.br, não a senha do
                banco.
              </p>
            </div>
          </li>
        </ol>

        <div className="bank-recovery-finish-note" role="note">
          <FaCheckCircle aria-hidden="true" focusable="false" />
          <p>
            <strong>Ao finalizar:</strong> use a nova senha Gov.br para entrar novamente no
            Gov.br e no Meu INSS. Sua senha bancária não é substituída por esse processo.
          </p>
        </div>
      </section>

      <section
        className="bank-recovery-section"
        aria-labelledby="bank-recovery-understand-title"
      >
        <div className="bank-recovery-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="bank-recovery-eyebrow">Entenda o redirecionamento</p>
            <h2 id="bank-recovery-understand-title">O que acontece com seus dados</h2>
          </div>
        </div>

        <div className="bank-recovery-explanation-grid">
          <article className="bank-recovery-explanation-card bank-recovery-explanation-card--safe">
            <span aria-hidden="true"><FaLock focusable="false" /></span>
            <h3>O banco faz a confirmação</h3>
            <p>
              A autenticação acontece no ambiente do banco. Ao final, o banco apenas confirma
              sua identidade para que o processo continue no Gov.br.
            </p>
          </article>

          <article className="bank-recovery-explanation-card bank-recovery-explanation-card--warning">
            <span aria-hidden="true"><FaExclamationTriangle focusable="false" /></span>
            <h3>Pare se pedirem dinheiro</h3>
            <p>
              Recuperar a senha não exige movimentação financeira. Não faça Pix, transferência
              ou pagamento e não instale aplicativo indicado por ligação ou mensagem.
            </p>
          </article>
        </div>
      </section>

      <section
        className="bank-recovery-section"
        aria-labelledby="bank-recovery-problems-title"
      >
        <div className="bank-recovery-section-heading">
          <span aria-hidden="true"><FaExclamationTriangle focusable="false" /></span>
          <div>
            <p className="bank-recovery-eyebrow">Se algo der errado</p>
            <h2 id="bank-recovery-problems-title">Problemas mais comuns</h2>
          </div>
        </div>

        <div className="bank-recovery-problem-list">
          <article>
            <FaUniversity aria-hidden="true" focusable="false" />
            <div>
              <h3>Meu banco não aparece</h3>
              <p>
                Use somente as instituições apresentadas pelo Gov.br. Se seu banco não estiver
                na lista, volte e escolha outra forma de recuperação.
              </p>
            </div>
          </article>

          <article>
            <FaMobileAlt aria-hidden="true" focusable="false" />
            <div>
              <h3>O banco não confirmou</h3>
              <p>
                Como a autenticação é controlada pelo banco, entre em contato com a própria
                instituição para verificar acesso, senha, código ou aplicativo.
              </p>
            </div>
          </article>

          <article>
            <FaGlobeAmericas aria-hidden="true" focusable="false" />
            <div>
              <h3>Não retornei ao Gov.br</h3>
              <p>
                Feche a página, abra novamente o endereço oficial do Gov.br e reinicie a
                recuperação. Não repita credenciais em uma página desconhecida.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="bank-recovery-section bank-recovery-section--official"
        aria-labelledby="bank-recovery-official-title"
      >
        <div className="bank-recovery-section-heading">
          <span aria-hidden="true"><FaGlobeAmericas focusable="false" /></span>
          <div>
            <p className="bank-recovery-eyebrow">Canais oficiais</p>
            <h2 id="bank-recovery-official-title">Continue com segurança</h2>
          </div>
        </div>

        <p className="bank-recovery-section-lead">
          Os links abaixo são externos ao INSS Orienta e levam aos canais oficiais da conta
          Gov.br.
        </p>

        <div className="bank-recovery-official-links">
          <a href={ACCOUNT_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Abrir a conta Gov.br</strong>
              <small>Iniciar a recuperação com seu CPF</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="bank-recovery-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={OFFICIAL_GUIDE_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Ler o guia oficial</strong>
              <small>Conferir os métodos atuais de recuperação</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="bank-recovery-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={BANK_HELP_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Ajuda sobre autenticação bancária</strong>
              <small>Entender os procedimentos controlados pelos bancos</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="bank-recovery-sr-only"> (abre em nova guia)</span>
          </a>
        </div>

        <p className="bank-recovery-reviewed">
          Orientações verificadas nos canais oficiais em{' '}
          <time dateTime="2026-09-07">7 de setembro de 2026</time>.
        </p>
      </section>

      <button
        type="button"
        className="bank-recovery-bottom-back"
        onClick={voltarParaMetodos}
      >
        <FaArrowLeft aria-hidden="true" focusable="false" />
        Voltar para as formas de recuperação
      </button>
    </article>
  );
}
