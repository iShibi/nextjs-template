import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<main className='flex justify-center bg-red-500 py-6'>
				<p className='text-lg font-thin text-white sm:text-2xl md:text-4xl'>
					🔋 Batteries included Next.js project template
				</p>
			</main>
		</>
	);
};

export default HomePage;
