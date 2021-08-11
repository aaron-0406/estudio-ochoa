const express = require("express");
const router = express.Router();
const multerCtrl = require('../lib/multer');
const ctrlExpediente = require("../controllers/expediente.controllers");

router.get("/", ctrlExpediente.getExpedientes);
router.get("/count", ctrlExpediente.getCount);
router.get("/resumen", ctrlExpediente.getResumen);
router.get("/:id", ctrlExpediente.getExpedienteByCodigo);

router.post("/",function(req, res, next) {
    multerCtrl.archivos.single('archivo')(req, res, function(err) {
        if (err) return res.json({ error: err }); // A Multer error occurred when uploading.
        next();
    })
}, ctrlExpediente.createExpediente);

router.put("/:id",function(req, res, next) {
    multerCtrl.archivos.single('archivo')(req, res, function(err) {
        if (err) return res.json({ error: err }); // A Multer error occurred when uploading.
        next();
    })
},  ctrlExpediente.updateExpediente);

router.delete("/:id", ctrlExpediente.deleteExpediente);

module.exports = router;
