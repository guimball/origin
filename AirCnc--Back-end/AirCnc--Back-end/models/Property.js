const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    price: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // Add fields for images
    images: {
        livingRoom: { type: String, required: true }, 
        bedroom: { type: String, required: true },
        bathroom: { type: String, required: true },
        kitchen: { type: String, required: true }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Property', propertySchema);
