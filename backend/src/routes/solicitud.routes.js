const express = require("express");
const router = express.Router();
const ctrlSolicitud = require("../controllers/solicitud.controllers");

router.get("/", ctrlSolicitud.getSolicitudes);
router.get("/resumen", ctrlSolicitud.getResumen);
router.get("/count", ctrlSolicitud.getCount);
router.get("/count:id", ctrlSolicitud.getCountByUsuarioId);
router.get("/:id", ctrlSolicitud.getSolicitudesByUsuarioId);
router.post("/", ctrlSolicitud.crearSolicitud);
router.put("/:id", ctrlSolicitud.modificarSolicitud);
router.delete("/:id", ctrlSolicitud.eliminarSolicitud);

module.exports = router;
