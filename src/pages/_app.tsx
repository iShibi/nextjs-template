import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../store/Store';
import type { AppProps } from 'next/app';
import { Navbar } from '../components/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<Navbar />
				<Component {...pageProps} />
			</Provider>
		</>
	);
}
