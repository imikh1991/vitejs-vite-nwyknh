/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import SearchBar from '../components/SearchBar/SearchBar';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import { ICharacter } from '../models/types';

describe('CardItem', () => {
    const onClose = vi.fn();
    const open = vi.fn();
    const value = vi.fn();

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

    it('Card should be shown', () => {
        render(<Card character={mockItem} key={String(mockItem.id)} open={open} />);
        expect(screen.getByTestId('card')).toBeDefined();
    });
    it('Modal widow display ', () => {
        render(<Modal onClose={onClose} title={'HERO'} />);
        expect(screen.getByTestId('modal')).toBeDefined();
    });
    it('Search Bar display ', () => {
        render(<SearchBar value={'modal'} onSearchChange={value} handleClick={value} />);
        expect(screen.getByTestId('search')).toBeDefined();
    });

    it('Container with cards display ', () => {
        const mockData: ICharacter[] = [mockItem];
        render(<ContainerCards data={mockData} open={value} loading={true} />);
        expect(screen.getByTestId('card-container')).toBeDefined();
    });
});
