const ctrlInforme = {};
const pool = require("../database");
const path = require("path");
const PdfPrinter = require("pdfmake");
const fs = require("fs-extra");
const font = require("../lib/pdf/fonts");
const styles = require("../lib/pdf/style");

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
    let cuerpo = [["#", "Código de Expediente", "Usuario", "Correo", "Fecha de Entrega", "Fecha Entregado", "Estado"]];
    for (let i = 0; i < rows.length; i++) {
      let dia1 = rows[i].fecha_entrega_usuario.slice(8, 10);
      let mes1 = rows[i].fecha_entrega_usuario.slice(5, 7);
      let year1 = rows[i].fecha_entrega_usuario.slice(0, 4);

      let dia2 = rows[i].fecha_entrega_inventario.slice(8, 10);
      let mes2 = rows[i].fecha_entrega_inventario.slice(5, 7);
      let year2 = rows[i].fecha_entrega_inventario.slice(0, 4);

      const element = [];
      element.push(i + 1);
      element.push(rows[i].codigo_expediente);
      element.push(rows[i].nombres_usuario + " " + rows[i].apellidos_usuario);
      element.push(rows[i].email_usuario);
      element.push(`${dia1}/${mes1}/${year1}`);
      element.push(`${dia2}/${mes2}/${year2}`);
      element.push(rows[i].estado_solicitud);
      cuerpo.push(element);
    }
    let tabla = {
      layout: "lightHorizontalLines", // optional
      table: {
        headerRows: 1,
        widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto"],
        body: cuerpo,
        style: "tabla",
      },
    };
    let dia = fecha_solicitud.slice(8, 10);
    let mes = fecha_solicitud.slice(5, 7);
    let year = fecha_solicitud.slice(0, 4);
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
      content: [{ text: `Lista de Solicitudes del dia ${dia}/${mes}/${year}`, fontSize: 20, margin: [0, 20] }, tabla],
      styles: styles,
    };

    const printer = new PdfPrinter(font);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream(path.join(__dirname, `../lib/docs/Informe ${dia}-${mes}-${year}.pdf`)));
    pdfDoc.end();
    return res.json({ success: "Generado correctamente", nombre_archivo: `Informe ${dia}-${mes}-${year}.pdf` });
  } catch (error) {
    return res.json({ error: "Ocurrió un error", nombre_archivo: `Informe ${dia}-${mes}-${year}.pdf` });
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
    let cuerpo = [["#", "Código de Expediente", "Fecha de Entrega", "Fecha Entregado", "Estado"]];
    for (let i = 0; i < rows.length; i++) {
      let dia1 = rows[i].fecha_entrega_usuario.slice(8, 10);
      let mes1 = rows[i].fecha_entrega_usuario.slice(5, 7);
      let year1 = rows[i].fecha_entrega_usuario.slice(0, 4);

      let dia2 = rows[i].fecha_entrega_inventario.slice(8, 10);
      let mes2 = rows[i].fecha_entrega_inventario.slice(5, 7);
      let year2 = rows[i].fecha_entrega_inventario.slice(0, 4);

      const element = [];
      element.push(i + 1);
      element.push(rows[i].codigo_expediente);
      element.push(`${dia1}/${mes1}/${year1}`);
      element.push(`${dia2}/${mes2}/${year2}`);
      element.push(rows[i].estado_solicitud);
      cuerpo.push(element);
    }
    let tabla = {
      layout: "lightHorizontalLines", // optional
      table: {
        headerRows: 1,
        widths: ["auto", "auto", "auto", "auto", "auto"],
        body: cuerpo,
        style: "tabla",
      },
    };
    let dia = fecha_solicitud.slice(8, 10);
    let mes = fecha_solicitud.slice(5, 7);
    let year = fecha_solicitud.slice(0, 4);
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
      content: [{ text: `Lista de Solicitudes de ${usuario[0].nombres_usuario} ${usuario[0].apellidos_usuario} del dia ${dia}/${mes}/${year}`, fontSize: 20, margin: [0, 20] }, tabla],
      styles: styles,
    };

    const printer = new PdfPrinter(font);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream(path.join(__dirname, `../lib/docs/Informe ${dia}-${mes}-${year}.pdf`)));
    pdfDoc.end();
    return res.json({ success: "Generado correctamente", nombre_archivo: `Informe ${dia}-${mes}-${year}.pdf` });
  } catch (error) {
    return res.json({ error: "Ocurrió un error", nombre_archivo: `Informe ${dia}-${mes}-${year}.pdf` });
  }
};
module.exports = ctrlInforme;
