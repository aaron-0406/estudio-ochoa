const express = require("express");
const router = express.Router();
const ctrlInforme = require("../controllers/informe.controllers");
const path = require("path");
router.post("/", ctrlInforme.getInforme);
router.post("/:id", ctrlInforme.getInformeByIdUsuario);
router.get("/:id", (req, res) => {
  res.download(path.join(__dirname, `../lib/docs/${req.params.id}`));
});
module.exports = router;
