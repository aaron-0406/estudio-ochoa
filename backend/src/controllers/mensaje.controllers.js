const ctrlMensaje = {};
const pool = require("../database");

ctrlMensaje.getAllMessage = async (req, res) => {
    try {
        const messages = await pool.query("SELECT * FROM contacto");
        res.json(messages);
    } catch (error) {
        res.json({error: "Ocurrió un error"});
    }
}

module.exports = ctrlMensaje;