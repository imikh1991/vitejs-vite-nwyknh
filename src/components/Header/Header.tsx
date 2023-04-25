import ReactLogo from './ReactLogo';
import { NavLink } from 'react-router-dom';
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
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-tab">
                            <NavLink to="/about">About </NavLink>
                        </li>
                        <li className="nav-tab">
                            <NavLink to="/form">Form</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    );
}

export default Header;
