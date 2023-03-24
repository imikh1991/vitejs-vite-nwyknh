/**
* @vitest-environment jsdom
*/
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { describe, expect, it, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

describe('App', () => {
  it('renders App component', () => {
    render(<App />, { wrapper: BrowserRouter });
  });

  it('renders Not Found page component', () => {
    render(<NotFound />);
    expect(screen.getByText(/This is Not Found 404/i)).toBeDefined();
  });

});