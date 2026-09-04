import { useEffect, useMemo, useRef, useState } from 'react';
import {
  FaBookOpen,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaHeadphones,
  FaInfoCircle,
  FaPhoneAlt,
  FaQuestionCircle,
  FaSearch,
  FaShieldAlt,
  FaStopCircle,
  FaTimes,
  FaUniversalAccess,
  FaVolumeUp,
} from 'react-icons/fa';
import './ajuda.css';

const TERMOS = [
  {
    termo: 'Benefício',
    explicacao: 'Prestação reconhecida depois da análise do INSS, como aposentadoria, pensão ou auxílio. Cada benefício possui regras próprias.',
  },
  {
    termo: 'Carência',
    explicacao: 'Quantidade mínima de contribuições mensais exigida para alguns benefícios. A regra e as exceções variam conforme o benefício e a situação.',
  },
  {
    termo: 'Qualidade de segurado',
    explicacao: 'Condição de quem está protegido pela Previdência por contribuir ou por ainda estar dentro do período de graça.',
  },
  {
    termo: 'Período de graça',
    explicacao: 'Tempo em que a proteção previdenciária pode continuar mesmo sem novas contribuições. A duração depende do histórico e da situação da pessoa.',
  },
  {
    termo: 'CNIS',
    explicacao: 'Cadastro Nacional de Informações Sociais. Reúne vínculos de trabalho, remunerações e contribuições usados nas análises previdenciárias.',
  },
  {
    termo: 'Requerimento',
    explicacao: 'Pedido formal de um serviço ou benefício. Ao registrar o pedido, é importante guardar o protocolo e acompanhar o andamento.',
  },
  {
    termo: 'Exigência',
    explicacao: 'Solicitação do INSS para complementar ou corrigir informações e documentos antes de concluir a análise. Confira o prazo e o canal indicado.',
  },
  {
    termo: 'Indeferimento',
    explicacao: 'Decisão que nega o pedido. Leia o motivo apresentado antes de decidir se precisa corrigir dados, fazer novo pedido ou apresentar recurso.',
  },
  {
    termo: 'Recurso',
    explicacao: 'Pedido para que uma decisão seja analisada novamente. Observe o prazo, os documentos e o canal informados na decisão.',
  },
  {
    termo: 'CadÚnico',
    explicacao: 'Cadastro Único para Programas Sociais. É utilizado na análise de alguns direitos, mas estar inscrito não garante automaticamente um benefício.',
  },
];

const PERGUNTAS_FREQUENTES = [
  {
    pergunta: 'O INSS Orienta é um aplicativo oficial do INSS?',
    resposta: 'Não. Este é um projeto acadêmico e educativo. Ele explica assuntos em linguagem simples, mas não representa o INSS nem substitui seus canais oficiais.',
  },
  {
    pergunta: 'Posso solicitar um benefício por este aplicativo?',
    resposta: 'Não. Solicitações, consultas de pedidos e envio de documentos devem ser realizados pelo Meu INSS, pela Central 135 ou por outro canal indicado oficialmente.',
  },
  {
    pergunta: 'Posso escrever meu CPF ou minha senha aqui?',
    resposta: 'Não. Nunca informe CPF, senhas, dados bancários, documentos, endereço ou número completo do benefício no assistente ou na Comunidade. Digite esses dados somente quando estiver em um canal oficial e seguro.',
  },
  {
    pergunta: 'O assistente virtual confirma se tenho direito?',
    resposta: 'Não. Ele fornece explicações gerais. A confirmação depende dos seus dados, das regras aplicáveis e da análise oficial do INSS.',
  },
  {
    pergunta: 'Como aumento o texto ou mudo as cores?',
    resposta: 'Abra a opção Acessibilidade na barra inferior. Lá você pode escolher texto grande, modo escuro ou alto contraste.',
  },
  {
    pergunta: 'O que faço se uma informação não carregar?',
    resposta: 'Confira sua conexão e tente atualizar a página. Recursos como avisos, Comunidade e assistente on-line podem depender da internet. Para atendimento oficial, use o Meu INSS ou ligue 135.',
  },
];

const normalizar = (texto) => texto
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

