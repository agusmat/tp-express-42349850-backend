const Pasaje = require('../models/pasaje');

const pasajeCtrl = {}
pasajeCtrl.getPasaje = async (req, res) => {
    pasaje = await Pasaje.findById(req.params.id);
    res.json(pasaje);
}

pasajeCtrl.createPasaje = async (req, res) => {
    const pasaje = new Pasaje(req.body);

    await pasaje.save();
    res.json({
        'status': 'pasaje  saved'
    });
}



pasajeCtrl.editPasaje = async (req, res) => {
    const { id } = req.params;
    const pasaje = {
        dniPasajero: req.body.dniPasajero,
        precioPasaje: req.body.precioPasaje,
        categoriaPasajero: req.body.fechaCompra,
        fechaCompra: req.body.fechaCompra,
        adelantos: req.body.adelantos
    };
    await Pasaje.findByIdAndUpdate(id, { $set: pasaje }, { new: true });
    res.json({ status: "Pasaje Actualizado" });
};

pasajeCtrl.getPasajes = async (req, res) => {
    const pasajes = await Pasaje.find().populate("adelanto");
    res.json(pasajes);
}

pasajeCtrl.deletePasaje = async (req, res) => {
    await Pasaje.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Pasaje  removed'
    })
}
module.exports = pasajeCtrl;