import type { NextPage } from 'next';
import Head from 'next/head';
import { Counter } from '../components/Counter';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<main>
				<Counter />
			</main>

			<footer></footer>
		</>
	);
};

export default Home;
