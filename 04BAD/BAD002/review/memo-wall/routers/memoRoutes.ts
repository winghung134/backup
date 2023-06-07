import { io, dbClient } from "./../server";
import express from "express";
import type { Request, Response } from "express";
import formidable from "formidable";
import { form, formParsePromise } from "../formidable";
import { Memo } from "../model";

export const memoRoutes = express.Router();

memoRoutes.post("/", createMemo);
memoRoutes.get("/", getAllMemos);
memoRoutes.put("/:mid", updateMemo);
memoRoutes.delete("/:mid", deleteMemo);
memoRoutes.get("/like_memos", getLikeMemos);

// /products
// /products?category=123

async function getLikeMemos(req: Request, res: Response) {
  try {
    const userId = parseInt(req.query.user_id as string);
    const queryResult = await dbClient.query(
      /*SQL*/ `SELECT memos.id, memos.content, memos.image, likes.user_id FROM memos INNER JOIN likes ON memos.id = likes.memo_id WHERE likes.user_id = $1`,
      [userId]
    );

    res.json(queryResult.rows);
  } catch (err) {
    console.error(err.message);
    // Internal Server Error
    res.status(500).json({ message: "internal server error" });
  }
}

async function createMemo(req: Request, res: Response) {
  const { fields, files } = await formParsePromise(form, req);
  const content = fields.content as string;
  if (!content) {
    res.status(400).json({ message: "missing content" });
    return;
  }
  const imageFilename = (files.image as formidable.File | undefined)?.newFilename;

  await dbClient.query(/*SQL*/ `INSERT INTO memos (content, image) VALUES ($1, $2)`, [
    content,
    imageFilename,
  ]);

  // Broadcast
  io.emit("create_memo");

  res.json({ message: "success" });
}

async function getAllMemos(_req: Request, res: Response) {
  const queryResult = await dbClient.query<Memo>(
    "SELECT id, content, image FROM memos ORDER BY id DESC"
  );
  res.json(queryResult.rows); // pass array into res.json()
}

async function updateMemo(req: Request, res: Response) {
  const memoId = +req.params.mid;
  const newContent = req.body.content;

  if (isNaN(memoId)) {
    res.status(400).json({ message: "invalid memo id" });
    return;
  }

  await dbClient.query(/*SQL*/ `UPDATE memos SET content = $1 WHERE id = $2`, [newContent, memoId]);
  res.json({ message: "success" });
}

async function deleteMemo(req: Request, res: Response) {
  const memoId = +req.params.mid;
  if (isNaN(memoId)) {
    res.status(400).json({ message: "invalid memo id" });
    return;
  }

  await dbClient.query(/*SQL*/ `DELETE FROM memos WHERE id = $1`, [memoId]);
  res.json({ message: "success" });
}
