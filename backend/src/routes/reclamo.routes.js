const express = require("express");
const router = express.Router();
const ctrlReclamo = require("../controllers/reclamo.controllers");

router.get("/", ctrlReclamo.getAllReclaim);
router.get("/count", ctrlReclamo.getCount);
router.get("/count/new", ctrlReclamo.getCountNoVistos);
router.post("/", ctrlReclamo.sendReclaim);
router.delete("/:id", ctrlReclamo.deleteMessage);
router.put("/:id", ctrlReclamo.setVisto);

module.exports = router;
