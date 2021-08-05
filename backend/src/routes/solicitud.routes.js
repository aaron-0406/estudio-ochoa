const express = require("express");
const router = express.Router();
const ctrlSolicitud = require("../controllers/solicitud.controllers");

router.get("/",ctrlSolicitud.getSolicitudes);

module.exports = router;
