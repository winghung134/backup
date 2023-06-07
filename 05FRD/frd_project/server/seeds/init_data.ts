import { Knex } from "knex";
import { hashPassword } from "../hash";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("user_like_hint").del();
  await knex("parking").del();
  await knex("hints").del();
  await knex("users").del();
 const hash =hashPassword("123")
 // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      email: "test1234@mail.com",
      phone_no: 12312312,
      isVerified: true,
      password: hash,
      token: "",
    },
  ]);
  await knex("parking").insert([
    {
      id: 1,
      parking_lat: 22.373859903679616,
      parking_lng: 114.10672730602184,
      userid: 1,
      present: true,
    },
  ]);
  await knex("hints").insert([
    {
      id: 1,
      typeOfReport: "rowValue1",
      user_id: 1,
      hint_lat: 22.374030410686125,
      hint_lng: 114.10581919582292,
      image: "",
      report_time: new Date(),
      like_count: 1,
      dislike_count: 0,
    },
  ]);
  await knex("user_like_hint").insert([{ id: 1, hint_id: 1, user_id: 1 }]);
}
