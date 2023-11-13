import { User } from "../../configuration/Userinterface";
import { register, getToken } from "../services/apiServices";
import { Request, Response } from 'express';






export const signUp = async (req: Request, res: Response) =>{
    try{
        const user = req.body as User;
        const result = await register(user)
        res.status(200).send(result)
    }
    catch(err: any){
        res.status(500).send(err.message)
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