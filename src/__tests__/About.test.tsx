/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import { describe, expect, it } from 'vitest';

describe('AboutPage component', () => {
    it('should render the correct text', () => {
        render(
            <MemoryRouter>
                <AboutPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/This is About page/i)).toBeDefined();
    });
});
