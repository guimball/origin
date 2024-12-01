const mongoose = require('mongoose');

// Definição do schema do usuário
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório'],
        unique: false,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Senha é obrigatória'],
        minlength: 6,
    },
    phoneNumber: {
        type: String,
    },
}, { timestamps: true });

// Exporta o modelo simplificado
module.exports = mongoose.model('User', userSchema);


