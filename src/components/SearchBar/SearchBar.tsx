import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SearchBar.css';
import SearchLogo from './SearchLogo';
import { ICharacter } from '../../models/types';
function SearchBar({ childToParent }) {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [searchStr, setSearchStr] = useState(' ');

    const onSubmit = (data, event) => {
        try {
            setSearchStr(data.searchStr);
            localStorage.setItem('searchStr', data.searchStr);
            alert('Form successfully submitted');
            event.preventDefault();
            const storedValue = localStorage.getItem('searchStr');
            if (storedValue) {
                setSearchStr(storedValue);
                console.log('произошел onSubmit', storedValue);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (event) => {
        setSearchStr(event.target.value);
        try {
            fetch(`https://rickandmortyapi.com/api/character?name=${searchStr}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => {
                    setCharacterData(data.results);
                    childToParent(data.results);
                    console.log('произошел data.results>>>', data.results);
                })
                .catch((error) => {
                    console.error(error);
                    setError(error);
                    alert('Error fetching data');
                })
                .finally(() => {
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleFormSubmit = (event) => {
        try {
            fetch(`https://rickandmortyapi.com/api/character?name=${searchStr}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => {
                    setCharacterData(data.results);
                    childToParent(data.results);
                    console.log('произошел data.results>>>', data.results);
                })
                .catch((error) => {
                    console.error(error);
                    setError(error);
                    alert('Error fetching data');
                })
                .finally(() => {
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
        }
        console.log('Was submitted: ' + searchStr);
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
