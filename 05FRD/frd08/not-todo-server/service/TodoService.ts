import { Knex } from "knex";

export class TodoService {
  constructor(private knex: Knex) {}

  // table() {
  //   return this.knex("items");
  // }

  getItem = async () => {
    try {
      let selectResult = await this.knex("items").select().from("items");
      console.log("check select query result", selectResult);
      return selectResult;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  createItem = async (name: string, count: number, description: string) => {
    try {
      console.log("entering createItem service");

      let queryResult = await this.knex("items")
        .insert({
          name: name,
          count: count,
          description: description,
        })
        .returning("*");

      console.log("check insert queryResultssss", queryResult[0]);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  updateItem = async (id: number, name: string) => {
    try {
      await this.knex("items").update("name", name).where("id", id);
    } catch (error) {
      console.error(error);
    }
  };
  removeItem = async (id: number) => {
    try {
      await this.knex("items").del().where("id", id);
    } catch (error) {
      console.error(error);
    }
  };
}
