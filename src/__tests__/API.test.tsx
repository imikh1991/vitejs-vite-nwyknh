/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import { beforeAll, afterEach, afterAll, describe, expect, it, vi } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockItem = {
    id: 15,
    name: 'Alien Rick',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'Male',
    origin: {
        name: 'unknown',
        url: '',
    },
    location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/15',
    created: '2017-11-04T20:56:13.215Z',
};

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character/15', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockItem));
    })
);

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});

describe('API call coverage and response', () => {
    const open = vi.fn();
    it('renders data fetched from API', async () => {
        render(<Card character={mockItem} key={String(mockItem.id)} open={open} />);
        await screen.findByTestId('card');
        expect(screen.getByTestId('card')).toBeDefined();
    });
});
