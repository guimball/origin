const Proposal = require('../models/Proposal');
const Property = require('../models/Property');
const { sendEmail } = require('../utils/email');
const fs = require('fs');
const path = require('path');

// Função para ler e substituir o template
const getProposalEmailTemplate = (user, proposal, property) => {
    const templatePath = path.join(__dirname, '../views/emailTemplates/proposalEmail.html');
    let template = fs.readFileSync(templatePath, 'utf8');

    // Substituindo os placeholders
    template = template.replace('{{username}}', user.name);
    template = template.replace('{{property.name}}', property.name);
    template = template.replace('{{property.location}}', property.location);
    template = template.replace('{{proposalDate}}', proposal.date);
    template = template.replace('{{proposalStatus}}', proposal.status);

    return template;
};

exports.createProposal = async (req, res) => {
    try {
        const proposal = new Proposal(req.body);
        await proposal.save();

        // Obter dados da propriedade associada
        const property = await Property.findById(proposal.propertyId);
        if (!property) {
            return res.status(404).json({ message: 'Propriedade não encontrada' });
        }

        // Enviar email de confirmação com o template
        const userEmail = req.body.email;
        const emailContent = getProposalEmailTemplate(req.user, proposal, property);

        await sendEmail(userEmail, 'Confirmação de Proposta Enviada', emailContent);

        res.status(201).send(proposal);
    } catch (error) {
        res.status(400).send(error);
    }
};
