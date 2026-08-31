const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para salvar o arquivo do banco na raiz do projeto
const dbPath = path.resolve(__dirname, '../database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Banco de dados SQLite conectado.');
    }
});

// Criação da tabela de leads
db.run(`
    CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_empresa TEXT NOT NULL,
        email TEXT NOT NULL,
        telefone TEXT NOT NULL,
        tipo_negocio TEXT NOT NULL,
        data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

module.exports = db;