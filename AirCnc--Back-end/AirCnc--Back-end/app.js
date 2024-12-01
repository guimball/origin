const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use('/api/users', require('./routes/userRoutes'));

// Rota raiz
app.get('/', (req, res) => {
    res.send('Servidor rodando! API disponível em /api/users');
});



// Conexão ao MongoDB
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => {
    console.error('Erro ao conectar no MongoDB:', error);
    process.exit(1);
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
