import {
  FaArrowLeft,
  FaBalanceScale,
  FaBan,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFileContract,
  FaGlobeAmericas,
  FaInfoCircle,
  FaLink,
  FaRobot,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';
import './termosdeuso.css';

export default function TermosDeUso({ voltarParaHome }) {
  return (
    <article className="terms-screen animate-fade" aria-labelledby="terms-title">
      <header className="terms-hero">
        <button type="button" className="terms-back" onClick={voltarParaHome}>
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar ao início
        </button>

        <div className="terms-hero-main">
          <span className="terms-hero-icon" aria-hidden="true">
            <FaFileContract focusable="false" />
          </span>

          <div>
            <p className="terms-eyebrow">Condições do projeto</p>
            <h1 id="terms-title">Termos de Uso</h1>
            <p className="terms-intro">
              Conheça as regras para utilizar o INSS Orienta com segurança e entenda os
              limites das informações apresentadas.
            </p>
          </div>
        </div>

        <p className="terms-version">
          <FaClock aria-hidden="true" focusable="false" />
          Versão acadêmica atualizada em{' '}
          <time dateTime="2026-09-07">7 de setembro de 2026</time>
        </p>
      </header>

      <aside className="terms-critical-note" aria-label="Aviso importante">
        <FaExclamationTriangle aria-hidden="true" focusable="false" />
        <div>
          <strong>Este projeto não é um canal oficial do INSS</strong>
          <p>
            O INSS Orienta é uma iniciativa acadêmica e educativa independente. Ele não
            representa o Instituto Nacional do Seguro Social, não realiza requerimentos e
            não substitui o Meu INSS, o telefone 135 ou uma Agência da Previdência Social.
          </p>
        </div>
      </aside>

      <section className="terms-summary" aria-labelledby="terms-summary-title">
        <div className="terms-section-heading terms-section-heading--compact">
          <span aria-hidden="true"><FaInfoCircle focusable="false" /></span>
          <div>
            <p className="terms-eyebrow">Resumo rápido</p>
            <h2 id="terms-summary-title">Em poucas palavras</h2>
          </div>
        </div>

        <ul className="terms-summary-list">
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Use o aplicativo para receber uma orientação inicial.</span>
          </li>
          <li>
            <FaCheckCircle aria-hidden="true" focusable="false" />
            <span>Confirme decisões e prazos nos canais oficiais.</span>
          </li>
          <li>
            <FaBan aria-hidden="true" focusable="false" />
            <span>Não envie senhas, documentos ou dados pessoais sensíveis.</span>
          </li>
        </ul>
      </section>

      <nav className="terms-index" aria-label="Conteúdo dos Termos de Uso">
        <h2>Nesta página</h2>
        <ul>
          <li><a href="#terms-acceptance">Aceitação e finalidade</a></li>
          <li><a href="#terms-guidance">Limites da orientação</a></li>
          <li><a href="#terms-ai">Assistente virtual</a></li>
          <li><a href="#terms-community">Comunidade</a></li>
          <li><a href="#terms-conduct">Uso responsável</a></li>
          <li><a href="#terms-external">Links e canais oficiais</a></li>
          <li><a href="#terms-privacy">Privacidade e segurança</a></li>
          <li><a href="#terms-availability">Disponibilidade e alterações</a></li>
        </ul>
      </nav>

      <section
        id="terms-acceptance"
        className="terms-section"
        aria-labelledby="terms-acceptance-title"
      >
        <div className="terms-section-heading">
          <span aria-hidden="true"><FaFileContract focusable="false" /></span>
          <div>
            <p className="terms-eyebrow">1. Começando</p>
            <h2 id="terms-acceptance-title">Aceitação e finalidade</h2>
          </div>
        </div>

        <p>
          Ao utilizar o INSS Orienta, você declara que leu e concorda com estes Termos de
          Uso e com a Política de Privacidade disponível no menu. Caso não concorde, não
          utilize as funcionalidades do projeto.
        </p>
        <p>
          O aplicativo foi criado para apresentar informações previdenciárias em linguagem
          simples, facilitar a preparação para um atendimento e indicar caminhos oficiais.
          O acesso é destinado a fins pessoais, educativos e informativos.
        </p>
      </section>

      <section
        id="terms-guidance"
        className="terms-section"
        aria-labelledby="terms-guidance-title"
      >
        <div className="terms-section-heading">
          <span aria-hidden="true"><FaBalanceScale focusable="false" /></span>
          <div>
            <p className="terms-eyebrow">2. Informação educativa</p>
            <h2 id="terms-guidance-title">Limites da orientação</h2>
          </div>
        </div>

        <p>
          O conteúdo não constitui decisão administrativa, análise de benefício, parecer
          jurídico, atendimento profissional nem garantia de concessão, pagamento ou prazo.
          Cada situação pode depender de documentos, contribuições, regras de transição e
          avaliação realizada pelos órgãos competentes.
        </p>

        <div className="terms-guidance-note" role="note">
          <FaShieldAlt aria-hidden="true" focusable="false" />
          <p>
            <strong>Antes de tomar uma decisão:</strong> confirme a informação no Meu INSS,
            pelo telefone 135, em uma Agência da Previdência Social ou com um profissional
            qualificado, quando necessário.
          </p>
        </div>
      </section>

      <section id="terms-ai" className="terms-section" aria-labelledby="terms-ai-title">
        <div className="terms-section-heading">
          <span aria-hidden="true"><FaRobot focusable="false" /></span>
          <div>
            <p className="terms-eyebrow">3. Tecnologia de IA</p>
            <h2 id="terms-ai-title">Uso do assistente virtual</h2>
          </div>
        </div>

        <p>
          O assistente utiliza inteligência artificial generativa para produzir respostas.
          Esse tipo de tecnologia pode apresentar informações incompletas, desatualizadas,
          imprecisas ou inadequadas ao seu caso, mesmo quando a resposta parece convincente.
        </p>

        <ul className="terms-check-list">
          <li>Faça perguntas gerais, sem identificar você ou outra pessoa.</li>
          <li>Não informe CPF, senha Gov.br, número de benefício ou dados bancários.</li>
          <li>Não envie documentos, laudos, fotos ou diagnósticos detalhados.</li>
          <li>Confira datas, valores, requisitos e procedimentos em fonte oficial.</li>
        </ul>

        <p className="terms-closing-line">
          A resposta da IA é um ponto de partida para pesquisa, não uma decisão oficial.
        </p>
      </section>

      <section
        id="terms-community"
        className="terms-section"
        aria-labelledby="terms-community-title"
      >
        <div className="terms-section-heading">
          <span aria-hidden="true"><FaUsers focusable="false" /></span>
          <div>
            <p className="terms-eyebrow">4. Espaço coletivo</p>
            <h2 id="terms-community-title">Uso da Comunidade</h2>
          </div>
        </div>

        <p>
          Perguntas e respostas publicadas na Comunidade podem ser visualizadas por outras
          pessoas. O conteúdo de participantes não representa a opinião do projeto, do INSS
          ou do Governo Federal e não deve ser tratado como orientação oficial.
        </p>

        <div className="terms-two-column">
          <article>
            <h3>Ao publicar</h3>
            <ul>
              <li>Use linguagem respeitosa e relacionada ao propósito do aplicativo.</li>
              <li>Compartilhe somente conteúdo que você tem direito de divulgar.</li>
              <li>Proteja sua identidade e a identidade de outras pessoas.</li>
            </ul>
          </article>

          <article>
            <h3>Não publique</h3>
            <ul>
              <li>Dados pessoais, senhas, documentos ou informações bancárias.</li>
              <li>Ofensas, ameaças, discriminação, assédio ou conteúdo ilegal.</li>
              <li>Golpes, publicidade enganosa, spam ou falsa identificação como servidor.</li>
            </ul>
          </article>
        </div>

        <p>
          Conteúdo que viole estes termos poderá ser restringido ou removido quando
          identificado, observadas as possibilidades técnicas e a legislação aplicável.
        </p>
      </section>

      <section
        id="terms-conduct"
        className="terms-section"
        aria-labelledby="terms-conduct-title"
      >
        <div className="terms-section-heading">
          <span aria-hidden="true"><FaBan focusable="false" /></span>
          <div>
            <p className="terms-eyebrow">5. Conduta</p>
            <h2 id="terms-conduct-title">Uso responsável</h2>
          </div>
        </div>

        <p>Não é permitido utilizar o INSS Orienta para:</p>
        <ul className="terms-prohibited-list">
          <li>praticar fraude, tentar obter vantagem indevida ou enganar outras pessoas;</li>
          <li>se passar pelo INSS, pelo Governo Federal ou pela equipe do projeto;</li>
          <li>tentar acessar áreas administrativas, contas, dados ou sistemas sem autorização;</li>
          <li>enviar código malicioso, sobrecarregar ou prejudicar o funcionamento do serviço;</li>
          <li>copiar ou reutilizar conteúdo em desacordo com a legislação e os direitos de terceiros.</li>
        </ul>
      </section>

      <section
        id="terms-external"
        className="terms-section"
        aria-labelledby="terms-external-title"
      >
        <div className="terms-section-heading">
          <span aria-hidden="true"><FaLink focusable="false" /></span>
          <div>
            <p className="terms-eyebrow">6. Outros serviços</p>
            <h2 id="terms-external-title">Links e canais oficiais</h2>
          </div>
        </div>

        <p>
          O aplicativo pode encaminhar você para páginas externas. Ao abrir outro serviço,
          passam a valer os termos, as políticas e as medidas de segurança daquele provedor.
          Verifique o endereço antes de digitar qualquer informação.
        </p>

        <div className="terms-official-links" aria-label="Canais oficiais do INSS">
          <a href="https://www.gov.br/meuinss" target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Acessar o Meu INSS</strong>
              <small>Serviços e requerimentos oficiais</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="terms-sr-only"> (abre em nova guia)</span>
          </a>

          <a
            href="https://www.gov.br/inss/pt-br/canais_atendimento"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>Conhecer os canais de atendimento</strong>
              <small>Meu INSS, telefone 135 e rede de atendimento</small>
            </span>
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="terms-sr-only"> (abre em nova guia)</span>
          </a>
        </div>
      </section>

      <section
        id="terms-privacy"
        className="terms-section"
        aria-labelledby="terms-privacy-title"
      >
        <div className="terms-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="terms-eyebrow">7. Seus dados</p>
            <h2 id="terms-privacy-title">Privacidade e segurança</h2>
          </div>
        </div>

        <p>
          O tratamento de informações relacionadas ao uso do projeto é detalhado na Política
          de Privacidade. Você é responsável por não inserir dados pessoais, sigilosos ou de
          terceiros em campos públicos ou no assistente virtual.
        </p>

        <p>
          As práticas do projeto devem observar a legislação brasileira aplicável, incluindo
          a Lei Geral de Proteção de Dados e o Marco Civil da Internet. Nenhuma disposição
          destes termos afasta direitos garantidos por normas obrigatórias, inclusive as de
          proteção do consumidor, quando aplicáveis.
        </p>

        <div className="terms-reference-links" aria-label="Referências legais oficiais">
          <a
            href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lei Geral de Proteção de Dados
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="terms-sr-only"> (abre em nova guia)</span>
          </a>
          <a
            href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marco Civil da Internet
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="terms-sr-only"> (abre em nova guia)</span>
          </a>
        </div>
      </section>

      <section
        id="terms-availability"
        className="terms-section"
        aria-labelledby="terms-availability-title"
      >
        <div className="terms-section-heading">
          <span aria-hidden="true"><FaGlobeAmericas focusable="false" /></span>
          <div>
            <p className="terms-eyebrow">8. Funcionamento</p>
            <h2 id="terms-availability-title">Disponibilidade e alterações</h2>
          </div>
        </div>

        <p>
          Como projeto acadêmico e on-line, o INSS Orienta pode passar por manutenção,
          apresentar falhas, ficar temporariamente indisponível ou ter funcionalidades
          modificadas. Conteúdos também podem ser atualizados para corrigir informações ou
          acompanhar mudanças nos serviços oficiais.
        </p>
        <p>
          Estes termos poderão ser atualizados. A data exibida no início da página permite
          identificar a versão consultada. O uso após uma atualização estará sujeito ao texto
          então disponível.
        </p>

        <div className="terms-final-note" role="note">
          <strong>Precisa de ajuda?</strong>
          <p>
            Consulte a página Ajuda do aplicativo. Para requerimentos, pagamentos, prazos ou
            informações sobre seu benefício, utilize sempre os canais oficiais do INSS.
          </p>
        </div>
      </section>

      <button type="button" className="terms-bottom-back" onClick={voltarParaHome}>
        <FaArrowLeft aria-hidden="true" focusable="false" />
        Voltar para a página inicial
      </button>
    </article>
  );
}