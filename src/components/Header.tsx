import { Link } from "react-router-dom";
import reactLogo from '../assets/react.svg';
import '../assets/styles/Header.css';

function Header() {
    
    const header = <header>
        <div className="name w30">
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <nav className="w50">
            <ul>
                <li className="nav-tab"><Link to="/">Home</Link></li>
                <li className="nav-tab"><Link to="about">Page About</Link></li>   
            </ul>
        </nav>
    </header>

    return ( 

        <section className="Header">
            {header}
        </section>

    );
};

export default Header;

