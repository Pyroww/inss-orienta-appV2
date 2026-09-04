import { useEffect, useRef, useState } from 'react';
import {
  FaArrowLeft,
  FaCheckCircle,
  FaEraser,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaLock,
  FaMicrophone,
  FaPaperPlane,
  FaPhoneAlt,
  FaRobot,
  FaShieldAlt,
  FaStop,
  FaUser,
} from 'react-icons/fa';
import './assistentevirtual.css';

const URL_MEU_INSS = 'https://meu.inss.gov.br/';
const URL_INSS = 'https://www.gov.br/inss/pt-br';
const LIMITE_PERGUNTA = 600;
const LIMITE_MENSAGENS = 40;
const TEMPO_LIMITE_RESPOSTA = 25000;

const MENSAGEM_INICIAL = {
  id: 'boas-vindas',
  autor: 'ia',
  texto:
    'Olá! Sou o guia virtual do INSS Orienta. Posso explicar assuntos previdenciários em linguagem simples, mas não consulto benefícios, protocolos ou dados pessoais.',
};

const SUGESTOES = [
  'Como consultar a data do meu pagamento?',
  'O que é o BPC?',
  'Como funciona a prova de vida?',
  'Como recuperar o acesso Gov.br?',
];

const normalizar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

const contemPossivelDadoSensivel = (texto) => {
  const sequenciasNumericas = texto.match(/\d[\d.\-/\s]{7,}\d/g) || [];
  const possuiNumeroLongo = sequenciasNumericas.some(
    (sequencia) => sequencia.replace(/\D/g, '').length >= 9,
  );

  return (
    possuiNumeroLongo ||
    /\b[\w.+-]+@[\w.-]+\.[a-z]{2,}\b/i.test(texto) ||
    /\b(?:minha\s+)?senha\s*(?:e|é|:|=|-)/i.test(texto) ||
    /\b(?:meu|minha)\s+(?:cpf|nis|nit|pis|telefone|celular|endereco|endereço|conta\s+bancaria|conta\s+bancária)\b/i.test(
      texto,
    )
  );
};

const respostaLocal = (pergunta) => {
  const texto = normalizar(pergunta);

  if (texto.includes('prova de vida')) {
    return 'Consulte a opção “Prova de vida” neste aplicativo para entender o procedimento. Para verificar sua situação pessoal, use somente o Meu INSS ou ligue 135. Não envie documentos ou dados pessoais pelo chat.';
  }

  if (
    texto.includes('calendario') ||
    texto.includes('pagamento') ||
    texto.includes('receber')
  ) {
    return 'Abra “Calendário de pagamentos” na tela inicial. Para consultar informações do seu benefício, entre diretamente no Meu INSS ou ligue 135.';
  }

  if (
    texto.includes('senha') ||
    texto.includes('gov.br') ||
    texto.includes('conta')
  ) {
    return 'Abra “Recuperar acesso Gov.br” na tela inicial e escolha um canal oferecido pelo próprio Gov.br. Nunca informe sua senha ou código de confirmação neste chat.';
  }

  if (
    texto.includes('aposent') ||
    texto.includes('bpc') ||
    texto.includes('loas') ||
    texto.includes('auxilio')
  ) {
    return 'Abra “Benefícios e proteções” na tela inicial para ver orientações gerais. O direito depende do histórico e da análise oficial; confirme sua situação pelo Meu INSS ou pela Central 135.';
  }

  if (
    texto.includes('agend') ||
    texto.includes('atendimento') ||
    texto.includes('agencia')
  ) {
    return 'Para solicitar, acompanhar ou agendar um serviço, use o Meu INSS ou ligue 135. O INSS Orienta é educativo e não realiza agendamentos.';
  }

  if (texto.includes('document')) {
    return 'Os documentos variam conforme o serviço e a situação de cada pessoa. Use a opção “Documentos necessários” como preparação e confirme a lista atual no serviço oficial antes de enviar o pedido.';
  }

  return 'Posso orientar sobre aposentadorias, BPC, auxílios, prova de vida, pagamentos, documentos e acesso Gov.br. Para consultar dados pessoais ou fazer uma solicitação, use o Meu INSS ou ligue 135.';
};

