import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../src/components/About';

test('render About', () => {
  render(<About/>);
});