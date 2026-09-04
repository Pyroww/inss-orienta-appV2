import {
  FaCalendarCheck,
  FaChevronRight,
  FaHandsHelping,
  FaShieldAlt,
} from 'react-icons/fa';
import './beneficiogrid.css';

const CATEGORIAS = [
  {
    tela: 'aposentadoriaGeral',
    classe: 'is-retirement',
    etiqueta: 'Proteção previdenciária',
    titulo: 'Aposentadorias',
    descricao:
      'Entenda modalidades, regras gerais, contribuições e documentos usados na análise.',
    Icone: FaCalendarCheck,
  },
  {
    tela: 'auxilios',
    classe: 'is-protection',
    etiqueta: 'Auxílios e proteção',
    titulo: 'Afastamentos e proteção',
    descricao:
      'Veja orientações sobre incapacidade, maternidade, acidente e proteção aos dependentes.',
    Icone: FaShieldAlt,
  },
  {
    tela: 'assistenciais',
    classe: 'is-assistance',
    etiqueta: 'Assistência social',
    titulo: 'Benefícios assistenciais',
    descricao:
      'Conheça o BPC e orientações voltadas a pessoas idosas ou com deficiência.',
    Icone: FaHandsHelping,
  },
];

export default function BeneficiosGrid({ setActiveTab }) {
  return (
    <ul className="benefits-grid" aria-label="Categorias de benefícios">
      {CATEGORIAS.map(({ tela, classe, etiqueta, titulo, descricao, Icone }) => (
        <li key={tela}>
          <button
            type="button"
            className={`benefit-category-card ${classe}`}
            aria-label={`Abrir orientações sobre ${titulo}`}
            onClick={() => setActiveTab(tela)}
          >
            <span className="benefit-category-card__icon" aria-hidden="true">
              <Icone focusable="false" />
            </span>

            <span className="benefit-category-card__content">
              <span className="benefit-category-card__tag">{etiqueta}</span>
              <strong>{titulo}</strong>
              <span className="benefit-category-card__description">{descricao}</span>
              <span className="benefit-category-card__action" aria-hidden="true">
                Ver orientações
                <FaChevronRight focusable="false" />
              </span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
