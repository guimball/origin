const Visit = require('../models/Visit');
const Property = require('../models/Property');
const { sendEmail } = require('../utils/email');
const fs = require('fs');
const path = require('path');

// Função para ler e substituir o template
const getVisitEmailTemplate = (user, visit, property) => {
    const templatePath = path.join(__dirname, '../views/emailTemplates/visitEmail.html');
    let template = fs.readFileSync(templatePath, 'utf8');

    // Substituindo os placeholders
    template = template.replace('{{username}}', user.name);
    template = template.replace('{{property.name}}', property.name);
    template = template.replace('{{property.location}}', property.location);
    template = template.replace('{{visitDate}}', visit.dateRequested);
    template = template.replace('{{visitStatus}}', visit.status);

    return template;
};

exports.createVisit = async (req, res) => {
    try {
        const visit = new Visit(req.body);
        await visit.save();

        // Obter dados da propriedade associada
        const property = await Property.findById(visit.propertyId);
        if (!property) {
            return res.status(404).json({ message: 'Propriedade não encontrada' });
        }

        // Enviar email de confirmação com o template
        const userEmail = req.body.email;
        const emailContent = getVisitEmailTemplate(req.user, visit, property);

        await sendEmail(userEmail, 'Confirmação de Visita', emailContent);

        res.status(201).send(visit);
    } catch (error) {
        res.status(400).send(error);
    }
};
