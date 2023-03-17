import React, {useState} from 'react';
import { Link } from "react-router-dom";
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import bootstrap from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route } from "react-router-dom"

import '../assets/styles/Header.css';
import About from './About';


function Header() {
    // BootStrap naming 
    // Grid Layout for Bar
        const header = <header>
        <div className="name w30">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <nav className="w50">
          <ul>
            <li className="nav-tab"><Link to="/">Home</Link></li>
            <li className="nav-tab"><Link to="about">About</Link></li>  
            <li className="nav-tab"><Link to="notFound">404</Link></li>  
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