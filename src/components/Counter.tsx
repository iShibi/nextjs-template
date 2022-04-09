import { decrement, increment } from '../store/CounterSlice';
import { useTypedDispatch, useTypedSelector } from '../store/Store';

export function Counter() {
	const dispatch = useTypedDispatch();
	const { count } = useTypedSelector(state => state.counterSlice);

	return (
		<div className='flex flex-col font-mono'>
			<div className='flex justify-center text-8xl'>{count}</div>
			<div className='mt-4 flex justify-center space-x-2 text-4xl text-white'>
				<button className='bg-red-600 px-5 py-2' onClick={() => dispatch(decrement())}>
					-
				</button>
				<button className='bg-blue-600 px-5 py-2' onClick={() => dispatch(increment())}>
					+
				</button>
			</div>
		</div>
	);
}
