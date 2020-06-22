//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const empresaCtrl = require('./../controllers/empresa.controller');

// definiendo rutas
router.get('/', empresaCtrl.getEmpresas);
router.post('/', empresaCtrl.createEmpresa);
router.get('/:id', empresaCtrl.getEmpresa);
router.put('/:id', empresaCtrl.editEmpresa);
router.delete('/:id', empresaCtrl.deleteEmpresa);

//exportacion del modulo de rutas
module.exports = router;