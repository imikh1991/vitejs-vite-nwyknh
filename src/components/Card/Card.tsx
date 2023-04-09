import React, { useState } from 'react';
import { ICardProps } from '../../models/types';
import './Card.css';
import Modal from '../Modal/Modal';

const Card: React.FC<ICardProps> = ({ character }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="card" data-testid="card" onClick={handleClick}>
            <img src={character.image} alt="Card Image 1" />
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <p>{character.species}</p>
            <p>{!isOpen && character.gender}</p>
            <p>{!isOpen && character.location.name}</p>
            <a href="https://rickandmortyapi.com/">Arhhh!</a>

            {isOpen && <Modal setIsOpen={setIsOpen} character={character} />}
        </div>
    );
};

export default Card;
