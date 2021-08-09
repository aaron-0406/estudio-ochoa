const express = require('express');
const router = express.Router();
const ctrlReclamo = require('../controllers/reclamo.controllers');

router.route('/LibroDeReclamaciones')
    .post(ctrlReclamo.sendReclaim);

module.exports = router;