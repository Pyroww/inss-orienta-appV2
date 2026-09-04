import {
  FaArrowLeft,
  FaClipboardCheck,
  FaExternalLinkAlt,
  FaHandsHelping,
  FaInfoCircle,
  FaPhoneAlt,
  FaShieldAlt,
} from 'react-icons/fa';
import BeneficiosGrid from '../../../components/elegibilidade/BeneficiosGrid';
import './elegibilidade.css';

const URL_MEU_INSS = 'https://meu.inss.gov.br/';

export default function Elegibilidade({ voltarParaHome, setActiveTab }) {
  return (
    <section className="benefits-hub animate-fade" aria-labelledby="benefits-hub-title">
      <header className="benefits-hub__header">
        <button
          type="button"
          className="benefits-hub__back"
          aria-label="Voltar para o início"
          onClick={voltarParaHome}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
        </button>
        <div>
          <p className="benefits-hub__eyebrow">Orientações gerais</p>
          <h1 id="benefits-hub-title">Benefícios e proteções</h1>
        </div>
      </header>

      <section className="benefits-hub__hero" aria-labelledby="benefits-intro-title">
        <div className="benefits-hub__hero-copy">
          <p className="benefits-hub__eyebrow">Informação sem complicação</p>
          <h2 id="benefits-intro-title">
            Comece pela categoria que mais se aproxima da sua dúvida
          </h2>
          <p>
            Veja explicações iniciais sobre requisitos, documentos e próximos passos.
            Cada benefício possui regras próprias e depende da análise oficial do INSS.
          </p>
        </div>

        <div className="benefits-hub__hero-visual" aria-hidden="true">
          <span className="is-main">
            <FaClipboardCheck focusable="false" />
          </span>
          <span className="is-shield">
            <FaShieldAlt focusable="false" />
          </span>
          <span className="is-help">
            <FaHandsHelping focusable="false" />
          </span>
        </div>
      </section>

      <aside className="benefits-hub__notice" aria-label="Limites desta orientação">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          <strong>Esta página não confirma se você tem direito.</strong> O INSS Orienta
          apresenta conteúdo educativo e não consulta cadastro, contribuições ou pedidos.
        </p>
      </aside>

      <section className="benefits-hub__categories" aria-labelledby="benefits-categories-title">
        <div className="benefits-hub__section-heading">
          <p className="benefits-hub__eyebrow">Escolha uma opção</p>
          <h2 id="benefits-categories-title">Qual orientação você procura?</h2>
          <p>Toque em uma categoria para conhecer os assuntos disponíveis.</p>
        </div>

        <BeneficiosGrid setActiveTab={setActiveTab} />
      </section>

      <section className="benefits-hub__difference" aria-labelledby="benefits-difference-title">
        <div className="benefits-hub__section-heading">
          <p className="benefits-hub__eyebrow">Entenda a diferença</p>
          <h2 id="benefits-difference-title">Previdenciário ou assistencial?</h2>
        </div>

        <div className="benefits-hub__comparison">
          <article>
            <span aria-hidden="true">
              <FaShieldAlt focusable="false" />
            </span>
            <div>
              <h3>Benefícios previdenciários</h3>
              <p>
                Normalmente estão ligados às contribuições e à proteção de quem possui
                qualidade de segurado. Os requisitos mudam conforme o benefício.
              </p>
            </div>
          </article>

          <article>
            <span aria-hidden="true">
              <FaHandsHelping focusable="false" />
            </span>
            <div>
              <h3>Benefícios assistenciais</h3>
              <p>
                O BPC não exige contribuição anterior ao INSS, mas possui critérios
                próprios, inclusive sociais e cadastrais.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="benefits-hub__official" aria-labelledby="benefits-official-title">
        <FaClipboardCheck aria-hidden="true" focusable="false" />
        <div>
          <h2 id="benefits-official-title">Para pedir ou acompanhar um benefício</h2>
          <p>
            Utilize o Meu INSS ou a Central 135. Se for necessário atendimento presencial,
            o canal oficial informará o agendamento e os documentos necessários.
          </p>

          <div className="benefits-hub__official-links">
            <a
              href={URL_MEU_INSS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Meu INSS
              <FaExternalLinkAlt aria-hidden="true" focusable="false" />
              <span className="benefits-hub__sr-only"> (abre em nova guia)</span>
            </a>
            <a href="tel:135">
              <FaPhoneAlt aria-hidden="true" focusable="false" />
              Ligar para 135
            </a>
          </div>
        </div>
      </section>

      <footer className="benefits-hub__source-note">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          Conteúdo educativo revisado em 31 de agosto de 2026. Confirme regras pessoais
          e pedidos nos canais oficiais.
        </p>
      </footer>
    </section>
  );
}