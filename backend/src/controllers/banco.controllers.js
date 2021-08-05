const ctrlBancos = {};
const pool = require("../database");

//get("/")
ctrlBancos.getBancos = async (req, res) => {
  const rows = await pool.query("SELECT * FROM banco");
  res.json(rows);
};

module.exports = ctrlBancos;
