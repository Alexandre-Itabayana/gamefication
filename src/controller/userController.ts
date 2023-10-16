import { Request, Response, NextFunction } from 'express';
import { loginUser } from '../services/userServices';

export const loginUserController = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
        try {
            const { usuario, senha } = req.body;
            const data = await loginUser(usuario, senha);
            return res.status(200).json({ token: data })
        } catch (err: unknown) {
            next(err);
        }
}