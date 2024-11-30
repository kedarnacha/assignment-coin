import { NextApiRequest, NextApiResponse } from 'next';

const workers = [
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    img: '/assets/person.png',
    experience: '2y+',
    countryFlag: 'assets/flag.svg',
    tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    img: '/assets/person.png',
    experience: '2y+',
    countryFlag: 'assets/flag.svg',
    tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    img: '/assets/person.png',
    experience: '2y+',
    countryFlag: 'assets/flag.svg',
    tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(workers);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
