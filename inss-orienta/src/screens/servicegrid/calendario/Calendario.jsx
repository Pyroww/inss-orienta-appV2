import { useState } from 'react';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCheckCircle,
  FaCreditCard,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFilePdf,
  FaInfoCircle,
  FaLock,
  FaSearch,
} from 'react-icons/fa';
import './Calendario.css';
import imgCartaoExemplo from '../../../assets/calendario/calendario.webp';
import bannerCalendario from '../../../assets/calendario/bannercalendario.webp';
import bannerEscuro from '../../../assets/calendario/bannercalendario_dark_mode.webp';
import bannerAltoContraste from '../../../assets/calendario/bannercalendario_alto_contraste.webp';

const ANO_REFERENCIA = 2026;
const URL_TABELA_OFICIAL = 'https://www.gov.br/inss/pt-br/assuntos/calendario-de-pagamentos-do-inss-de-2026-esta-disponivel/TabeladePagamentodeBenefcios20261.pdf';
const URL_MEU_INSS = 'https://meu.inss.gov.br/';

const MESES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const ORDEM_DIGITOS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Fonte: tabela de pagamento de benefícios de 2026 publicada pelo INSS.
const DATAS_ATE_UM_SALARIO = {
  1: ['26/01/2026', '23/02/2026', '25/03/2026', '24/04/2026', '25/05/2026', '24/06/2026', '27/07/2026', '25/08/2026', '24/09/2026', '26/10/2026', '24/11/2026', '22/12/2026'],
  2: ['27/01/2026', '24/02/2026', '26/03/2026', '27/04/2026', '26/05/2026', '25/06/2026', '28/07/2026', '26/08/2026', '25/09/2026', '27/10/2026', '25/11/2026', '23/12/2026'],
  3: ['28/01/2026', '25/02/2026', '27/03/2026', '28/04/2026', '27/05/2026', '26/06/2026', '29/07/2026', '27/08/2026', '28/09/2026', '28/10/2026', '26/11/2026', '28/12/2026'],
  4: ['29/01/2026', '26/02/2026', '30/03/2026', '29/04/2026', '28/05/2026', '29/06/2026', '30/07/2026', '28/08/2026', '29/09/2026', '29/10/2026', '27/11/2026', '29/12/2026'],
  5: ['30/01/2026', '27/02/2026', '31/03/2026', '30/04/2026', '29/05/2026', '30/06/2026', '31/07/2026', '31/08/2026', '30/09/2026', '30/10/2026', '30/11/2026', '30/12/2026'],
  6: ['02/02/2026', '02/03/2026', '01/04/2026', '04/05/2026', '01/06/2026', '01/07/2026', '03/08/2026', '01/09/2026', '01/10/2026', '03/11/2026', '01/12/2026', '04/01/2027'],
  7: ['03/02/2026', '03/03/2026', '02/04/2026', '05/05/2026', '02/06/2026', '02/07/2026', '04/08/2026', '02/09/2026', '02/10/2026', '04/11/2026', '02/12/2026', '05/01/2027'],
  8: ['04/02/2026', '04/03/2026', '06/04/2026', '06/05/2026', '03/06/2026', '03/07/2026', '05/08/2026', '03/09/2026', '05/10/2026', '05/11/2026', '03/12/2026', '06/01/2027'],
  9: ['05/02/2026', '05/03/2026', '07/04/2026', '07/05/2026', '05/06/2026', '06/07/2026', '06/08/2026', '04/09/2026', '06/10/2026', '06/11/2026', '04/12/2026', '07/01/2027'],
  0: ['06/02/2026', '06/03/2026', '08/04/2026', '08/05/2026', '08/06/2026', '07/07/2026', '07/08/2026', '08/09/2026', '07/10/2026', '09/11/2026', '07/12/2026', '08/01/2027'],
};

