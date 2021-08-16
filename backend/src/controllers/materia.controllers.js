const ctrlMateria = {};
const pool = require("../database");

//get("/")
ctrlMateria.getMaterias = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM materia");
    return res.json({ success: "Datos obtenidos", materias: rows });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

module.exports = ctrlMateria;
