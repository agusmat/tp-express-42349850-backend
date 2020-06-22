const mongoose = require('mongoose');

const { Schema } = mongoose;

const AsistenteSchema = new Schema({

    usuario: { type: String, required: true },
    nombreOrganizacion: { type: String, required: true },
    solicitaConstancia: { type: Boolean, required: true }


})

module.exports = mongoose.model('Asistente', AsistenteSchema);