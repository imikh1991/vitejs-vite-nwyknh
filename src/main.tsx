import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import SearchBar from './SearchBar';
import ContainerCards from './ContainerCards';
import './main.css';
import Header from './Header';
import reactLogo from '../src/assets/react.svg';

import About from './About';
import Contact from './Contact';
import App from './App';

// Mount
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <BrowserRouter>
     <Header/>
     <SearchBar/>
     <ContainerCards/>
    </BrowserRouter>

  </React.StrictMode>
   
);

