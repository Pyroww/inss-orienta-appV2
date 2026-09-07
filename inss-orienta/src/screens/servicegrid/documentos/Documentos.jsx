import {
  FaArrowLeft,
  FaBaby,
  FaBell,
  FaBriefcase,
  FaCamera,
  FaCheckCircle,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFileAlt,
  FaFileUpload,
  FaFolderOpen,
  FaIdCard,
  FaInfoCircle,
  FaLaptop,
  FaPhoneAlt,
  FaShieldAlt,
  FaStethoscope,
  FaUserFriends,
} from 'react-icons/fa';
import './Documentos.css';

const MEU_INSS_URL = 'https://meu.inss.gov.br/';
const MEU_INSS_INFO_URL =
  'https://www.gov.br/inss/pt-br/canais_atendimento/meu-inss/meu-inss';
const APOSENTADORIA_URL =
  'https://www.gov.br/pt-br/servicos/solicitar-aposentadoria-por-tempo-de-contribuicao';
const INCAPACIDADE_URL =
  'https://www.gov.br/pt-br/servicos/solicitar-beneficio-por-incapacidade-temporaria-auxilio-doenca';
const BPC_DEFICIENCIA_URL =
  'https://www.gov.br/pt-br/servicos/solicitar-beneficio-assistencial-a-pessoa-com-deficiencia';
const BPC_IDOSO_URL =
  'https://www.gov.br/pt-br/servicos/solicitar-beneficio-assistencial-ao-idoso';
const SALARIO_MATERNIDADE_URL =
  'https://www.gov.br/pt-br/servicos/solicitar-salario-maternidade-urbano';
const GOLPES_URL =
  'https://www.gov.br/inss/pt-br/assuntos/e-golpe-inss-nao-vai-a-casa-dos-segurados-para-pedir-dados';

const gruposDeDocumentos = [
  {
    id: 'identificacao',
    classe: 'documents-category--identity',
    Icone: FaIdCard,
    titulo: 'Identificação e representação',
    resumo: 'Itens usados em muitos serviços, mas que devem ser confirmados no pedido.',
    itens: [
      'Documento de identificação, como RG, CIN, CNH ou Carteira de Trabalho (CTPS).',
      'CPF da pessoa que solicita o serviço.',
      'Se houver procurador ou representante: identificação e CPF dessa pessoa, além da procuração ou do termo de representação aplicável.',
    ],
    observacao:
      'Comprovante de residência e outros documentos só devem ser incluídos quando aparecerem na lista do serviço ou em uma solicitação do INSS.',
  },
  {
    id: 'aposentadoria',
    classe: 'documents-category--work',
    Icone: FaBriefcase,
    titulo: 'Aposentadorias e contribuições',
    resumo: 'Separe provas dos períodos que não aparecem ou estão incorretos no CNIS.',
    itens: [
      'Carteiras de Trabalho, carnês ou guias de recolhimento e Certidão de Tempo de Contribuição, conforme o seu histórico.',
      'Documentos de atividade rural, serviço público ou outros períodos que precisem ser comprovados.',
      'Perfil Profissiográfico Previdenciário (PPP), quando houver pedido de reconhecimento de atividade especial.',
    ],
    observacao:
      'Antes do pedido, consulte o Extrato de Contribuição (CNIS) no Meu INSS e compare vínculos, datas e remunerações com os documentos que você guardou.',
  },
  {
    id: 'incapacidade',
    classe: 'documents-category--health',
    Icone: FaStethoscope,
    titulo: 'Incapacidade e perícia médica',
    resumo: 'O documento médico precisa estar completo, legível e sem rasuras.',
    itens: [
      'Laudo, relatório ou atestado com nome completo do paciente e data de emissão.',
      'Período estimado de repouso necessário, informações sobre a doença ou CID e assinatura do profissional.',
      'Carimbo ou identificação do profissional com registro no conselho competente, como CRM, CRO ou RMS. A assinatura pode ser eletrônica.',
      'Exames e outros relatórios que ajudem a demonstrar a condição de saúde, quando relacionados ao pedido.',
    ],
    observacao:
      'No benefício por incapacidade temporária, o período estimado indicado no documento médico pode ser de até 180 dias. Confira as instruções atuais antes de enviar.',
  },
  {
    id: 'bpc',
    classe: 'documents-category--assistance',
    Icone: FaUserFriends,
    titulo: 'Benefício assistencial — BPC/LOAS',
    resumo: 'A composição familiar e o Cadastro Único fazem parte da análise.',
    itens: [
      'Identificação e CPF da pessoa que pede o BPC e das pessoas da família que moram na mesma casa.',
      'Cadastro Único (CadÚnico) atualizado há menos de dois anos e com o CPF de todas as pessoas da família.',
      'Documentos do procurador ou representante legal, quando houver.',
    ],
    observacao:
      'Para o BPC da pessoa com deficiência, acompanhe também as orientações sobre avaliação da deficiência. O Meu INSS informa eventuais documentos e etapas adicionais.',
  },
  {
    id: 'maternidade',
    classe: 'documents-category--maternity',
    Icone: FaBaby,
    titulo: 'Salário-maternidade',
    resumo: 'O documento complementar depende do motivo do pedido.',
    itens: [
      'Para afastamento a partir de 28 dias antes do parto: atestado médico original específico para gestante.',
      'Em caso de guarda: termo de guarda que informe que ela se destina à adoção.',
      'Em caso de adoção: nova certidão de nascimento emitida depois da decisão judicial.',
      'Identificação, CPF e documentos de representação, quando aplicável.',
    ],
    observacao:
      'A lista pode ser diferente para trabalhadora rural, acordo internacional ou outra situação específica. Escolha o serviço correto no Meu INSS.',
  },
  {
    id: 'outros-casos',
    classe: 'documents-category--other',
    Icone: FaFolderOpen,
    titulo: 'Pensão, dependentes e outros casos',
    resumo: 'Cada serviço possui provas próprias e pode envolver mais de uma pessoa.',
    itens: [
      'Em pensão por morte, podem ser solicitadas a certidão de óbito e provas de relação familiar ou dependência econômica.',
      'Em pedidos envolvendo dependentes, podem ser necessários documentos de identificação, certidões e comprovantes específicos.',
      'Em auxílio-acidente, podem ser pedidos documentos que ajudem a comprovar a redução da capacidade para o trabalho.',
    ],
    observacao:
      'Estes são apenas exemplos. Abra a página oficial do serviço e use como referência a lista apresentada no seu pedido.',
  },
];

