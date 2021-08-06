const ctrlSolicitud = {};
const pool = require("../database");
const helpers = require("../lib/helpers");

//get("/")
ctrlSolicitud.getSolicitudes = async (req, res) => {
  let datosSQL = `id_solicitud,fecha_solicitud,fecha_entrega_usuario,fecha_entrega_inventario,motivo_usuario,motivo_admin,estado_solicitud, usuario.id_usuario,expediente.id_expediente,nombres_usuario,apellidos_usuario, expediente.codigo_expediente`;
  let Joins = `JOIN usuario ON usuario.id_usuario = solicitud.id_usuario JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  if (req.query.keyword && req.query.page) {
    const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} WHERE (codigo_expediente LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR nombres_usuario LIKE '%${req.query.keyword}%') ORDER BY estado_solicitud DESC`);
    const cantidadDatos = 12;
    const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
    return res.json(data.splice(pagina, cantidadDatos));
  }

  if (req.query.keyword) {
    const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} WHERE (codigo_expediente LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR nombres_usuario LIKE '%${req.query.keyword}%')  ORDER BY estado_solicitud DESC`);
    return res.json(data);
  }

  if (req.query.page) {
    const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} ORDER BY estado_solicitud DESC`);
    const cantidadDatos = 12;
    const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
    return res.json(data.splice(pagina, cantidadDatos));
  }
  const datos = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins}`);
  res.json({ datos });
};

//get("/count")
ctrlSolicitud.getCount = async (req, res) => {
  let Joins = `JOIN usuario ON usuario.id_usuario = solicitud.id_usuario JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;

  if (req.query.keyword) {
    const data = await pool.query(`SELECT COUNT(*) FROM solicitud ${Joins} WHERE (expediente.codigo_expediente LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR nombres_usuario LIKE '%${req.query.keyword}%')`);
    if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
    return res.json(0);
  }

  const rows = await pool.query("SELECT COUNT(*) FROM solicitud");

  if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);

  return res.json(0);
};

//get("/resumen")
ctrlSolicitud.getResumen = async (req, res) => {};

//get("/:id")
ctrlSolicitud.getSolicitudesByUsuarioId = async (req, res) => {};

//get("/count:id")
ctrlSolicitud.getCountByUsuarioId = async (req, res) => {
  let Joins = `JOIN usuario ON usuario.id_usuario = solicitud.id_usuario JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  if (req.query.keyword) {
    const data = await pool.query(`SELECT COUNT(*) FROM solicitud ${Joins} WHERE (expediente.codigo_expediente LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR nombres_usuario LIKE '%${req.query.keyword}%')`);
    if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
    return res.json(0);
  }

  const rows = await pool.query("SELECT COUNT(*) FROM solicitud");

  if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);

  return res.json(0);
};

// post("/:id")
ctrlSolicitud.crearSolicitud = async (req, res) => {};

// put("/:id")
ctrlSolicitud.modificarSolicitud = async (req, res) => {
  const { fecha_solicitud, fecha_entrega_usuario, fecha_entrega_inventario, motivo_usuario, motivo_admin, estado_solicitud } = req.body;
  const newSolicitud = { fecha_solicitud, fecha_entrega_usuario, fecha_entrega_inventario, motivo_usuario, motivo_admin, estado_solicitud };
  try {
    const rows = await pool.query("UPDATE solicitud set ? WHERE id_solicitud = ?", [newSolicitud, req.params.id]);
    if (rows.affectedRows === 1) return res.json({ success: `Solicitud ${estado_solicitud}` });
  } catch (error) {
    if (error.code === "ECONNREFUSED") return res.json({ error: "Base de datos desconectada" });
  }
  return res.json({ error: "Ocurrió un error." });
};

//delete("/:id")
ctrlSolicitud.eliminarSolicitud = async (req, res) => {};

module.exports = ctrlSolicitud;
