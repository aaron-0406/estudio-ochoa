const express = require("express");
const router = express.Router();
const path = require("path");
const { isLoggedIn, isNotLoggedIn, isAdmin } = require("../lib/auth");

router.get("/Dashboard/Usuarios", [isLoggedIn, isAdmin], (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

router.get("/Dashboard/usuarios/*", [isLoggedIn, isAdmin], (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

router.get("/Dashboard/", [isLoggedIn], (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

router.get("/Dashboard/*", [isLoggedIn], (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

router.get("/Iniciar", [isNotLoggedIn], (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

//Esta ruta siempre va abajo
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

module.exports = router;
