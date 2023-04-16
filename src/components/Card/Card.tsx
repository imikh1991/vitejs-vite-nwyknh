import React from 'react';
import { ICardProps } from '../../models/types';
import './Card.css';

const Card: React.FC<ICardProps> = ({ character }) => {
    return (
        <div className="card" data-testid="card">
            <img src={character.image} alt="Card Image 1" />
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.location.name}</p>
            <a href="https://rickandmortyapi.com/">Arhhh!</a>
        </div>
    );
};

export default Card;
