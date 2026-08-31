const db = require('../model/leadModel');

// Salvar um novo lead vindo do formulário
exports.criarLead = (req, res) => {
    const { nome_empresa, email, telefone, tipo_negocio } = req.body;

    // Validação básica dos campos
    if (!nome_empresa || !email || !telefone || !tipo_negocio) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
    }

    const query = `INSERT INTO leads (nome_empresa, email, telefone, tipo_negocio) VALUES (?, ?, ?, ?)`;

    db.run(query, [nome_empresa, email, telefone, tipo_negocio], function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ erro: 'Erro ao salvar o lead no banco de dados.' });
        }
        res.status(201).json({ mensagem: 'Lead cadastrado com sucesso!', id: this.lastID });
    });
};

// Listar todos os leads salvos (Para a equipe comercial)
exports.listarLeads = (req, res) => {
    const query = `SELECT * FROM leads ORDER BY data_cadastro DESC`;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ erro: 'Erro ao buscar a lista de leads.' });
        }
        res.status(200).json(rows);
    });
};