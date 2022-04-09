import { createSlice } from '@reduxjs/toolkit';

interface CounterSliceStateType {
	count: number;
}

const initialState: CounterSliceStateType = {
	count: 0,
};

export const counterSlice = createSlice({
	name: 'counterSlice',
	initialState,
	reducers: {
		increment: state => {
			state.count++;
		},
		decrement: state => {
			state.count--;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
