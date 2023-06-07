import Knex from "knex"

const knexconfigs = require("./knexfile");
const knexMode = "development"||process.env.NODE_ENV;
const knexconfig = knexconfigs[knexMode];
const knex = 
Knex(knexconfig)


async function Add(){
await knex
.insert(
[     {name:"Ben"},
    {name:"Ban"}]
)
.into("teachers")
// .returning("ADD to teachers")
console.log("Add to teachers");
}

async function Update() {
    await knex("teachers").update({name:"new tester"}).where("name","Ben")
console.log("updated");

}

// async function Select() {
//     await knex("teachers").select("name").where("name","new tester")
// console.log("select");

// }
async function del() {
    await knex("teachers").where("name","new tester").del()
console.log("del");

}




Add()
Update()
// Select()
del()
