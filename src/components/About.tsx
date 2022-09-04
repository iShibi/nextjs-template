import { useEffect, useState } from 'react';
import { type ExampleResponseType } from '../pages/api/example';

export function About() {
	const [exampleData, setExampleData] = useState<ExampleResponseType>();

	useEffect(() => {
		fetch('/api/example')
			.then(res => res.json())
			.then(data => setExampleData(data as ExampleResponseType))
			.catch(err => console.error(err));
	}, []);

	return exampleData ? (
		<div className='flex flex-col space-y-2 text-center'>
			<p className='bg-blue-600 py-2 text-white'>
				Data fetched from
				<a href='/api/example' target='_blank' rel='noopener noreferrer'>
					<code>{' /api/example '}</code>
				</a>
				endpoint:
			</p>
			<h1 className='text-2xl font-bold text-gray-800'>{exampleData.name}</h1>
			<div className='text-blue-800'>
				<a href={exampleData.github} target='_blank' rel='noopener noreferrer'>
					Github
				</a>
				<span className='text-black'>{' | '}</span>
				<a href={exampleData.twitter} target='_blank' rel='noopener noreferrer'>
					Twitter
				</a>
			</div>
		</div>
	) : (
		<></>
	);
}
