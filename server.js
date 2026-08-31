const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Servir arquivos estáticos do Front-end (pasta view)
app.use(express.static(path.join(__dirname, 'view')));

// Rotas da API
app.use('/api', leadRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});