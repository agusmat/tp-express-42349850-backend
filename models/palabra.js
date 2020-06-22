const mongoose = require('mongoose');

const { Schema } = mongoose;

const PalabraSchema = new Schema({

    ingles: { type: String, required: true },
    castellano: { type: String, required: true },
    url: { type: String, required: true }


})

module.exports = mongoose.model('Palabra', PalabraSchema);