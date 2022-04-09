import type { NextPage } from 'next';
import Head from 'next/head';
import { Counter } from '../components/Counter';

const CounterPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Counter</title>
			</Head>

			<main>
				<Counter />
			</main>
		</>
	);
};

export default CounterPage;
