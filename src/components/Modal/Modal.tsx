import './Modal.css?inline';
import { RiCloseLine } from 'react-icons/ri';
import { IModalProps } from '../../models/types';

//IModalProps
const Modal = ({ onClose, children, title }: IModalProps) => {
    return (
        <div className="modal-wrapper" data-testid="modal">
            <div className="darkBG" onClick={onClose} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">{title}</h5>
                    </div>
                    <button className="closeBtn" onClick={onClose}>
                        <RiCloseLine style={{ marginBottom: '-3px' }} />
                    </button>
                    <div className="modalContent">
                        {children}
                        <div className="modalActions">
                            <div className="actionsContainer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
