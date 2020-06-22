const mongoose = require('mongoose');
const Adelanto = require('./adelanto');
const { Schema } = mongoose;

const PasajeSchema = new Schema({

    dniPasajero: { type: Number, required: true },
    precioPasaje: { type: Number, required: true },
    categoriaPasajero: { type: String, required: true },
    fechaCompra: { type: Date, required: true },
    final: { type: Number, required: true },
    adelanto: { type: [Adelanto.schema], required: false },

})

module.exports = mongoose.model('Pasaje', PasajeSchema);