const DATAS_ACIMA_UM_SALARIO = {
  '1-6': ['02/02/2026', '02/03/2026', '01/04/2026', '04/05/2026', '01/06/2026', '01/07/2026', '03/08/2026', '01/09/2026', '01/10/2026', '03/11/2026', '01/12/2026', '04/01/2027'],
  '2-7': ['03/02/2026', '03/03/2026', '02/04/2026', '05/05/2026', '02/06/2026', '02/07/2026', '04/08/2026', '02/09/2026', '02/10/2026', '04/11/2026', '02/12/2026', '05/01/2027'],
  '3-8': ['04/02/2026', '04/03/2026', '06/04/2026', '06/05/2026', '03/06/2026', '03/07/2026', '05/08/2026', '03/09/2026', '05/10/2026', '05/11/2026', '03/12/2026', '06/01/2027'],
  '4-9': ['05/02/2026', '05/03/2026', '07/04/2026', '07/05/2026', '05/06/2026', '06/07/2026', '06/08/2026', '04/09/2026', '06/10/2026', '06/11/2026', '04/12/2026', '07/01/2027'],
  '5-0': ['06/02/2026', '06/03/2026', '08/04/2026', '08/05/2026', '08/06/2026', '07/07/2026', '07/08/2026', '08/09/2026', '07/10/2026', '09/11/2026', '07/12/2026', '08/01/2027'],
};

const GRUPOS_ACIMA_UM_SALARIO = [
  { id: '1-6', rotulo: '1 e 6', digitos: ['1', '6'] },
  { id: '2-7', rotulo: '2 e 7', digitos: ['2', '7'] },
  { id: '3-8', rotulo: '3 e 8', digitos: ['3', '8'] },
  { id: '4-9', rotulo: '4 e 9', digitos: ['4', '9'] },
  { id: '5-0', rotulo: '5 e 0', digitos: ['5', '0'] },
];

const FORMATADOR_DATA = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const separarData = (data) => data.split('/').map(Number);

const dataPorExtenso = (data) => {
  const [dia, mes, ano] = separarData(data);
  const texto = FORMATADOR_DATA.format(new Date(Date.UTC(ano, mes - 1, dia)));
  return texto.charAt(0).toUpperCase() + texto.slice(1);
};

