import { NextFunction, Request, Response } from 'express';


interface CustomError {
    status: number;
    message: string;
}

export const errorMiddleware = (
    err: CustomError,
    req: Request,
    res: Response,
    _next: NextFunction) => {
        if (err.status) {
            return res.status(err.status).json({ message: err.message })
        }
        console.log(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
}