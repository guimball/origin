const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const propertyController = require('../controllers/propertyController');

// @desc Rotas para as propriedades

// Criar uma nova propriedade (rota privada, requer autenticação)
router.post('/', protect, propertyController.createProperty);

// Listar todas as propriedades (rota pública)
router.get('/', propertyController.getProperties);

// Obter uma propriedade específica por ID (rota pública)
router.get('/:id', propertyController.getProperty);

// Atualizar uma propriedade (rota privada, só o proprietário pode atualizar)
router.put('/:id', protect, propertyController.updateProperty);

// Deletar uma propriedade (rota privada, só o proprietário pode deletar)
router.delete('/:id', protect, propertyController.deleteProperty);

// Relatório: Propriedades mais reservadas (rota privada, somente admins)
router.get('/top-reserved', protect, propertyController.getTopReservedProperties);

module.exports = router;
