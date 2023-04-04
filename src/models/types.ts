import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface SearchBarProps {
    handleSearchClick?: () => void;
}

export interface CharacterDataDisplayProps {
    searchStr: any;
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

export interface IFormFieldProps {
    formField: IFormField;
    register: UseFormRegister<Inputs>;
    errors: FieldErrors<Inputs>;
}

export enum RegisterOptions {
    image = 'image',
    name = 'name',
    status = 'status',
    species = 'species',
    gender = 'gender',
    origin = 'origin',
    location = 'location',
    date = 'date',
    consest = 'consest',
}

export interface IFormField {
    type: string;
    ids: string[];
    register: 'image' | 'name' | 'status' | 'species' | 'gender' | 'origin' | 'location' | 'date' | 'consest';
    labels: string[];
    placeholder?: string;
    required: string;
    patern?: {
        value: RegExp;
        message: string;
    };
    minLength?: {
        value: number;
        message: string;
    };
    values?: string[];
    options?: string[];
}

export interface ICharacterFormProps {
    onSuccessSubmit: (character: ICharacter) => void;
}

export type Inputs = {
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
    location: string;
    image: FileList;
    date: string;
    consest: boolean;
};