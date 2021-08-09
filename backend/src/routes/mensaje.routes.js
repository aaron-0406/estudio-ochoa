const express = require('express');
const router = express.Router();
const ctrlMensaje = require('../controllers/mensaje.controllers');

router.route('/')
    .get(ctrlMensaje.getAllMessage);

module.exports = router;