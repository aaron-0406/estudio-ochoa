const express = require('express');
const router = express.Router();

const ctrlDashboardReclaim = require('../controllers/reclamoDashboard');

router.route('/')
    .get(ctrlDashboardReclaim.getAllReclaim);

module.exports = router;