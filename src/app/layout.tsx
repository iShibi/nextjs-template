import { type ReactNode } from 'react';
import '../styles/global.css';
import { Navbar } from './Navbar';

export interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<head>
				<meta name='viewport' content='width=device-width' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<meta name='description' content='// TODO: website description' />
				{/* Open Graph Meta Tags */}
				<meta property='og:title' content='// TODO: website name' />
				<meta property='og:description' content='// TODO: website description' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='/logo.png' />
				{/* Theme Color Meta Tags */}
				<meta name='theme-color' content='// TODO: color' />
				{/* Twitter Meta Tags  */}
				<meta name='twitter:title' content='// TODO: website name' />
				<meta name='twitter:description' content='// TODO: website description' />
				<meta name='twitter:image' content='// TODO: https://root-domain-name/logo.png' />
				<meta name='twitter:card' content='summary' />
			</head>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
