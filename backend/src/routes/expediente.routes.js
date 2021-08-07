const express = require("express");
const router = express.Router();
const ctrlExpediente = require("../controllers/expediente.controllers");

router.get("/", ctrlExpediente.getExpedientes);
router.get("/count", ctrlExpediente.getCount);
router.get("/resumen", ctrlExpediente.getResumen);
router.get("/:id", ctrlExpediente.getExpedienteByCodigo);
router.post("/", ctrlExpediente.createExpediente);
router.put("/:id", ctrlExpediente.updateExpediente);
router.delete("/:id", ctrlExpediente.deleteExpediente);

module.exports = router;
