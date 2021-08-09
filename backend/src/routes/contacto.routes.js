const express = require("express");
const router = express.Router();
const ctrlContacto = require("../controllers/contacto.controllers");

router.get("/", ctrlContacto.getAllMessage);
router.get("/count", ctrlContacto.getCount);
router.get("/count/new", ctrlContacto.getCountNoVistos);
router.post("/", ctrlContacto.sendMessage);
router.delete("/:id", ctrlContacto.deleteMessage);
router.put("/:id", ctrlContacto.setVisto);

module.exports = router;
