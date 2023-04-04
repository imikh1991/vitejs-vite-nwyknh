import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import FormPage from './pages/FormPage';
import Header from './components/Header/Header';
import './App.css';
import { ICharacter, CharacterDataDisplayProps } from './models/types';

function App() {
    const [searchStr, setSearchStr] = useState('');
    return (
        <div className="container" data-testid="app">
            <div className="App-header">
                <Header />
            </div>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home searchStr={searchStr} />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="form" element={<FormPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
