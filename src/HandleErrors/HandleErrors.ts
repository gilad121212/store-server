import { Response, Request, NextFunction } from "express";


export const handleServerError = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log((error.message));
    res.status(500).send(error.message);
};


export const handleServerErrorNotFound = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const err: any = new Error('Not Found');
    err.status = 404;
    res.status(404).send("err.message");
}
