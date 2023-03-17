import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../src/components/Home';

test('render Home', () => {
  render(<Home/>);
});

