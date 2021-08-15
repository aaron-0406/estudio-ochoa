const ctrlSolicitud = {};
const pool = require("../database");

//get("/")
ctrlSolicitud.getSolicitudes = async (req, res) => {
  let datosSQL = `id_solicitud,fecha_solicitud,fecha_entrega_usuario,fecha_entrega_inventario,motivo_usuario,motivo_admin,estado_solicitud, usuario.id_usuario,expediente.id_expediente,nombres_usuario,apellidos_usuario, expediente.codigo_expediente`;
  let Joins = `JOIN usuario ON usuario.id_usuario = solicitud.id_usuario JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  let estado = `estado_solicitud = '${req.query.estado}' AND`;
  try {
    if (req.query.estado === "TODO") estado = "";

    if (req.query.keyword && req.query.page) {
      const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} WHERE  ${estado} (codigo_expediente LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR nombres_usuario LIKE '%${req.query.keyword}%') ORDER BY estado_solicitud DESC`);
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({ success: "Datos obtenidos", solicitudes: data.splice(pagina, cantidadDatos) });
    }

    if (req.query.keyword) {
      const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} WHERE  ${estado} (codigo_expediente LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR nombres_usuario LIKE '%${req.query.keyword}%')  ORDER BY estado_solicitud DESC`);
      return res.json({ success: "Datos obtenidos", solicitudes: data });
    }

    if (req.query.page) {
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      if (req.query.estado === "TODO") {
        const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} ORDER BY estado_solicitud DESC`);
        return res.json({ success: "Datos obtenidos", solicitudes: data.splice(pagina, cantidadDatos) });
      }
      estado = `estado_solicitud = '${req.query.estado}'`;
      const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} WHERE ${estado} ORDER BY estado_solicitud DESC`);
      return res.json({ success: "Datos obtenidos", solicitudes: data.splice(pagina, cantidadDatos) });
    }
    const datos = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins}`);
    return res.json({ success: "Datos obtenidos", solicitudes: datos });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/fecha/:fecha")
ctrlSolicitud.getByFecha = async (req, res) => {
  let SQLDatos = `codigo_expediente,nombres_usuario,apellidos_usuario,email_usuario, fecha_entrega_usuario,fecha_entrega_inventario,estado_solicitud`;
  let Joins = `JOIN usuario ON usuario.id_usuario = solicitud.id_usuario JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  try {
    const rows = await pool.query(`SELECT ${SQLDatos} FROM solicitud ${Joins} WHERE fecha_solicitud = ?`, [req.params.fecha]);
    return res.json({ sucess: "Datos obtenidos", solicitudes: rows });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};
//get("/fecha/:fecha/:id")  
ctrlSolicitud.getByFechaIdUsuario = async (req, res) => {
  let SQLDatos = `codigo_expediente, fecha_entrega_usuario,fecha_entrega_inventario,estado_solicitud`;
  let Joins = `JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  try {
    const rows = await pool.query(`SELECT ${SQLDatos} FROM solicitud ${Joins} WHERE fecha_solicitud = ? AND id_usuario = ?`, [req.params.fecha, req.params.id]);
    return res.json({ success: "Datos obtenidos", solicitudes: rows });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/count")
ctrlSolicitud.getCount = async (req, res) => {
  let Joins = `JOIN usuario ON usuario.id_usuario = solicitud.id_usuario JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  let estado = `estado_solicitud = '${req.query.estado}' AND`;
  try {
    if (req.query.estado === "TODO") estado = "";
    if (req.query.keyword && req.query.estado) {
      const data = await pool.query(`SELECT COUNT(*) FROM solicitud ${Joins} WHERE ${estado} (expediente.codigo_expediente LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR nombres_usuario LIKE '%${req.query.keyword}%')`);
      if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
      return res.json(0);
    }
    if (req.query.estado === "TODO") {
      const rows = await pool.query(`SELECT COUNT(*) FROM solicitud`);
      if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    }
    estado = `estado_solicitud = '${req.query.estado}'`;
    const rows = await pool.query(`SELECT COUNT(*) FROM solicitud WHERE ${estado}`);
    if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    return res.json(0);
  } catch (error) {
    return res.json(0);
  }
};

//get("/resumen")
ctrlSolicitud.getResumen = async (req, res) => {
  try {
    const estado = await pool.query("SELECT estado_solicitud,COUNT(*) as cantidad FROM solicitud GROUP BY estado_solicitud");
    const datos = [{ estado: estado }];
    return res.json({ success: "Datos obtenidos", datos: datos });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/resumen/:id")
ctrlSolicitud.getResumenByUsuarioId = async (req, res) => {
  try {
    const estado = await pool.query("SELECT estado_solicitud,COUNT(*) as cantidad FROM solicitud WHERE id_usuario = ? GROUP BY estado_solicitud", [req.params.id]);
    const datos = [{ estado: estado }];
    return res.json({ success: "Datos obtenidos", datos: datos });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};
//get("/:id")
ctrlSolicitud.getSolicitudesByUsuarioId = async (req, res) => {
  let datosSQL = `id_solicitud,fecha_solicitud,fecha_entrega_usuario,fecha_entrega_inventario,motivo_usuario,motivo_admin,estado_solicitud,expediente.id_expediente, expediente.codigo_expediente,expediente.habilitado,expediente.id_documento`;
  let Joins = `JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  let estado = `id_usuario = ? AND estado_solicitud = '${req.query.estado}' AND`;
  if (req.query.estado === "TODO") estado = "id_usuario = ? AND ";

  try {
    if (req.query.keyword && req.query.page) {
      const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} WHERE  ${estado} (codigo_expediente LIKE '%${req.query.keyword}%') ORDER BY estado_solicitud DESC`, [req.params.id]);
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({ success: "Datos obtenidos", solicitudes: data.splice(pagina, cantidadDatos) });
    }

    if (req.query.keyword) {
      const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} WHERE  ${estado} (codigo_expediente LIKE '%${req.query.keyword}%')  ORDER BY estado_solicitud DESC`, [req.params.id]);
      return res.json({ success: "Datos obtenidos", solicitudes: data });
    }

    if (req.query.page) {
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      if (req.query.estado === "TODO") {
        const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} WHERE id_usuario = ? ORDER BY estado_solicitud DESC`, [req.params.id]);
        return res.json({ success: "Datos obtenidos", solicitudes: data.splice(pagina, cantidadDatos) });
      }
      estado = `id_usuario = ? AND estado_solicitud = '${req.query.estado}'`;
      const data = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins} WHERE ${estado} ORDER BY estado_solicitud DESC`, [req.params.id]);
      return res.json({ success: "Datos obtenidos", solicitudes: data.splice(pagina, cantidadDatos) });
    }
    const datos = await pool.query(`SELECT ${datosSQL} FROM solicitud ${Joins}  WHERE id_usuario = ?`, [req.params.id]);
    return res.json({ success: "Datos obtenidos", solicitudes: datos });
  } catch (error) {
    res.json({ error: "Ocurrió un error" });
  }
};

