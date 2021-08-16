const ctrlBancos = {};
const pool = require("../database");

//get("/")
ctrlBancos.getBancos = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM banco");
    return res.json({ success: "Datos obtenidos", bancos: rows });
  } catch (error) {
    console.log(error);
    return res.json({ error: "No se pudieron obtener los datos" });
  }
};

module.exports = ctrlBancos;
