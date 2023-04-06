import React, { useState } from 'react';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';

import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';

import { ICharacter } from '../models/types';

function Home() {
    // через родителя прокидываем данные от детей и должно прокинуться по идее!
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);
    const handleFormSubmit = (characterData) => {
        setCharacterData(characterData);
        console.log('Привет их Home на рендер уходит>>>');
        console.log(characterData);
    };
    return (
        <div className="Home">
            <SearchBar onClick={handleFormSubmit} />
            <ContainerCards characters={characterData} />
        </div>
    );
}

export default Home;
