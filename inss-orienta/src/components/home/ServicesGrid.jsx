import { FaChevronRight } from 'react-icons/fa';
import {
  IoCalendarClearOutline,
  IoDocumentTextOutline,
  IoFingerPrintOutline,
  IoKeyOutline,
  IoShieldCheckmarkOutline,
  IoTimeOutline,
} from 'react-icons/io5';
import './servicegrid.css';

const SERVICOS = [
  {
    tela: 'elegibilidade',
    titulo: 'Benefícios e aposentadoria',
    descricao: 'Conheça opções e veja quem pode ter direito.',
    termos: 'benefício beneficios aposentadoria elegibilidade direito auxílio auxilio bpc',
    Icone: IoShieldCheckmarkOutline,
    variante: 'verde',
  },
  {
    tela: 'calendario',
    titulo: 'Calendário de pagamentos',
    descricao: 'Consulte as datas pelo final do benefício.',
    termos: 'calendário calendario pagamento data receber benefício dinheiro',
    Icone: IoCalendarClearOutline,
    variante: 'dourado',
  },
  {
    tela: 'senhaGov',
    titulo: 'Recuperar senha gov.br',
    descricao: 'Veja formas de recuperar o acesso ao Meu INSS.',
    termos: 'recuperar senha gov govbr acesso entrar meu inss bloqueada esqueci',
    Icone: IoKeyOutline,
    variante: 'azul',
  },
  {
    tela: 'provaVida',
    titulo: 'Prova de vida',
    descricao: 'Entenda quando e como fazer a comprovação.',
    termos: 'prova vida biometria facial comprovação comprovacao',
    Icone: IoFingerPrintOutline,
    variante: 'verde',
  },
  {
    tela: 'agendamento',
    titulo: 'Agendar atendimento',
    descricao: 'Veja como agendar pelos canais oficiais.',
    termos: 'agendar atendimento agência agencia horário horario marcar visita 135',
    Icone: IoTimeOutline,
    variante: 'azul',
  },
  {
    tela: 'documentos',
    titulo: 'Documentos necessários',
    descricao: 'Prepare os documentos mais utilizados.',
    termos: 'documentos documento identidade cpf carteira comprovante cnis',
    Icone: IoDocumentTextOutline,
    variante: 'verde',
  },
];

const normalizarTexto = (valor = '') => valor
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('pt-BR')
  .trim();

export default function ServicesGrid({ textoPesquisa, setActiveTab }) {
  const pesquisaNormalizada = normalizarTexto(textoPesquisa);
  const servicosFiltrados = SERVICOS.filter((servico) => {
    if (!pesquisaNormalizada) return true;
    const conteudoPesquisavel = normalizarTexto(
      `${servico.titulo} ${servico.descricao} ${servico.termos}`,
    );
    return conteudoPesquisavel.includes(pesquisaNormalizada);
  });

  const navegarPara = (tela) => {
    setActiveTab(tela);

    window.requestAnimationFrame(() => {
      const conteudoPrincipal = document.getElementById('conteudo-principal');
      const container = document.querySelector('.app-container');

      if (container instanceof HTMLElement) {
        container.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }

      conteudoPrincipal?.focus({ preventScroll: true });
    });
  };

  const quantidade = servicosFiltrados.length;
  const mensagemQuantidade = pesquisaNormalizada
    ? `${quantidade} ${quantidade === 1 ? 'resultado encontrado' : 'resultados encontrados'}.`
    : `${quantidade} opções disponíveis.`;

  return (
    <section className="home-services" aria-labelledby="titulo-servicos-home">
      <div className="home-services-heading">
        <div>
          <p className="services-kicker">Acesso rápido</p>
          <h2 id="titulo-servicos-home">
            {pesquisaNormalizada ? 'Resultados da pesquisa' : 'Serviços mais procurados'}
          </h2>
        </div>
        <p className="services-count" role="status" aria-live="polite">
          {mensagemQuantidade}
        </p>
      </div>

      <div id="lista-servicos-home" className="services-grid">
        {servicosFiltrados.map(({ tela, titulo, descricao, Icone, variante }) => (
          <button
            key={tela}
            type="button"
            className="service-card"
            onClick={() => navegarPara(tela)}
          >
            <span className={`service-card-icon service-card-icon-${variante}`} aria-hidden="true">
              <Icone focusable="false" />
            </span>

            <span className="service-card-text">
              <span className="service-card-title">{titulo}</span>
              <span className="service-card-description">{descricao}</span>
            </span>

            <FaChevronRight className="service-card-arrow" aria-hidden="true" focusable="false" />
          </button>
        ))}

        {quantidade === 0 && (
          <div className="services-empty" role="status">
            <strong>Nenhum serviço encontrado.</strong>
            <span>Tente uma palavra mais simples, como “senha”, “pagamento” ou “documentos”.</span>
          </div>
        )}
      </div>
    </section>
  );
}