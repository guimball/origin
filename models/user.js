const mongoose = require('mongoose');

// Definição do schema do usuário
const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório'],
        unique: true,
    },
    senha: {
        type: String,
        required: [true, 'Senha é obrigatória'],
        minlength: 6,
    },
    telefone: {
        type: String,
    },


}, { timestamps: true });

// Exporta o modelo simplificado
module.exports = mongoose.model('User', userSchema);


