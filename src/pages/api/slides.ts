import { NextApiRequest, NextApiResponse } from "next";

const slides = [
  {
    title: "해외 마케팅",
    icon: "/assets/slide1.svg",
  },
  {
    title: "퍼블리셔",
    icon: "/assets/slide2.svg",
  },
  {
    title: "캐드원(제도사)",
    icon: "/assets/slide3.svg",
  },
  {
    title: "해외 세일즈",
    icon: "/assets/slide4.svg",
  },
  {
    title: "해외 CS",
    icon: "/assets/slide5.svg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(slides);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
