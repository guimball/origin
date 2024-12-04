const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(express.json()); // Middleware para interpretar JSON
app.use(express.static('front-end-pages')); // Configurar pasta de arquivos estáticos (front-end-pages)
app.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos da pasta "public"

// ===== Rotas da API =====
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/properties', require('./routes/propertyRoutes'));
app.use('/api/visits', require('./routes/visitRoutes'));


// ===== Rotas do Frontend =====
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end-pages', 'Register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end-pages', 'login-register.html'));
});

app.get('/properties', (req, res) => {
   res.sendFile(path.join(__dirname, 'front-end-pages', 'FEED3.html'));
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end-pages', 'cadastro.html'));
});
app.get('/agendar-visita', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end-pages', 'agendar-visita.html'));
});


// ===== Conexão ao MongoDB =====
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((error) => {
        console.error('Erro ao conectar no MongoDB:', error);
        process.exit(1);
    });

// ===== Inicialização do Servidor =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
