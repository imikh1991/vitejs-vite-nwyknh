import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { ICharacter } from '../../models/types';

function LocalCard(props: { character: ICharacter }) {
    return (
        <div className="card">
            <img src={props.character.image} alt="Card Image 1" />
            <h2>{props.character.name}</h2>
            <h2>{props.character.status}</h2>
            <p>{props.character.species}</p>
            <p>ID: {props.character.id}</p>
            <p>Type: {props.character.type}</p>
            <p>Gender: {props.character.gender}</p>
        </div>
    );
}

function RequestAPI() {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/5,6,7,8')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCharacterData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <form className="search-container-api">
            <br></br>
            <div className="search-container">
                {characterData.map((character) => {
                    return <LocalCard character={character} key={String(character.id)} />;
                })}
            </div>
        </form>
    );
}

export default RequestAPI;
