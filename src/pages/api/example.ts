import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseType {
	name: string;
	twitter: string;
	github: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
	return res
		.status(200)
		.json({ name: 'Shubham Parihar', twitter: 'https://twitter.com/iShiibi', github: 'https://github.com/iShibi' });
}
