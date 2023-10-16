"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const bodyParser = __importStar(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use((0, cors_1.default)());
app.use(errorHandler_1.errorMiddleware);
app.use((0, express_session_1.default)({
    secret: 'sua-chave-secreta-aqui',
    resave: true,
    saveUninitialized: false,
}));
app.use(express_1.default.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
// import express, { Express, Request, Response } from 'express';
// import * as bodyParser from 'body-parser';
// import cors from 'cors';
// import session from 'express-session';
// import {authenticate} from './auth/auth';
// import jwt from 'jsonwebtoken';
// const app: Express = express();
// const port: string | number = process.env.PORT || 3000;
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended : false}));
// app.use(cors()); // cors
// app.use(
//     session({
//         secret: 'sua-chave-secreta-aqui',
//         resave: true,
//         saveUninitialized: false,
//       })
// )
// app.get('/', (req: Request, res: Response) => {
//   res.sendFile(__dirname + '/views/login.html');
// });
// app.post('/login', (req: Request, res: Response) => {
//     const { usuario, senha } = req.body;
//     if (authenticate(usuario, senha)) {
//         // Crie um token JWT com o nome do usuário
//         const token = jwt.sign({ nomeUsuario: usuario }, 'chave-secreta-jwt');
//         // Configurar o cookie para ser seguro e permitir solicitações cross-origin
//         res.cookie('cngtoken', token, { sameSite: 'none', secure: true });
//         res.redirect('/logado');
//     }
// });
// app.get('/logado', (req: Request, res: Response) => {
//         try {
//             res.sendFile(__dirname + '/views/logado.html');
//         } catch (err) {
//             res.status(401).json({ msg: 'Token inválido. Acesso não autorizado.' });
//         }
// });
// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });
//# sourceMappingURL=app.js.map