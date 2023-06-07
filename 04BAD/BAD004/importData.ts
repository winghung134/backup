import xlsx from "xlsx"
import path from"path"
import Knex from "knex"
import pg from "pg"
const knexConfigs = require("./knexfile");
const configMode = process.env.NODE_ENV || "development";
const knexConfig = knexConfigs[configMode];
const knex = Knex(knexConfig);

const filePath = path.join(__dirname,"course-0487250628129-BAD004-exercise.xlsx") 
const workbook = xlsx.readFile(filePath);
 type userRow1 = {username:string,password:number|string,level:string}
type fileRow1 = {name:string,content:string,is_file:number,category:string,owner:string}
type cateRow1 = {name:string}
 const userRow:userRow1[] = xlsx.utils.sheet_to_json(workbook.Sheets["user"])
 const fileRow:fileRow1[] = xlsx.utils.sheet_to_json(workbook.Sheets["file"])
 const cateRow:cateRow1[] = xlsx.utils.sheet_to_json(workbook.Sheets["category"])


// console.log(userRow[0]);
// console.log(fileRow[0]);
// console.log(cateRow[0]);






