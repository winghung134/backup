import express, { Request, Response } from "express";
import { TodoService } from "../service/TodoService";
import { isLoggedIn } from "../guards";

export class TodoController {
  router = express.Router();
  constructor(private itemService: TodoService) {
    this.router.get("/", isLoggedIn, this.getItem);
    this.router.post("/create", isLoggedIn, this.createItem);
    this.router.put("/update", isLoggedIn, this.updateItem);
    this.router.delete("/remove", isLoggedIn, this.removeItem);
  }
  getItem = async (req: Request, res: Response) => {
    let items = await this.itemService.getItem();
    // console.log("getItem controller check", item);

    if (items !== false) {
      res.status(200).json({ msg: "get item success!", item: items });
    }
  };
  createItem = async (req: Request, res: Response) => {
    console.log("entering create item");
    let { name, description } = req.body;
    let count = 0;
    if (!name || !description) {
      res.status(400).json({ msg: "missing name/descriptionssss" });
    } else {
      let result = await this.itemService.createItem(name, count, description);
      res.status(200).json({ msg: "created successfully", item: result });
    }
  };
  updateItem = async (req: Request, res: Response) => {
    const { id, name } = req.body;
    console.log(req.body);
    if (!id || !name) {
      res.status(400).json({ msg: "missing id/nameass" });
    } else {
      let result = await this.itemService.updateItem(id, name);
      res.status(200).json({ msg: "update", item: result });
    }
  };
  removeItem = async (req: Request, res: Response) => {
    const { id } = req.body;
    console.log("remove checksss", req.body,id);
    if (!id) {
      res.json({ msg: "missing idsssss" });
    } else {
      await this.itemService.removeItem(id);
      res.json({ msg: "delete succesass" });
    }
  };
}
