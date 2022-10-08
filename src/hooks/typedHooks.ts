import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { TypedDispatchHook, RootState } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => TypedDispatchHook = useDispatch;
