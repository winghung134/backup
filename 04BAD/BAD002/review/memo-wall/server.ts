import express from "express";
import type { Request, Response, NextFunction } from "express";
import path from "path";
import expressSession from "express-session";
import pg from "pg";
import http from "http";
import { Server as SocketIO } from "socket.io";
import grant from "grant";
import dotenv from "dotenv";
dotenv.config();

export const dbClient = new pg.Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});
dbClient.connect();

const grantExpress = grant.express({
  defaults: {
    origin: "http://localhost:8080",
    transport: "session",
    state: true,
  },
  google: {
    key: process.env.GOOGLE_CLIENT_ID || "",
    secret: process.env.GOOGLE_CLIENT_SECRET || "",
    scope: ["profile", "email"],
    callback: "/login/google",
  },
});

declare module "express-session" {
  interface SessionData {
    isLoggedIn?: boolean;
  }
}

const app = express();
const server = new http.Server(app);
export const io = new SocketIO(server);

io.on("connection", (socket) => {
  console.log(socket.id);
});

// Section 1: Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  expressSession({
    secret: "Tecky Academy teaches typescript",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(grantExpress as express.RequestHandler);

// logging 用 middleware
app.use((req, _res, next) => {
  console.log(`Path ${req.path}, Method: ${req.method}`);
  next();
});

// Section 2: Route Handlers
import { authRoutes } from "./routers/authRoutes";
import { memoRoutes } from "./routers/memoRoutes";

app.use("/memos", memoRoutes);
app.use(authRoutes);

// Section 3: Serve
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "uploads")));
const guardMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isLoggedIn) next();
  else res.redirect("/");
};
app.use(guardMiddleware, express.static(path.join(__dirname, "private")));

// Section 4: Error Handling
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
