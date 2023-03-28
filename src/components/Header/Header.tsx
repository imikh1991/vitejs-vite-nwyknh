import { Link } from 'react-router-dom';
import ReactLogo from './ReactLogo';
import './Header.css';

function Header() {
    return (
        <section className="Header">
            <header>
                <nav className="w50">
                    <ul>
                        <li className="nav-tab">
                            <ReactLogo />
                        </li>
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
