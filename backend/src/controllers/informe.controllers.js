const ctrlInforme = {};
const pool = require("../database");
const path = require("path");
const PdfPrinter = require("pdfmake");
const fs = require("fs-extra");
const font = require("../lib/pdf/fonts");
const styles = require("../lib/pdf/style");

const formatFecha = (fecha, dir) => {
  let dia = fecha.slice(8, 10);
  let mes = fecha.slice(5, 7);
  let year = fecha.slice(0, 4);
  if (dir === "dir") return `${dia}-${mes}-${year}`;
  return `${dia}/${mes}/${year}`;
};

const getTabla = (cabecera, datos, estado) => {
  let cuerpo = [];
  cuerpo.push(cabecera);
  if (estado === "usuario") {
    for (let i = 0; i < datos.length; i++) {
      const element = [];
      element.push(i + 1);
      element.push(datos[i].codigo_expediente);
      element.push(formatFecha(datos[i].fecha_entrega_usuario));
      element.push(formatFecha(datos[i].fecha_entrega_inventario));
      element.push(datos[i].estado_solicitud);
      cuerpo.push(element);
    }
    return cuerpo;
  }
  for (let i = 0; i < datos.length; i++) {
    const element = [];
    element.push(i + 1);
    element.push(datos[i].codigo_expediente);
    element.push(datos[i].nombres_usuario + " " + datos[i].apellidos_usuario);
    element.push(datos[i].email_usuario);
    element.push(formatFecha(datos[i].fecha_entrega_usuario));
    element.push(formatFecha(datos[i].fecha_entrega_inventario));
    element.push(datos[i].estado_solicitud);
    cuerpo.push(element);
  }

  return cuerpo;
};

//post("/")
ctrlInforme.getInforme = async (req, res) => {
  // Cabecera del pdf
  let header = [{ text: "ESTUDIO JURÍDICO OCHOA MALDONADO", style: "header" }];

  //Datos de la bd
  let SQLDatos = `codigo_expediente,nombres_usuario,apellidos_usuario,email_usuario, fecha_entrega_usuario,fecha_entrega_inventario,estado_solicitud`;
  let Joins = `JOIN usuario ON usuario.id_usuario = solicitud.id_usuario JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  const { fecha_solicitud } = req.body;
  try {
    const rows = await pool.query(`SELECT ${SQLDatos} FROM solicitud ${Joins} WHERE fecha_solicitud = ?`, [fecha_solicitud]);
    // Cuerpo de la tabla
    let cabeceraTabla = ["#", "Código de Expediente", "Usuario", "Correo", "Fecha de Entrega", "Fecha Entregado", "Estado"];
    let cuerpo = getTabla(cabeceraTabla, rows, "admin");
    let tabla = {
      layout: "lightHorizontalLines", // optional
      table: {
        headerRows: 1,
        widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto"],
        body: cuerpo,
        style: "tabla",
      },
    };
    // Definicion del documento
    let docDefinition = {
      info: {
        title: "Informe de Solicitudes",
        author: "Ochoa Maldonado Web",
        subject: "Informe de Solicitudes",
        keywords: "Informe",
      },
      pageSize: "A4",
      pageOrientation: "landscape",
      pageMargins: [60, 80, 60, 80],
      header: header,
      content: [{ text: `Lista de Solicitudes del dia ${formatFecha(fecha_solicitud, "text")}`, fontSize: 20, margin: [0, 20] }, tabla],
      styles: styles,
    };

    const printer = new PdfPrinter(font);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    await pdfDoc.pipe(fs.createWriteStream(path.join(__dirname, `../lib/docs/Informe ${formatFecha(fecha_solicitud, "dir")}.pdf`)));
    pdfDoc.end();
    return res.json({ success: "Generado correctamente", nombre_archivo: `Informe ${formatFecha(fecha_solicitud, "dir")}.pdf` });
  } catch (error) {
    return res.json({ error: "Ocurrió un error", nombre_archivo: `Informe ${formatFecha(fecha_solicitud, "dir")}.pdf` });
  }
};

//post("/:id")
ctrlInforme.getInformeByIdUsuario = async (req, res) => {
  // Cabecera del pdf
  let header = [{ text: "ESTUDIO JURÍDICO OCHOA MALDONADO", style: "header" }];

  //Datos de la bd
  let SQLDatos = `codigo_expediente, fecha_entrega_usuario,fecha_entrega_inventario,estado_solicitud`;
  let Joins = `JOIN expediente ON expediente.id_expediente = solicitud.id_expediente`;
  const { fecha_solicitud } = req.body;
  try {
    const rows = await pool.query(`SELECT ${SQLDatos} FROM solicitud ${Joins} WHERE fecha_solicitud = ? AND id_usuario = ?`, [fecha_solicitud, req.params.id]);
    const usuario = await pool.query(`SELECT nombres_usuario,apellidos_usuario,email_usuario FROM usuario WHERE id_usuario = ?`, [req.params.id]);
    // Cuerpo de la tabla
    let cabeceraTabla = ["#", "Código de Expediente", "Fecha de Entrega", "Fecha Entregado", "Estado"];
    let cuerpo = getTabla(cabeceraTabla, rows, "usuario");
    let tabla = {
      layout: "lightHorizontalLines", // optional
      table: {
        headerRows: 1,
        widths: ["auto", "auto", "auto", "auto", "auto"],
        body: cuerpo,
        style: "tabla",
      },
    };
    // Definicion del documento
    let docDefinition = {
      info: {
        title: "Informe de Solicitudes",
        author: "Ochoa Maldonado Web",
        subject: "Informe de Solicitudes",
        keywords: "Informe",
      },
      pageSize: "A4",
      pageOrientation: "portrait",
      pageMargins: [60, 80, 60, 80],
      header: header,
      content: [{ text: `Lista de Solicitudes de ${usuario[0].nombres_usuario} ${usuario[0].apellidos_usuario} del dia ${formatFecha(fecha_solicitud, "text")}`, fontSize: 20, margin: [0, 20] }, tabla],
      styles: styles,
    };

    const printer = new PdfPrinter(font);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    await pdfDoc.pipe(fs.createWriteStream(path.join(__dirname, `../lib/docs/Informe ${formatFecha(fecha_solicitud, "dir")}.pdf`)));
    pdfDoc.end();
    return res.json({ success: "Generado correctamente", nombre_archivo: `Informe ${formatFecha(fecha_solicitud, "dir")}.pdf` });
  } catch (error) {
    return res.json({ error: "Ocurrió un error", nombre_archivo: `Informe ${formatFecha(fecha_solicitud, "dir")}.pdf` });
  }
};
module.exports = ctrlInforme;
