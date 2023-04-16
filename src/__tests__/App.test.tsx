/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from 'vitest';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe('App', () => {
    it('renders Not Found page component', () => {
        render(<NotFound />);
        expect(
            screen.getByText(/This is Not Found This Universe it does not exist. Wubba Lubba Dub Dub!/i)
        ).toBeDefined();
    });
});
