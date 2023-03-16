import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../src/About';
import Contact from '../src/Contact';

test('render Contact', () => {
  render(<Contact />);
});


test('render About', () => {
    render(<About />);
  });
