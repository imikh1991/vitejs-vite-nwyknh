import './SearchBar.css';
import SearchLogo from './SearchLogo';

interface SearchProps {
    value: string;
    onSearchChange: (value: string) => void;
    handleClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchProps> = ({ value, onSearchChange, handleClick }) => {
    return (
        <form className="search-container" data-testid="search">
            <div className="search-container__search-bar">
                <label htmlFor="searchStr">Search:</label>
                <input
                    type="text"
                    id="searchStr"
                    className="searchTerm"
                    onChange={(event) => onSearchChange(event.target.value)}
                    onKeyDown={(event) => handleClick(event)}
                    value={value}
                />

                <button type="submit" name="search" className="searchButton" disabled={false}>
                    <SearchLogo />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
