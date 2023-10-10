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
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const auth_1 = require("./auth/auth");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use((0, cors_1.default)()); // cors
app.use((0, express_session_1.default)({
    secret: 'sua-chave-secreta-aqui',
    resave: true,
    saveUninitialized: false,
}));
let teste = '';
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    if ((0, auth_1.authenticate)(usuario, senha)) {
        teste = 'ok';
        res.redirect(`/logado?name=${usuario}`);
    }
    else {
        res.redirect('/');
    }
});
app.get('/logado', (req, res) => {
    if (teste === 'ok') {
        res.sendFile(__dirname + '/views/logado.html');
    }
    else {
        res.redirect('/');
    }
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
