import React, { useState, useEffect } from 'react';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';

import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';

import GetCharactersByName from '../requests/GetCharactersByName';

import { ICharacter, IsearchStr } from '../models/types';

function Home() {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);

    useEffect(() => {
        GetCharactersByName(' ')
            .then((data) => {
                setCharacterData(data);
                // вот здесь должны быть данные по поиску из компонента SearchBar
                // чтобы ContainerCards показал их на экран
                console.log('characterData>>>', { characterData });
            })
            .catch((err) => {
                console.log(err.message);
            });
    });

    return (
        <div className="Home">
            <SearchBar />
            <ContainerCards characters={characterData} />
        </div>
    );
}

export default Home;
