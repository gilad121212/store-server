import { newUser } from "../services/apiServices";
import { Request, Response } from 'express';






export const signUp = async (req: Request, res: Response) =>{
    try{
        const a = await newUser()
        res.send(a)
    }
    catch{
        throw new Error
    }    
}