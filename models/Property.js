const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    price: Number,
    //corretor: {
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref: 'User',
   //     required: true,
   // },
     //Add fields for images
    images: {
        livingRoom: { type: String, required: false }, 
        bedroom: { type: String, required: false },
        bathroom: { type: String, required: false },
        kitchen: { type: String, required: false }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Property', propertySchema);
