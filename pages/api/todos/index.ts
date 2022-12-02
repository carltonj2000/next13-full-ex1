// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { readall, add } from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    if (!add(req.body.name))
      return res.status(300).json({ status: "Failed", msg: "Adding failed" });
    else return res.status(200).json({ status: "Ok", msg: "Update complete" });
  }
  const todos = await readall();
  res.status(200).json(todos);
}
