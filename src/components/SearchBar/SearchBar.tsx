import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SearchBar.css';
import SearchLogo from './SearchLogo';

function SearchBar() {
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

    const handleFormSubmit = (event) => {
        console.log('Was submitted: ' + searchStr);
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
