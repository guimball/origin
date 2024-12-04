const User = require('../models/user');

// Função para registrar novo usuário
exports.register = async (req, res) => {
    const { nome, email, senha, telefone } = req.body;
    console.log("Dados recebidos:", { nome, email, telefone, senha });
    try {
        // Criar e salvar novo usuário
        const user = new User({
            nome,
            email,
            senha,
            telefone
        });

        await user.save();

        res.status(201).json({
            message: 'Usuário registrado com sucesso.',
            user
        });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ message: 'Erro ao registrar usuário.', error });
    }
};

// Função de login
exports.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        // Verificar se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado.' });
        }

        // Comparar senha diretamente
        if (user.senha !== senha) {
            return res.status(400).json({ message: 'Credenciais inválidas.' });
        }

        res.json({
            _id: user._id,
            nome: user.nome,
            email: user.email,
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro no servidor.' });
    }
};

// Função para listar todos os usuários (opcional, caso necessário)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ message: 'Erro ao buscar usuários.' });
    }
};

// Função para buscar um único usuário por ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        res.json(user);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ message: 'Erro ao buscar usuário.' });
    }
};
