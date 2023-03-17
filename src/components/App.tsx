/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Routes, Route, Link } from "react-router-dom"
import { render } from 'react-dom';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"
import ContainerCards from "./ContainerCards";
import SearchBar from "./SearchBar";
import Header from './Header';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={ <About/> } />
                <Route path="*" element={<NotFound />} />
            </Routes>
        
        </div>
    )
}

/*const container = document.getElementById("root") as HTMLElement;
// Create a root.
const root = ReactDOMClient.createRoot(container);
// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
); 
      

уберем из отображения 

<Header />
      <ContainerCards />
      */

export default App


