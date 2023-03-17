import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchBar from '../src/components/SearchBar';

test('render SearchBar', () => {
  render(<SearchBar />);
});