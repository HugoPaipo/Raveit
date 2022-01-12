const express = require('express')
const router = express.Router()
const controlador = require('./controlador')



router.get('/',controlador.getEventos)

router.get('/',controlador.getDetallesPorId)

module.exports = router;