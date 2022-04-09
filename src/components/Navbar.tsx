import Link from 'next/link';

export function Navbar() {
	return (
		<div className='mb-4 flex select-none flex-row justify-evenly bg-gray-600 py-3 text-white'>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/counter'>
				<a>Counter</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
		</div>
	);
}
