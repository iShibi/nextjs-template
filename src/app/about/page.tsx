import { use } from 'react';
import { type ExampleResponseType } from '../../pages/api/example';

async function getData(): Promise<ExampleResponseType> {
	const res = await fetch('http://localhost:3000/api/example');
	return res.json() as Promise<ExampleResponseType>;
}

export default function AboutPage() {
	const exampleData = use(getData());

	return (
		<>
			<main>
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
			</main>
		</>
	);
}
