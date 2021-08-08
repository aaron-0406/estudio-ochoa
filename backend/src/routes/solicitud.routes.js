const express = require("express");
const router = express.Router();
const ctrlSolicitud = require("../controllers/solicitud.controllers");

router.get("/", ctrlSolicitud.getSolicitudes);
router.get("/fecha/:fecha", ctrlSolicitud.getByFecha);
router.get("/fecha/:fecha/:id", ctrlSolicitud.getByFechaIdUsuario);
router.get("/resumen", ctrlSolicitud.getResumen);
router.get("/resumen/:id", ctrlSolicitud.getResumenByUsuarioId);
router.get("/count", ctrlSolicitud.getCount);
router.get("/count/:id", ctrlSolicitud.getCountByUsuarioId);
router.get("/:id", ctrlSolicitud.getSolicitudesByUsuarioId);
router.post("/", ctrlSolicitud.crearSolicitud);
router.put("/:id/:estado", ctrlSolicitud.modificarSolicitud);
router.delete("/:id", ctrlSolicitud.eliminarSolicitud);

module.exports = router;
