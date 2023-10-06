const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Middleware para verificar a autenticação
function verificaAutenticacao(req, res, next) {
    // Verifica se o usuário está autenticado
    if (req.session && req.session.autenticado) {
        next();
    } else {
        //res.redirect('/node-login'); #req.session.autenticado com erro
        next();
    }
}
app.get('/', (req, res) => {
    res.redirect('/node-login');
});
// Página de login
app.get('/node-login', (req, res) => {
    res.sendFile(__dirname + '/pagina-protegida.html');
});

// Rota para verificar o login
app.post('/node-login', (req, res) => {
    const { usuario, senha } = req.body;
    console.log (usuario, senha)
    // Verifica se o usuário é 'admin' e a senha é '1234'
    if (usuario === 'admin' && senha === '1234') {
        //req.session.autenticado = true; // Define a autenticação como verdadeira
        res.redirect('/pagina-protegida'); // Redireciona para a página protegida
    } else {
        res.send('Usuário ou senha incorretos'); // Exibe uma mensagem de erro
    }
});

// Rota da página protegida
app.get('/pagina-protegida', (req, res) => {
    res.send('Você está autenticado!');
});

// Inicie o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});
