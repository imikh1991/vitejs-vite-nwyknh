import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SearchBar.css';
import SearchLogo from './SearchLogo';
import { ICharacter } from '../../models/types';
import GetCharactersByName from '../../requests/GetCharactersByName';

function SearchBar({ onClick }) {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);
    /*const handleFormSubmit = (event) => {
        onClick(event.target.value)
        для передачи данных между компонентами 
    } */
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [searchStr, setSearchStr] = useState('');

    useEffect(() => {
        const storedValue = localStorage.getItem('searchStr');
        if (storedValue) {
            setSearchStr(storedValue);
        }
    }, []);

    const onSubmit = (data, event) => {
        try {
            console.log(data);
            setSearchStr(data.searchStr);
            localStorage.setItem('searchStr', data.searchStr);
            alert('Form successfully submitted');
            reset();
            event.preventDefault();
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (event) => {
        setSearchStr(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        try {
            const test = await GetCharactersByName(searchStr);
            setCharacterData(test.results);
            onClick(event.target.value);
            // передача данных в другой компонент
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error.message);
        }
        console.log('Was submitted: ' + searchStr);
        // вернули текущее состояние
        // characterData - набор карточек - как его прокинуть на рендер?
        // поиск должен работать как фильтр
        // прокинуть const characterData: ICharacter[]
        console.log(characterData);
        event.preventDefault();
    };

    useEffect(() => {
        return () => {
            localStorage.setItem('searchStr', searchStr);
        };
    }, [searchStr]);

    return (
        <form className="search-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="search-container__search-bar">
                <label htmlFor="searchStr">Search:</label>
                <input
                    type="text"
                    id="searchStr"
                    className="searchTerm"
                    {...register('searchStr', { required: true })}
                    value={searchStr}
                    onChange={handleChange}
                />
                {errors.searchStr && <span>This field is required</span>}

                <button
                    type="submit"
                    name="search"
                    className="searchButton"
                    disabled={!searchStr}
                    onClick={handleFormSubmit}
                >
                    <SearchLogo />
                </button>
                <span>{searchStr}</span>
            </div>
        </form>
    );
}

export default SearchBar;
