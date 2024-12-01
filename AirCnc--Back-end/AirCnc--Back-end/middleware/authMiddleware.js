// Middleware de autenticação simplificado
const authMiddleware = (req, res, next) => {
    const userId = req.header('User-ID'); // Supomos que o ID do usuário é enviado diretamente no cabeçalho
    if (!userId) {
        return res.status(401).json({ message: 'Acesso negado. ID do usuário não fornecido.' });
    }

    req.user = { id: userId }; // Anexa o ID do usuário à requisição
    next(); // Continua para o próximo middleware ou rota
};

module.exports = authMiddleware;
