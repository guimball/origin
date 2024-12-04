const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
    
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
        //match: '/^([0-1]\d|2[0-3]):([0-5]\d)$/', // Validação para formato HH:mm

    },
    visitorPhone: {
        type: String,
        required: true,
    },
    visitorName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model('Visit', visitSchema);
