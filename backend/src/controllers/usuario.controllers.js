const ctrlUsuario = {};
const pool = require("../database");
const helpers = require("../lib/helpers");

//get("/")
ctrlUsuario.getUsuarios = async (req, res) => {
  if (req.query.keyword && req.query.page) {
    const data = await pool.query(`SELECT * FROM usuario AND (nombres_usuario LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR correo LIKE '%${req.query.keyword}%') ORDER BY id_usuario DESC`);
    const cantidadDatos = 12;
    const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
    return res.json(data.splice(pagina, cantidadDatos));
  }

  if (req.query.keyword) {
    const data = await pool.query(`SELECT * FROM usuario AND (nombres_usuario LIKE '%${req.query.keyword}%' OR apellidos_usuario LIKE '%${req.query.keyword}%' OR correo LIKE '%${req.query.keyword}%') ORDER BY id_usuario DESC`);
    return res.json(data);
  }

  if (req.query.page) {
    const data = await pool.query(`SELECT * FROM usuario ORDER BY id_usuario DESC`);
    const cantidadDatos = 12;
    const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
    return res.json(data.splice(pagina, cantidadDatos));
  }
  const datos = await pool.query("SELECT * FROM usuario");
  res.json({ datos });
};
//get("/whoami")
ctrlUsuario.whoami = async (req, res) => {
  if (!req.user) return res.json({ error: "No autentificado" }); //No autentificado
  const usuario = await pool.query(`SELECT * FROM usuario  WHERE id_usuario = ? `, [req.user.id_usuario]);
  const newUser = usuario;
  newUser.authenticate = true;
  return res.json({ user: newUser });
};
//post("/")
ctrlUsuario.createUsuario = (req, res) => {};
//put("/:id")
ctrlUsuario.updateUsuario = (req, res) => {};
//delete("/:id")
ctrlUsuario.deleteUsuario = (req, res) => {};

module.exports = ctrlUsuario;
