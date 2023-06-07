import { Knex } from "knex";


export async function up(knex: Knex) {
    await knex.schema.createTable("teachers", (table) => {
      table.increments();
      table.string("name");
      table.date("date_of_birth");
      table.timestamps(false, true);
    });
  }
  
  export async function down(knex: Knex) {
    await knex.schema.dropTable("teachers");
  }

