import {
  FaArrowLeft,
  FaBriefcase,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaFingerprint,
  FaHandsHelping,
  FaIdCard,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaUniversalAccess,
  FaUserClock,
  FaUsers,
} from 'react-icons/fa';
import './BeneficiosAssistenciais.css';

const URL_MEU_INSS = 'https://meu.inss.gov.br/';
const URL_BPC_GERAL =
  'https://www.gov.br/mds/pt-br/acoes-e-programas/SUAS/beneficios-assenciais/beneficio-assistencial-ao-idoso-e-a-pessoa-com-deficiencia-bpc';
const URL_BIOMETRIA =
  'https://www.gov.br/governodigital/pt-br/identidade/cin/faq_biometria';

const BENEFICIOS = [
  {
    id: 'bpc-idosa',
    classe: 'is-elderly',
    etiqueta: 'BPC',
    titulo: 'BPC à pessoa idosa',
    resumo:
      'Garante um salário mínimo mensal à pessoa com 65 anos ou mais que pertença a uma família de baixa renda e cumpra os demais critérios.',
    pontos: [
      {
        rotulo: 'Idade',
        texto: '65 anos ou mais, para qualquer gênero.',
      },
      {
        rotulo: 'Contribuição',
        texto: 'Não exige contribuição anterior ao INSS.',
      },
      {
        rotulo: 'Análise',
        texto:
          'A renda e a composição familiar são verificadas com informações do CadÚnico e de outras bases públicas.',
      },
    ],
    link:
      'https://www.gov.br/inss/pt-br/direitos-e-deveres/beneficios-assistenciais/beneficio-assistencial-a-pessoa-idosa-bpc-loas',
    Icone: FaUserClock,
  },
  {
    id: 'bpc-deficiencia',
    classe: 'is-disability',
    etiqueta: 'BPC',
    titulo: 'BPC à pessoa com deficiência',
    resumo:
      'Pode atender pessoas de qualquer idade que pertençam a família de baixa renda e tenham impedimento de longo prazo.',
    pontos: [
      {
        rotulo: 'Idade',
        texto: 'Não existe idade mínima; crianças também podem ser avaliadas.',
      },
      {
        rotulo: 'Impedimento',
        texto:
          'Deve produzir efeitos de longo prazo, por pelo menos dois anos, em interação com barreiras.',
      },
      {
        rotulo: 'Avaliação',
        texto:
          'O diagnóstico sozinho não decide o direito. O INSS realiza avaliação médica e social.',
      },
    ],
    link:
      'https://www.gov.br/inss/pt-br/direitos-e-deveres/beneficios-assistenciais/beneficio-assistencial-a-pessoa-com-deficiencia-bpc-loas',
    Icone: FaUniversalAccess,
  },
  {
    id: 'auxilio-inclusao',
    classe: 'is-inclusion',
    etiqueta: 'Trabalho e inclusão',
    titulo: 'Auxílio-Inclusão',
    resumo:
      'Apoio à pessoa com deficiência que recebe ou recebeu BPC e começa uma atividade remunerada, desde que cumpra todos os requisitos.',
    pontos: [
      {
        rotulo: 'Relação com o BPC',
        texto:
          'Pode alcançar quem recebe BPC ou teve o benefício suspenso ou encerrado nos últimos cinco anos por começar a trabalhar.',
      },
      {
        rotulo: 'Remuneração',
        texto: 'A atividade deve pagar até dois salários mínimos por mês.',
      },
      {
        rotulo: 'Pagamento',
        texto:
          'O auxílio corresponde a meio salário mínimo e não é recebido ao mesmo tempo que o BPC.',
      },
    ],
    link:
      'https://www.gov.br/inss/pt-br/direitos-e-deveres/beneficios-assistenciais/auxilio-inclusao-a-pessoa-com-deficiencia',
    Icone: FaBriefcase,
  },
];

const PREPARACAO = [
  {
    titulo: 'CadÚnico atualizado',
    texto:
      'O cadastro da família deve ter sido atualizado há no máximo 24 meses e conter o CPF de todos os integrantes.',
    Icone: FaIdCard,
  },
  {
    titulo: 'Biometria verificada',
    texto:
      'Confira se o requerente ou responsável possui biometria em uma base aceita. Existem regras de transição e situações de dispensa.',
    Icone: FaFingerprint,
  },
  {
    titulo: 'Dados da família corretos',
    texto:
      'Renda, endereço e composição familiar precisam refletir a situação atual de quem vive no mesmo domicílio.',
    Icone: FaUsers,
  },
  {
    titulo: 'Avaliação, quando necessária',
    texto:
      'No BPC à pessoa com deficiência, acompanhe o agendamento da avaliação médica e social solicitado pelo INSS.',
    Icone: FaUniversalAccess,
  },
];

