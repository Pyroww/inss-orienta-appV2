import {
  FaChevronRight,
  FaEnvelopeOpenText,
  FaUniversity,
  FaUserCheck,
} from 'react-icons/fa';
import './senhagovgrid.css';

const RECOVERY_METHODS = [
  {
    id: 'facial',
    route: 'recuperarFacial',
    icon: FaUserCheck,
    title: 'Reconhecimento facial',
    description: 'Confirme sua identidade pelo aplicativo Gov.br usando a câmera.',
    requirement: 'Use quando essa opção aparecer para sua conta.',
  },
  {
    id: 'bank',
    route: 'recuperarBanco',
    icon: FaUniversity,
    title: 'Banco credenciado',
    description: 'Faça a confirmação no ambiente seguro de um banco participante.',
    requirement: 'O procedimento varia conforme a instituição.',
  },
  {
    id: 'message',
    route: 'recuperarSms',
    icon: FaEnvelopeOpenText,
    title: 'E-mail ou SMS',
    description: 'Receba um código no contato que já está cadastrado na conta.',
    requirement: 'Você precisa ter acesso ao e-mail ou celular exibido.',
  },
];

export default function SenhaGovGrid({ setActiveTab }) {
  return (
    <ul className="gov-recovery-methods" aria-label="Formas de recuperar a senha">
      {RECOVERY_METHODS.map((method) => {
        const Icon = method.icon;
        const descriptionId = 'gov-recovery-' + method.id + '-description';

        return (
          <li key={method.id}>
            <button
              type="button"
              className={'gov-recovery-card gov-recovery-card--' + method.id}
              aria-describedby={descriptionId}
              onClick={() => setActiveTab(method.route)}
            >
              <span className="gov-recovery-card-icon" aria-hidden="true">
                <Icon focusable="false" />
              </span>

              <span className="gov-recovery-card-copy">
                <strong>{method.title}</strong>
                <span id={descriptionId}>{method.description}</span>
                <small>{method.requirement}</small>
              </span>

              <FaChevronRight
                className="gov-recovery-card-arrow"
                aria-hidden="true"
                focusable="false"
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
