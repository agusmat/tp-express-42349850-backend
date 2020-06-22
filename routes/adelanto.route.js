//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const adelantoCtrl = require('./../controllers/adelanto.controller');

// definiendo rutas
router.get('/', adelantoCtrl.getAdelantos);
router.post('/', adelantoCtrl.createAdelanto);
router.get('/:id', adelantoCtrl.getAdelanto);
router.put('/:id', adelantoCtrl.editAdelanto);
router.delete('/:id', adelantoCtrl.deleteAdelanto);

//exportacion del modulo de rutas
module.exports = router;