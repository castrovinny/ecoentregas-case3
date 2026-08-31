const express = require('express');
const router = express.Router();
const leadController = require('../controller/leadController');

// Definindo as rotas
router.post('/leads', leadController.criarLead);
router.get('/leads', leadController.listarLeads);

module.exports = router;