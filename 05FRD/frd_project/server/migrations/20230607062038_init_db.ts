import { table } from "console";
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("email");
    table.integer("phone_no");
    table.boolean("isVerified");
    table.string("password");
    table.string("token");
    table.timestamp("token_created_at");
  });

  await knex.schema.createTable("parkings", (table) => {
    table.increments();
    table.float("parking_lat");
    table.float("parking_lng");
    table.integer("userid").unsigned();
    table.foreign("userid").references("users.id");
    table.boolean("present");
    table.timestamps(true, true);
  });
  await knex.schema.createTable("hints", (table) => {
    table.increments();
    table.string("typeOfReport");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.float("hint_lat");
    table.float("hint_lng");
    table.timestamps(true, true);
    table.timestamp("report_time", { useTz: true });
    table.string("image");
    table.integer("like_count");
    table.integer("dislike_count");
  });

  await knex.schema.createTable("user_like_hint", (table) => {
    table.increments();
    table.integer("hint_id").unsigned();
    table.foreign("hint_id").references("hints.id");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_like_hint");
  await knex.schema.dropTable("parkings");
  await knex.schema.dropTable("hints");
  await knex.schema.dropTable("users");
}
