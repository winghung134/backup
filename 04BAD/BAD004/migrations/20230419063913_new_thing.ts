import { Knex } from "knex";


export const table2 = Object.freeze({
    User:"newuser",
    category:"category",
    file:"file"
    })
    
export async function up(knex: Knex): Promise<void> {
// create tables schema

await knex.schema.createTable(table2.User,(table)=>{
    table.increments();
    table.string("username");
    table.string("password");
table.string("level");

})
await knex.schema.createTable(table2.category,(table)=>{
    table.increments();
    table.string("name");
})
await knex.schema.createTable(table2.file,(table)=>{
    table.increments();
    table.string("name");
    table.string("content");
    table.integer("is_file");
    table.integer("category1").unsigned();
    table.foreign("category1").references(`${table2.category}.id`);
    table.integer("owner").unsigned();
    table.foreign("owner").references(`${table2.User}.id`)

})

}


export async function down(knex: Knex): Promise<void> {
await knex.schema.dropTable("file")
await knex.schema.dropTable("newuser")
await knex.schema.dropTable("category")
}