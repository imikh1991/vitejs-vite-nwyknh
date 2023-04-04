import React, { useState } from 'react';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';
import RequestAPI from '../components/SearchBar/RequestAPI';

import { characters } from '../data/Characters';
import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';

function Home() {
    const [charactersDefault] = useState(characters);

    return (
        <div className="Home">
            <SearchBar />
            <RequestAPI />
            <ContainerCards characters={charactersDefault} />
        </div>
    );
}

export default Home;
