import path from "path";
import xlsx from "xlsx";
import { hashPassword } from "./hash";

import { Client } from "pg";

import dotenv from "dotenv";
dotenv.config();

interface UserRow {
  username: string;
  password: string;
}

interface MemoRow {
  content: string;
}

async function main() {
  const client = new Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });

  const filepath = path.join(__dirname, "db", "data.xlsx");
  const workbook = xlsx.readFile(filepath);

  const userRows = xlsx.utils.sheet_to_json<UserRow>(workbook.Sheets["user"]);
  const memoRows = xlsx.utils.sheet_to_json<MemoRow>(workbook.Sheets["memo"]);

  console.log(userRows[0]);
  console.log(memoRows[0]);

  await client.connect();

  await client.query(/*SQL*/ `DELETE FROM likes`);
  await client.query(/*SQL*/ `DELETE FROM users`);
  await client.query(/*SQL*/ `DELETE FROM memos`);

  // form user sql and insert
  for (const userRow of userRows) {
    // WRONG !!! -> SQL Injection
    // const sql = `INSERT INTO users (username, password) VALUES (${userRow.username}, ${userRow.password});`;
    const userSql = /*SQL*/ `INSERT INTO users (username, password) VALUES ($1, $2)`;
    const hashed = await hashPassword(userRow.password);
    await client.query(userSql, [userRow.username, hashed]);
  }

  // form memo sql and insert
  //  INSERT INTO memos (content) VALUES ($1), ($2), ...;

  let memoSql = `INSERT INTO memos (content) VALUES `;
  for (let i = 0; i < memoRows.length; i++) {
    if (i < memoRows.length - 1) memoSql += `($${i + 1}),`;
    else memoSql += `($${i + 1})`;
  }
  console.log(memoSql);
  await client.query(
    memoSql,
    memoRows.map((row) => row.content)
  );

  // ====================
  // Another Version
  // ====================
  // await client.query(
  //   memoRows.reduce(
  //     (prev, _, idx) =>
  //       idx < memoRows.length - 1 ? prev + `($${idx + 1}),` : prev + `($${idx + 1})`,
  //     /*SQL*/ `INSERT INTO memos (content) VALUES `
  //   ),
  //   memoRows.map((row) => row.content)
  // );

  // INSERT INTO likes (user_id, memo_id) VALUES (1, 2);
  // Rules: 2 users + 3 memos
  // Step 1: Select data from users (1, 2)
  // Step 2: Select data from memos (1, 2, 3)
  // Step 3: 組合 -> Insert (Random)

  const users = (await client.query<{ id: number }>(/*SQL*/ `SELECT id FROM users`)).rows;
  const memos = (await client.query<{ id: number }>(/*SQL*/ `SELECT id FROM memos`)).rows;
  const targetUsers = Math.min(2, users.length);
  const memoPerUser = Math.min(3, memos.length);

  for (let i = 0; i < targetUsers; i++) {
    const userPoolSize = targetUsers - i;
    const idxForUser = Math.floor(Math.random() * userPoolSize);
    const tempUser = users[idxForUser];
    users[idxForUser] = users[userPoolSize - 1];
    users[userPoolSize - 1] = tempUser;
    for (let j = 0; j < memoPerUser; j++) {
      const memoPoolSize = memoPerUser - j;
      const idxForMemo = Math.floor(Math.random() * memoPoolSize);
      const tempMemo = memos[idxForMemo];
      memos[idxForMemo] = memos[memoPoolSize - 1];
      memos[memoPoolSize - 1] = tempMemo;
      await client.query(/*SQL*/ `INSERT INTO likes (user_id, memo_id) VALUES ($1, $2)`, [
        tempUser.id,
        tempMemo.id,
      ]);
    }
  }

  await client.end();
}

main();
