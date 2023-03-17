import ReactDOM from 'react-dom/client';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
            <BrowserRouter>
            <About/>
            </BrowserRouter>
            
        </div>
    )
}


/* 
const container = document.getElementById("root") as HTMLElement;
// Create a root.
const root = ReactDOMClient.createRoot(container);
// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <About/>
    </BrowserRouter>
  </React.StrictMode>
); 
   */   
export default About

