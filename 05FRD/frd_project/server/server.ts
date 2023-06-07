import express from "express";
import Knex from "knex";

const app = express();
app.use(cors());
const knexConfig = require("./knexfile");
const knex = Knex(knexConfig[process.env.NODE_ENV || "development"]);

import { AuthContoller } from "./controller/AuthController";
import { AuthService } from "./service/AuthService";
const authservice = new AuthService(knex);
const authcontroller = new AuthContoller(authservice);
app.use("/auth", authcontroller.router);

const port = 8080;
app.listen(8080, () => console.log(`listening at port ${port}.`));
