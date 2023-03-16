import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';
import Home from '../src/Home';

test('render Home', () => {
  render(<Home/>);
});


test('render App', () => {
  render(<App/>);
});

