import React, { useState, useEffect } from 'react';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Modal from '../components/Modal/Modal';
import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';
import '../components/Modal/Modal.css';

import { ICharacter } from '../models/types';

function Home() {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const childToParent = (childdata) => {
        setCharacterData(childdata);
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setCharacterData(data.results);
        };

        fetchData();
    }, []);

    return (
        <div className="Home">
            <SearchBar childToParent={childToParent} />
            <ProgressBar />
            <button className="primaryBtn" onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            <ContainerCards characters={characterData} />
        </div>
    );
}

export default Home;
