// import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface defaultValues {
    name: '';
    picture: '';
    dateOfBirth: '';
    gender: '';
    agreeToTerms: false;
    favoriteColor: '';
}

export interface SearchProps {
    value: string;
    onSearchChange: (value: string) => void;
    handleClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface FormData {
    name: string;
    picture: DataTransfer;
    dateOfBirth: string;
    gender: string;
    agreeToTerms: boolean;
    favoriteColor: string;
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
    open: (id?: string | number) => void;
}

export interface ICardsProps {
    characters: ICharacter[];
}

export interface ICharacterFormState {
    value: FormData[];
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

export interface IFormFieldProps {
    formField: IFormField;
    register: UseFormRegister<Inputs>;
    errors: FieldErrors<Inputs>;
}
