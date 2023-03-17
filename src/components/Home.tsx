/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Link, BrowserRouter } from "react-router-dom";
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { render } from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import About from "./About"
import NotFound from "./NotFound"
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

/*
const container = document.getElementById("root") as HTMLElement;
// Create a root.
const root = ReactDOMClient.createRoot(container);
// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <SearchBar/>
    <ContainerCards/>
    </BrowserRouter>
  </React.StrictMode>
);
*/
export default Home;
