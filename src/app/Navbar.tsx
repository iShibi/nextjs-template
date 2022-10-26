import Link from 'next/link';

export function Navbar() {
	return (
		<div className='mb-4 flex select-none flex-row justify-evenly bg-gray-600 py-3 text-white'>
			<Link href='/'>Home</Link>
			<Link href='/counter'>Counter</Link>
			<Link href='/about'>About</Link>
		</div>
	);
}
