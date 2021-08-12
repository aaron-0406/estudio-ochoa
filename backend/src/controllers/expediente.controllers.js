const ctrlExpediente = {};
const pool = require("../database");
const drive = require("../lib/drive");
const helpers = require("../lib/helpers");
const path = require("path");
const fs = require("fs-extra");

//get("/")
ctrlExpediente.getExpedientes = async (req, res) => {
  let Joins = `JOIN banco ON banco.id_banco = expediente.id_banco JOIN materia ON materia.id_materia = expediente.id_materia`;
  if (req.query.keyword && req.query.page) {
    const data = await pool.query(`SELECT * FROM expediente ${Joins} WHERE (codigo_expediente LIKE '%${req.query.keyword}%' OR nombre_cliente LIKE '%${req.query.keyword}%') ORDER BY id_expediente DESC`);
    const cantidadDatos = 12;
    const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
    return res.json(data.splice(pagina, cantidadDatos));
  }

  if (req.query.keyword) {
    const data = await pool.query(`SELECT * FROM expediente ${Joins} WHERE (codigo_expediente LIKE '%${req.query.keyword}%' OR nombre_cliente LIKE '%${req.query.keyword}%')  ORDER BY id_expediente DESC`);
    return res.json(data);
  }

  if (req.query.page) {
    const data = await pool.query(`SELECT * FROM expediente ${Joins} ORDER BY id_expediente DESC`);
    const cantidadDatos = 12;
    const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
    return res.json(data.splice(pagina, cantidadDatos));
  }
  const datos = await pool.query(`SELECT * FROM ${Joins} expediente`);
  res.json({ datos });
};

//get("/count")
ctrlExpediente.getCount = async (req, res) => {
  if (req.query.keyword) {
    const data = await pool.query(`SELECT COUNT(*) FROM expediente WHERE (codigo_expediente LIKE '%${req.query.keyword}%' OR nombre_cliente LIKE '%${req.query.keyword}%')`);
    if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
    return res.json(0);
  }

  const rows = await pool.query("SELECT COUNT(*) FROM expediente");

  if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);

  return res.json(0);
};

//get("/resumen")
ctrlExpediente.getResumen = async (req, res) => {
  const bancos = await pool.query("SELECT nombre_banco,COUNT(*) as cantidad FROM expediente JOIN banco ON banco.id_banco = expediente.id_banco GROUP BY nombre_banco");
  const materia = await pool.query("SELECT nombre_materia,COUNT(*) as cantidad FROM expediente JOIN materia ON materia.id_materia = expediente.id_materia GROUP BY nombre_materia");
  const estado = await pool.query("SELECT estado_uso,COUNT(*) as cantidad FROM expediente GROUP BY estado_uso");
  const datos = [{ bancos: bancos }, { materia: materia }, { estado: estado }];
  return res.json({ datos });
};
//get("/:id")
ctrlExpediente.getExpedienteByCodigo = async (req, res) => {
  const expediente = await pool.query("SELECT * FROM expediente WHERE codigo_expediente = ?", [req.params.id]);
  if (expediente[0]) return res.json({ expediente: expediente[0], success: "Encontrado" });
  return res.json({ error: "No existe tal expediente" });
};
//post("/")
ctrlExpediente.createExpediente = async (req, res) => {
  // Google drive api
  const filePath = req.file.path;
  // Crear el archivo
  try {
    const response = await drive.files.create({
      requestBody: {
        name: req.file.originalname,
        mimeType: req.file.mimetype,
      },
      media: {
        body: fs.createReadStream(filePath),
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
    try {
      const rows = await pool.query("INSERT INTO expediente SET ?", [req.body]);
      if (rows.affectedRows === 1) {
        res.json({ success: "Expediente creado" });
        await fs.unlink(filePath);
        return;
      }
    } catch (error) {
      if (error.code === "ECONNREFUSED") return res.json({ error: "Base de datos desconectada" });
      if (error.code === "ER_DUP_ENTRY") return res.json({ error: `Ese codigo ya está registrado` });
      return res.json({ error: "Ocurrió un error" });
    }
  } catch (error) {
    console.log(error);
  }
  res.json({ error: "Ocurrió un error" });
};

//put("/:id")
ctrlExpediente.updateExpediente = async (req, res) => {
  const { fecha_asignacion, nombre_cliente, contrato, documentos, monto, codigo_expediente, juzgado, demanda, estado_procesal, fecha_ep, estado_actual, folio, id_materia } = req.body;
  const newExpediente = { fecha_asignacion, nombre_cliente, contrato, documentos, monto, codigo_expediente, juzgado, demanda, estado_procesal, fecha_ep, estado_actual, folio, id_materia, estado_uso: 0 };
  if (req.file) {
    const expediente = await pool.query("SELECT id_documento FROM expediente WHERE id_expediente = ?", [req.params.id]);
    try {
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
    } catch (error) {
      console.log(error);
    }
  }
  try {
    const rows = await pool.query("UPDATE expediente set ? WHERE id_expediente = ?", [newExpediente, req.params.id]);
    if (rows.affectedRows === 1) {
      if (req.file) await fs.unlink(req.file.path);
      return res.json({ success: "Expediente Actualizado" });
    }
  } catch (error) {
    if (error.code === "ECONNREFUSED") return res.json({ error: "Base de datos desconectada" });
  }
  return res.json({ error: "Ocurrió un error." });
};

//delete("/:id")
ctrlExpediente.deleteExpediente = async (req, res) => {
  const rows = await pool.query("SELECT * FROM expediente WHERE id_expediente = ?", [req.params.id]);
  rows[0].habilitado == 0 ? (rows[0].habilitado = 1) : (rows[0].habilitado = 0);
  const data = await pool.query("UPDATE expediente set ? WHERE id_expediente = ?", [rows[0], req.params.id]);
  let estado = "";
  rows[0].habilitado == 0 ? (estado = "inhabilitado") : (estado = "habilitado");
  //affectedRows => filas afectadas
  if (data.affectedRows === 1) return res.json({ success: `Expediente ${rows[0].codigo_expediente} ${estado}` }); //Se logró actualizar

  return res.json({ error: "Ocurrió un error" });
};

module.exports = ctrlExpediente;
