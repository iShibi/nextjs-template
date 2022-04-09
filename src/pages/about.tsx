import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/About';

const AboutPage: NextPage = () => {
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
};

export default AboutPage;
