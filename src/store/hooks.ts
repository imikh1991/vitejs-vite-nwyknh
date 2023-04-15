import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store';
// нам нужен реэкспорт
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* настроил так

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
*/
