import {Bearer} from "permit"
import { Request,Response,NextFunction } from "express-serve-static-core";
export function checkToken(res:Response,req:Request,Next:NextFunction){
let token:string;
    token = permit.check(req);


if(!token){}

    return Next()
}