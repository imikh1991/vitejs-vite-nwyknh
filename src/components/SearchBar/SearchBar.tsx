import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SearchBar.css';
import SearchLogo from './SearchLogo';
import { ICharacter } from '../../models/types';
import GetCharactersByName from '../../requests/GetCharactersByName';

function SearchBar({ childToParent }) {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [searchStr, setSearchStr] = useState('');

    const onSubmit = (data, event) => {
        try {
            setSearchStr(data.searchStr);
            localStorage.setItem('searchStr', data.searchStr);
            alert('Form successfully submitted');
            event.preventDefault();
            const storedValue = localStorage.getItem('searchStr');
            if (storedValue) {
                setSearchStr(storedValue);
            }
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error.message);
        }
        console.log('Was submitted: ' + searchStr);
        // onClick(characterData); отправим данные в родителя
        childToParent(characterData);
        if (!characterData) {
            alert('Nothing to display');
        }
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
