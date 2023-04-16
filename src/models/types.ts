export interface SearchProps {
    value: string;
    onSearchChange: (value: string) => void;
    handleClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface SearchBarProps {
    handleSearchClick?: () => void;
}

export interface IModalProps {
    onClose: () => void;
    children?: React.ReactNode;
    title: string;
}

export interface ICharacter {
    id: number | string;
    name: string;
    status: string;
    species: string;
    type: string | null;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface ApiResponse {
    info: Info[];
    results: ICharacter[];
}

export interface IHeaderProps {
    hideSearch: boolean;
}

export interface ICardProps {
    character: ICharacter;
    key: string;
}

export interface ICardsProps {
    characters: ICharacter[];
}
