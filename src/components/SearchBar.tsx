/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

// import { useState } from 'react';
// import reactLogo from '../src/assets/react.svg';
// import viteLogo from '/vite.svg';
// import bootstrap from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/styles/SearchBar.css';

// search 

function SearchBar() {
    // BootStrap naming 
    // Grid Layout for Bar
      
    return ( 
        <section className="searchBar">

            <form action="https://echo.htmlacademy.ru/courses" method="post">
                <input type="text" name="login" placeholder="Search here"/>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default SearchBar;