const linksOficiais = [
  {
    href: MEU_INSS_URL,
    titulo: 'Acessar o Meu INSS',
    descricao: 'Fazer pedidos, anexar documentos e acompanhar protocolos.',
  },
  {
    href: APOSENTADORIA_URL,
    titulo: 'Documentos para aposentadoria',
    descricao: 'Consultar a página oficial do serviço no portal Gov.br.',
  },
  {
    href: INCAPACIDADE_URL,
    titulo: 'Benefício por incapacidade temporária',
    descricao: 'Ver os requisitos atuais do documento médico.',
  },
  {
    href: BPC_DEFICIENCIA_URL,
    titulo: 'BPC para pessoa com deficiência',
    descricao: 'Conferir cadastro, documentos e etapas do pedido.',
  },
  {
    href: BPC_IDOSO_URL,
    titulo: 'BPC para pessoa idosa',
    descricao: 'Conferir cadastro e documentos do grupo familiar.',
  },
  {
    href: SALARIO_MATERNIDADE_URL,
    titulo: 'Salário-maternidade urbano',
    descricao: 'Ver os documentos correspondentes a cada situação.',
  },
];

export default function Documentos({ setActiveTab }) {
  const voltarParaInicio = () => setActiveTab('inicio');

  return (
    <article className="documents-screen animate-fade" aria-labelledby="documents-title">
      <header className="documents-hero">
        <button type="button" className="documents-back" onClick={voltarParaInicio}>
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar ao início
        </button>

        <div className="documents-hero-main">
          <span className="documents-hero-icon" aria-hidden="true">
            <FaFileAlt focusable="false" />
          </span>

          <div>
            <p className="documents-eyebrow">Prepare seu pedido</p>
            <h1 id="documents-title">Documentos necessários</h1>
            <p className="documents-intro">
              Entenda o que costuma ser solicitado e como enviar arquivos legíveis pelos
              canais oficiais.
            </p>
          </div>
        </div>
      </header>

      <aside className="documents-summary" aria-label="Orientação principal">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <div>
          <strong>Não existe uma única lista para todos os pedidos</strong>
          <p>
            Escolha primeiro o serviço no Meu INSS. A lista exibida nele e as mensagens
            do seu protocolo são as referências para saber o que enviar.
          </p>
        </div>
      </aside>

      <p className="documents-project-note">
        O INSS Orienta é educativo e não oficial. Esta página não recebe documentos,
        não consulta pedidos e não substitui as instruções do INSS.
      </p>

      <section className="documents-section" aria-labelledby="documents-start-title">
        <div className="documents-section-heading">
          <span aria-hidden="true"><FaClipboardCheck focusable="false" /></span>
          <div>
            <p className="documents-eyebrow">Antes de separar tudo</p>
            <h2 id="documents-start-title">Descubra a lista correta em 3 passos</h2>
          </div>
        </div>

        <ol className="documents-start-steps">
          <li>
            <span className="documents-step-number" aria-hidden="true">1</span>
            <div>
              <h3>Escolha o serviço</h3>
              <p>
                No Meu INSS, use <strong>Novo Pedido</strong> e procure pelo nome exato
                do benefício ou atendimento.
              </p>
            </div>
          </li>
          <li>
            <span className="documents-step-number" aria-hidden="true">2</span>
            <div>
              <h3>Leia as instruções</h3>
              <p>
                Confira quem pode pedir, os documentos solicitados e se existe alguma
                etapa presencial.
              </p>
            </div>
          </li>
          <li>
            <span className="documents-step-number" aria-hidden="true">3</span>
            <div>
              <h3>Envie e acompanhe</h3>
              <p>
                Anexe somente os arquivos relacionados e acompanhe o protocolo em
                <strong> Consultar Pedidos</strong>.
              </p>
            </div>
          </li>
        </ol>

        <a
          className="documents-primary-link"
          href={MEU_INSS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLaptop aria-hidden="true" focusable="false" />
          Abrir o Meu INSS
          <FaExternalLinkAlt aria-hidden="true" focusable="false" />
          <span className="documents-sr-only"> (abre em nova guia)</span>
        </a>
      </section>

      <section className="documents-section" aria-labelledby="documents-categories-title">
        <div className="documents-section-heading">
          <span aria-hidden="true"><FaFolderOpen focusable="false" /></span>
          <div>
            <p className="documents-eyebrow">Veja exemplos</p>
            <h2 id="documents-categories-title">O que pode ser solicitado</h2>
          </div>
        </div>

        <p className="documents-section-lead">
          Use os grupos abaixo para se preparar. Eles não substituem a lista do serviço
          nem uma eventual exigência enviada pelo INSS.
        </p>

        <div className="documents-category-grid">
          {gruposDeDocumentos.map(
            ({ id, classe, Icone, titulo, resumo, itens, observacao }) => (
              <article
                key={id}
                className={`documents-category ${classe}`}
                aria-labelledby={`documents-category-${id}`}
              >
                <header className="documents-category-heading">
                  <span aria-hidden="true"><Icone focusable="false" /></span>
                  <div>
                    <h3 id={`documents-category-${id}`}>{titulo}</h3>
                    <p>{resumo}</p>
                  </div>
                </header>

                <ul className="documents-category-list">
                  {itens.map((item) => <li key={item}>{item}</li>)}
                </ul>

                <p className="documents-category-note">
                  <FaInfoCircle aria-hidden="true" focusable="false" />
                  <span>{observacao}</span>
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="documents-section" aria-labelledby="documents-quality-title">
        <div className="documents-section-heading">
          <span aria-hidden="true"><FaCamera focusable="false" /></span>
          <div>
            <p className="documents-eyebrow">Foto ou digitalização</p>
            <h2 id="documents-quality-title">Confira a qualidade antes de enviar</h2>
          </div>
        </div>

        <ul className="documents-quality-list">
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Fotografe ou digitalize o documento inteiro, sem cortar bordas.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Use imagem colorida, nítida, bem iluminada e sem reflexos.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Inclua frente e verso quando os dois lados possuírem informações.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Mantenha todas as páginas e coloque-as na ordem correta.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Respeite o formato e o tamanho de arquivo mostrados no serviço.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Abra o arquivo antes do envio e confira se todo o texto pode ser lido.</span>
          </li>
        </ul>

        <div className="documents-copy-warning" role="note">
          <FaExclamationTriangle aria-hidden="true" focusable="false" />
          <p>
            <strong>Não autentique cópias por conta própria sem conferir.</strong> Em
            pedidos digitais, o sistema pode aceitar documento fotografado ou
            digitalizado. Se o original ou outra comprovação for necessária, o INSS
            informará no serviço ou no protocolo.
          </p>
        </div>
      </section>

      <section className="documents-section documents-section--requirement" aria-labelledby="documents-requirement-title">
        <div className="documents-section-heading">
          <span aria-hidden="true"><FaBell focusable="false" /></span>
          <div>
            <p className="documents-eyebrow">Pedido em exigência</p>
            <h2 id="documents-requirement-title">O INSS pediu outro documento?</h2>
          </div>
        </div>

        <p className="documents-section-lead">
          “Em exigência” significa que faltam informações ou documentos para continuar
          a análise. Leia a mensagem completa e observe o prazo indicado no protocolo.
        </p>

        <ol className="documents-requirement-steps">
          <li>
            <span aria-hidden="true"><FaLaptop focusable="false" /></span>
            <p>Entre no Meu INSS por conta própria e abra <strong>Consultar Pedidos</strong>.</p>
          </li>
          <li>
            <span aria-hidden="true"><FaBell focusable="false" /></span>
            <p>Abra o pedido e leia o último comentário para saber exatamente o que falta.</p>
          </li>
          <li>
            <span aria-hidden="true"><FaFileUpload focusable="false" /></span>
            <p>Use <strong>Cumprir Exigência</strong> e anexe somente o que foi solicitado.</p>
          </li>
          <li>
            <span aria-hidden="true"><FaClipboardCheck focusable="false" /></span>
            <p>Conclua o envio, guarde o protocolo e continue acompanhando o pedido.</p>
          </li>
        </ol>

        <a
          className="documents-secondary-link"
          href={MEU_INSS_INFO_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver orientações oficiais sobre o Meu INSS
          <FaExternalLinkAlt aria-hidden="true" focusable="false" />
          <span className="documents-sr-only"> (abre em nova guia)</span>
        </a>
      </section>

      <section className="documents-section documents-section--security" aria-labelledby="documents-security-title">
        <div className="documents-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="documents-eyebrow">Proteja seus dados</p>
            <h2 id="documents-security-title">Documentos também podem ser usados em golpes</h2>
          </div>
        </div>

        <ul className="documents-security-list">
          <li>Não envie fotos de documentos, selfies, senhas ou códigos pelo INSS Orienta.</li>
          <li>Não entregue esses dados a quem fizer contato inesperado por mensagem ou ligação.</li>
          <li>Para anexar arquivos, abra você mesmo o site ou aplicativo Meu INSS.</li>
          <li>O INSS não envia servidores à sua casa para recolher documentos ou senhas.</li>
        </ul>

        <p className="documents-security-callout">
          Recebeu um pedido suspeito? Interrompa o contato. Consulte o Meu INSS ou ligue
          diretamente para 135.
        </p>

        <div className="documents-security-actions">
          <a href="tel:135">
            <FaPhoneAlt aria-hidden="true" focusable="false" />
            Ligar para 135
          </a>
          <a href={GOLPES_URL} target="_blank" rel="noopener noreferrer">
            Ver alerta oficial
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="documents-sr-only"> (abre em nova guia)</span>
          </a>
        </div>
      </section>

      <section className="documents-section documents-section--official" aria-labelledby="documents-official-title">
        <div className="documents-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="documents-eyebrow">Fontes oficiais</p>
            <h2 id="documents-official-title">Confirme antes de fazer o pedido</h2>
          </div>
        </div>

        <p className="documents-section-lead">
          Os links abaixo são externos ao INSS Orienta e levam ao Meu INSS ou ao portal
          Gov.br.
        </p>

        <div className="documents-official-links">
          {linksOficiais.map(({ href, titulo, descricao }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <span>
                <strong>{titulo}</strong>
                <small>{descricao}</small>
              </span>
              <FaExternalLinkAlt aria-hidden="true" focusable="false" />
              <span className="documents-sr-only"> (abre em nova guia)</span>
            </a>
          ))}
        </div>

        <p className="documents-reviewed">
          Conteúdo conferido em fontes oficiais em{' '}
          <time dateTime="2026-09-07">7 de setembro de 2026</time>.
        </p>
      </section>

      <button type="button" className="documents-bottom-back" onClick={voltarParaInicio}>
        <FaArrowLeft aria-hidden="true" focusable="false" />
        Voltar ao início
      </button>
    </article>
  );
}
