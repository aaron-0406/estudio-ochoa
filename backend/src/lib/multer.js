const multer = require("multer");
const path = require("path");
const multerCtrl = {};
const storageArchivos = multer.diskStorage({
  destination: path.join(__dirname, "../lib/docs"),
  filename: (req, file, cb) => {
    const fecha = new Date();
    cb(null, `${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}-${fecha.getHours()}${fecha.getMinutes()}${fecha.getSeconds()}${file.originalname}`);
  },
});
multerCtrl.archivos = multer({ storage: storageArchivos });

module.exports = multerCtrl;
