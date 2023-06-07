import { Knex } from "knex";
import { hashPassword } from "../hash";
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("users").del();

  // Inserts seed entries
  await knex("items").insert([
    { name: "item1", count: 1, description: "user 1" },
    { name: "item2", count: 2, description: "user 2" },
    { name: "item3", count: 3, description: "user 3" },
  ]);

  const hashed_password = await hashPassword("1234");

  await knex("users").insert([
    { username: "user1", email: "user1@gmail.com", password: hashed_password },
    { username: "user2", email: "user2@gmail.com", password: hashed_password },
    { username: "user3", email: "user3@gmail.com", password: hashed_password },
  ]);
}
