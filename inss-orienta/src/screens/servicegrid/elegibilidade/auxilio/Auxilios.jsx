import {
  FaArrowLeft,
  FaBabyCarriage,
  FaBriefcaseMedical,
  FaCheckCircle,
  FaClipboardList,
  FaExternalLinkAlt,
  FaHandHoldingHeart,
  FaInfoCircle,
  FaLock,
  FaPhoneAlt,
  FaUserShield,
} from 'react-icons/fa';
import './Auxilios.css';

const URL_MEU_INSS = 'https://meu.inss.gov.br/';

const BENEFICIOS = [
  {
    id: 'incapacidade-temporaria',
    classe: 'is-incapacity',
    etiqueta: 'Afastamento temporário',
    titulo: 'Benefício por incapacidade temporária',
    nomeAnterior: 'Antigo auxílio-doença',
    resumo:
      'Proteção para a pessoa segurada que fica temporariamente incapaz de exercer seu trabalho ou atividade habitual.',
    pontos: [
      {
        rotulo: 'Regra geral',
        texto:
          'A incapacidade precisa ultrapassar 15 dias consecutivos e ser comprovada na análise médica.',
      },
      {
        rotulo: 'Contribuições',
        texto:
          'Em regra, são exigidas 12 contribuições. Acidentes e algumas doenças ou condições podem dispensar essa carência.',
      },
    ],
    link:
      'https://www.gov.br/inss/pt-br/direitos-e-deveres/beneficios-por-incapacidade/auxilio-por-incapacidade-temporaria',
    Icone: FaBriefcaseMedical,
  },
  {
    id: 'salario-maternidade',
    classe: 'is-maternity',
    etiqueta: 'Nascimento e adoção',
    titulo: 'Salário-maternidade',
    resumo:
      'Benefício relacionado ao afastamento por parto, adoção, guarda judicial para adoção ou aborto não criminoso.',
    pontos: [
      {
        rotulo: 'Duração',
        texto:
          'Geralmente são 120 dias. Em caso de aborto espontâneo ou previsto em lei, a duração indicada pelo INSS é de 14 dias.',
      },
      {
        rotulo: 'Atenção',
        texto:
          'Não há carência mínima, mas é preciso comprovar vínculo com a Previdência na data do evento e atender às demais regras.',
      },
    ],
    link:
      'https://www.gov.br/inss/pt-br/direitos-e-deveres/salario-maternidade/salario-maternidade',
    Icone: FaBabyCarriage,
  },
  {
    id: 'auxilio-acidente',
    classe: 'is-accident',
    etiqueta: 'Sequela permanente',
    titulo: 'Auxílio-acidente',
    resumo:
      'Indenização destinada a algumas categorias de segurados quando um acidente deixa sequela permanente que reduz a capacidade para o trabalho.',
    pontos: [
      {
        rotulo: 'Trabalho',
        texto:
          'O recebimento não impede a pessoa de continuar trabalhando, pois o benefício possui natureza indenizatória.',
      },
      {
        rotulo: 'Categoria',
        texto:
          'Não exige carência, mas não está disponível para todas as categorias de segurados. A sequela passa por avaliação oficial.',
      },
    ],
    link:
      'https://www.gov.br/inss/pt-br/direitos-e-deveres/beneficios-por-incapacidade/auxilio-acidente',
    Icone: FaHandHoldingHeart,
  },
  {
    id: 'auxilio-reclusao',
    classe: 'is-detention',
    etiqueta: 'Proteção aos dependentes',
    titulo: 'Auxílio-reclusão',
    resumo:
      'Benefício destinado aos dependentes da pessoa segurada de baixa renda que esteja em situação de reclusão prevista na legislação.',
    pontos: [
      {
        rotulo: 'Quem recebe',
        texto:
          'O pagamento é feito aos dependentes que comprovem essa condição — não à pessoa que está presa.',
      },
      {
        rotulo: 'Requisitos',
        texto:
          'Em regra, são exigidos 24 meses de contribuição ou atividade, além dos critérios de renda, vínculo previdenciário e reclusão.',
      },
    ],
    link:
      'https://www.gov.br/inss/pt-br/direitos-e-deveres/auxilio-reclusao/auxilio-reclusao',
    Icone: FaUserShield,
  },
];

