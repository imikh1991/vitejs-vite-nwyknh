import React from 'react';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';
import '../components/Modal/Modal.css';
import { useGetCharacterByNameQuery } from '../requests/createApi';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { ApiResponse } from '../models/types';
import { searchValueSelector } from '../store/selectors/search';
import { setSearch, setCharacter } from '../store/reducers/SearchSlice';
import { useModal } from '../hooks/use-modal';
import Modal from '../components/Modal/Modal';
import CardData from '../components/ContainerCards/CardData/CardData';

function Home() {
    const search = useAppSelector(searchValueSelector);

    const [enterSearch, setEnterSearch] = React.useState(search);

    const { data: character, isLoading } = useGetCharacterByNameQuery(search);

    const handleSearchChange = (value: string) => dispatch(setSearch(value));

    const dispatch = useAppDispatch();

    const { openModal, closeModal, modal } = useModal();
    const [clickedData, setClickedData] = React.useState<null | string>(null);

    const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setEnterSearch(search);
            dispatch(setCharacter(character as ApiResponse));
            dispatch(setSearch(enterSearch));
        }
    };

    const handlerClickedData = (id?: string) => {
        openModal();
        setClickedData(id as string);
    };


    return (
        <div className="Home">
            <SearchBar value={search} onSearchChange={handleSearchChange} handleClick={handleClick} />
            <ContainerCards data={character?.results} open={handlerClickedData} loading={isLoading} />
            {modal && (
                <Modal onClose={closeModal} title={'HERO'}>
                    <CardData id={clickedData} />
                </Modal>
            )}
        </div>
    );
}

export default Home;
