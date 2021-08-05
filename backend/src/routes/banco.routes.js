const express = require("express");
const router = express.Router();
const ctrlBanco = require("../controllers/banco.controllers");

router.get("/", ctrlBanco.getBancos);

module.exports = router;