export default function Ajuda() {
  const [busca, setBusca] = useState('');
  const [termoFalando, setTermoFalando] = useState('');
  const [avisoVoz, setAvisoVoz] = useState('');
  const falaAtivaRef = useRef(null);
  const vozDisponivel = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const termosFiltrados = useMemo(() => {
    const consulta = normalizar(busca.trim());
    if (!consulta) return TERMOS;

    return TERMOS.filter(({ termo, explicacao }) => (
      normalizar(`${termo} ${explicacao}`).includes(consulta)
    ));
  }, [busca]);

  useEffect(() => () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    falaAtivaRef.current = null;
  }, []);

  const pararLeitura = () => {
    if (!vozDisponivel) return;
    window.speechSynthesis.cancel();
    falaAtivaRef.current = null;
    setTermoFalando('');
    setAvisoVoz('Leitura interrompida.');
  };

  const alternarLeitura = (item) => {
    if (!vozDisponivel) {
      setAvisoVoz('A leitura em voz alta não está disponível neste aparelho.');
      return;
    }

    if (termoFalando === item.termo) {
      pararLeitura();
      return;
    }

    window.speechSynthesis.cancel();

    const fala = new SpeechSynthesisUtterance(`${item.termo}. ${item.explicacao}`);
    fala.lang = 'pt-BR';
    fala.rate = 0.88;
    falaAtivaRef.current = fala;

    fala.onstart = () => {
      if (falaAtivaRef.current !== fala) return;
      setTermoFalando(item.termo);
      setAvisoVoz(`Lendo a explicação de ${item.termo}.`);
    };

    fala.onend = () => {
      if (falaAtivaRef.current !== fala) return;
      falaAtivaRef.current = null;
      setTermoFalando('');
      setAvisoVoz('Leitura concluída.');
    };

    fala.onerror = () => {
      if (falaAtivaRef.current !== fala) return;
      falaAtivaRef.current = null;
      setTermoFalando('');
      setAvisoVoz('Não foi possível realizar a leitura em voz alta.');
    };

    window.speechSynthesis.speak(fala);
  };

  return (
    <section className="help-screen animate-fade" aria-labelledby="help-title">
      <header className="help-hero">
        <span className="help-hero-icon" aria-hidden="true">
          <FaQuestionCircle focusable="false" />
        </span>
        <div>
          <p className="help-eyebrow">Orientação simples</p>
          <h1 id="help-title">Central de Ajuda</h1>
          <p className="help-intro">
            Encontre canais oficiais, respostas rápidas e explicações de palavras usadas nos
            serviços previdenciários.
          </p>
        </div>
      </header>

      <aside className="help-project-note" aria-label="Aviso sobre o projeto">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          <strong>O INSS Orienta é um projeto acadêmico e não oficial.</strong> Ele ajuda a
          entender informações, mas não consulta cadastro, concede benefício ou substitui o
          atendimento do INSS.
        </p>
      </aside>

      <nav className="help-index" aria-label="Conteúdo da Central de Ajuda">
        <a href="#help-official">Canais oficiais</a>
        <a href="#help-faq">Perguntas frequentes</a>
        <a href="#help-glossary">Glossário</a>
      </nav>

      <section id="help-official" className="help-section" aria-labelledby="help-official-title">
        <div className="help-section-heading">
          <span aria-hidden="true"><FaShieldAlt focusable="false" /></span>
          <div>
            <p className="help-eyebrow">Atendimento seguro</p>
            <h2 id="help-official-title">Canais oficiais do INSS</h2>
          </div>
        </div>

        <div className="help-channel-grid">
          <article className="help-channel-card">
            <span className="help-channel-icon" aria-hidden="true">
              <FaExternalLinkAlt focusable="false" />
            </span>
            <h3>Meu INSS</h3>
            <p>
              Solicite serviços, acompanhe pedidos, consulte benefícios e envie documentos
              quando o próprio serviço solicitar.
            </p>
            <a href="https://meu.inss.gov.br/" target="_blank" rel="noopener noreferrer">
              Abrir Meu INSS
              <FaExternalLinkAlt aria-hidden="true" focusable="false" />
              <span className="help-sr-only"> (abre em nova guia)</span>
            </a>
          </article>

          <article className="help-channel-card">
            <span className="help-channel-icon" aria-hidden="true">
              <FaPhoneAlt focusable="false" />
            </span>
            <h3>Central 135</h3>
            <p>
              Atendimento humano de segunda a sábado, das 7h às 22h, no horário de Brasília.
              O atendimento eletrônico funciona também nos demais horários.
            </p>
            <a href="tel:135">
              Ligar para 135
              <FaPhoneAlt aria-hidden="true" focusable="false" />
            </a>
          </article>

          <article className="help-channel-card is-wide">
            <span className="help-channel-icon" aria-hidden="true">
              <FaShieldAlt focusable="false" />
            </span>
            <h3>Todos os canais</h3>
            <p>
              Consulte no portal do INSS as opções de atendimento, Ouvidoria, Libras e rede de
              atendimento disponíveis para cada necessidade.
            </p>
            <a
              href="https://www.gov.br/inss/pt-br/canais_atendimento"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver canais oficiais
              <FaExternalLinkAlt aria-hidden="true" focusable="false" />
              <span className="help-sr-only"> (abre em nova guia)</span>
            </a>
          </article>
        </div>

        <aside className="help-security-tip" aria-label="Dica contra golpes">
          <FaShieldAlt aria-hidden="true" focusable="false" />
          <p>
            <strong>Desconfie de cobranças e mensagens urgentes.</strong> Não entregue senhas,
            códigos de confirmação ou dados bancários. Em caso de dúvida, confirme pelo Meu
            INSS ou pelo telefone 135.
          </p>
        </aside>
      </section>

      <section id="help-faq" className="help-section" aria-labelledby="help-faq-title">
        <div className="help-section-heading">
          <span aria-hidden="true"><FaQuestionCircle focusable="false" /></span>
          <div>
            <p className="help-eyebrow">Respostas rápidas</p>
            <h2 id="help-faq-title">Perguntas frequentes</h2>
          </div>
        </div>

        <div className="help-faq-list">
          {PERGUNTAS_FREQUENTES.map(({ pergunta, resposta }) => (
            <details key={pergunta} className="help-faq-item">
              <summary>{pergunta}</summary>
              <div className="help-faq-answer">
                <p>{resposta}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="help-glossary" className="help-section" aria-labelledby="help-glossary-title">
        <div className="help-section-heading">
          <span aria-hidden="true"><FaBookOpen focusable="false" /></span>
          <div>
            <p className="help-eyebrow">Palavras sem complicação</p>
            <h2 id="help-glossary-title">Glossário previdenciário</h2>
          </div>
        </div>

        <p className="help-section-intro">
          Procure uma palavra ou percorra a lista. As explicações são resumos e podem variar
          conforme o benefício e o caso concreto.
        </p>

        <form className="help-search" role="search" onSubmit={(evento) => evento.preventDefault()}>
          <label htmlFor="help-term-search">Pesquisar no glossário</label>
          <div className="help-search-control">
            <FaSearch aria-hidden="true" focusable="false" />
            <input
              id="help-term-search"
              type="search"
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
              placeholder="Ex.: carência, CNIS ou recurso"
              autoComplete="off"
            />
            {busca && (
              <button
                type="button"
                aria-label="Limpar pesquisa"
                onClick={() => setBusca('')}
              >
                <FaTimes aria-hidden="true" focusable="false" />
              </button>
            )}
          </div>
        </form>

        <p className="help-results" role="status" aria-live="polite">
          {termosFiltrados.length === TERMOS.length && !busca.trim()
            ? `${TERMOS.length} termos disponíveis.`
            : `${termosFiltrados.length} ${termosFiltrados.length === 1 ? 'termo encontrado' : 'termos encontrados'}.`}
        </p>

        <div className="help-voice-guidance">
          <FaHeadphones aria-hidden="true" focusable="false" />
          <p>
            {vozDisponivel
              ? 'Use “Ouvir” para escutar uma explicação. O mesmo botão permite interromper a leitura.'
              : 'A leitura em voz alta não está disponível neste aparelho. Todas as explicações continuam visíveis.'}
          </p>
        </div>

        <p className="help-voice-announcement" role="status" aria-live="polite" aria-atomic="true">
          {avisoVoz}
        </p>

        {termoFalando && (
          <div className="help-speaking-status">
            <span>
              <FaVolumeUp aria-hidden="true" focusable="false" />
              Lendo: <strong>{termoFalando}</strong>
            </span>
            <button type="button" onClick={pararLeitura}>
              <FaStopCircle aria-hidden="true" focusable="false" />
              Parar leitura
            </button>
          </div>
        )}

        {termosFiltrados.length === 0 ? (
          <div className="help-empty-state">
            <FaSearch aria-hidden="true" focusable="false" />
            <div>
              <strong>Nenhum termo encontrado</strong>
              <p>Tente uma palavra menor ou limpe a pesquisa para ver a lista completa.</p>
              <button type="button" onClick={() => setBusca('')}>Ver todos os termos</button>
            </div>
          </div>
        ) : (
          <div className="help-glossary-list">
            {termosFiltrados.map((item) => {
              const lendoEsteTermo = termoFalando === item.termo;

              return (
                <article key={item.termo} className={`help-term-card${lendoEsteTermo ? ' is-speaking' : ''}`}>
                  <div className="help-term-header">
                    <div className="help-term-title">
                      <FaCheckCircle aria-hidden="true" focusable="false" />
                      <h3>{item.termo}</h3>
                    </div>
                    <button
                      type="button"
                      className="help-listen-button"
                      aria-label={lendoEsteTermo
                        ? `Parar leitura de ${item.termo}`
                        : `Ouvir explicação de ${item.termo}`}
                      aria-pressed={lendoEsteTermo}
                      disabled={!vozDisponivel}
                      onClick={() => alternarLeitura(item)}
                    >
                      {lendoEsteTermo
                        ? <FaStopCircle aria-hidden="true" focusable="false" />
                        : <FaVolumeUp aria-hidden="true" focusable="false" />}
                      <span>{lendoEsteTermo ? 'Parar' : 'Ouvir'}</span>
                    </button>
                  </div>
                  <p>{item.explicacao}</p>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <aside className="help-accessibility-note" aria-label="Recursos de acessibilidade">
        <FaUniversalAccess aria-hidden="true" focusable="false" />
        <p>
          Você também pode usar TalkBack, ampliação de tela e a página Acessibilidade para
          ajustar o texto e as cores do aplicativo.
        </p>
      </aside>

      <footer className="help-source-note">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          Canais conferidos em 31 de agosto de 2026. Regras de benefícios podem mudar;
          confirme informações pessoais nos canais oficiais.
        </p>
      </footer>
    </section>
  );
}