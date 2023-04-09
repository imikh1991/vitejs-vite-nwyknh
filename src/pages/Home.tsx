import React, { useState, useEffect } from 'react';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';
import '../components/Modal/Modal.css';

import { ICharacter } from '../models/types';

function Home() {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showProgress, setShowProgress] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(`https://rickandmortyapi.com/api/character`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => {
                    setCharacterData(data.results);
                })
                .catch((error) => {
                    console.error(error);
                    setError(error);
                    alert('Error fetching data');
                })
                .finally(() => {
                    setLoading(false);
                });
            setShowProgress(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    if (showProgress) {
        return <ProgressBar />;
    } else if (loading) {
        return <ProgressBar />;
    } else {
        console.log(error);
    }

    const childToParent = (childdata) => {
        setCharacterData(childdata);
    };

    return (
        <div className="Home">
            <SearchBar childToParent={childToParent} />
            <ContainerCards characters={characterData} />
        </div>
    );
}

export default Home;
