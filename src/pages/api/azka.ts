import { NextApiRequest, NextApiResponse } from 'next';

type resType = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<resType>
) {
  res.status(200).send({ message: 'PP COKK WKWKW' });
}
