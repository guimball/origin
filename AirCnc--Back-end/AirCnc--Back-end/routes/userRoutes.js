const express = require('express');
const { register, login } = require('../controllers/userController'); // Importando as funções do controller

const router = express.Router();

// Rota para registro
router.post('/register', register);

// Rota para login
router.post('/login', login);

module.exports = router;
