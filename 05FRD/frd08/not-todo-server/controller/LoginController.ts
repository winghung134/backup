import express, { Response, Request } from "express";
import { LoginService } from "../service/LoginService";
// import jwtSimple from "jwt-simple";
// import jwt from "../jwt";
export class LoginController {
  router = express.Router();
  constructor(private userService: LoginService) {
    // CRUD
    this.router.post("/create", this.createUser);
    this.router.post("/get", this.getUser);
    this.router.put("/", this.updateUser);
    this.router.delete("/", this.removeUser);
    // login
    this.router.post("/login", this.login);
  }

  // create jwt token
  // createToken = (username: string, password: string) => {
  //   const payload = { username, password };
  //   const token = jwtSimple.encode(payload, jwt.jwtSecret);
  //   return token;
  // };

  // login
  login = async (req: Request, res: Response) => {
    try {
      console.log("login");
      const { username, password } = req.body;
      console.log("check login", username, password);

      if (!username || !password) {
        res.json({ msg: "missing password/username" });
      } else {
        let result = await this.userService.login(username, password);

        if (!result) {
          res.status(400).json({ msg: "error in login result" });
        } else {
          // let token = this.createToken(username, password);
          // console.log(token);
          res.status(200).json({ msg: "login success" });
        }
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "incorrect password/username" });
    }
  };

  // CRUD
  createUser = async (req: Request, res: Response) => {
    let { username, email, password } = req.body;
    console.log("check create :", username, email, password);

    let result = await this.userService.createUser(username, email, password);

    if (result) {
      res.status(200).json({ msg: result });
    } else {
      res.status(500).json({ msg: "create user failed" });
    }
  };
  getUser = async (req: Request, res: Response) => {
    try {
      let result = await this.userService.getUser();
      if (!result) {
        res.status(400).json({ msg: "error in get user" });
      } else {
        res.status(200).json({ user: result });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: "getuser error" });
    }
  };
  updateUser = async (req: Request, res: Response) => {
    const { username, email, password, userid } = req.body;
    await this.userService.updateUser(username, email, password, userid);
  };
  removeUser = async (req: Request, res: Response) => {
    const { userid } = req.body;
    console.log(userid);

     await this.userService.removeUser(userid);
    res.status(200).json({ msg: "test" });
  };
}
