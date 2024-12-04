const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Rota de registro de usuário
router.post('/register', register);

// Rota de login de usuário
router.post('/login', login);

module.exports = router;
