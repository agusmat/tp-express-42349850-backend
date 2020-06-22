//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const asistenteCtrl = require('./../controllers/asistente.controller');

// definiendo rutas
router.get('/', asistenteCtrl.getAsistentes);
router.post('/', asistenteCtrl.createAsistente);
router.get('/:id', asistenteCtrl.getAsistente);
router.put('/:id', asistenteCtrl.editAsistente);
router.delete('/:id', asistenteCtrl.deleteAsistente);

//exportacion del modulo de rutas
module.exports = router;