const ctrlBancos = {};
const pool = require("../database");

//get("/")
ctrlBancos.getBancos = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM banco");
    res.json(rows);
  } catch (error) {
    res.json([]);
  }
};

module.exports = ctrlBancos;
