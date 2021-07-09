// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type Data = {
  body?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log("/api/tweet has been called");
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data = JSON.parse(req.body);
    await prisma.tweet.create({ data });
    res.status(200).json({ message: "Success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Oops! Internal Data Error" });
  }

  // if we have the right data we can save it to the database
  // res.status(200).json({ body: "/api/tweet initiated" });
  // console.log("/api/tweet initiated");
}
