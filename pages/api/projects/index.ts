import { NextApiRequest, NextApiResponse } from 'next';
import { projectListData } from '../../../utils/project-data';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!Array.isArray(projectListData)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(projectListData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
