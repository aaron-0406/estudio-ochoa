const ctrlMateria = {};
const pool = require("../database");

//get("/")
ctrlMateria.getMaterias = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM materia");
    return res.json(rows);
  } catch (error) {
    return res.json([]);
  }
};

module.exports = ctrlMateria;
