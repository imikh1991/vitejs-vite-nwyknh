import { Route, Routes } from "react-router";
import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import SearchBar from './SearchBar';
import ContainerCards from './ContainerCards';
import '../assets/styles/main.css';
import Header from './Header';
import reactLogo from '../src/assets/react.svg';
import About from './About';
import App from './App';
import Home from './Home';
import * as ReactDOMClient from 'react-dom/client';
import NotFound from "./NotFound"

function Router() {
    return (
        
<Routes>
    
<Route path="/" element={ <Home/> } />
<Route path="about" element={ <About/> } />
<Route path="notFound" element={ <NotFound/> } />
<Route path="*" element={<NotFound />} />

</Routes>
    );
}

export default Router



