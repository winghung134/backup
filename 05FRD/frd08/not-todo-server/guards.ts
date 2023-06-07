import  { Request, Response, NextFunction } from "express";
import { Bearer } from "permit";
// import { userService } from "./server";

// const permit = 
new Bearer({
  query: "access_token",
});

export async function isLoggedIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // let token: string;
  try {
    //  token = permit.check(req);

    // await userService.decodeToken(token);
    // console.log("guard check user",user);

    // req.user = user;
    return next();
  } catch (e) {
    return res.status(401).json({ msg: "Permission Deniedd" });
  }
}
