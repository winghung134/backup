import { AuthService } from "../service/AuthService";
import express, { Request, Response } from "express";
export class AuthContoller {
  router = express.Router();
  constructor(private AuthController: AuthService) {
    this.router.get("/", this.getUser);
    this.router.post("/create", this.createUser);
    this.router.put("/", this.updateUser);
    this.router.delete("/", this.removeUser);
  }
  //

  //
  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    let result = await this.AuthController.login(username, password);
    if (result) {
      res.status(200).json({ msg: "success login" });
    } else {
      res.status(400).json({ msg: "fail to login" });
    }
  };
  // CRUD
  getUser = async (res: Response) => {
    let list: any = await this.AuthController.getUser();
    if (list.msg == true) {
      res.status(200).json({ Users: list });
    } else {
      res.status(400).json({ msg: "fail to get user" });
    }
  };
  createUser = async (req: Request, res: Response) => {
    try {
      const { email, phone_no, password } = req.body;
      console.log("req body", req.body);
     await this.AuthController.createUser(
        phone_no,
        email,
        password
      );
        res.status(200).json({ msg: "success to create user" });
    } catch (error) {
      console.log(error);

      res.status(400).json({ msg: "fail to create user" });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const { userid, phone_no, email, password } = req.body;
    let result = await this.AuthController.updateUser(
      userid,
      phone_no,
      email,
      password
    );
    if (result) {
      res.json({ msg: "success in update user" });
    } else {
      res.status(400).json({ msg: "fail to update user!" });
    }
  };

  removeUser = async (req: Request, res: Response) => {
    const { userid } = req.body;
    let result = await this.AuthController.removeUser(userid);
    if (result) {
      res.status(200).json({ msg: "success in delete user" });
    } else {
      res.json({ msg: "fail to delete user!" });
    }
  };
}
