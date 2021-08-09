const ctrlReclamo = {};
const pool = require("../database");

ctrlReclamo.sendReclaim = async (req, res) => {
  try {
    const result = await pool.query("INSERT INTO reclamo SET ?", [req.body]);
    if (result.affectedRows === 1)
      return res.json({ success: "Reclamo enviado" });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};

module.exports = ctrlReclamo;