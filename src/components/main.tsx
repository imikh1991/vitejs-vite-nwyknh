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
import NotFound from './NotFound';

const container = document.getElementById("root") as HTMLElement;
// Create a root.
const root = ReactDOMClient.createRoot(container);

//Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);
// During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);
/* 
/ Initial render: Render an element to the root.

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </React.StrictMode>
);
*/


