const express = require('express');
const cors = require('cors'); // Importe o pacote cors

const app = express();

const PORT = 3000;

// Configure o CORS para permitir todas as origens (não seguro para produção)
app.use(cors());

app.get('/', (req, res) => {
  res.sendStatus(200); // Retorna o status HTTP 200 (OK)
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