const dataParaIso = (data) => {
  const [dia, mes, ano] = separarData(data);
  return `${ano}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
};

const obterMesInicial = () => {
  const hoje = new Date();
  if (hoje.getFullYear() < ANO_REFERENCIA) return 0;
  if (hoje.getFullYear() > ANO_REFERENCIA) return 11;
  return hoje.getMonth();
};

const localizarGrupoAcima = (digito) => (
  GRUPOS_ACIMA_UM_SALARIO.find((grupo) => grupo.digitos.includes(digito))
);

export default function Calendario({ theme, setActiveTab }) {
  const [mes, setMes] = useState(obterMesInicial);
  const [renda, setRenda] = useState('ate_um');
  const [digito, setDigito] = useState('');
  const [resultado, setResultado] = useState(null);

  const banner = theme === 'dark'
    ? bannerEscuro
    : theme === 'high-contrast' ? bannerAltoContraste : bannerCalendario;

  const limparResultado = () => setResultado(null);

  const consultar = (evento) => {
    evento.preventDefault();

    if (!ORDEM_DIGITOS.includes(digito)) {
      setResultado({
        erro: true,
        mensagem: 'Escolha o último número que aparece antes do traço.',
      });
      return;
    }

    const grupoAcima = localizarGrupoAcima(digito);
    const data = renda === 'ate_um'
      ? DATAS_ATE_UM_SALARIO[digito][mes]
      : DATAS_ACIMA_UM_SALARIO[grupoAcima.id][mes];

    setResultado({
      erro: false,
      data,
      dataExtenso: dataPorExtenso(data),
      digito,
      faixa: renda === 'ate_um'
        ? 'Até um salário mínimo'
        : 'Acima de um salário mínimo',
      grupo: renda === 'ate_um' ? `Final ${digito}` : `Finais ${grupoAcima.rotulo}`,
      mes: MESES[mes],
      renda,
      grupoId: grupoAcima?.id,
    });
  };

  return (
    <section className="payment-calendar animate-fade" aria-labelledby="payment-calendar-title">
      <header className="payment-calendar__header">
        <button
          type="button"
          className="payment-calendar__back"
          aria-label="Voltar para o início"
          onClick={() => setActiveTab('inicio')}
        >
          <FaArrowLeft aria-hidden="true" focusable="false" />
        </button>
        <div>
          <p className="payment-calendar__eyebrow">Tabela oficial de 2026</p>
          <h1 id="payment-calendar-title">Calendário de pagamentos</h1>
        </div>
      </header>

      <figure className="payment-calendar__banner">
        <img
          src={banner}
          alt="Ilustração de uma pessoa consultando o calendário de pagamento do benefício"
        />
      </figure>

      <aside className="payment-calendar__privacy-note" aria-label="Proteção dos seus dados">
        <FaLock aria-hidden="true" focusable="false" />
        <p>
          <strong>Não digite o número completo do benefício.</strong> Para esta consulta,
          basta escolher o último algarismo antes do traço.
        </p>
      </aside>

      <section className="payment-calendar__guidance" aria-labelledby="calendar-how-to">
        <div className="payment-calendar__section-heading">
          <span aria-hidden="true">
            <FaInfoCircle focusable="false" />
          </span>
          <div>
            <p className="payment-calendar__eyebrow">Consulta simples</p>
            <h2 id="calendar-how-to">Descubra a data em três passos</h2>
          </div>
        </div>

        <ol className="payment-calendar__steps">
          <li>
            <span aria-hidden="true">1</span>
            <p><strong>Escolha o mês</strong> do pagamento que deseja consultar.</p>
          </li>
          <li>
            <span aria-hidden="true">2</span>
            <p>Informe se recebe <strong>até ou acima de um salário mínimo</strong>.</p>
          </li>
          <li>
            <span aria-hidden="true">3</span>
            <p>Escolha o <strong>último número antes do traço</strong>.</p>
          </li>
        </ol>
      </section>

      <section className="payment-calendar__digit-card" aria-labelledby="calendar-digit-title">
        <div className="payment-calendar__digit-copy">
          <span aria-hidden="true"><FaCreditCard focusable="false" /></span>
          <div>
            <h2 id="calendar-digit-title">Qual número devo usar?</h2>
            <p>
              No exemplo <strong>123.456.789-0</strong>, use o número <strong>9</strong>.
              Ignore o zero que aparece depois do traço.
            </p>
          </div>
        </div>
        <figure>
          <img
            src={imgCartaoExemplo}
            alt="Cartão ilustrativo com o número 123.456.789-0 e o dígito 9 circulado"
          />
          <figcaption>Exemplo ilustrativo. Não compartilhe seu número completo.</figcaption>
        </figure>
      </section>

      <form className="payment-calendar__form" onSubmit={consultar}>
        <div className="payment-calendar__form-heading">
          <span aria-hidden="true">
            <FaCalendarCheck focusable="false" />
          </span>
          <div>
            <p className="payment-calendar__eyebrow">Calendário 2026</p>
            <h2>Consultar minha data</h2>
          </div>
        </div>

        <div className="payment-calendar__field">
          <label htmlFor="payment-month">Mês do pagamento</label>
          <select
            id="payment-month"
            value={mes}
            onChange={(evento) => {
              setMes(Number(evento.target.value));
              limparResultado();
            }}
          >
            {MESES.map((nome, indice) => (
              <option key={nome} value={indice}>{nome} de {ANO_REFERENCIA}</option>
            ))}
          </select>
        </div>

        <fieldset className="payment-calendar__fieldset">
          <legend>Valor mensal do benefício</legend>
          <div className="payment-calendar__radio-group">
            <label>
              <input
                type="radio"
                name="payment-income"
                value="ate_um"
                checked={renda === 'ate_um'}
                onChange={() => {
                  setRenda('ate_um');
                  limparResultado();
                }}
              />
              <span>
                <strong>Até um salário mínimo</strong>
                <small>Calendário por final individual</small>
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="payment-income"
                value="acima_um"
                checked={renda === 'acima_um'}
                onChange={() => {
                  setRenda('acima_um');
                  limparResultado();
                }}
              />
              <span>
                <strong>Acima de um salário mínimo</strong>
                <small>Calendário por pares de finais</small>
              </span>
            </label>
          </div>
        </fieldset>

        <div className="payment-calendar__field">
          <label htmlFor="payment-digit">Último número antes do traço</label>
          <select
            id="payment-digit"
            value={digito}
            aria-describedby="payment-digit-hint"
            onChange={(evento) => {
              setDigito(evento.target.value);
              limparResultado();
            }}
          >
            <option value="">Escolha um número</option>
            {ORDEM_DIGITOS.map((numero) => (
              <option key={numero} value={numero}>Final {numero}</option>
            ))}
          </select>
          <p id="payment-digit-hint">Escolha somente um algarismo de 0 a 9.</p>
        </div>

        <button type="submit" className="payment-calendar__submit">
          <FaSearch aria-hidden="true" focusable="false" />
          Consultar data
        </button>

        {resultado && (
          <div
            className={`payment-calendar__result ${resultado.erro ? 'is-error' : 'is-success'}`}
            role={resultado.erro ? 'alert' : 'status'}
            aria-live={resultado.erro ? 'assertive' : 'polite'}
            aria-atomic="true"
          >
            {resultado.erro ? (
              <>
                <FaExclamationTriangle aria-hidden="true" focusable="false" />
                <p>{resultado.mensagem}</p>
              </>
            ) : (
              <>
                <FaCheckCircle aria-hidden="true" focusable="false" />
                <div>
                  <p className="payment-calendar__result-label">
                    Pagamento referente a {resultado.mes.toLowerCase()} de {ANO_REFERENCIA}
                  </p>
                  <time dateTime={dataParaIso(resultado.data)}>{resultado.dataExtenso}</time>
                  <dl>
                    <div>
                      <dt>Faixa</dt>
                      <dd>{resultado.faixa}</dd>
                    </div>
                    <div>
                      <dt>Final considerado</dt>
                      <dd>{resultado.grupo}</dd>
                    </div>
                  </dl>
                  <p className="payment-calendar__result-note">
                    Esta é a data indicada no calendário oficial. Confirme o crédito no
                    extrato de pagamento do Meu INSS.
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </form>

      <details className="payment-calendar__monthly-table">
        <summary>
          <FaCalendarAlt aria-hidden="true" focusable="false" />
          Ver todas as datas de {MESES[mes]} de {ANO_REFERENCIA}
        </summary>

        <div className="payment-calendar__tables">
          <div className="payment-calendar__table-card">
            <table>
              <caption>Benefícios de até um salário mínimo</caption>
              <thead>
                <tr>
                  <th scope="col">Final</th>
                  <th scope="col">Data</th>
                </tr>
              </thead>
              <tbody>
                {ORDEM_DIGITOS.map((numero) => {
                  const data = DATAS_ATE_UM_SALARIO[numero][mes];
                  const selecionado = resultado
                    && !resultado.erro
                    && resultado.renda === 'ate_um'
                    && resultado.digito === numero;

                  return (
                    <tr key={numero} className={selecionado ? 'is-selected' : undefined}>
                      <th scope="row">{numero}</th>
                      <td><time dateTime={dataParaIso(data)}>{data}</time></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="payment-calendar__table-card">
            <table>
              <caption>Benefícios acima de um salário mínimo</caption>
              <thead>
                <tr>
                  <th scope="col">Finais</th>
                  <th scope="col">Data</th>
                </tr>
              </thead>
              <tbody>
                {GRUPOS_ACIMA_UM_SALARIO.map((grupo) => {
                  const data = DATAS_ACIMA_UM_SALARIO[grupo.id][mes];
                  const selecionado = resultado
                    && !resultado.erro
                    && resultado.renda === 'acima_um'
                    && resultado.grupoId === grupo.id;

                  return (
                    <tr key={grupo.id} className={selecionado ? 'is-selected' : undefined}>
                      <th scope="row">{grupo.rotulo}</th>
                      <td><time dateTime={dataParaIso(data)}>{data}</time></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </details>

      <aside className="payment-calendar__official" aria-labelledby="calendar-official-title">
        <FaFilePdf aria-hidden="true" focusable="false" />
        <div>
          <h2 id="calendar-official-title">Confirme nos canais oficiais</h2>
          <p>
            O resultado é baseado na tabela de pagamentos de 2026 publicada pelo INSS.
            Para confirmar depósitos e dados pessoais, consulte o extrato no Meu INSS.
          </p>
          <div className="payment-calendar__official-links">
            <a
              href={URL_TABELA_OFICIAL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir tabela oficial
              <FaExternalLinkAlt aria-hidden="true" focusable="false" />
              <span className="payment-calendar__sr-only"> (abre em nova guia)</span>
            </a>
            <a
              href={URL_MEU_INSS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Meu INSS
              <FaExternalLinkAlt aria-hidden="true" focusable="false" />
              <span className="payment-calendar__sr-only"> (abre em nova guia)</span>
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
}