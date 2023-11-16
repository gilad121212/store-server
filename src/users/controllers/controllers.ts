import { first, last } from "cheerio/lib/api/traversing";
import { User } from "../../configuration/Userinterface";
import { register, getToken } from "../services/apiServices";
import { Request, Response } from 'express';
import { getId } from "../dal";





export const signUp = async (req: Request, res: Response) => {
    try {
        const user = req.body as User;
        console.log(req.body);
        if (!user.email || !user.firstName || !user.lastName || !user.password) {
            return res.status(500).send("not format");
        }
        if (user.password.length < 6){
            return res.status(500).send("password should be ...");
        }
        const userToInsert = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password
        }
        const id = await register(userToInsert)
        const token = await getToken({ email: userToInsert.email, password: userToInsert.password })
        const result = {
            token: token,
            id: id
        }
        return res.status(200).send(result);
    } catch (err: any) {
        return res.status(500).send(err.message);
    }
}



export const logIn = async (req: Request, res: Response) => {
    try {
        const user = req.body as User;
        const token = await getToken(user)
        const id = await getId(user)
        const result = {
            token: token,
            id: id
        }
        res.status(200).send(result)
    }
    catch (err: any) {
        res.status(500).send(err.message)
    }
}