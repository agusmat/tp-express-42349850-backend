const Mensaje = require('../models/mensaje');

const mensajeCtrl = {}
mensajeCtrl.getMensaje = async (req, res) => {
    mensaje = await Mensaje.findById(req.params.id).populate("empresa");
    res.json(mensaje);
}

mensajeCtrl.createMensaje = async (req, res) => {
    const mensaje = new Mensaje(req.body);

    await mensaje.save();
    res.json({
        'status': 'Mensaje  saved'
    });
}


mensajeCtrl.editMensaje = async (req, res) => {
    const { id } = req.params;
    const mensaje = {

        para: req.body.para,
        desde: req.body.desde,
        texto: req.body.texto,
        fecha: req.body.fecha,
        empresa: req.body.empresa
    };
    await Mensaje.findByIdAndUpdate(id, { $set: mensaje }, { new: true });
    res.json({ status: "Mensaje Actualizado" });
};


mensajeCtrl.getMensajes = async (req, res) => {
    const mensajes = await Mensaje.find().populate("empresa");
    res.json(mensajes);
}

mensajeCtrl.deleteMensaje = async (req, res) => {
    await Mensaje.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Mensaje  removed'
    })
}
module.exports = mensajeCtrl;