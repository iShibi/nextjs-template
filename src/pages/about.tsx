import Head from 'next/head';
import { About } from '../components/About';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>

			<main>
				<About />
			</main>
		</>
	);
}
