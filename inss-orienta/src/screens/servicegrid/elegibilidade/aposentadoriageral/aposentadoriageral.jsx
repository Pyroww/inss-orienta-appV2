import {
  FaArrowLeft,
  FaCalculator,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaClipboardCheck,
  FaExternalLinkAlt,
  FaHistory,
  FaIdCard,
  FaIndustry,
  FaInfoCircle,
  FaLock,
  FaPhoneAlt,
  FaRegClock,
  FaRoute,
  FaTractor,
  FaUniversalAccess,
  FaUser,
  FaUsers,
} from 'react-icons/fa';
import './AposentadoriaGeral.css';

const URL_REGRAS =
  'https://www.gov.br/inss/pt-br/direitos-e-deveres/aposentadorias/regras-de-aposentadorias';
const URL_SIMULADOR = 'https://www.gov.br/pt-br/servicos/simular-aposentadoria';
const URL_MEU_INSS = 'https://meu.inss.gov.br/';

const REGRAS_TRANSICAO = [
  {
    id: 'idade',
    etiqueta: 'Transição por idade',
    titulo: 'Idade e 15 anos de contribuição',
    descricao:
      'Para quem já contribuía antes da reforma, a regra por idade exige 62 anos da mulher ou 65 anos do homem, além de 15 anos de contribuição e da carência.',
    Icone: FaRegClock,
  },
  {
    id: 'pontos',
    etiqueta: 'Regra dos pontos em 2026',
    titulo: 'Idade + contribuição',
    descricao:
      'Mulher: 93 pontos e pelo menos 30 anos de contribuição. Homem: 103 pontos e pelo menos 35 anos de contribuição.',
    Icone: FaCalculator,
  },
  {
    id: 'idade-progressiva',
    etiqueta: 'Idade progressiva em 2026',
    titulo: 'Idade mínima + contribuição',
    descricao:
      'Mulher: 59 anos e 6 meses, com pelo menos 30 anos de contribuição. Homem: 64 anos e 6 meses, com pelo menos 35 anos.',
    Icone: FaHistory,
  },
  {
    id: 'pedagios',
    etiqueta: 'Regras de pedágio',
    titulo: 'Pedágio de 50% ou de 100%',
    descricao:
      'O cálculo depende de quanto tempo faltava em 13 de novembro de 2019. Não é possível escolher apenas pelo nome: idade, tempo e histórico precisam ser conferidos.',
    Icone: FaRoute,
  },
];

const SITUACOES_ESPECIFICAS = [
  {
    titulo: 'Trabalho rural',
    texto: 'Pode ter idade e formas de comprovação próprias.',
    Icone: FaTractor,
  },
  {
    titulo: 'Pessoa com deficiência',
    texto: 'A avaliação e os requisitos variam conforme a modalidade.',
    Icone: FaUniversalAccess,
  },
  {
    titulo: 'Exposição a agentes nocivos',
    texto: 'A aposentadoria especial exige comprovação da atividade.',
    Icone: FaIndustry,
  },
  {
    titulo: 'Professores',
    texto: 'Há critérios próprios para tempo de magistério e transição.',
    Icone: FaChalkboardTeacher,
  },
];

const PREPARACAO = [
  {
    titulo: 'Confira o CNIS',
    texto:
      'Veja se vínculos, salários e contribuições aparecem corretamente no extrato do Meu INSS.',
    Icone: FaClipboardCheck,
  },
  {
    titulo: 'Revise seus dados',
    texto:
      'Nome, CPF, data de nascimento e períodos trabalhados devem estar atualizados.',
    Icone: FaIdCard,
  },
  {
    titulo: 'Separe provas do tempo',
    texto:
      'Guarde carteiras de trabalho, carnês e documentos de períodos ausentes ou incorretos no CNIS.',
    Icone: FaCheckCircle,
  },
  {
    titulo: 'Reúna comprovantes específicos',
    texto:
      'Atividade rural, especial, no exterior ou como pessoa com deficiência pode exigir documentação adicional.',
    Icone: FaUsers,
  },
];

