const ctrlMateria = {};
const pool = require("../database");

//get("/")
ctrlMateria.getMaterias = async(req, res) => {
  const rows = await pool.query("SELECT * FROM materia");
  res.json(rows);
};

module.exports = ctrlMateria;
