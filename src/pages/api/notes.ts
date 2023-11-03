import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Notes from "@/lib/models/notes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const notes = await Notes.find({
          user: req.query.user,
        });
        res.status(200).json(notes);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const note = await Notes.create({
          ...req.body.note,
          createdAt: Date.now(),
        });
        res.status(201).json({ note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PATCH":
      try {
        const note = await Notes.updateOne(
          { _id: req.body.data._id },
          {
            ...req.body.data,
          }
        );
        res.status(201).json({ note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const note = await Notes.deleteOne({
          _id: req.body._id,
        });
        res.status(201).json({ note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
