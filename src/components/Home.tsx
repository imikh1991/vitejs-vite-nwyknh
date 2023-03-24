import ContainerCards from "./ContainerCards";
import SearchBar from "./SearchBar";
import Header from './Header';
import '../assets/styles/main.css';
import '../assets/styles/Home.css';
import '../assets/styles/Header.css';
import '../assets/styles/SearchBar.css';

function Home() {
    return (
        <div className="Home">
            <Header /> 
            <SearchBar /> 
            <ContainerCards /> 
        </div>
    );
}

export default Home;
