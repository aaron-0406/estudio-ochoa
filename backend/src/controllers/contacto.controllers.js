const ctrlContacto = {};
const pool = require("../database");

ctrlContacto.sendMessage = async (req, res) => {
  try {
    const result = await pool.query("INSERT INTO contacto SET ?", [req.body]);
    if (result.affectedRows === 1) return res.json({ success: "Mensaje enviado" });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
  res.json({ error: "Ocurrió un error" });
};

ctrlContacto.getAllMessage = async (req, res) => {
    try {
        const messages = await pool.query("SELECT * FROM contacto");
        res.json(messages);
    } catch (error) {
        res.json({error: "Ocurrió un error"});
    }
}

module.exports = ctrlContacto;
