import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../store/Store';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
