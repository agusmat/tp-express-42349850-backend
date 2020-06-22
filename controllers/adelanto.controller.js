const Adelanto = require('../models/adelanto');

const adelantoCtrl = {}


adelantoCtrl.getAdelantos = async (req, res) => {

    adelantos = await Adelanto.find();

    res.json(adelantos);

}

adelantoCtrl.createAdelanto = async (req, res) => {
    console.log("entro create adelanto");
    const adelanto = new Adelanto(req.body);
    await adelanto.save();
    res.json({
        'status': 'adelanto saved'
    });
}

adelantoCtrl.getAdelanto = async (req, res) => {
    const adelanto = await Adelanto.findById(req.params.id);
    res.json(adelanto);
}

adelantoCtrl.editAdelanto = async (req, res) => {
    const { id } = req.params;
    const adelanto = {

        cobrador: req.body.cobrador,
        montoAdelanto: req.body.montoAdelanto,
        fecha: req.body.fecha,

    }

    await Adelanto.findByIdAndUpdate(id, { $set: adelanto }, { new: true });
    res.json({
        'status': 'Adelanto updated'
    })



}
adelantoCtrl.deleteAdelanto = async (req, res) => {
    await Adelanto.findByIdAndRemove(req.params.id)
    res.json({
        status: 'adelanto removed'
    })
}
module.exports = adelantoCtrl;