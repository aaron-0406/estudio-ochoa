const ctrlReclamo = {};
const pool = require("../database");

ctrlReclamo.sendReclaim = async (req, res) => {
  try {
    const result = await pool.query("INSERT INTO reclamo SET ?", [req.body]);
    if (result.affectedRows === 1) return res.json({ success: "Reclamo enviado" });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};
//get("/")
ctrlReclamo.getAllReclaim = async (req, res) => {
  if (req.query.keyword && req.query.page) {
    const data = await pool.query(`SELECT * FROM reclamo WHERE (nombre_reclamo LIKE '%${req.query.keyword}%' OR correo_reclamo LIKE '%${req.query.keyword}%') ORDER BY visto DESC`);
    const cantidadDatos = 12;
    const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
    return res.json(data.splice(pagina, cantidadDatos));
  }

  if (req.query.keyword) {
    const data = await pool.query(`SELECT * FROM reclamo WHERE (nombre_reclamo LIKE '%${req.query.keyword}%' OR correo_reclamo LIKE '%${req.query.keyword}%') ORDER BY visto DESC`);
    return res.json(data);
  }

  if (req.query.page) {
    const data = await pool.query(`SELECT * FROM reclamo ORDER BY visto DESC`);
    const cantidadDatos = 12;
    const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
    return res.json(data.splice(pagina, cantidadDatos));
  }
  const datos = await pool.query("SELECT * FROM reclamo");
  res.json({ datos });
};

//get("/count")
ctrlReclamo.getCount = async (req, res) => {
  if (req.query.keyword) {
    const data = await pool.query(`SELECT COUNT(*) FROM reclamo WHERE (nombre_reclamo LIKE '%${req.query.keyword}%' OR correo_reclamo LIKE '%${req.query.keyword}%')`);
    if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
    return res.json(0);
  }

  const rows = await pool.query("SELECT COUNT(*) FROM reclamo");

  if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);

  return res.json(0);
};
//get("/count/new")
ctrlReclamo.getCountNoVistos = async (req, res) => {
  //1 no visto// 0 visto
  const rows = await pool.query("SELECT COUNT(*) FROM reclamo WHERE visto ='1'");

  if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);

  return res.json(0);
};

//delete("/:id")
ctrlReclamo.deleteMessage = async (req, res) => {
  const data = await pool.query("DELETE FROM reclamo WHERE id_reclamo = ?", [req.params.id]);
  if (data.affectedRows === 1) return res.json({ success: `Mensaje eliminado` }); //Se logró actualizar
  return res.json({ error: "Ocurrió un error" });
};
//put("/:id")
ctrlReclamo.setVisto = async (req, res) => {
  const newSolicitud = {
    visto: "0",
  };
  const rows = await pool.query("UPDATE reclamo set ? WHERE id_reclamo = ?", [newSolicitud, req.params.id]);
  if (rows.affectedRows === 1) return res.json({ success: "Visto" });
  return res.json({ error: "Ocurrió un error." });
};

module.exports = ctrlReclamo;
