import React from "react";
import ServicesSectionRoad from "../components/Equipo/ServicesSectionRoad";

const LibroDeReclamaciones = () => {
  return (
    <>
      <ServicesSectionRoad
        nameOption="Libro de Reclamaciones"
        numberRoad={2}
        nameRoadOne="Reclamaciones"
      />

      <div className="container my-5 px-5">
        <div className="row">
          <div className="col-12">
            <p className="text-justify">
              Con gusto nuestros ejecutivos especializados, atenderán tus dudas,
              recibiran tus comentarios y te brindaran el servicio que
              requieres. Ponemos a tu alcance el medio de comunicación más
              cómodo para tí.
            </p>
            <p className="fw-bold">
              Por favor llena los campos para que podamos comunicarnos contigo:
            </p>
            <p>Los campos son obligatorios.</p>
          </div>
        </div>
      </div>

      <div className="container my-5 px-5">
        <form className="row g-3">
          <p
            style={{ color: "#c17743", borderBottom: "#c17743 solid 2px" }}
            className="fw-bold fs-5 my-4 px-0"
          >
            DATOS PERSONALES
          </p>
          <div className="col-12 col-md-6">
            <label htmlFor="inputNombre" className="form-label">
              Nombre
            </label>
            <input type="text" className="form-control" id="inputNombre" />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputApellidos" className="form-label">
              Apellidos
            </label>
            <input type="text" className="form-control" id="inputApellidos" />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              E - mail
            </label>
            <input type="email" className="form-control" id="inputEmail" />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputDireccion" className="form-label">
              Dirección
            </label>
            <input type="text" className="form-control" id="inputDireccion" />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputDni" className="form-label">
              DNI O RUC
            </label>
            <input type="text" className="form-control" id="inputDni" />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputProvincia" className="form-label">
              Provincia
            </label>
            <input type="text" className="form-control" id="inputProvincia" />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputTelefono" className="form-label">
              Teléfono
            </label>
            <input type="text" className="form-control" id="inputTelefono" />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputDistrito" className="form-label">
              Distrito
            </label>
            <input type="text" className="form-control" id="inputDistrito" />
          </div>

          <p
            style={{ color: "#c17743", borderBottom: "#c17743 solid 2px" }}
            className="fw-bold fs-5 mt-5 px-0"
          >
            REFERENCIAS Y DETALLES:
          </p>

          <div className="col-12 col-md-6">
            <label htmlFor="inputMotivo" className="form-label">
              Motivo
            </label>
            <input type="text" className="form-control" id="inputMotivo" />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputServicio" className="form-label">
              Producto / Servicio
            </label>
            <input type="text" className="form-control" id="inputServicio" />
          </div>
          <div className="col-12">
            <label htmlFor="inputMensaje" className="form-label">
              Mensaje
            </label>
            <textarea className="form-control" id="inputMensaje" rows={3} />
          </div>

          <div className="col-12 mt-5">
            <button
              type="submit"
              className="btn"
              style={{
                background: "#c17743",
                color: "#fff",
              }}
            >
              Enviar Datos
            </button>
          </div>
        </form>

        <p className="row my-5">
          QUEJA.- Disconformidad no relacionada a los productos o servicios; o,
          malestar o descontento respecto a la atención al público.
          <br />
          <br /> RECLAMO.- Disconformidad relacionada a los productos o
          servicios.
        </p>
      </div>
    </>
  );
};

export default LibroDeReclamaciones;
