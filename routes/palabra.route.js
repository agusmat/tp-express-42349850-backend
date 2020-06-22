//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const palabraCtrl = require('./../controllers/palabra.controller');

// definiendo rutas
router.get('/', palabraCtrl.getPalabras);
router.post('/', palabraCtrl.createPalabra);
router.get('/:id', palabraCtrl.getPalabra);
router.put('/:id', palabraCtrl.editPalabra);
router.delete('/:id', palabraCtrl.deletePalabra);

//exportacion del modulo de rutas
module.exports = router;