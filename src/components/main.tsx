import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../assets/styles/main.css';
import App from './App';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