export default function AposentadoriaModernizada({ setActiveTab }) {
  return (
    <section
      className="retirement-guidance animate-fade"
      aria-labelledby="retirement-guidance-title"
    >
      <header className="retirement-guidance__header">
        <button
          type="button"
          className="retirement-guidance__back"
          aria-label="Voltar para Benefícios e proteções"
          onClick={() => setActiveTab('elegibilidade')}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
        </button>

        <div>
          <p className="retirement-guidance__eyebrow">Benefícios previdenciários</p>
          <h1 id="retirement-guidance-title">Aposentadorias</h1>
        </div>
      </header>

      <section className="retirement-guidance__hero" aria-labelledby="retirement-intro-title">
        <span className="retirement-guidance__hero-icon" aria-hidden="true">
          <FaUser focusable="false" />
        </span>
        <div>
          <p className="retirement-guidance__eyebrow">Comece pela sua data de filiação</p>
          <h2 id="retirement-intro-title">Não existe uma única regra para todas as pessoas</h2>
          <p>
            A data em que você começou a contribuir, sua idade, seu tempo de contribuição
            e o tipo de atividade podem mudar a regra aplicável.
          </p>
        </div>
      </section>

      <aside className="retirement-guidance__notice" aria-label="Limites desta orientação">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          <strong>O INSS Orienta não calcula nem confirma sua aposentadoria.</strong> Esta
          tela resume as regras para ajudar na preparação. A simulação é uma estimativa e
          somente a análise do INSS confirma o direito.
        </p>
      </aside>

      <section className="retirement-guidance__permanent" aria-labelledby="permanent-rule-title">
        <div className="retirement-guidance__section-heading">
          <p className="retirement-guidance__eyebrow">Regra permanente</p>
          <h2 id="permanent-rule-title">Para quem começou a contribuir a partir de 13/11/2019</h2>
          <p>Os requisitos mínimos gerais são diferentes para mulheres e homens.</p>
        </div>

        <div className="retirement-guidance__people-grid">
          <article className="retirement-person-card is-woman">
            <span className="retirement-person-card__label">Mulher</span>
            <strong>62 anos</strong>
            <p>e pelo menos <b>15 anos de contribuição</b></p>
          </article>

          <article className="retirement-person-card is-man">
            <span className="retirement-person-card__label">Homem</span>
            <strong>65 anos</strong>
            <p>e pelo menos <b>20 anos de contribuição</b></p>
          </article>
        </div>

        <div className="retirement-guidance__waiting-period">
          <FaRegClock aria-hidden="true" focusable="false" />
          <p>
            <strong>Carência:</strong> a regra também exige 180 contribuições mensais. O
            tempo de contribuição e a carência não são necessariamente a mesma contagem.
          </p>
        </div>
      </section>

      <section className="retirement-guidance__transitions" aria-labelledby="transition-rules-title">
        <div className="retirement-guidance__section-heading">
          <p className="retirement-guidance__eyebrow">Para quem já contribuía antes da reforma</p>
          <h2 id="transition-rules-title">Principais regras de transição em 2026</h2>
          <p>
            Os valores abaixo ajudam a reconhecer as regras. O simulador oficial compara
            os dados disponíveis no INSS.
          </p>
        </div>

        <ul className="retirement-guidance__transition-grid">
          {REGRAS_TRANSICAO.map(({ id, etiqueta, titulo, descricao, Icone }) => (
            <li key={id}>
              <article aria-labelledby={`retirement-${id}-title`}>
                <span className="retirement-guidance__transition-icon" aria-hidden="true">
                  <Icone focusable="false" />
                </span>
                <div>
                  <p>{etiqueta}</p>
                  <h3 id={`retirement-${id}-title`}>{titulo}</h3>
                  <span>{descricao}</span>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <aside className="retirement-guidance__acquired-right">
          <FaCheckCircle aria-hidden="true" focusable="false" />
          <p>
            <strong>Direito adquirido:</strong> quem já havia cumprido todos os requisitos
            de uma regra anterior até 13 de novembro de 2019 pode ter o benefício analisado
            por aquela regra.
          </p>
        </aside>
      </section>

      <section className="retirement-guidance__specific" aria-labelledby="specific-rules-title">
        <div className="retirement-guidance__section-heading">
          <p className="retirement-guidance__eyebrow">Atenção ao seu histórico</p>
          <h2 id="specific-rules-title">Algumas situações têm critérios próprios</h2>
        </div>

        <ul className="retirement-guidance__specific-grid">
          {SITUACOES_ESPECIFICAS.map(({ titulo, texto, Icone }) => (
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

        <a href={URL_REGRAS} target="_blank" rel="noopener noreferrer">
          Conferir todas as regras oficiais
          <FaExternalLinkAlt aria-hidden="true" focusable="false" />
          <span className="retirement-guidance__sr-only"> (abre em nova guia)</span>
        </a>
      </section>

      <section className="retirement-guidance__prepare" aria-labelledby="retirement-prepare-title">
        <div className="retirement-guidance__prepare-heading">
          <span aria-hidden="true">
            <FaClipboardCheck focusable="false" />
          </span>
          <div>
            <p className="retirement-guidance__eyebrow">Antes de simular ou solicitar</p>
            <h2 id="retirement-prepare-title">Prepare seu histórico previdenciário</h2>
          </div>
        </div>

        <ul className="retirement-guidance__checklist">
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
      </section>

      <section className="retirement-guidance__simulation" aria-labelledby="simulation-title">
        <div className="retirement-guidance__simulation-heading">
          <span aria-hidden="true">
            <FaCalculator focusable="false" />
          </span>
          <div>
            <p className="retirement-guidance__eyebrow">Canal oficial</p>
            <h2 id="simulation-title">Use “Simular Aposentadoria”</h2>
          </div>
        </div>

        <ol className="retirement-guidance__steps">
          <li>
            <span aria-hidden="true">1</span>
            <p>Entre no Meu INSS com sua conta Gov.br.</p>
          </li>
          <li>
            <span aria-hidden="true">2</span>
            <p>Procure por <strong>Simular Aposentadoria</strong>.</p>
          </li>
          <li>
            <span aria-hidden="true">3</span>
            <p>Confira os vínculos usados e leia o resultado de cada regra.</p>
          </li>
        </ol>

        <p className="retirement-guidance__simulation-warning">
          A simulação não é um pedido e não garante a concessão. Dados ausentes ou
          incorretos no CNIS podem mudar o resultado.
        </p>

        <div className="retirement-guidance__official-links">
          <a href={URL_SIMULADOR} target="_blank" rel="noopener noreferrer">
            Ver como simular
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="retirement-guidance__sr-only"> (abre em nova guia)</span>
          </a>
          <a href={URL_MEU_INSS} target="_blank" rel="noopener noreferrer">
            Abrir Meu INSS
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="retirement-guidance__sr-only"> (abre em nova guia)</span>
          </a>
          <a href="tel:135">
            <FaPhoneAlt aria-hidden="true" focusable="false" />
            Ligar para 135
          </a>
        </div>
      </section>

      <aside className="retirement-guidance__security" aria-label="Orientação de segurança">
        <FaLock aria-hidden="true" focusable="false" />
        <p>
          <strong>Os canais oficiais são gratuitos.</strong> Nunca informe sua senha
          Gov.br ou códigos de confirmação a quem promete aprovar a aposentadoria.
        </p>
      </aside>

      <footer className="retirement-guidance__source-note">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          Conteúdo educativo revisado em 31 de agosto de 2026. Regras podem mudar e
          devem ser confirmadas no Meu INSS e nos canais oficiais.
        </p>
      </footer>
    </section>
  );
}
