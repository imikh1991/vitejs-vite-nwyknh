import React from 'react';
import './Modal.css?inline';
import { RiCloseLine } from 'react-icons/ri';
import Card from '../Card/Card';
import { IModalProps } from '../../models/types';

const Modal = ({ setIsOpen, character }: IModalProps) => {
    console.log(character);
    return (
        <div className="modal-wrapper">
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Details Info</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: '-3px' }} />
                    </button>
                    <div className="modalContent">
                        <Card character={character} key={String(character.id)} />
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
