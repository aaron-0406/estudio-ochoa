const express = require("express");
const router = express.Router();
const ctrlInforme = require("../controllers/informe.controllers");
const path = require("path");
router.post("/", ctrlInforme.getInforme);
router.post("/:id", ctrlInforme.getInformeByIdUsuario);
router.get("/:id", (req, res) => {
  try {
    setTimeout(() => {
      res.download(path.join(__dirname, `../lib/docs/${req.params.id}`));
    }, 1000);
    // res.download(path.join(__dirname, `../lib/docs/Informe 15-08-2021.pdf`));
  } catch (error) {
    res.json({ error: "Ocurrió un error" });
  }
});
module.exports = router;
