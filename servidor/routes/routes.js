const express = require('express')
const router = express.Router()
const controlador = require('./controlador')
const controladoragregar = require ('./controladoragregar')


router.get('/',controlador.getEventos)

router.get('/',controlador.getDetallesPorId)

router.post('/',controladoragregar.agregarEvento)

module.exports = router;