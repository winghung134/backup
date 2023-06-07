import express from "express";
import Knex from "knex";
import { LoginController } from "./controller/LoginController";
import { LoginService } from "./service/LoginService";
import { TodoService } from "./service/TodoService";
import { TodoController } from "./controller/TodoController";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const knexConfig = require("./knexfile");
const knex = Knex(knexConfig[process.env.NODE_ENV || "development"]);

export const userService = new LoginService(knex);
const userController = new LoginController(userService);

const itemService = new TodoService(knex);
const itemController = new TodoController(itemService);

app.use("/auth", userController.router);
app.use("/todo", itemController.router);

// 404 response handler
app.use("/", (req, res) => {
  res.json({ msg: "test" });
});

const port = 8080;
app.listen(port, () => console.log(`listening at ${port}`));
