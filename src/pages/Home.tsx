import { useState } from 'react';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';
import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';
import '../components/Modal/Modal.css';
import { useGetCharacterByNameQuery } from '../requests/createApi';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { ICharacter, ApiResponse } from '../models/types';
import { searchValueSelector } from '../store/selectors/search';
import { setSearch, setCharacter } from '../store/reducers/SearchSlice';

function Home() {
    const search = useAppSelector(searchValueSelector);
    const [enterSearch, setEnterSearch] = useState(search);

    console.log(enterSearch);
    const dispatch = useAppDispatch();
    const { data: character, error, isLoading } = useGetCharacterByNameQuery(search);
    console.log('Из API у тебя пришло>>>', useGetCharacterByNameQuery(search));
    console.log('твой character>>>', character);
    const handleSearchChange = (value: string) => dispatch(setSearch(value));

    const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setEnterSearch(search);
            dispatch(setCharacter(character as ApiResponse));
        }
    };

    return (
        <div className="Home">
            <SearchBar value={search} onSearchChange={handleSearchChange} handleClick={handleClick} />
            {isLoading && <ProgressBar />}
            <ContainerCards
                data={character?.results}
                open={function (): void {
                    throw new Error('Function not implemented.');
                }}
                loading={isLoading}
            />
        </div>
    );
}

export default Home;
