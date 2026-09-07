import {
  FaArrowLeft,
  FaCamera,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaGlobeAmericas,
  FaIdCard,
  FaKey,
  FaLightbulb,
  FaMobileAlt,
  FaQrcode,
  FaShieldAlt,
  FaUserCheck,
} from 'react-icons/fa';
import './RecuperarFacial.css';

const ACCOUNT_URL = 'https://acesso.gov.br/';
const OFFICIAL_GUIDE_URL =
  'https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-na-conta-gov.br/recuperar-senha-da-conta-gov.br';
const FACIAL_HELP_URL =
  'https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-no-aplicativo-gov.br/duvidas-no-reconhecimento-facial';
const BIOMETRIC_BASES_URL =
  'https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-no-aplicativo-gov.br/duvidas-no-reconhecimento-facial/bases-biometricas-faciais';

export default function RecuperarFacial({ setActiveTab }) {
  const voltarParaMetodos = () => setActiveTab('senhaGov');

  return (
    <article
      className="facial-recovery-screen animate-fade"
      aria-labelledby="facial-recovery-title"
    >
      <header className="facial-recovery-hero">
        <button
          type="button"
          className="facial-recovery-back"
          onClick={voltarParaMetodos}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar aos métodos
        </button>

        <div className="facial-recovery-hero-main">
          <span className="facial-recovery-hero-icon" aria-hidden="true">
            <FaUserCheck focusable="false" />
          </span>

          <div>
            <p className="facial-recovery-eyebrow">Conta Gov.br</p>
            <h1 id="facial-recovery-title">Recuperar por reconhecimento facial</h1>
            <p className="facial-recovery-intro">
              Use o aplicativo oficial Gov.br para comparar a imagem do seu rosto com
              uma base biométrica disponível e criar uma nova senha.
            </p>
          </div>
        </div>
      </header>

      <aside
        className="facial-recovery-critical-note"
        aria-label="Aviso importante de privacidade"
      >
        <FaShieldAlt aria-hidden="true" focusable="false" />
        <div>
          <strong>A câmera será usada somente pelo aplicativo oficial Gov.br</strong>
          <p>
            O INSS Orienta não abre sua câmera, não recebe sua foto e não solicita CPF,
            senha ou código nesta página. Não envie selfies ou documentos para pessoas
            que ofereçam recuperação por mensagem ou ligação.
          </p>
        </div>
      </aside>

      <section
        className="facial-recovery-section"
        aria-labelledby="facial-recovery-availability-title"
      >
        <div className="facial-recovery-section-heading">
          <span aria-hidden="true"><FaIdCard focusable="false" /></span>
          <div>
            <p className="facial-recovery-eyebrow">Disponibilidade</p>
            <h2 id="facial-recovery-availability-title">A opção pode não aparecer para todos</h2>
          </div>
        </div>

        <p className="facial-recovery-section-lead">
          O reconhecimento só fica disponível quando o Gov.br encontra sua biometria em
          uma das bases oficiais compatíveis. A consulta é feita automaticamente pelo
          aplicativo.
        </p>

        <div className="facial-recovery-bases" aria-label="Bases biométricas usadas atualmente">
          <span>Carteira de Identidade Nacional (CIN)</span>
          <span>Identificação Civil Nacional (ICN/TSE)</span>
          <span>Carteira Nacional de Habilitação (CNH)</span>
        </div>

        <div className="facial-recovery-alternative-note" role="note">
          <FaExclamationTriangle aria-hidden="true" focusable="false" />
          <p>
            <strong>Não encontrou essa opção?</strong> Volte e escolha banco credenciado,
            e-mail ou SMS. A ausência do reconhecimento não significa que sua conta esteja
            com problema.
          </p>
        </div>
      </section>

      <section
        className="facial-recovery-section"
        aria-labelledby="facial-recovery-before-title"
      >
        <div className="facial-recovery-section-heading">
          <span aria-hidden="true"><FaLightbulb focusable="false" /></span>
          <div>
            <p className="facial-recovery-eyebrow">Antes da foto</p>
            <h2 id="facial-recovery-before-title">Prepare o celular e o ambiente</h2>
          </div>
        </div>

        <ul className="facial-recovery-checklist">
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Use o aplicativo Gov.br atualizado e permita o acesso à câmera quando ele pedir.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Procure um local bem iluminado, com fundo claro e sem sombras no rosto.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Segure o celular na altura do rosto e evite posicionar a câmera na diagonal.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Deixe olhos, nariz e boca visíveis e mantenha o aparelho firme.</span>
          </li>
        </ul>
      </section>

      <section
        className="facial-recovery-section"
        aria-labelledby="facial-recovery-device-title"
      >
        <div className="facial-recovery-section-heading">
          <span aria-hidden="true"><FaMobileAlt focusable="false" /></span>
          <div>
            <p className="facial-recovery-eyebrow">Escolha seu caso</p>
            <h2 id="facial-recovery-device-title">Você começou no celular ou computador?</h2>
          </div>
        </div>

        <div className="facial-recovery-device-grid">
          <article className="facial-recovery-device-card facial-recovery-device-card--phone">
            <span aria-hidden="true"><FaMobileAlt focusable="false" /></span>
            <h3>No celular</h3>
            <p>Faça o reconhecimento diretamente pelo aplicativo Gov.br instalado no aparelho.</p>
          </article>

          <article className="facial-recovery-device-card facial-recovery-device-card--computer">
            <span aria-hidden="true"><FaQrcode focusable="false" /></span>
            <h3>No computador</h3>
            <p>
              Quando o QR Code aparecer, abra o aplicativo Gov.br no celular, escolha a
              leitura de QR Code e aponte para a tela do computador.
            </p>
          </article>
        </div>
      </section>

      <section
        className="facial-recovery-section facial-recovery-section--steps"
        aria-labelledby="facial-recovery-steps-title"
      >
        <div className="facial-recovery-section-heading">
          <span aria-hidden="true"><FaCamera focusable="false" /></span>
          <div>
            <p className="facial-recovery-eyebrow">Passo a passo</p>
            <h2 id="facial-recovery-steps-title">Como fazer o reconhecimento</h2>
          </div>
        </div>

        <ol className="facial-recovery-steps">
          <li>
            <span className="facial-recovery-step-number" aria-hidden="true">1</span>
            <div>
              <div className="facial-recovery-step-title">
                <FaIdCard aria-hidden="true" focusable="false" />
                <h3>Inicie a recuperação</h3>
              </div>
              <p>
                No canal oficial do Gov.br, informe seu CPF, toque em
                <strong> Continuar</strong> e selecione <strong>Esqueci minha senha</strong>.
              </p>
            </div>
          </li>

          <li>
            <span className="facial-recovery-step-number" aria-hidden="true">2</span>
            <div>
              <div className="facial-recovery-step-title">
                <FaQrcode aria-hidden="true" focusable="false" />
                <h3>Abra o procedimento no aplicativo</h3>
              </div>
              <p>
                No celular, continue pelo aplicativo. Se começou no computador, use o
                aplicativo para ler o QR Code apresentado na tela.
              </p>
            </div>
          </li>

          <li>
            <span className="facial-recovery-step-number" aria-hidden="true">3</span>
            <div>
              <div className="facial-recovery-step-title">
                <FaCamera aria-hidden="true" focusable="false" />
                <h3>Autorize a câmera</h3>
              </div>
              <p>
                Quando o aplicativo oficial solicitar, permita o uso da câmera. Essa
                autorização é necessária para capturar a imagem durante a validação.
              </p>
            </div>
          </li>

          <li>
            <span className="facial-recovery-step-number" aria-hidden="true">4</span>
            <div>
              <div className="facial-recovery-step-title">
                <FaUserCheck aria-hidden="true" focusable="false" />
                <h3>Posicione o rosto</h3>
              </div>
              <p>
                Mantenha a cabeça dentro da área indicada e siga exatamente as instruções
                mostradas pelo aplicativo. Evite movimentos rápidos enquanto a imagem é
                analisada.
              </p>
            </div>
          </li>

          <li>
            <span className="facial-recovery-step-number" aria-hidden="true">5</span>
            <div>
              <div className="facial-recovery-step-title">
                <FaKey aria-hidden="true" focusable="false" />
                <h3>Crie a nova senha</h3>
              </div>
              <p>
                Após a confirmação da identidade, retorne ao fluxo do Gov.br e siga as
                regras da tela para cadastrar uma nova senha de acesso.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section
        className="facial-recovery-section"
        aria-labelledby="facial-recovery-help-title"
      >
        <div className="facial-recovery-section-heading">
          <span aria-hidden="true"><FaUserCheck focusable="false" /></span>
          <div>
            <p className="facial-recovery-eyebrow">Ajuda durante a foto</p>
            <h2 id="facial-recovery-help-title">Outra pessoa pode segurar o celular</h2>
          </div>
        </div>

        <div className="facial-recovery-assisted-note">
          <FaCamera aria-hidden="true" focusable="false" />
          <div>
            <p>
              O Gov.br permite usar a câmera traseira, que pode ter melhor qualidade. Uma
              pessoa de confiança pode ajudar a segurar o aparelho, desde que você permita.
            </p>
            <p>
              A pessoa deve ajudar somente no enquadramento. Ela não precisa conhecer sua
              senha, receber códigos ou guardar fotos e documentos.
            </p>
          </div>
        </div>
      </section>

      <section
        className="facial-recovery-section"
        aria-labelledby="facial-recovery-problems-title"
      >
        <div className="facial-recovery-section-heading">
          <span aria-hidden="true"><FaExclamationTriangle focusable="false" /></span>
          <div>
            <p className="facial-recovery-eyebrow">Se algo der errado</p>
            <h2 id="facial-recovery-problems-title">Problemas mais comuns</h2>
          </div>
        </div>

        <div className="facial-recovery-problem-list">
          <article>
            <FaLightbulb aria-hidden="true" focusable="false" />
            <div>
              <h3>O rosto não foi detectado</h3>
              <p>
                Mude de local, melhore a iluminação, confira a posição do rosto e tente
                novamente sem movimentar muito a cabeça.
              </p>
            </div>
          </article>

          <article>
            <FaIdCard aria-hidden="true" focusable="false" />
            <div>
              <h3>A biometria não foi encontrada</h3>
              <p>
                Escolha outra forma de recuperação. Se sua aparência ou seus documentos
                mudaram muito, consulte as orientações oficiais sobre as bases biométricas.
              </p>
            </div>
          </article>

          <article>
            <FaClock aria-hidden="true" focusable="false" />
            <div>
              <h3>As tentativas foram bloqueadas</h3>
              <p>
                Após muitas tentativas inválidas no mesmo dia, pode ser necessário aguardar
                até o dia seguinte. Você também pode voltar e usar outro método disponível.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="facial-recovery-section facial-recovery-section--official"
        aria-labelledby="facial-recovery-official-title"
      >
        <div className="facial-recovery-section-heading">
          <span aria-hidden="true"><FaGlobeAmericas focusable="false" /></span>
          <div>
            <p className="facial-recovery-eyebrow">Canais oficiais</p>
            <h2 id="facial-recovery-official-title">Continue com segurança</h2>
          </div>
        </div>

        <p className="facial-recovery-section-lead">
          Os links abaixo são externos ao INSS Orienta e levam aos canais oficiais da conta
          Gov.br.
        </p>

        <div className="facial-recovery-official-links">
          <a href={ACCOUNT_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Abrir a conta Gov.br</strong>
              <small>Iniciar a recuperação com seu CPF</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="facial-recovery-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={OFFICIAL_GUIDE_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Ler o guia de recuperação</strong>
              <small>Conferir os métodos atualmente disponíveis</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="facial-recovery-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={FACIAL_HELP_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Ajuda para reconhecimento facial</strong>
              <small>Ver dicas e erros explicados pelo Gov.br</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="facial-recovery-sr-only"> (abre em nova guia)</span>
          </a>

          <a href={BIOMETRIC_BASES_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Entender as bases biométricas</strong>
              <small>Saiba de onde pode vir a foto usada na comparação</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="facial-recovery-sr-only"> (abre em nova guia)</span>
          </a>
        </div>

        <p className="facial-recovery-reviewed">
          Orientações verificadas nos canais oficiais em{' '}
          <time dateTime="2026-09-07">7 de setembro de 2026</time>.
        </p>
      </section>

      <button
        type="button"
        className="facial-recovery-bottom-back"
        onClick={voltarParaMetodos}
      >
        <FaArrowLeft aria-hidden="true" focusable="false" />
        Voltar para as formas de recuperação
      </button>
    </article>
  );
}
