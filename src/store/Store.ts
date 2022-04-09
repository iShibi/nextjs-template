import { configureStore } from '@reduxjs/toolkit';
import { counterSliceReducer } from './CounterSlice';
import { useDispatch, type TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
	reducer: {
		counterSlice: counterSliceReducer,
	},
});

export type StoreStateType = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<StoreDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<StoreStateType> = useSelector;
