import express, { Express, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import { authenticate } from './auth/auth';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app: Express = express();
const port: string | number = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://conasemsaulas.codebit.biz'); // Domínio permitido
    res.header('Access-Control-Allow-Credentials', 'true'); // Permite credenciais (cookies)
    next();
});
app.use(
    session({
        secret: 'sua-chave-secreta-aqui',
        resave: true,
        saveUninitialized: false,
    })
)
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req: Request, res: Response) => {
    const { usuario, senha } = req.body;
    if (authenticate(usuario, senha)) {
        // Crie um token JWT com o nome do usuário
        const token = jwt.sign({ nomeUsuario: usuario }, 'chave-secreta-jwt');
        // Configurar o cookie para ser seguro e permitir solicitações cross-origin
        res.cookie('token', token, { sameSite: 'none', secure: true });

        res.redirect('/logado');


    }
});

app.get('/logado', (req: Request, res: Response) => {
    const token = req.cookies.token;
    if (token) {
        try {
            res.sendFile(__dirname + '/views/logado.html');

        } catch (err) {
            res.status(401).json({ msg: 'Token inválido. Acesso não autorizado.' });
        }
    } else {
        res.redirect('/'); // Se o token não estiver presente, redirecione para a página de login
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});