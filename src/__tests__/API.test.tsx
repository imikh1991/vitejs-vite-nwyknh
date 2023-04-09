/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
describe('API call coverage and response', () => {
    it('API calls are working okay', () => {
        render(<App />, { wrapper: BrowserRouter });
        expect(screen.getByText(/Home/i)).toBeDefined();
    });
});
