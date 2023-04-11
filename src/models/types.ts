export interface SearchBarProps {
    handleSearchClick?: () => void;
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

export interface IModalProps {
    setIsOpen: (isOpen: boolean) => void;
    character: ICharacter;
}

export interface ILikeRepository {
    add: (key: number) => void;
    remove: (key: number) => void;
    findLike: (key: number) => boolean;
}

export interface IViewRepository {
    add: (key: number) => void;
    remove: (key: number) => void;
    findView: (key: number) => boolean;
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