//get("/count:id")
ctrlSolicitud.getCountByUsuarioId = async (req, res) => {
  let Joins = `JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  try {
    if (req.query.keyword) {
      const data = await pool.query(`SELECT COUNT(*) FROM solicitud ${Joins} WHERE id_usuario = ? AND (expediente.codigo_expediente LIKE '%${req.query.keyword}%')`, [req.params.id]);
      if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
      return res.json(0);
    }
    const rows = await pool.query("SELECT COUNT(*) FROM solicitud WHERE id_usuario = ?", [req.params.id]);
    if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    return res.json(0);
  } catch (error) {
    return res.json(0);
  }
};

// post("/:id")
ctrlSolicitud.crearSolicitud = async (req, res) => {
  const { fecha_solicitud, fecha_entrega_usuario, motivo_usuario, motivo_admin, estado_solicitud, id_usuario, id_expediente } = req.body;
  const newSolicitud = { fecha_solicitud, fecha_entrega_usuario, motivo_usuario, motivo_admin, estado_solicitud, id_usuario, id_expediente };
  try {
    const rows = await pool.query("INSERT INTO solicitud set ? ", [newSolicitud]);
    if (rows.affectedRows === 1) return res.json({ success: "Solicitud enviada" });
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    return res.json({ error: error });
  }
};

// put("/:id")
ctrlSolicitud.modificarSolicitud = async (req, res) => {
  const { fecha_solicitud, fecha_entrega_usuario, fecha_entrega_inventario, motivo_usuario, motivo_admin, estado_solicitud, id_expediente } = req.body;
  const newSolicitud = { fecha_solicitud, fecha_entrega_usuario, fecha_entrega_inventario, motivo_usuario, motivo_admin, estado_solicitud };
  newSolicitud.estado_solicitud = req.params.estado;
  try {
    if (req.params.estado === "EN USO") {
      const expediente = await pool.query("SELECT * FROM expediente WHERE id_expediente = ?", [id_expediente]);
      if (expediente[0].habilitado != 1) return res.json({ error: "El expediente está inhabilitado." });
      if (expediente[0].estado_uso == 1) return res.json({ error: "El expediente está en uso." });
    }

    await pool.query("UPDATE solicitud set ? WHERE id_solicitud = ?", [newSolicitud, req.params.id]);
    if (req.params.estado === "EN INVENTARIO" || req.params.estado === "EN USO") {
      let estado_uso;
      req.params.estado === "EN INVENTARIO" ? (estado_uso = 0) : (estado_uso = 1);
      await pool.query("UPDATE expediente set ? WHERE id_expediente = ?", [{ estado_uso }, id_expediente]);
    }
    return res.json({ success: `Estado de solicitud cambiada` });
  } catch (error) {
    if (error.code === "ECONNREFUSED") return res.json({ error: "Base de datos desconectada" });
    return res.json({ error: "Ocurrió un error." });
  }
};

//delete("/:id")
ctrlSolicitud.eliminarSolicitud = async (req, res) => {
  try {
    const rows = await pool.query("DELETE FROM solicitud WHERE id_solicitud = ?", [req.params.id]);
    if (rows.affectedRows === 1) return res.json({ success: "Solicitud Eliminada" });
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};

module.exports = ctrlSolicitud;
