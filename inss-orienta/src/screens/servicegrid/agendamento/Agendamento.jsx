import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCheckCircle,
  FaClipboardList,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFileAlt,
  FaIdCard,
  FaLaptop,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearch,
  FaShieldAlt,
  FaSignLanguage,
  FaUserClock,
} from 'react-icons/fa';
import './Agendamento.css';

const MEU_INSS_URL = 'https://meu.inss.gov.br/';
const CENTRAL_135_URL = 'https://www.gov.br/inss/pt-br/canais_atendimento/central-135';
const SERVICE_CHANNELS_URL =
  'https://www.gov.br/inss/pt-br/canais_atendimento/servicos-por-canal-de-atendimento';
const LIBRAS_URL =
  'https://www.gov.br/inss/pt-br/canais_atendimento/atendimento-em-libras-do-inss';
const OFFICIAL_CHANNELS_URL =
  'https://www.gov.br/inss/pt-br/assuntos/noticias/evite-golpes-e-fake-news-conheca-os-canais-oficiais-do-inss';

export default function Agendamento({ setActiveTab }) {
  const voltarParaInicio = () => setActiveTab('inicio');

  return (
    <article
      className="appointment-screen animate-fade"
      aria-labelledby="appointment-title"
    >
      <header className="appointment-hero">
        <button
          type="button"
          className="appointment-back"
          onClick={voltarParaInicio}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar ao início
        </button>

        <div className="appointment-hero-main">
          <span className="appointment-hero-icon" aria-hidden="true">
            <FaCalendarAlt focusable="false" />
          </span>

          <div>
            <p className="appointment-eyebrow">Canais de atendimento</p>
            <h1 id="appointment-title">Agendar atendimento do INSS</h1>
            <p className="appointment-intro">
              Descubra se o serviço pode ser feito pela internet e, quando o
              atendimento presencial for necessário, veja como marcar com segurança.
            </p>
          </div>
        </div>
      </header>

      <aside className="appointment-summary" aria-label="Orientação principal">
        <FaCheckCircle aria-hidden="true" focusable="false" />
        <div>
          <strong>Comece pelo Meu INSS ou pelo telefone 135</strong>
          <p>
            Muitos pedidos podem ser concluídos sem sair de casa. Se o serviço exigir
            presença, o canal oficial apresentará ou informará as opções de atendimento.
          </p>
        </div>
      </aside>

      <p className="appointment-project-note">
        O INSS Orienta é educativo: não realiza agendamentos, não consulta protocolos e
        não solicita CPF, senha ou documentos.
      </p>

      <section
        className="appointment-section"
        aria-labelledby="appointment-channels-title"
      >
        <div className="appointment-section-heading">
          <span aria-hidden="true"><FaLaptop focusable="false" /></span>
          <div>
            <p className="appointment-eyebrow">Escolha um canal</p>
            <h2 id="appointment-channels-title">Duas formas oficiais de começar</h2>
          </div>
        </div>

        <div className="appointment-channel-grid">
          <article className="appointment-channel-card">
            <span className="appointment-channel-icon" aria-hidden="true">
              <FaLaptop focusable="false" />
            </span>
            <div>
              <h3>Site ou aplicativo Meu INSS</h3>
              <p>
                Entre com sua conta Gov.br, use <strong>Novo Pedido</strong> ou pesquise
                pelo nome do serviço. Leia as instruções e envie somente os documentos
                solicitados pelo sistema.
              </p>
              <a href={MEU_INSS_URL} target="_blank" rel="noopener noreferrer">
                Abrir o Meu INSS
                <FaExternalLinkAlt aria-hidden="true" focusable="false" />
                <span className="appointment-sr-only"> (abre em nova guia)</span>
              </a>
            </div>
          </article>

          <article className="appointment-channel-card appointment-channel-card--phone">
            <span className="appointment-channel-icon" aria-hidden="true">
              <FaPhoneAlt focusable="false" />
            </span>
            <div>
              <h3>Central 135</h3>
              <p>
                A ligação é gratuita de telefone fixo, público ou celular. O atendimento
                humano funciona de segunda a sábado, das 7h às 22h, no horário de
                Brasília.
              </p>
              <a href="tel:135">
                <FaPhoneAlt aria-hidden="true" focusable="false" />
                Ligar para 135
              </a>
            </div>
          </article>
        </div>

        <div className="appointment-data-note" role="note">
          <FaShieldAlt aria-hidden="true" focusable="false" />
          <p>
            <strong>Nunca informe sua senha Gov.br.</strong> Pelo telefone, tenha o CPF e,
            se já existir, o número do protocolo em mãos. Digite ou fale dados somente
            depois de confirmar que ligou para o número 135.
          </p>
        </div>
      </section>

      <section
        className="appointment-section appointment-section--steps"
        aria-labelledby="appointment-steps-title"
      >
        <div className="appointment-section-heading">
          <span aria-hidden="true"><FaClipboardList focusable="false" /></span>
          <div>
            <p className="appointment-eyebrow">Passo a passo</p>
            <h2 id="appointment-steps-title">Como pedir ou agendar um serviço</h2>
          </div>
        </div>

        <ol className="appointment-steps">
          <li>
            <span className="appointment-step-number" aria-hidden="true">1</span>
            <div>
              <div className="appointment-step-title">
                <FaSearch aria-hidden="true" focusable="false" />
                <h3>Procure o serviço correto</h3>
              </div>
              <p>
                No Meu INSS, pesquise pelo nome do benefício ou atendimento. No 135,
                explique ao atendente o que você precisa.
              </p>
            </div>
          </li>

          <li>
            <span className="appointment-step-number" aria-hidden="true">2</span>
            <div>
              <div className="appointment-step-title">
                <FaFileAlt aria-hidden="true" focusable="false" />
                <h3>Leia os requisitos</h3>
              </div>
              <p>
                Confira quem pode pedir, quais documentos serão necessários e se o
                serviço é totalmente digital ou possui uma etapa presencial.
              </p>
            </div>
          </li>

          <li>
            <span className="appointment-step-number" aria-hidden="true">3</span>
            <div>
              <div className="appointment-step-title">
                <FaCalendarAlt aria-hidden="true" focusable="false" />
                <h3>Escolha entre as opções apresentadas</h3>
              </div>
              <p>
                Se houver atendimento presencial, selecione uma data, horário e unidade
                disponíveis ou confirme as informações fornecidas pelo 135.
              </p>
            </div>
          </li>

          <li>
            <span className="appointment-step-number" aria-hidden="true">4</span>
            <div>
              <div className="appointment-step-title">
                <FaClipboardList aria-hidden="true" focusable="false" />
                <h3>Guarde o protocolo</h3>
              </div>
              <p>
                Anote ou salve o número do pedido, a data, o horário, o endereço e as
                orientações exibidas ao concluir.
              </p>
            </div>
          </li>

          <li>
            <span className="appointment-step-number" aria-hidden="true">5</span>
            <div>
              <div className="appointment-step-title">
                <FaUserClock aria-hidden="true" focusable="false" />
                <h3>Acompanhe o pedido</h3>
              </div>
              <p>
                Consulte <strong>Consultar Pedidos</strong> no Meu INSS ou ligue 135 para
                verificar atualizações, exigências e possíveis mudanças.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section
        className="appointment-section"
        aria-labelledby="appointment-in-person-title"
      >
        <div className="appointment-section-heading">
          <span aria-hidden="true"><FaMapMarkerAlt focusable="false" /></span>
          <div>
            <p className="appointment-eyebrow">Atendimento presencial</p>
            <h2 id="appointment-in-person-title">Antes de ir à agência</h2>
          </div>
        </div>

        <div className="appointment-travel-warning" role="note">
          <FaExclamationTriangle aria-hidden="true" focusable="false" />
          <p>
            <strong>Não se desloque apenas para tentar atendimento.</strong> Para
            atendimento em Agência da Previdência Social, confira antes o agendamento,
            pois o serviço presencial normalmente exige marcação prévia pelo Meu INSS ou
            135.
          </p>
        </div>

        <ul className="appointment-checklist">
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Confirme data, horário e endereço no protocolo ou no Meu INSS.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Leve documento oficial com foto e os documentos indicados para o serviço.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Leve o protocolo anotado ou salvo no celular.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Chegue com a antecedência indicada na confirmação do atendimento.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>
              Para perícia, leve os documentos médicos solicitados, como atestados,
              laudos, relatórios e exames.
            </span>
          </li>
        </ul>

        <p className="appointment-variable-docs">
          Os documentos variam conforme o serviço. A lista exibida no pedido ou informada
          pelo 135 é a referência para o seu atendimento.
        </p>
      </section>

      <section
        className="appointment-section"
        aria-labelledby="appointment-examples-title"
      >
        <div className="appointment-section-heading">
          <span aria-hidden="true"><FaIdCard focusable="false" /></span>
          <div>
            <p className="appointment-eyebrow">Entenda a diferença</p>
            <h2 id="appointment-examples-title">Pedido digital e horário presencial</h2>
          </div>
        </div>

        <div className="appointment-difference-grid">
          <article>
            <span aria-hidden="true"><FaLaptop focusable="false" /></span>
            <h3>Pedido digital</h3>
            <p>
              Benefícios, extratos, atualizações e vários outros serviços podem começar e
              terminar no Meu INSS, sem agendar uma ida à agência.
            </p>
          </article>

          <article>
            <span aria-hidden="true"><FaCalendarAlt focusable="false" /></span>
            <h3>Etapa agendada</h3>
            <p>
              Perícia médica, avaliação social e alguns atendimentos específicos podem
              exigir data e local. O próprio serviço informa quando isso for necessário.
            </p>
          </article>
        </div>
      </section>

      <section
        className="appointment-section appointment-section--libras"
        aria-labelledby="appointment-libras-title"
      >
        <div className="appointment-section-heading">
          <span aria-hidden="true"><FaSignLanguage focusable="false" /></span>
          <div>
            <p className="appointment-eyebrow">Atendimento acessível</p>
            <h2 id="appointment-libras-title">Atendimento virtual em Libras</h2>
          </div>
        </div>

        <p className="appointment-section-lead">
          Pessoas surdas podem solicitar atendimento virtual em Libras pelo Meu INSS. A
          modalidade virtual está disponível em todo o país e evita o deslocamento até
          uma agência.
        </p>

        <a
          className="appointment-libras-link"
          href={LIBRAS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver atendimento em Libras no portal do INSS
          <FaExternalLinkAlt aria-hidden="true" focusable="false" />
          <span className="appointment-sr-only"> (abre em nova guia)</span>
        </a>
      </section>

      <section
        className="appointment-section appointment-section--security"
        aria-labelledby="appointment-security-title"
      >
        <div className="appointment-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="appointment-eyebrow">Proteção contra golpes</p>
            <h2 id="appointment-security-title">Agendamento não deve ser vendido</h2>
          </div>
        </div>

        <ul className="appointment-security-list">
          <li>O uso do Meu INSS e o agendamento pelos canais oficiais são gratuitos.</li>
          <li>Não pague terceiros com promessa de vaga ou atendimento mais rápido.</li>
          <li>Não compartilhe senha Gov.br, código de confirmação ou foto de documentos.</li>
          <li>Digite seus dados somente no Meu INSS ou informe-os após ligar para 135.</li>
        </ul>

        <p className="appointment-security-callout">
          Recebeu uma mensagem ou ligação suspeita? Não continue o contato. Abra o Meu
          INSS por conta própria ou ligue diretamente para 135.
        </p>
      </section>

      <section
        className="appointment-section appointment-section--official"
        aria-labelledby="appointment-official-title"
      >
        <div className="appointment-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="appointment-eyebrow">Fontes oficiais</p>
            <h2 id="appointment-official-title">Confira as orientações atuais</h2>
          </div>
        </div>

        <p className="appointment-section-lead">
          Os links abaixo são externos ao INSS Orienta e levam aos canais oficiais do
          Instituto.
        </p>

        <div className="appointment-official-links">
          <a href={MEU_INSS_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Acessar o Meu INSS</strong>
              <small>Pedir serviços e consultar protocolos</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="appointment-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={CENTRAL_135_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Conhecer a Central 135</strong>
              <small>Conferir horário e funcionamento do telefone</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="appointment-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={SERVICE_CHANNELS_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Serviços por canal de atendimento</strong>
              <small>Ver onde cada serviço pode ser solicitado</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="appointment-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={OFFICIAL_CHANNELS_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Conhecer os canais oficiais</strong>
              <small>Evitar golpes e informações falsas</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="appointment-sr-only"> (abre em nova guia)</span>
          </a>
        </div>

        <p className="appointment-reviewed">
          Orientações verificadas nos canais oficiais em{' '}
          <time dateTime="2026-09-07">7 de setembro de 2026</time>.
        </p>
      </section>

      <button
        type="button"
        className="appointment-bottom-back"
        onClick={voltarParaInicio}
      >
        <FaArrowLeft aria-hidden="true" focusable="false" />
        Voltar para a página inicial
      </button>
    </article>
  );
}
