import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("items", (table) => {
    table.increments();
    table.string("name");
    table.integer("count");
    table.string("description");
  });
  await knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username").unique();
    table.string("email").unique();
    table.string("password");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("items");
  await knex.schema.dropTable("users");
}
