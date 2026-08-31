import {
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaMicrophone,
  FaMobileAlt,
  FaRobot,
  FaServer,
  FaUserCheck,
  FaUserShield,
  FaUsers,
} from 'react-icons/fa';
import './politicadeprivacidade.css';

export default function PoliticaPrivacidade({ voltarParaHome }) {
  return (
    <article className="privacy-screen animate-fade" aria-labelledby="privacy-title">
      <header className="privacy-hero">
        <button type="button" className="privacy-back" onClick={voltarParaHome}>
          <FaArrowLeft aria-hidden="true" focusable="false" />
          Voltar ao início
        </button>

        <div className="privacy-hero-main">
          <span className="privacy-hero-icon" aria-hidden="true">
            <FaUserShield focusable="false" />
          </span>
          <div>
            <p className="privacy-eyebrow">Transparência do projeto</p>
            <h1 id="privacy-title">Política de Privacidade</h1>
            <p className="privacy-intro">
              Entenda quais informações o INSS Orienta utiliza, onde elas ficam e quais
              cuidados você deve tomar.
            </p>
          </div>
        </div>

        <p className="privacy-version">
          <FaClock aria-hidden="true" focusable="false" />
          Versão acadêmica atualizada em <time dateTime="2026-08-27">27 de agosto de 2026</time>
        </p>
      </header>

      <aside className="privacy-critical-note" aria-label="Proteção de dados pessoais">
        <FaExclamationTriangle aria-hidden="true" focusable="false" />
        <div>
          <strong>Não envie dados pessoais ou sigilosos</strong>
          <p>
            O INSS Orienta não precisa do seu CPF, senha, endereço, telefone, dados
            bancários, documentos, diagnóstico detalhado ou número completo do benefício.
            Não escreva essas informações no assistente nem na Comunidade.
          </p>
          <p>
            Quando uma orientação pedir CPF, use-o somente no aplicativo ou site oficial
            Gov.br — nunca dentro deste projeto.
          </p>
        </div>
      </aside>

      <nav className="privacy-index" aria-label="Conteúdo desta política">
        <h2>Nesta página</h2>
        <ul>
          <li><a href="#privacy-data">Informações utilizadas</a></li>
          <li><a href="#privacy-purpose">Para que são usadas</a></li>
          <li><a href="#privacy-sharing">Serviços envolvidos</a></li>
          <li><a href="#privacy-retention">Por quanto tempo ficam</a></li>
          <li><a href="#privacy-rights">Seus direitos e contato</a></li>
          <li><a href="#privacy-security">Segurança e limitações</a></li>
        </ul>
      </nav>

      <section id="privacy-data" className="privacy-section" aria-labelledby="privacy-data-title">
        <div className="privacy-section-heading">
          <span aria-hidden="true"><FaInfoCircle focusable="false" /></span>
          <div>
            <p className="privacy-eyebrow">Mapa dos dados</p>
            <h2 id="privacy-data-title">Quais informações são utilizadas</h2>
          </div>
        </div>

        <div className="privacy-data-grid">
          <article className="privacy-data-card">
            <span className="privacy-data-icon" aria-hidden="true">
              <FaMobileAlt focusable="false" />
            </span>
            <h3>No próprio aparelho</h3>
            <p>
              O tema visual e o tamanho do texto ficam no armazenamento local do navegador
              ou da WebView. A informação de que a tela de abertura já apareceu fica somente
              durante a sessão.
            </p>
          </article>

          <article className="privacy-data-card">
            <span className="privacy-data-icon" aria-hidden="true">
              <FaUsers focusable="false" />
            </span>
            <h3>Na Comunidade</h3>
            <p>
              O texto de perguntas e respostas, a data da publicação e o indicador de
              conteúdo da equipe podem ser armazenados no Supabase e exibidos publicamente.
              O texto pode identificar você mesmo sem um campo de nome.
            </p>
          </article>

          <article className="privacy-data-card">
            <span className="privacy-data-icon" aria-hidden="true">
              <FaRobot focusable="false" />
            </span>
            <h3>No assistente virtual</h3>
            <p>
              A pergunta digitada pode ser enviada ao servidor do projeto e ao Google Gemini
              para gerar uma resposta. A conversa visível permanece na memória da página até
              você sair ou atualizar, mas os provedores podem manter registros técnicos.
            </p>
          </article>

          <article className="privacy-data-card">
            <span className="privacy-data-icon" aria-hidden="true">
              <FaMicrophone focusable="false" />
            </span>
            <h3>Na digitação por voz</h3>
            <p>
              Se você ativar o microfone, o áudio será processado pelo recurso de
              reconhecimento de voz disponível no aparelho, navegador ou WebView. Esse
              processamento depende do fornecedor e das permissões do sistema.
            </p>
          </article>

          <article className="privacy-data-card">
            <span className="privacy-data-icon" aria-hidden="true">
              <FaServer focusable="false" />
            </span>
            <h3>Registros técnicos</h3>
            <p>
              Hospedagem, banco de dados e serviços de IA podem processar endereço IP, tipo de
              dispositivo, data, horário e registros de erro necessários ao funcionamento e à
              segurança.
            </p>
          </article>
        </div>

        <div className="privacy-no-tracking" role="note">
          <FaCheckCircle aria-hidden="true" focusable="false" />
          <p>
            <strong>Na versão atual do código,</strong> não há publicidade, ferramenta de
            analytics ou cookie próprio de rastreamento comportamental. Isso não elimina os
            registros técnicos essenciais dos provedores utilizados.
          </p>
        </div>
      </section>

      <section id="privacy-purpose" className="privacy-section" aria-labelledby="privacy-purpose-title">
        <div className="privacy-section-heading">
          <span aria-hidden="true"><FaUserCheck focusable="false" /></span>
          <div>
            <p className="privacy-eyebrow">Finalidades</p>
            <h2 id="privacy-purpose-title">Para que essas informações são usadas</h2>
          </div>
        </div>

        <ul className="privacy-purpose-list">
          <li>Manter as preferências de leitura escolhidas no aparelho.</li>
          <li>Carregar avisos e publicações da Comunidade.</li>
          <li>Permitir perguntas e respostas entre participantes.</li>
          <li>Gerar respostas do assistente virtual.</li>
          <li>Autenticar a equipe responsável por publicar e moderar conteúdo.</li>
          <li>Prevenir abuso, investigar erros e manter a segurança técnica.</li>
        </ul>
      </section>

      <section id="privacy-sharing" className="privacy-section" aria-labelledby="privacy-sharing-title">
        <div className="privacy-section-heading">
          <span aria-hidden="true"><FaServer focusable="false" /></span>
          <div>
            <p className="privacy-eyebrow">Operação on-line</p>
            <h2 id="privacy-sharing-title">Serviços envolvidos</h2>
          </div>
        </div>

        <p className="privacy-section-lead">
          O projeto não vende informações pessoais. Para funcionar on-line, porém, utiliza
          fornecedores que processam dados conforme suas configurações e políticas.
        </p>

        <div className="privacy-provider-list">
          <article>
            <h3>Supabase</h3>
            <p>
              Banco de dados, autenticação administrativa e armazenamento de imagens dos
              avisos. Publicações da Comunidade podem permanecer em sua infraestrutura.
            </p>
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
              Ler a política do Supabase
              <FaExternalLinkAlt aria-hidden="true" focusable="false" />
              <span className="privacy-sr-only"> (abre em nova guia)</span>
            </a>
          </article>

          <article>
            <h3>Google Gemini</h3>
            <p>
              Recebe a pergunta do assistente on-line para produzir uma resposta. As regras de
              uso e retenção variam conforme a modalidade e a configuração da conta utilizada;
              por isso, não envie informações pessoais, sigilosas ou confidenciais.
            </p>
            <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer">
              Ler os termos da API Gemini
              <FaExternalLinkAlt aria-hidden="true" focusable="false" />
              <span className="privacy-sr-only"> (abre em nova guia)</span>
            </a>
          </article>

          <article>
            <h3>Hospedagem e recurso de voz</h3>
            <p>
              O provedor que hospedar o aplicativo poderá registrar acessos técnicos. A voz
              depende do serviço instalado no aparelho ou navegador e pode seguir a política
              desse fornecedor.
            </p>
          </article>
        </div>

        <p className="privacy-external-note">
          Links para Gov.br levam a outro serviço. Ao sair do INSS Orienta, passam a valer os
          termos e a política do site acessado.
        </p>
      </section>

      <section id="privacy-retention" className="privacy-section" aria-labelledby="privacy-retention-title">
        <div className="privacy-section-heading">
          <span aria-hidden="true"><FaClock focusable="false" /></span>
          <div>
            <p className="privacy-eyebrow">Retenção</p>
            <h2 id="privacy-retention-title">Por quanto tempo as informações ficam</h2>
          </div>
        </div>

        <div className="privacy-retention-list">
          <article>
            <h3>Preferências de acessibilidade</h3>
            <p>Ficam no aparelho até você limpar os dados do aplicativo ou navegador.</p>
          </article>
          <article>
            <h3>Tela de abertura</h3>
            <p>A marcação termina quando a sessão do navegador ou da WebView é encerrada.</p>
          </article>
          <article>
            <h3>Conversa visível com o assistente</h3>
            <p>
              É removida da interface ao sair ou atualizar a página. Isso não define o prazo
              de eventuais registros técnicos do servidor ou do provedor de IA.
            </p>
          </article>
          <article>
            <h3>Comunidade e avisos</h3>
            <p>
              O código atual não aplica exclusão automática. O conteúdo permanece até a
              remoção pela equipe. Um prazo formal precisa ser definido antes da publicação
              pública.
            </p>
          </article>
        </div>
      </section>

      <section id="privacy-rights" className="privacy-section" aria-labelledby="privacy-rights-title">
        <div className="privacy-section-heading">
          <span aria-hidden="true"><FaUserShield focusable="false" /></span>
          <div>
            <p className="privacy-eyebrow">LGPD</p>
            <h2 id="privacy-rights-title">Seus direitos e como pedir ajuda</h2>
          </div>
        </div>

        <p className="privacy-section-lead">
          Quando houver tratamento de dados pessoais, a legislação pode assegurar direitos
          como confirmação, acesso, correção, informação sobre compartilhamento e, nas
          hipóteses cabíveis, anonimização, bloqueio ou eliminação.
        </p>

        <ul className="privacy-rights-list">
          <li>Você pode limpar tema e tamanho do texto apagando os dados locais do aplicativo.</li>
          <li>
            Publicações sem conta não possuem, nesta versão, um mecanismo confiável para o
            próprio autor editar, apagar ou comprovar autoria.
          </li>
          <li>
            A equipe de moderação consegue remover publicações, mas o canal formal para esse
            pedido ainda precisa ser definido.
          </li>
        </ul>

        <div className="privacy-pending-contact" role="note">
          <FaExclamationTriangle aria-hidden="true" focusable="false" />
          <div>
            <strong>Pendência antes da publicação pública</strong>
            <p>
              Devem ser informados o controlador ou responsável pelo tratamento, um e-mail de
              privacidade e o procedimento para atender solicitações. Esses dados não foram
              inventados nesta versão porque ainda não foram fornecidos pela equipe do projeto.
            </p>
          </div>
        </div>

        <div className="privacy-official-links">
          <a
            href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conhecer os direitos explicados pela ANPD
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="privacy-sr-only"> (abre em nova guia)</span>
          </a>
          <a
            href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar o texto atualizado da LGPD
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="privacy-sr-only"> (abre em nova guia)</span>
          </a>
        </div>
      </section>

      <section id="privacy-security" className="privacy-section" aria-labelledby="privacy-security-title">
        <div className="privacy-section-heading">
          <span aria-hidden="true"><FaCheckCircle focusable="false" /></span>
          <div>
            <p className="privacy-eyebrow">Proteção e revisão</p>
            <h2 id="privacy-security-title">Segurança e limitações atuais</h2>
          </div>
        </div>

        <p className="privacy-section-lead">
          O projeto reduz a exposição de dados com avisos, limites de texto, bloqueio básico de
          possíveis dados pessoais no assistente e credenciais de IA mantidas no servidor.
          Nenhum sistema, porém, elimina totalmente os riscos.
        </p>

        <div className="privacy-production-checklist">
          <h3>Antes de disponibilizar o aplicativo ao público, a equipe deve:</h3>
          <ul>
            <li>definir responsável, contato, finalidades e bases legais;</li>
            <li>configurar e testar as políticas RLS do Supabase;</li>
            <li>criar regras de moderação, retenção, exclusão e resposta a incidentes;</li>
            <li>definir como o autor de uma publicação poderá solicitar correção ou remoção;</li>
            <li>confirmar a modalidade e as configurações de privacidade da API Gemini;</li>
            <li>revisar esta política sempre que o código ou os fornecedores mudarem.</li>
          </ul>
        </div>
      </section>

      <footer className="privacy-footer-note">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          Este aviso descreve o protótipo acadêmico analisado em 27 de agosto de 2026. Ele não
          substitui uma avaliação jurídica e deve ser atualizado antes de qualquer lançamento
          público ou mudança no tratamento de dados.
        </p>
      </footer>
    </article>
  );
}