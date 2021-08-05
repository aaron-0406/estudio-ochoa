const express = require("express");
const router = express.Router();
const ctrlUsuario = require("../controllers/usuario.controllers");

router.get("/", ctrlUsuario.getUsuarios);
router.get("/whoami", ctrlUsuario.whoami);
router.post("/", ctrlUsuario.createUsuario);
router.put("/:id", ctrlUsuario.updateUsuario);
router.delete("/:id", ctrlUsuario.deleteUsuario);

module.exports = router;