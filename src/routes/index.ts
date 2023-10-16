import express, { Express, Request, Response } from 'express';
import { loginUserController } from '../controller/userController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const teste = __dirname.split('routes');
    res.sendFile(teste[0] + 'views/login.html');
})

router.post('/login', loginUserController);



export default router;