import { Link } from 'react-router-dom';
import reactLogo from '/Users/ilya_mikhaylyukov/Documents/GitHub/vitejs-vite-nwyknh/src/assets/react.svg';
import './Header.css';

function Header() {
    return (
        <section className="Header">
            <header>
                <div className="name w30">
                    <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <nav className="w50">
                    <ul>
                        <li className="nav-tab">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-tab">
                            <Link to="about">About</Link>
                        </li>
                        <li className="nav-tab">
                            <Link to="form">Form</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    );
}

export default Header;
