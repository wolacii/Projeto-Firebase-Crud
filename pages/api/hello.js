// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db, ref, set } from "@/services/fb";
import { v4 as uuid } from "uuid";

export default function handler(req, res) {

  const id = uuid()
  set(ref(db, 'teste/' + id), req.body)
  .then(() => {
    res.status(200).json({...req.body, id})
  })
  .catch((error) => {
    res.status(400).json({error})
  });
}
