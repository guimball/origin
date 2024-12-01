const User = require('../models/user');

// Função para registrar novo usuário
exports.register = async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;

    try {
        // Verificar se o e-mail já está registrado
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já registrado com este e-mail.' });
        }

        // Criar e salvar novo usuário
        const user = new User({
            name,
            email,
            password,
            phoneNumber
        });

        await user.save();

        res.status(201).json({
            message: 'Usuário registrado com sucesso.',
            user
        });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ message: 'Erro ao registrar usuário.' });
    }
};

// Função de login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Procurar usuário pelo e-mail
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado.' });
        }

        // Comparar senha diretamente
        if (user.password !== password) {
            return res.status(400).json({ message: 'Credenciais inválidas.' });
        }

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro no servidor.' });
    }
};
