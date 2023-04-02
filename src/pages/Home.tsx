import ContainerCards from '../components/ContainerCards/ContainerCards';
import SearchBar from '../components/SearchBar/SearchBar';

import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';

function Home() {
    return (
        <div className="Home">
            <SearchBar />
            <ContainerCards />
        </div>
    );
}

export default Home;
