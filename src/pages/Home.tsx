import * as React from 'react';
import { useState } from 'react';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';
import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';
import '../components/Modal/Modal.css';
import { useGetPokemonByNameQuery } from '../requests/createApi';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { ICharacter } from '../models/types';

function Home() {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);

    const childToParent = (childdata) => {
        setCharacterData(childdata);
    };
    const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(' ');
    console.log('data API CALL>>>', data);
    return (
        <div className="Home">
            <SearchBar childToParent={childToParent} />
            {isLoading && <ProgressBar />}
            <ContainerCards characters={characterData || data} />
        </div>
    );
}

export default Home;
