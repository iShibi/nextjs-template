import type { NextApiRequest, NextApiResponse } from 'next';

export interface ExampleResponseType {
	name: string;
	twitter: string;
	github: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ExampleResponseType>) {
	return res
		.status(200)
		.json({ name: 'Shubham Parihar', twitter: 'https://twitter.com/iShiibi', github: 'https://github.com/iShibi' });
}
