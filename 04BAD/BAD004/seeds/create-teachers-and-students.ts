import { Knex } from "knex";
import path from "path";
import xlsx from "xlsx";

const filePath = path.join(
  __dirname,
  "./../course-0487250628129-BAD004-exercise.xlsx"
);
const workbook = xlsx.readFile(filePath);

interface user {
  username: string;
  password: string;
  level: string;
}
interface category {
  name: string;
}
interface file {
  name: string;
  content: string;
  is_file: number;
  category: string;
  owner: string;
}

const userRow: user[] = xlsx.utils.sheet_to_json(workbook.Sheets["user"]);
const fileRow: file[] = xlsx.utils.sheet_to_json(workbook.Sheets["file"]);
const cateRow: category[] = xlsx.utils.sheet_to_json(
  workbook.Sheets["category"]
);
const userMap = new Map()
const categoryMap = new Map()
const fileMap = new Map()

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("newuser").del();
  await knex("file").del();
  await knex("category").del();

  // Inserts seed entries

  try {
    await knex() 

  } catch (error) {
    console.log(error);
    
  }
  
  
  // for (let user of userRow) {
  //   return await knex("newuser")
  //     .insert({
  //       username: user.username,
  //       password: user.password,
  //       level: user.level,
  //     })
  //     .returning("username");
  // }
  // for (let category of cateRow) {
  //   return await knex("category")
  //     .insert({
  //       name: category.name,
  //     })
  //     .returning("name");
  // }

  // for (let file of fileRow) {
  //   // const category_id = await knex("category").select()
  //   console.log(fileRow);

  //   await knex("file").insert({
  //     name: file.name,
  //     content: file.content,
  //     is_file: file.is_file,
  //     category: file.category,
  //     owner: file.owner,
  //   });
  // }
}