export default function Auxilios({ setActiveTab }) {
  return (
    <section className="aid-guidance animate-fade" aria-labelledby="aid-guidance-title">
      <header className="aid-guidance__header">
        <button
          type="button"
          className="aid-guidance__back"
          aria-label="Voltar para Benefícios e proteções"
          onClick={() => setActiveTab('elegibilidade')}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
        </button>

        <div>
          <p className="aid-guidance__eyebrow">Benefícios previdenciários</p>
          <h1 id="aid-guidance-title">Auxílios e proteção</h1>
        </div>
      </header>

      <section className="aid-guidance__hero" aria-labelledby="aid-intro-title">
        <span className="aid-guidance__hero-icon" aria-hidden="true">
          <FaUserShield focusable="false" />
        </span>
        <div>
          <p className="aid-guidance__eyebrow">Cada situação tem regras próprias</p>
          <h2 id="aid-intro-title">Entenda qual proteção se aproxima da sua dúvida</h2>
          <p>
            Compare as informações iniciais e consulte a página oficial antes de fazer
            um pedido. A concessão depende da análise do INSS.
          </p>
        </div>
      </section>

      <aside className="aid-guidance__notice" aria-label="Limites desta orientação">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          <strong>O INSS Orienta não verifica se você tem direito.</strong> Não acessamos
          contribuições, documentos, laudos ou pedidos. As informações abaixo são um
          ponto de partida educativo.
        </p>
      </aside>

      <section className="aid-guidance__benefits" aria-labelledby="aid-benefits-title">
        <div className="aid-guidance__section-heading">
          <p className="aid-guidance__eyebrow">Conheça as opções</p>
          <h2 id="aid-benefits-title">Quatro proteções diferentes</h2>
          <p>Leia os pontos principais e abra a fonte oficial para conferir os detalhes.</p>
        </div>

        <ul className="aid-guidance__grid">
          {BENEFICIOS.map(
            ({ id, classe, etiqueta, titulo, nomeAnterior, resumo, pontos, link, Icone }) => (
              <li key={id}>
                <article
                  className={`aid-benefit-card ${classe}`}
                  aria-labelledby={`aid-${id}-title`}
                >
                  <div className="aid-benefit-card__heading">
                    <span className="aid-benefit-card__icon" aria-hidden="true">
                      <Icone focusable="false" />
                    </span>
                    <div>
                      <p>{etiqueta}</p>
                      <h3 id={`aid-${id}-title`}>{titulo}</h3>
                      {nomeAnterior && (
                        <span className="aid-benefit-card__former-name">{nomeAnterior}</span>
                      )}
                    </div>
                  </div>

                  <p className="aid-benefit-card__summary">{resumo}</p>

                  <dl className="aid-benefit-card__facts">
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
                    <span className="aid-guidance__sr-only"> (abre em nova guia)</span>
                  </a>
                </article>
              </li>
            ),
          )}
        </ul>
      </section>

      <section className="aid-guidance__request" aria-labelledby="aid-request-title">
        <div className="aid-guidance__request-heading">
          <span aria-hidden="true">
            <FaClipboardList focusable="false" />
          </span>
          <div>
            <p className="aid-guidance__eyebrow">Próximos passos</p>
            <h2 id="aid-request-title">Como seguir com segurança</h2>
          </div>
        </div>

        <ol className="aid-guidance__steps">
          <li>
            <span aria-hidden="true">1</span>
            <p>
              <strong>Confira a regra atual.</strong> Abra a página oficial do benefício
              e veja se a descrição corresponde à sua situação.
            </p>
          </li>
          <li>
            <span aria-hidden="true">2</span>
            <p>
              <strong>Separe os documentos.</strong> O canal oficial informará quais
              comprovantes são necessários para o seu caso.
            </p>
          </li>
          <li>
            <span aria-hidden="true">3</span>
            <p>
              <strong>Faça e acompanhe o pedido.</strong> Use o Meu INSS, a Central 135
              ou a empresa empregadora quando a regra indicar.
            </p>
          </li>
        </ol>

        <div className="aid-guidance__official-links">
          <a href={URL_MEU_INSS} target="_blank" rel="noopener noreferrer">
            Abrir Meu INSS
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="aid-guidance__sr-only"> (abre em nova guia)</span>
          </a>
          <a href="tel:135">
            <FaPhoneAlt aria-hidden="true" focusable="false" />
            Ligar para 135
          </a>
        </div>
      </section>

      <aside className="aid-guidance__security" aria-label="Orientação de segurança">
        <FaLock aria-hidden="true" focusable="false" />
        <p>
          <strong>Proteja sua conta:</strong> nunca informe a senha do Gov.br, códigos de
          confirmação ou dados bancários a terceiros que prometam liberar o benefício.
        </p>
      </aside>

      <footer className="aid-guidance__source-note">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          Conteúdo educativo revisado em 31 de agosto de 2026. Regras podem mudar e
          devem ser confirmadas nos canais oficiais.
        </p>
      </footer>
    </section>
  );
}
