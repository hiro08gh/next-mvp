import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPost } from "libs/api";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await getAllPost();
  res.json(result);
}
