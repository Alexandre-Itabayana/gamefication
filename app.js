const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./auth/auth');
const app = express();
const session = require('express-session');
const port = process.env.port || '3000';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(session({ secret: 'sua-chave-secreta-aqui', resave: true, saveUninitialized: false }));



app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/login.html')
});

app.post('/login', (req, res)=>{
    const {usuario, senha} = req.body;
    if(auth.authenticate(usuario,senha)){
        req.session.authenticated = true;
        res.redirect('/logado'); 
               
    }
    else{
        res.redirect('/');
    }
})
app.get('/logado', (req, res) => {
    if (req.session.authenticated) {
        res.sendFile(__dirname + '/views/logado.html');
    } else {

        res.redirect('/');
    }
});



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });

