const express = require('express');
const { register, login } = require('../controllers/userController'); // Importando as funções do controller

const router = express.Router();

// Rota para exibir a página de registro
//router.get('/register', (req, res) => {
//    res.sendFile(path.join(__dirname, '/views/Register.html'));
//  });

// Rota para registro
router.post('/register', register);

// Rota para login
router.post('/login', login);

module.exports = router;
