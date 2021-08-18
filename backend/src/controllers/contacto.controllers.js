const ctrlContacto = {};
const pool = require("../database");

//post("/")
ctrlContacto.sendMessage = async (req, res) => {
  try {
    const result = await pool.query("INSERT INTO contacto SET ?", [req.body]);
    if (result.affectedRows === 1) return res.json({ success: "Mensaje enviado" });
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/")
ctrlContacto.getAllMessage = async (req, res) => {
  try {
    if (req.query.keyword && req.query.page) {
      const data = await pool.query(`SELECT * FROM contacto WHERE (nombre_contacto LIKE '%${req.query.keyword}%' OR email_contacto LIKE '%${req.query.keyword}%') ORDER BY visto DESC`);
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({ success: "Datos obtenidos", mensajes: data.splice(pagina, cantidadDatos) });
    }

    if (req.query.keyword) {
      const data = await pool.query(`SELECT * FROM contacto WHERE (nombre_contacto LIKE '%${req.query.keyword}%' OR email_contacto LIKE '%${req.query.keyword}%') ORDER BY visto DESC`);
      return res.json({ success: "Datos obtenidos", mensajes: data });
    }

    if (req.query.page) {
      const data = await pool.query(`SELECT * FROM contacto ORDER BY visto DESC`);
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({ success: "Datos obtenidos", mensajes: data.splice(pagina, cantidadDatos) });
    }
    const datos = await pool.query("SELECT * FROM contacto");
    return res.json({ success: "Datos obtenidos", mensajes: datos });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/count")
ctrlContacto.getCount = async (req, res) => {
  try {
    if (req.query.keyword) {
      const data = await pool.query(`SELECT COUNT(*) FROM contacto WHERE (nombre_contacto LIKE '%${req.query.keyword}%' OR email_contacto LIKE '%${req.query.keyword}%')`);
      if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
      return res.json(0);
    }
    const rows = await pool.query("SELECT COUNT(*) FROM contacto");
    if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    return res.json(0);
  } catch (error) {
    console.log(error);
    return res.json(0);
  }
};
//get("/count/new")
ctrlContacto.getCountNoVistos = async (req, res) => {
  //1 no visto// 0 visto
  try {
    const rows = await pool.query("SELECT COUNT(*) FROM contacto WHERE visto ='1'");
    if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    return res.json(0);
  } catch (error) {
    console.log(error);
    return res.json(0);
  }
};

//delete("/:id")
ctrlContacto.deleteMessage = async (req, res) => {
  try {
    const data = await pool.query("DELETE FROM contacto WHERE id_contacto = ?", [req.params.id]);
    if (data.affectedRows === 1) return res.json({ success: `Mensaje eliminado` }); //Se logró actualizar
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};
//put("/:id")
ctrlContacto.setVisto = async (req, res) => {
  const newSolicitud = {
    visto: "0",
  };
  try {
    const rows = await pool.query("UPDATE contacto set ? WHERE id_contacto = ?", [newSolicitud, req.params.id]);
    if (rows.affectedRows === 1) return res.json({ success: "Visto" });
    return res.json({ error: "Ocurrió un error." });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error." });
  }
};
module.exports = ctrlContacto;
