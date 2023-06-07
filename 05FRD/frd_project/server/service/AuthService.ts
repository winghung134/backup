import { User } from "../model";
import jwtConfig from "../jwt";

import { Knex } from "knex";
import { checkPassword, hashPassword } from "../hash";
export class AuthService {
  constructor(private knex: Knex) {}
  table() {
    return this.knex("users");
  }
  // create Token
  createToken = (user: User) => {
    let payload = {
      id: user.id,
      email: user.email,
    };
    let token: string = jwt.encode(payload, jwtConfig.jwtSecret);
    return token;
  };

  decodeToken = async (token: string) => {
    let payload: User;

    try {
      payload = await jwt.decode(token, jwtConfig.jwtSecret);
    } catch (error) {
      console.log(error);
      return false;
    }
    return payload;
  };

  //CRUD
  getUser = async () => {
    try {
      let list = await this.table().select("*");
      return { msg: true, list: list };
    } catch (error) {
      console.log(error);

      return error;
    }
  };
  createUser = async (phoneNo: number, email: string, password: string) => {
    try {
      let hashed = await hashPassword(password);
      await this.table().insert({
        phone_no: phoneNo,
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
    phone_no: number,
    email: string,
    password: string
  ) => {
    let result = await this.table().update("email", email).where("id", userid);
    await this.table().update("password", password).where("id", userid);
    await this.table().update("phone_no", phone_no).where("id", userid);

    if (!result) {
      return false;
    }
    return true;
  };
  removeUser = async (userid: number) => {
    let result = await this.table().where("id", userid).del();
    if (!result) {
      return false;
    }
    return true;
  };
  // login
  login = async (email: string, password: string) => {
    let user: User[] = await this.table()
      .select("*")
      .where("username", email)
      .orderBy("id");
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
