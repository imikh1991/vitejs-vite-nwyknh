import ReactDOM from 'react-dom/client';
import React from 'react';
import SearchBar from './SearchBar';
import ContainerCards from './ContainerCards';
import './main.css';

// Mount
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchBar/>
    <ContainerCards />
  </React.StrictMode>
);
