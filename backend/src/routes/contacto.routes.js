const express = require("express");
const router = express.Router();
const ctrlContacto = require("../controllers/contacto.controllers");

router.route("/Contacto").post(ctrlContacto.sendMessage);

router.route('/Dashboard/Mensajes')
    .get(ctrlContacto.getAllMessage);

module.exports = router;
