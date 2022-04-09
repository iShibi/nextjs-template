import { decrement, increment } from '../store/CounterSlice';
import { useTypedDispatch, useTypedSelector } from '../store/Store';

export function Counter() {
	const dispatch = useTypedDispatch();
	const { count } = useTypedSelector(state => state.counterSlice);

	return (
		<div className='flex flex-col'>
			<div className='flex justify-center text-8xl font-thin'>{count}</div>
			<div className='mt-4 flex select-none justify-center space-x-2 font-mono text-4xl text-white'>
				<button className='rounded-md bg-red-600 px-5 py-2 shadow-md' onClick={() => dispatch(decrement())}>
					-
				</button>
				<button className='rounded-md bg-blue-600 px-5 py-2 shadow-md' onClick={() => dispatch(increment())}>
					+
				</button>
			</div>
		</div>
	);
}
