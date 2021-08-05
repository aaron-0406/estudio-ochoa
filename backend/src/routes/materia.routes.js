const express = require("express");
const router = express.Router();
const ctrlMateria = require("../controllers/materia.controllers");

router.get("/", ctrlMateria.getMaterias);

module.exports = router;
