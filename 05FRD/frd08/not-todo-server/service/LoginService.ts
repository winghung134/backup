import { Knex } from "knex";
import { checkPassword, hashPassword } from "../hash";
import { User } from "../model";
// import jwtConfig from "../jwt";
// import jwt from "jwt-simple";
export class LoginService {
  constructor(private knex: Knex) {}
  getUser = async () => {
    try {
      let list = await this.knex("users").select("*");
      return list;
    } catch (error) {
      console.log(error);
      
      return error

    }
  };
  createUser = async (username: string, email: string, password: string) => {
    try {
      let hashed = await hashPassword(password);
      await this.knex("users").insert({
        username: username,
        email: email,
        password: hashed,
      });
      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  };
  updateUser = async (
    userid: number,
    username: string,
    email: string,
    password: string
  ) => {
    let result = await this.knex("users").update("").where("id", userid);
    if (!result) {
      return false;
    }
    return true;
  };
  removeUser = async (userid: number) => {
    let result = await this.knex("users").where("id", userid).del();
    if (!result) {
      return false;
    }
    return true;
  };
  // decodeToken = async (token: string) => {
    // let payload: User;

    // try {
      // payload = await jwt.decode(token, jwtConfig.jwtSecret);
    // } catch (error) {
      // console.log(error);
      // return false;
    // }
    // return payload;
  // };

  login = async (username: string, password: string) => {
    let user: User[] = await this.knex("users")
      .select("*")
      .where("username", username);
    console.log("check user", user);
    let Match = await checkPassword(password, user[0].password);
    console.log("check match", Match);
    if (Match) {
      return true;
    } else {
      return false;
    }
  };
}
