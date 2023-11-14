import { first, last } from "cheerio/lib/api/traversing";
import { User } from "../../configuration/Userinterface";
import { register, getToken } from "../services/apiServices";
import { Request, Response } from 'express';





export const signUp = async (req: Request, res: Response) => {
    try {
        const user = req.body as User;
        console.log(req.body);
        if (user.email === undefined || user.firstName === undefined || user.lastName === undefined || user.password === undefined) {
            return res.status(500).send("not format");
        }
        const userToInsert = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password
        }
        const result = await register(userToInsert)
        const token = await getToken(result)
        return res.status(200).send(token);
    } catch (err: any) {
        return res.status(500).send(err.message);
    }
}



export const logIn = async (req: Request, res: Response) =>{
    try{
        const user = req.body as User;
        const token = await getToken(user)
        res.status(200).send(token)
    }
    catch(err: any){
        res.status(500).send(err.message)
    }    
}