export default function BeneficiosAssistenciais({ setActiveTab }) {
  return (
    <section
      className="assistance-guidance animate-fade"
      aria-labelledby="assistance-guidance-title"
    >
      <header className="assistance-guidance__header">
        <button
          type="button"
          className="assistance-guidance__back"
          aria-label="Voltar para Benefícios e proteções"
          onClick={() => setActiveTab('elegibilidade')}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
        </button>

        <div>
          <p className="assistance-guidance__eyebrow">Assistência social</p>
          <h1 id="assistance-guidance-title">Benefícios assistenciais</h1>
        </div>
      </header>

      <section className="assistance-guidance__hero" aria-labelledby="assistance-intro-title">
        <span className="assistance-guidance__hero-icon" aria-hidden="true">
          <FaHandsHelping focusable="false" />
        </span>
        <div>
          <p className="assistance-guidance__eyebrow">Proteção para quem precisa</p>
          <h2 id="assistance-intro-title">Entenda o BPC e o Auxílio-Inclusão</h2>
          <p>
            Conheça as diferenças, prepare o cadastro da família e confirme as regras
            atuais antes de solicitar.
          </p>
        </div>
      </section>

      <aside className="assistance-guidance__important" aria-label="Informação importante sobre o BPC">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <div>
          <h2>O BPC não é aposentadoria</h2>
          <p>
            Não exige contribuição anterior, não paga 13º salário e não deixa pensão por
            morte. O benefício é revisado para verificar se os critérios continuam sendo
            atendidos.
          </p>
          <p>
            <strong>Critério de renda:</strong> a regra geral considera renda familiar por
            pessoa de até 1/4 do salário mínimo, calculada conforme as normas do BPC.
          </p>
        </div>
      </aside>

      <section className="assistance-guidance__benefits" aria-labelledby="assistance-benefits-title">
        <div className="assistance-guidance__section-heading">
          <p className="assistance-guidance__eyebrow">Conheça as opções</p>
          <h2 id="assistance-benefits-title">Qual orientação você procura?</h2>
          <p>Os cards são informativos. Somente a análise oficial confirma o direito.</p>
        </div>

        <ul className="assistance-guidance__grid">
          {BENEFICIOS.map(({ id, classe, etiqueta, titulo, resumo, pontos, link, Icone }) => (
            <li key={id}>
              <article
                className={`assistance-benefit-card ${classe}`}
                aria-labelledby={`assistance-${id}-title`}
              >
                <div className="assistance-benefit-card__heading">
                  <span className="assistance-benefit-card__icon" aria-hidden="true">
                    <Icone focusable="false" />
                  </span>
                  <div>
                    <p>{etiqueta}</p>
                    <h3 id={`assistance-${id}-title`}>{titulo}</h3>
                  </div>
                </div>

                <p className="assistance-benefit-card__summary">{resumo}</p>

                <dl className="assistance-benefit-card__facts">
                  {pontos.map(({ rotulo, texto }) => (
                    <div key={rotulo}>
                      <dt>
                        <FaCheckCircle aria-hidden="true" focusable="false" />
                        {rotulo}
                      </dt>
                      <dd>{texto}</dd>
                    </div>
                  ))}
                </dl>

                <a href={link} target="_blank" rel="noopener noreferrer">
                  Ver regras oficiais
                  <FaExternalLinkAlt aria-hidden="true" focusable="false" />
                  <span className="assistance-guidance__sr-only"> (abre em nova guia)</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="assistance-guidance__prepare" aria-labelledby="assistance-prepare-title">
        <div className="assistance-guidance__prepare-heading">
          <span aria-hidden="true">
            <FaShieldAlt focusable="false" />
          </span>
          <div>
            <p className="assistance-guidance__eyebrow">Antes do pedido de BPC</p>
            <h2 id="assistance-prepare-title">Confira estes quatro pontos</h2>
          </div>
        </div>

        <ul className="assistance-guidance__checklist">
          {PREPARACAO.map(({ titulo, texto, Icone }) => (
            <li key={titulo}>
              <span aria-hidden="true">
                <Icone focusable="false" />
              </span>
              <p>
                <strong>{titulo}</strong>
                {texto}
              </p>
            </li>
          ))}
        </ul>

        <div className="assistance-guidance__reference-links">
          <a href={URL_BPC_GERAL} target="_blank" rel="noopener noreferrer">
            Conferir guia oficial do BPC
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="assistance-guidance__sr-only"> (abre em nova guia)</span>
          </a>
          <a href={URL_BIOMETRIA} target="_blank" rel="noopener noreferrer">
            Conferir regras de biometria
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="assistance-guidance__sr-only"> (abre em nova guia)</span>
          </a>
        </div>
      </section>

      <section className="assistance-guidance__roles" aria-labelledby="assistance-roles-title">
        <div className="assistance-guidance__section-heading">
          <p className="assistance-guidance__eyebrow">Onde buscar atendimento</p>
          <h2 id="assistance-roles-title">CRAS e INSS têm funções diferentes</h2>
        </div>

        <div className="assistance-guidance__role-grid">
          <article>
            <span aria-hidden="true">
              <FaMapMarkerAlt focusable="false" />
            </span>
            <div>
              <h3>CRAS do município</h3>
              <p>
                Faz a inscrição e a atualização do CadÚnico e pode orientar sobre a
                composição e a renda da família. O CRAS não concede o benefício.
              </p>
            </div>
          </article>

          <article>
            <span aria-hidden="true">
              <FaShieldAlt focusable="false" />
            </span>
            <div>
              <h3>INSS</h3>
              <p>
                Recebe, analisa e acompanha o pedido. O requerimento é gratuito e pode
                ser iniciado pelo Meu INSS ou pela Central 135.
              </p>
            </div>
          </article>
        </div>

        <div className="assistance-guidance__official-links">
          <a href={URL_MEU_INSS} target="_blank" rel="noopener noreferrer">
            Abrir Meu INSS
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="assistance-guidance__sr-only"> (abre em nova guia)</span>
          </a>
          <a href="tel:135">
            <FaPhoneAlt aria-hidden="true" focusable="false" />
            Ligar para 135
          </a>
        </div>
      </section>

      <aside className="assistance-guidance__free" aria-label="Orientação contra cobranças indevidas">
        <FaShieldAlt aria-hidden="true" focusable="false" />
        <p>
          <strong>O pedido é gratuito.</strong> Não pague intermediários e nunca entregue
          sua senha Gov.br ou códigos de confirmação a quem promete aprovar o benefício.
        </p>
      </aside>

      <footer className="assistance-guidance__source-note">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          Conteúdo educativo revisado em 31 de agosto de 2026. Confirme sua situação nos
          canais oficiais.
        </p>
      </footer>
    </section>
  );
}