import React, { useState, useEffect } from 'react';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';

import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';

import GetCharactersByNumber from '../requests/GetCharactersByNumber';
import { ICharacter, CharacterDataDisplayProps } from '../models/types';

function Home(props: CharacterDataDisplayProps) {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);
    useEffect(() => {
        GetCharactersByNumber([props.searchStr])
            .then((data) => {
                setCharacterData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    });

    return (
        <div className="Home">
            <SearchBar />
            <ContainerCards characters={props.searchStr} />
        </div>
    );
}

export default Home;
