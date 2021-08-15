const ctrlUsuario = {};
const pool = require("../database");
const helpers = require("../lib/helpers");

//get("/")
ctrlUsuario.getUsuarios = async (req, res) => {
  try {
    if (req.query.keyword && req.query.page) {
      const data = await pool.query(`SELECT * FROM usuario WHERE (nombres_usuario LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR email_usuario LIKE '%${req.query.keyword}%') ORDER BY id_usuario DESC`);
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({ success: "Datos obtenidos", usuarios: data.splice(pagina, cantidadDatos) });
    }

    if (req.query.keyword) {
      const data = await pool.query(`SELECT * FROM usuario WHERE (nombres_usuario LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR email_usuario LIKE '%${req.query.keyword}%') ORDER BY id_usuario DESC`);
      return res.json({ success: "Datos obtenidos", usuarios: data });
    }

    if (req.query.page) {
      const data = await pool.query(`SELECT * FROM usuario ORDER BY id_usuario DESC`);
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({ success: "Datos obtenidos", usuarios: data.splice(pagina, cantidadDatos) });
    }
    const datos = await pool.query("SELECT * FROM usuario");
    return res.json({ success: "Datos obtenidos", usuarios: datos });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};
//get("/count")
ctrlUsuario.count = async (req, res) => {
  try {
    if (req.query.keyword) {
      const data = await pool.query(`SELECT COUNT(*) FROM usuario WHERE (nombres_usuario LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR email_usuario LIKE '%${req.query.keyword}%')`);
      if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
      return res.json(0);
    }
    const rows = await pool.query("SELECT COUNT(*) FROM usuario");
    if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    return res.json(0);
  } catch (error) {
    return res.json(0);
  }
};
//get("/whoami")
ctrlUsuario.whoami = async (req, res) => {
  if (!req.user) return res.json({ error: "No autentificado" }); //No autentificado
  return res.json({ user: req.user });
};
//post("/")
ctrlUsuario.createUsuario = async (req, res) => {
  const { apellidos_usuario, nombres_usuario, email_usuario, telefono_usuario, dni } = req.body;
  const password = await helpers.encryptPassword(nombres_usuario.toLowerCase().replace(/ \s*/g, "") + dni);
  const newUsuario = {
    nombres_usuario,
    apellidos_usuario,
    email_usuario,
    telefono_usuario,
    dni,
    estado_usuario: 1, // 1 habilitado // 0 deshabilitado
    rango_usuario: 2,
    password,
  };
  try {
    const rows = await pool.query("INSERT INTO usuario set ?", [newUsuario]);
    if (rows.affectedRows === 1) return res.json({ success: "Usuario Creado." });
    return res.json({ error: "Ocurrió un error." });
  } catch (error) {
    if (error.code === "ECONNREFUSED") return res.json({ error: "Base de datos desconectada" });
    if (error.code === "ER_DUP_ENTRY") {
      let fila;
      error.sqlMessage.indexOf("dni") === -1 ? (fila = "Correo") : (fila = "DNI");
      return res.json({ error: `Ese ${fila} ya está registrado` });
    }
    return res.json({ error: "Ocurrió un error." });
  }
};
//put("/:id")
ctrlUsuario.updateUsuario = async (req, res) => {
  const { apellidos_usuario, nombres_usuario, email_usuario, telefono_usuario } = req.body;
  const newUsuario = { nombres_usuario, apellidos_usuario, email_usuario, telefono_usuario };
  try {
    const rows = await pool.query("UPDATE usuario set ? WHERE id_usuario = ?", [newUsuario, req.params.id]);
    if (rows.affectedRows === 1) return res.json({ success: "Usuario Actualizado" });
    return res.json({ error: "Ocurrió un error." });
  } catch (error) {
    if (error.code === "ECONNREFUSED") return res.json({ error: "Base de datos desconectada" });
    if (error.code === "ER_DUP_ENTRY") {
      let fila;
      error.sqlMessage.indexOf("dni") === -1 ? (fila = "Correo") : (fila = "DNI");
      return res.json({ error: `Ese ${fila} ya está registrado` });
    }
    return res.json({ error: "Ocurrió un error." });
  }
};

//delete("/:id")
ctrlUsuario.deleteUsuario = async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM usuario WHERE id_usuario = ?", [req.params.id]);
    rows[0].estado_usuario == 0 ? (rows[0].estado_usuario = 1) : (rows[0].estado_usuario = 0);
    const data = await pool.query("UPDATE usuario set ? WHERE id_usuario = ?", [rows[0], req.params.id]);
    let estado = "";
    rows[0].estado_usuario == 0 ? (estado = "inhabilitado") : (estado = "habilitado");
    //affectedRows => filas afectadas
    if (data.affectedRows === 1) return res.json({ success: `Usuario ${rows[0].nombres_usuario} ${estado}` }); //Se logró actualizar
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    return res.json({ error: "Ocurrió un error" });
  }
};

module.exports = ctrlUsuario;
