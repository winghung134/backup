import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("students", (table) => {
        table.increments();
        table.string("name");
        table.string("level");
        table.date("date_of_birth");
        table.integer("teacher_id").unsigned();
        table.foreign("teacher_id").references("teachers.id");
        table.timestamps(false, true);
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("students");
}

