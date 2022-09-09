import Head from 'next/head';
import { Counter } from '../components/Counter';

export default function CounterPage() {
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
}