const criarId = (prefixo, contador) => `${prefixo}-${Date.now()}-${contador}`;

export default function AssistenteVirtual({ voltarParaHome }) {
  const [mensagens, setMensagens] = useState([MENSAGEM_INICIAL]);
  const [inputTexto, setInputTexto] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [gravando, setGravando] = useState(false);
  const [vozDisponivel] = useState(
    () =>
      typeof window !== 'undefined' &&
      Boolean(window.SpeechRecognition || window.webkitSpeechRecognition),
  );
  const [feedback, setFeedback] = useState(null);

  const historicoRef = useRef(null);
  const campoRef = useRef(null);
  const reconhecimentoRef = useRef(null);
  const requisicaoRef = useRef(null);
  const cancelamentoManualRef = useRef(false);
  const contadorRef = useRef(0);
  const componenteAtivoRef = useRef(true);

  useEffect(() => {
    componenteAtivoRef.current = true;

    return () => {
      componenteAtivoRef.current = false;
      reconhecimentoRef.current?.abort();
      requisicaoRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    const historico = historicoRef.current;
    if (!historico) return;

    const reduzirMovimento = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    historico.scrollTo({
      top: historico.scrollHeight,
      behavior: reduzirMovimento ? 'auto' : 'smooth',
    });
  }, [mensagens, carregando]);

  const adicionarMensagem = (mensagem) => {
    setMensagens((anteriores) =>
      [...anteriores, mensagem].slice(-LIMITE_MENSAGENS),
    );
  };

  const selecionarSugestao = (sugestao) => {
    setInputTexto(sugestao);
    setFeedback(null);
    window.requestAnimationFrame(() => campoRef.current?.focus());
  };

  const limparConversa = () => {
    setMensagens([MENSAGEM_INICIAL]);
    setInputTexto('');
    setFeedback({
      tipo: 'info',
      texto: 'Conversa limpa. Nenhuma mensagem foi mantida nesta tela.',
    });
    window.requestAnimationFrame(() => campoRef.current?.focus());
  };

  const cancelarResposta = () => {
    cancelamentoManualRef.current = true;
    requisicaoRef.current?.abort();
  };

  const enviarMensagem = async (evento) => {
    evento?.preventDefault();

    const pergunta = inputTexto.trim();
    if (!pergunta || carregando) return;

    if (contemPossivelDadoSensivel(pergunta)) {
      setFeedback({
        tipo: 'erro',
        texto:
          'A pergunta parece conter um dado pessoal. Apague números, senha, e-mail ou identificação e escreva somente uma dúvida geral.',
      });
      campoRef.current?.focus();
      return;
    }

    contadorRef.current += 1;
    adicionarMensagem({
      id: criarId('usuario', contadorRef.current),
      autor: 'usuario',
      texto: pergunta,
    });

    setInputTexto('');
    setFeedback(null);
    setCarregando(true);
    cancelamentoManualRef.current = false;

    const controlador = new AbortController();
    requisicaoRef.current = controlador;
    const limite = window.setTimeout(
      () => controlador.abort(),
      TEMPO_LIMITE_RESPOSTA,
    );

    try {
      const retorno = await fetch('../../../api/assistente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ pergunta }),
        signal: controlador.signal,
      });

      const dados = await retorno.json().catch(() => ({}));

      if (!retorno.ok) {
        const erro = new Error(
          dados.erro || 'Não foi possível obter uma resposta agora.',
        );
        erro.status = retorno.status;
        throw erro;
      }

      if (typeof dados.resposta !== 'string' || !dados.resposta.trim()) {
        const erro = new Error('O assistente retornou uma resposta vazia.');
        erro.status = 502;
        throw erro;
      }

      if (!componenteAtivoRef.current) return;

      contadorRef.current += 1;
      adicionarMensagem({
        id: criarId('assistente', contadorRef.current),
        autor: 'ia',
        texto: dados.resposta.trim(),
      });
    } catch (erro) {
      if (!componenteAtivoRef.current) return;

      if (erro.name === 'AbortError') {
        setFeedback({
          tipo: 'info',
          texto: cancelamentoManualRef.current
            ? 'A resposta foi cancelada.'
            : 'A resposta demorou mais do que o esperado. Tente novamente.',
        });
        return;
      }

      if ([400, 413, 415, 422, 429].includes(erro.status)) {
        setFeedback({ tipo: 'erro', texto: erro.message });
        return;
      }

      contadorRef.current += 1;
      adicionarMensagem({
        id: criarId('assistente-local', contadorRef.current),
        autor: 'ia',
        texto: respostaLocal(pergunta),
        local: true,
      });
      setFeedback({
        tipo: 'info',
        texto:
          'O assistente on-line não respondeu. Exibimos uma orientação básica disponível no próprio aplicativo.',
      });
    } finally {
      window.clearTimeout(limite);
      requisicaoRef.current = null;
      cancelamentoManualRef.current = false;

      if (componenteAtivoRef.current) {
        setCarregando(false);
      }
    }
  };

  const lidarComTeclado = (evento) => {
    if (
      evento.key === 'Enter' &&
      !evento.shiftKey &&
      !evento.nativeEvent?.isComposing
    ) {
      evento.preventDefault();
      enviarMensagem();
    }
  };

  const alternarGravacao = () => {
    if (gravando) {
      reconhecimentoRef.current?.stop();
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setFeedback({
        tipo: 'info',
        texto:
          'A digitação por voz não está disponível neste aparelho. Você pode escrever a pergunta.',
      });
      return;
    }

    const reconhecimento = new SpeechRecognition();
    reconhecimento.lang = 'pt-BR';
    reconhecimento.interimResults = false;
    reconhecimento.maxAlternatives = 1;
    reconhecimento.continuous = false;
    reconhecimentoRef.current = reconhecimento;
    setFeedback(null);

    reconhecimento.onstart = () => {
      if (!componenteAtivoRef.current) return;
      setGravando(true);
      setFeedback({
        tipo: 'info',
        texto: 'Ouvindo. Fale apenas a sua dúvida geral, sem dados pessoais.',
      });
    };

    reconhecimento.onresult = (evento) => {
      const transcricao = Array.from(evento.results)
        .map((resultado) => resultado[0]?.transcript || '')
        .join(' ')
        .trim();

      if (transcricao) {
        setInputTexto(transcricao.slice(0, LIMITE_PERGUNTA));
        setFeedback({
          tipo: 'info',
          texto: 'Texto preenchido pela voz. Revise antes de enviar.',
        });
        window.requestAnimationFrame(() => campoRef.current?.focus());
      }
    };

    reconhecimento.onerror = (evento) => {
      if (!componenteAtivoRef.current || evento.error === 'aborted') return;

      setFeedback({
        tipo: 'erro',
        texto:
          evento.error === 'not-allowed'
            ? 'O acesso ao microfone não foi permitido. Você pode escrever a pergunta.'
            : 'Não foi possível entender a fala. Tente novamente ou escreva a pergunta.',
      });
    };

    reconhecimento.onend = () => {
      if (componenteAtivoRef.current) setGravando(false);
      reconhecimentoRef.current = null;
    };

    try {
      reconhecimento.start();
    } catch {
      setGravando(false);
      setFeedback({
        tipo: 'erro',
        texto: 'Não foi possível iniciar o microfone. Tente escrever a pergunta.',
      });
    }
  };

  return (
    <section
      className="virtual-assistant animate-fade"
      aria-labelledby="virtual-assistant-title"
    >
      <header className="virtual-assistant__header">
        <button
          type="button"
          className="virtual-assistant__back"
          aria-label="Voltar para a página anterior"
          onClick={voltarParaHome}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
        </button>

        <div>
          <p className="virtual-assistant__eyebrow">Orientação com inteligência artificial</p>
          <h1 id="virtual-assistant-title">Assistente virtual</h1>
        </div>
      </header>

      <section className="virtual-assistant__hero" aria-labelledby="assistant-intro-title">
        <span className="virtual-assistant__hero-icon" aria-hidden="true">
          <FaRobot focusable="false" />
        </span>
        <div>
          <p className="virtual-assistant__eyebrow">Dúvidas gerais, em linguagem simples</p>
          <h2 id="assistant-intro-title">Pergunte sem informar seus dados</h2>
          <p>
            O assistente explica assuntos previdenciários, mas não acessa cadastros,
            documentos, pedidos ou informações do seu benefício.
          </p>
        </div>
      </section>

      <aside className="virtual-assistant__privacy" aria-label="Aviso de privacidade">
        <FaShieldAlt aria-hidden="true" focusable="false" />
        <div>
          <h2>Não envie informações pessoais</h2>
          <p>
            Não escreva nome completo, CPF, senha, telefone, e-mail, endereço, dados
            bancários, documentos ou número do benefício. A pergunta pode ser processada
            por um serviço externo de inteligência artificial.
          </p>
        </div>
      </aside>

      <section className="virtual-assistant__suggestions" aria-labelledby="assistant-suggestions-title">
        <div>
          <p className="virtual-assistant__eyebrow">Precisa de uma ideia?</p>
          <h2 id="assistant-suggestions-title">Escolha uma pergunta de exemplo</h2>
        </div>

        <div className="virtual-assistant__suggestion-list">
          {SUGESTOES.map((sugestao) => (
            <button
              key={sugestao}
              type="button"
              disabled={carregando}
              onClick={() => selecionarSugestao(sugestao)}
            >
              {sugestao}
            </button>
          ))}
        </div>
      </section>

      <section className="virtual-assistant__conversation" aria-labelledby="assistant-conversation-title">
        <div className="virtual-assistant__conversation-heading">
          <div>
            <p className="virtual-assistant__eyebrow">Conversa atual</p>
            <h2 id="assistant-conversation-title">Mensagens</h2>
          </div>

          {mensagens.length > 1 && (
            <button type="button" onClick={limparConversa} disabled={carregando}>
              <FaEraser aria-hidden="true" focusable="false" />
              Limpar conversa
            </button>
          )}
        </div>

        <div
          ref={historicoRef}
          className="virtual-assistant__log"
          role="log"
          aria-live="polite"
          aria-relevant="additions text"
          aria-busy={carregando}
          aria-label="Conversa com o assistente virtual"
          tabIndex="0"
        >
          {mensagens.map((mensagem) => (
            <article
              key={mensagem.id}
              className={`virtual-assistant__message is-${mensagem.autor}`}
            >
              <span className="virtual-assistant__avatar" aria-hidden="true">
                {mensagem.autor === 'ia' ? (
                  <FaRobot focusable="false" />
                ) : (
                  <FaUser focusable="false" />
                )}
              </span>

              <div>
                <strong className="virtual-assistant__author">
                  {mensagem.autor === 'ia' ? 'INSS Orienta' : 'Você'}
                </strong>
                {mensagem.local && (
                  <span className="virtual-assistant__local-label">
                    orientação básica do aplicativo
                  </span>
                )}
                <p>{mensagem.texto}</p>
              </div>
            </article>
          ))}

          {carregando && (
            <div className="virtual-assistant__loading" role="status">
              <FaRobot aria-hidden="true" focusable="false" />
              <span>Preparando uma resposta simples</span>
              <span className="virtual-assistant__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
          )}
        </div>

        {feedback && (
          <div
            className={`virtual-assistant__feedback is-${feedback.tipo}`}
            role={feedback.tipo === 'erro' ? 'alert' : 'status'}
            aria-live={feedback.tipo === 'erro' ? 'assertive' : 'polite'}
          >
            {feedback.tipo === 'erro' ? (
              <FaExclamationTriangle aria-hidden="true" focusable="false" />
            ) : (
              <FaInfoCircle aria-hidden="true" focusable="false" />
            )}
            <p>{feedback.texto}</p>
          </div>
        )}

        <form className="virtual-assistant__composer" onSubmit={enviarMensagem}>
          <label htmlFor="virtual-assistant-question">Escreva sua dúvida geral</label>
          <p id="virtual-assistant-question-help">
            Pressione Enter para enviar ou Shift + Enter para criar outra linha.
          </p>

          <textarea
            ref={campoRef}
            id="virtual-assistant-question"
            rows="3"
            maxLength={LIMITE_PERGUNTA}
            autoComplete="off"
            autoCorrect="on"
            spellCheck="true"
            enterKeyHint="send"
            placeholder={
              gravando ? 'Ouvindo…' : 'Exemplo: como funciona a prova de vida?'
            }
            aria-describedby="virtual-assistant-question-help virtual-assistant-counter"
            value={inputTexto}
            disabled={carregando}
            onChange={(evento) => setInputTexto(evento.target.value)}
            onKeyDown={lidarComTeclado}
          />

          <div className="virtual-assistant__composer-footer">
            <span id="virtual-assistant-counter">
              {inputTexto.length} de {LIMITE_PERGUNTA} caracteres
            </span>

            <div className="virtual-assistant__composer-actions">
              <button
                type="button"
                className={`virtual-assistant__voice ${gravando ? 'is-recording' : ''}`}
                aria-label={
                  gravando ? 'Parar digitação por voz' : 'Usar digitação por voz'
                }
                aria-pressed={gravando}
                disabled={!vozDisponivel || carregando}
                title={
                  vozDisponivel
                    ? 'Digitação por voz'
                    : 'Voz indisponível neste aparelho'
                }
                onClick={alternarGravacao}
              >
                <FaMicrophone aria-hidden="true" focusable="false" />
              </button>

              {carregando ? (
                <button
                  type="button"
                  className="virtual-assistant__cancel"
                  onClick={cancelarResposta}
                >
                  <FaStop aria-hidden="true" focusable="false" />
                  Cancelar
                </button>
              ) : (
                <button
                  type="submit"
                  className="virtual-assistant__send"
                  disabled={!inputTexto.trim()}
                >
                  <FaPaperPlane aria-hidden="true" focusable="false" />
                  Enviar pergunta
                </button>
              )}
            </div>
          </div>
        </form>
      </section>

      <aside className="virtual-assistant__verification" aria-label="Verifique a resposta">
        <FaCheckCircle aria-hidden="true" focusable="false" />
        <p>
          <strong>Confira antes de agir.</strong> Respostas de inteligência artificial podem
          conter erros ou ficar desatualizadas. Confirme regras, prazos e procedimentos nos
          canais oficiais.
        </p>
      </aside>

      <section className="virtual-assistant__official" aria-labelledby="assistant-official-title">
        <div>
          <FaLock aria-hidden="true" focusable="false" />
          <div>
            <p className="virtual-assistant__eyebrow">Consulta e solicitação</p>
            <h2 id="assistant-official-title">Use os canais oficiais</h2>
          </div>
        </div>

        <p>
          Este assistente não consulta processos nem realiza pedidos. Para acessar suas
          informações, entre diretamente no Meu INSS ou use a Central 135.
        </p>

        <div className="virtual-assistant__official-links">
          <a href={URL_MEU_INSS} target="_blank" rel="noopener noreferrer">
            Abrir Meu INSS
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="virtual-assistant__sr-only"> (abre em nova guia)</span>
          </a>
          <a href="tel:135">
            <FaPhoneAlt aria-hidden="true" focusable="false" />
            Ligar para 135
          </a>
          <a href={URL_INSS} target="_blank" rel="noopener noreferrer">
            Portal do INSS
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            <span className="virtual-assistant__sr-only"> (abre em nova guia)</span>
          </a>
        </div>
      </section>

      <footer className="virtual-assistant__source-note">
        <FaInfoCircle aria-hidden="true" focusable="false" />
        <p>
          Projeto acadêmico e não oficial. A conversa permanece apenas nesta tela e é
          apagada ao sair ou recarregar; os serviços de hospedagem e IA podem manter
          registros técnicos conforme suas configurações e políticas.
        </p>
      </footer>
    </section>
  );
}
