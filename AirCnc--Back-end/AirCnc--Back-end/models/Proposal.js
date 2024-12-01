const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    proposalContent: { type: String, required: true },
    status: { type: String, enum: ['pendente', 'aceita', 'rejeitada'], default: 'pendente' }
}, { timestamps: true });

module.exports = mongoose.model('Proposal', ProposalSchema);
