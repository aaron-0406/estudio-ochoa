const ctrlExpediente = {};
const pool = require("../database");
const drive = require("../lib/drive");
const fs = require("fs-extra");

//get("/")
ctrlExpediente.getExpedientes = async (req, res) => {
  let Joins = `JOIN banco ON banco.id_banco = expediente.id_banco JOIN materia ON materia.id_materia = expediente.id_materia`;
  try {
    if (req.query.keyword && req.query.page) {
      const data = await pool.query(`SELECT * FROM expediente ${Joins} WHERE (codigo_expediente LIKE '%${req.query.keyword}%' OR nombre_cliente LIKE '%${req.query.keyword}%') ORDER BY id_expediente DESC`);
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({ success: "Datos obtenidos", expedientes: data.splice(pagina, cantidadDatos) });
    }

    if (req.query.keyword) {
      const data = await pool.query(`SELECT * FROM expediente ${Joins} WHERE (codigo_expediente LIKE '%${req.query.keyword}%' OR nombre_cliente LIKE '%${req.query.keyword}%')  ORDER BY id_expediente DESC`);
      return res.json({ success: "Datos obtenidos", expedientes: data });
    }

    if (req.query.page) {
      const data = await pool.query(`SELECT * FROM expediente ${Joins} ORDER BY id_expediente DESC`);
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({ success: "Datos obtenidos", expedientes: data.splice(pagina, cantidadDatos) });
    }
    const datos = await pool.query(`SELECT * FROM ${Joins} expediente`);
    return res.json({ success: "Datos obtenidos", expedientes: datos });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/count")
ctrlExpediente.getCount = async (req, res) => {
  try {
    if (req.query.keyword) {
      const data = await pool.query(`SELECT COUNT(*) FROM expediente WHERE (codigo_expediente LIKE '%${req.query.keyword}%' OR nombre_cliente LIKE '%${req.query.keyword}%')`);
      if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
      return res.json(0);
    }
    const rows = await pool.query("SELECT COUNT(*) FROM expediente");
    if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    return res.json(0);
  } catch (error) {
    return res.json(0);
  }
};

//get("/resumen")
ctrlExpediente.getResumen = async (req, res) => {
  try {
    const bancos = await pool.query("SELECT nombre_banco,COUNT(*) as cantidad FROM expediente JOIN banco ON banco.id_banco = expediente.id_banco GROUP BY nombre_banco");
    const materia = await pool.query("SELECT nombre_materia,COUNT(*) as cantidad FROM expediente JOIN materia ON materia.id_materia = expediente.id_materia GROUP BY nombre_materia");
    const estado = await pool.query("SELECT estado_uso,COUNT(*) as cantidad FROM expediente GROUP BY estado_uso");
    const datos = [{ bancos: bancos }, { materia: materia }, { estado: estado }];
    return res.json({ success: "Datos obtenidos", datos: datos });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};
//get("/:id")
ctrlExpediente.getExpedienteByCodigo = async (req, res) => {
  try {
    const expediente = await pool.query("SELECT * FROM expediente WHERE codigo_expediente = ?", [req.params.id]);
    if (expediente[0]) {
      if (expediente[0].habilitado == "1") return res.json({ expediente: expediente[0], success: "Encontrado" });
      return res.json({ error: "Expediente inhabilitado" });
    }
    return res.json({ error: "No existe tal expediente" });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};
//post("/")
ctrlExpediente.createExpediente = async (req, res) => {
  // Google drive api
  // Crear el archivo

  try {
    if (req.file) {
      const response = await drive.files.create({
        requestBody: {
          name: req.file.originalname,
          mimeType: req.file.mimetype,
        },
        media: {
          body: fs.createReadStream(req.file.path),
          mimeType: req.file.mimetype,
        },
      });
      // Cualquiera con el link
      await drive.permissions.create({
        fileId: response.data.id,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });
      req.body.id_documento = response.data.id;
    }
    try {
      const rows = await pool.query("INSERT INTO expediente SET ?", [req.body]);
      if (rows.affectedRows === 1) {
        res.json({ success: "Expediente creado" });
        if (req.file) await fs.unlink(req.file.path);
        return;
      }
    } catch (error) {
      await drive.files.delete({ fileId: response.data.id });
      if (error.code === "ECONNREFUSED") return res.json({ error: "Base de datos desconectada" });
      if (error.code === "ER_DUP_ENTRY") return res.json({ error: `Ese codigo ya está registrado` });
      return res.json({ error: "Ocurrió un error" });
    }
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
  res.json({ error: "Ocurrió un error" });
};

//put("/:id")
ctrlExpediente.updateExpediente = async (req, res) => {
  const { fecha_asignacion, nombre_cliente, contrato, documentos, monto, codigo_expediente, juzgado, demanda, estado_procesal, fecha_ep, estado_actual, folio, id_materia } = req.body;
  const newExpediente = { fecha_asignacion, nombre_cliente, contrato, documentos, monto, codigo_expediente, juzgado, demanda, estado_procesal, fecha_ep, estado_actual, folio, id_materia, estado_uso: 0 };
  try {
    const rows = await pool.query("UPDATE expediente set ? WHERE id_expediente = ?", [newExpediente, req.params.id]);
    if (rows.affectedRows !== 1) return res.json({ error: "Ocurrió un error." });
    res.json({ success: "Expediente Actualizado" });
  } catch (error) {
    if (error.code === "ECONNREFUSED") return res.json({ error: "Base de datos desconectada" });
    res.json({ error: "Ocurrió un error." });
  }

  try {
    if (req.file) {
      const expediente = await pool.query("SELECT id_documento FROM expediente WHERE id_expediente = ?", [req.params.id]);
      await drive.files.update({
        fileId: expediente[0].id_documento,
        requestBody: {
          name: req.file.originalname,
          mimeType: req.file.mimetype,
        },
        media: {
          body: fs.createReadStream(req.file.path),
          mimeType: req.file.mimetype,
        },
      });
      await fs.unlink(req.file.path);
    }
  } catch (error) {
    console.log(error);
  }
};

//delete("/:id")
ctrlExpediente.deleteExpediente = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM expediente WHERE id_expediente = ?", [req.params.id]);
    if (rows[0].estado_uso == "1") return res.json({ error: "El expediente está en uso" });
    rows[0].habilitado == 0 ? (rows[0].habilitado = 1) : (rows[0].habilitado = 0);
    const data = await pool.query("UPDATE expediente set ? WHERE id_expediente = ?", [rows[0], req.params.id]);
    let estado = "";
    rows[0].habilitado == 0 ? (estado = "inhabilitado") : (estado = "habilitado");
    //affectedRows => filas afectadas
    if (data.affectedRows === 1) return res.json({ success: `Expediente ${rows[0].codigo_expediente} ${estado}` }); //Se logró actualizar
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};

module.exports = ctrlExpediente;
