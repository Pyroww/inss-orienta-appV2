import {
  FaArrowLeft,
  FaBuilding,
  FaCheckCircle,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFingerprint,
  FaIdCard,
  FaMobileAlt,
  FaPhoneAlt,
  FaSearch,
  FaShieldAlt,
  FaUserCheck,
} from 'react-icons/fa';
import './ProvaDeVida.css';

const MEU_INSS_URL = 'https://meu.inss.gov.br/';
const OFFICIAL_GUIDE_URL =
  'https://www.gov.br/inss/pt-br/assuntos/noticias/prova-de-vida-confira-perguntas-respostas';
const SCAM_ALERT_URL =
  'https://www.gov.br/inss/pt-br/assuntos/noticias/inss-nao-envia-sms-para-informar-sobre-corte-de-beneficio-por-falta-de-prova-de-vida';

const AUTOMATIC_RECORDS = [
  'Acesso ao Meu INSS com conta Gov.br nível ouro;',
  'empréstimo consignado feito com reconhecimento biométrico;',
  'atualização do CadÚnico pelo responsável familiar;',
  'votação nas eleições;',
  'recebimento do benefício com reconhecimento biométrico.',
];

export default function ProvaDeVida({ setActiveTab }) {
  const voltarParaInicio = () => setActiveTab('inicio');

  return (
    <article
      className="proof-life-screen animate-fade"
      aria-labelledby="proof-life-title"
    >
      <header className="proof-life-hero">
        <button
          type="button"
          className="proof-life-back"
          onClick={voltarParaInicio}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar ao início
        </button>

        <div className="proof-life-hero-main">
          <span className="proof-life-hero-icon" aria-hidden="true">
            <FaUserCheck focusable="false" />
          </span>

          <div>
            <p className="proof-life-eyebrow">Manutenção do benefício</p>
            <h1 id="proof-life-title">Prova de Vida do INSS</h1>
            <p className="proof-life-intro">
              Entenda como a confirmação automática funciona, consulte sua situação e
              saiba o que fazer somente se receber um aviso oficial.
            </p>
          </div>
        </div>
      </header>

      <aside className="proof-life-summary" aria-label="Resumo importante">
        <FaCheckCircle aria-hidden="true" focusable="false" />
        <div>
          <strong>Na maioria dos casos, você não precisa fazer nada agora</strong>
          <p>
            O INSS procura confirmar a Prova de Vida automaticamente pelo cruzamento de
            informações governamentais. Antes de sair de casa, consulte sua situação no
            Meu INSS ou pelo telefone 135.
          </p>
        </div>
      </aside>

      <p className="proof-life-project-note">
        O INSS Orienta é educativo: não acessa seu benefício, não consulta sua situação
        e não solicita dados pessoais.
      </p>

      <section
        className="proof-life-section"
        aria-labelledby="proof-life-check-title"
      >
        <div className="proof-life-section-heading">
          <span aria-hidden="true"><FaSearch focusable="false" /></span>
          <div>
            <p className="proof-life-eyebrow">Comece por aqui</p>
            <h2 id="proof-life-check-title">Consulte antes de se deslocar</h2>
          </div>
        </div>

        <ol className="proof-life-steps">
          <li>
            <span className="proof-life-step-number" aria-hidden="true">1</span>
            <div>
              <h3>Acesse o Meu INSS</h3>
              <p>Entre pelo site ou aplicativo oficial usando sua conta Gov.br.</p>
            </div>
          </li>
          <li>
            <span className="proof-life-step-number" aria-hidden="true">2</span>
            <div>
              <h3>Procure por “Prova de Vida”</h3>
              <p>Abra o serviço com esse nome para visualizar a situação registrada.</p>
            </div>
          </li>
          <li>
            <span className="proof-life-step-number" aria-hidden="true">3</span>
            <div>
              <h3>Confira a última confirmação</h3>
              <p>
                Quando estiver regularizada, o Meu INSS mostrará a data da última Prova
                de Vida.
              </p>
            </div>
          </li>
          <li>
            <span className="proof-life-step-number" aria-hidden="true">4</span>
            <div>
              <h3>Em caso de dúvida, ligue 135</h3>
              <p>
                O atendimento funciona de segunda a sábado, das 7h às 22h, no horário de
                Brasília.
              </p>
            </div>
          </li>
        </ol>

        <div className="proof-life-actions" aria-label="Canais para consultar a situação">
          <a href={MEU_INSS_URL} target="_blank" rel="noopener noreferrer">
            <FaMobileAlt aria-hidden="true" focusable="false" />
            <span>Abrir o Meu INSS</span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="proof-life-sr-only"> (abre em nova guia)</span>
          </a>
          <a href="tel:135">
            <FaPhoneAlt aria-hidden="true" focusable="false" />
            <span>Ligar para 135</span>
          </a>
        </div>
      </section>

      <section
        className="proof-life-section"
        aria-labelledby="proof-life-automatic-title"
      >
        <div className="proof-life-section-heading">
          <span aria-hidden="true"><FaFingerprint focusable="false" /></span>
          <div>
            <p className="proof-life-eyebrow">Confirmação automática</p>
            <h2 id="proof-life-automatic-title">Quais informações podem ser usadas?</h2>
          </div>
        </div>

        <p className="proof-life-section-lead">
          Entre os registros que o INSS informa utilizar para localizar o beneficiário
          estão:
        </p>

        <ul className="proof-life-record-list">
          {AUTOMATIC_RECORDS.map((record) => (
            <li key={record}>
              <FaCheckCircle aria-hidden="true" focusable="false" />
              <span>{record}</span>
            </li>
          ))}
        </ul>

        <div className="proof-life-info-note" role="note">
          <FaExclamationTriangle aria-hidden="true" focusable="false" />
          <p>
            <strong>Você não precisa realizar uma dessas ações apenas para gerar a prova.</strong>{' '}
            Primeiro consulte o status. A existência de um registro também não substitui a
            confirmação mostrada no Meu INSS ou informada pelo 135.
          </p>
        </div>
      </section>

      <section
        className="proof-life-section"
        aria-labelledby="proof-life-notified-title"
      >
        <div className="proof-life-section-heading">
          <span aria-hidden="true"><FaBuilding focusable="false" /></span>
          <div>
            <p className="proof-life-eyebrow">Se recebeu um aviso</p>
            <h2 id="proof-life-notified-title">Como regularizar com segurança</h2>
          </div>
        </div>

        <p className="proof-life-section-lead">
          Quem não foi identificado automaticamente pode ser avisado pelo banco pagador
          ou pelo canal verificado do Governo do Brasil. Confirme o aviso no Meu INSS ou
          no 135 antes de continuar.
        </p>

        <div className="proof-life-method-grid">
          <article>
            <span aria-hidden="true"><FaMobileAlt focusable="false" /></span>
            <div>
              <h3>Pelo Meu INSS</h3>
              <p>
                Use o site ou aplicativo oficial e siga a opção de biometria facial
                apresentada no serviço “Prova de Vida”.
              </p>
            </div>
          </article>

          <article>
            <span aria-hidden="true"><FaIdCard focusable="false" /></span>
            <div>
              <h3>No banco pagador</h3>
              <p>
                Vá à agência do banco onde recebe o benefício e leve um documento oficial
                com foto.
              </p>
            </div>
          </article>
        </div>

        <p className="proof-life-agency-note">
          Segundo a orientação atual do INSS, não é necessário ir a uma agência do INSS
          para realizar esse procedimento.
        </p>
      </section>

      <section
        className="proof-life-section proof-life-section--security"
        aria-labelledby="proof-life-security-title"
      >
        <div className="proof-life-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="proof-life-eyebrow">Proteção contra golpes</p>
            <h2 id="proof-life-security-title">Não forneça dados nem faça pagamentos</h2>
          </div>
        </div>

        <ul className="proof-life-security-list">
          <li>Não clique em links recebidos por SMS ou WhatsApp para “regularizar”.</li>
          <li>Não informe senha, CPF, endereço, código ou dados bancários em mensagens.</li>
          <li>O INSS não cobra pagamento para fazer a Prova de Vida.</li>
          <li>
            O INSS não liga nem envia servidor à sua casa para pedir dados sobre esse
            procedimento.
          </li>
        </ul>

        <p className="proof-life-security-callout">
          Uma mensagem oficial do Governo do Brasil apenas comunica a necessidade do
          procedimento: ela não pede documentos, dinheiro e não envia link de
          regularização. Na dúvida, encerre o contato e ligue 135.
        </p>
      </section>

      <section
        className="proof-life-section proof-life-section--official"
        aria-labelledby="proof-life-official-title"
      >
        <div className="proof-life-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="proof-life-eyebrow">Fontes oficiais</p>
            <h2 id="proof-life-official-title">Confirme as informações atuais</h2>
          </div>
        </div>

        <p className="proof-life-section-lead">
          Os links abaixo são externos ao INSS Orienta e levam ao Meu INSS e ao portal
          oficial do Instituto.
        </p>

        <div className="proof-life-official-links">
          <a href={MEU_INSS_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Consultar no Meu INSS</strong>
              <small>Ver a situação e a data da última confirmação</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="proof-life-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={OFFICIAL_GUIDE_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Ler perguntas e respostas do INSS</strong>
              <small>Entender os avisos e as formas de regularização</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="proof-life-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={SCAM_ALERT_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Conferir o alerta contra golpes</strong>
              <small>Saiba quais mensagens não são enviadas pelo INSS</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="proof-life-sr-only"> (abre em nova guia)</span>
          </a>
        </div>

        <p className="proof-life-reviewed">
          Orientações verificadas nos canais oficiais em{' '}
          <time dateTime="2026-09-07">7 de setembro de 2026</time>.
        </p>
      </section>

      <button
        type="button"
        className="proof-life-bottom-back"
        onClick={voltarParaInicio}
      >
        <FaArrowLeft aria-hidden="true" focusable="false" />
        Voltar para a página inicial
      </button>
    </article>
  );
}
