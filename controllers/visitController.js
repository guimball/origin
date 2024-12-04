const Visit = require('../models/Visit');
const Property = require('../models/Property');
const fs = require('fs');
const path = require('path');


exports.createVisit = async (req, res) => {
    try {
        const { propertyId, visitorName, visitorPhone, date, time } = req.body;

        // Verificar se a propriedade existe
        const property = await Property.findById(propertyId);
        if (!property) {
            return res.status(404).json({ message: 'Propriedade não encontrada' });
        }

        // Criar a visita
        const visit = new Visit({
            propertyId,
            visitorName,
            visitorPhone,
            date,
            time,
        });

        await visit.save();

        res.status(201).json({
            message: 'Visita criada com sucesso',
            visit,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Erro ao criar a visita',
            error: error.message,
        });
    }
};

exports.getAllVisits = async (req, res) => {
    try {
        // Busca todas as visitas, populando informações da propriedade associada
        const visits = await Visit.find().populate('propertyId', 'title location');

        res.status(200).json({
            message: 'Visitas listadas com sucesso',
            visits,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao buscar visitas',
            error: error.message,
        });
    }
};