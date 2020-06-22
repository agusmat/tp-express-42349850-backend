const Palabra = require('../models/palabra');

const palabraCtrl = {}

palabraCtrl.getPalabras = async (req, res) => {

    palabras = await Palabra.find();

    res.json(palabras);

}

palabraCtrl.createPalabra = async (req, res) => {
    console.log("entro create Palabra");
    const palabra = new Palabra(req.body);
    await palabra.save();
    res.json({
        'status': 'Palabra saved'
    });
}

palabraCtrl.getPalabra = async (req, res) => {
    const palabra = await Palabra.findById(req.params.id);
    res.json(palabra);
}

palabraCtrl.editPalabra = async (req, res) => {
    const { id } = req.params;
    const palabra = {

        ingles: req.body.ingles,
        castellano: req.body.castellano,
        url: req.body.url,


    }

    await Palabra.findByIdAndUpdate(id, { $set: palabra }, { new: true });
    res.json({ status: "Palabra Actualizado" });



}
palabraCtrl.deletePalabra = async (req, res) => {
    await Palabra.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Palabra removed'
    })
}
module.exports = palabraCtrl;