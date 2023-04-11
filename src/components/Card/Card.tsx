import React, { useState } from 'react';
import { ICardProps } from '../../models/types';
import './Card.css';
import Modal from '../Modal/Modal';

const Card: React.FC<ICardProps> = ({ character }) => {
    const [isModalOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => {
        setIsOpen(!isModalOpen);
    };

    return (
        <div className="card" data-testid="card" onClick={handleOpenModal}>
            <img src={character.image} alt="Card Image 1" />
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.location.name}</p>
            <a href="https://rickandmortyapi.com/">Arhhh!</a>

            {isModalOpen && <Modal setIsOpen={setIsOpen} character={character} />}
        </div>
    );
};

export default Card;
