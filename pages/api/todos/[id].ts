import type { NextApiRequest, NextApiResponse } from "next";

import { toggleDone, deleteTodo } from "../../../utils/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "PUT") {
    if (toggleDone(req.query.id))
      return res.status(200).json({ status: "Ok", msg: "Update completed" });
    else
      return res
        .status(300)
        .json({ status: "Failed", msg: "Db access failed" });
  } else if (req.method == "DELETE") {
    if (deleteTodo(req.query.id))
      return res.status(200).json({ status: "Ok", msg: "Update completed" });
    else
      return res
        .status(300)
        .json({ status: "Failed", msg: "Db access failed" });
  }
}
