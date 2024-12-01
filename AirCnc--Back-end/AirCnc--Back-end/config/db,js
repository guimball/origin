const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error('Erro ao conectar no MongoDB:', error);
        process.exit(1); // Parar a aplicação em caso de erro
    }
};

module.exports = connectDB;
