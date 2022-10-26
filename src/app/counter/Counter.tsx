'use client';

import { useState } from 'react';

export function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className='flex flex-col'>
			<div className='flex justify-center text-8xl font-thin'>{count}</div>
			<div className='mt-4 flex select-none justify-center space-x-2 font-mono text-4xl text-white'>
				<button className='rounded-md bg-red-600 px-5 py-2 shadow-md' onClick={() => setCount(count - 1)}>
					-
				</button>
				<button className='rounded-md bg-blue-600 px-5 py-2 shadow-md' onClick={() => setCount(count + 1)}>
					+
				</button>
			</div>
		</div>
	);
}
