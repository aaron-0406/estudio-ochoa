import React from "react";
import { Link } from "react-router-dom";

// Componentes
import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";

// Imagenes
import imagen8 from "../../images/images-services/SERVICIO_2.8.png";

const ServicioPenal = () => {
  return (
    <>
      <ServicesSectionRoad
        nameOption="Nuestros Servicios"
        numberRoad={3}
        nameRoadOne="Servicios"
        nameRoadTwo="Penal"
      />
      <div className="container my-5">
        <div className="row px-3">
          <div className="col-12 col-md-6">
            <h5 className="text-center fw-bold my-4">PENAL</h5>
            <p className="text-justify">
              El Estudio posee amplia experiencia en la asesoría legal en la
              defensa de los bienes jurídicos vulnerados por la comisión de
              ilícitos penales de nuestros clientes, así como, en la defensa de
              una supuesta conducta indebida tipificada por nuestro ordenamiento
              penal cometida por nuestros clientes.
            </p>
            <p className="text-justify">
              Nuestra asesoría comprende la prevención, la dilucidación, la
              prosecución y la provisión de actos que se cometan en contra de
              nuestros clientes, como también el improbable caso contrario.
            </p>
            <Link
              to="/Contacto"
              style={{ background: "#c17743", color: "#fff" }}
              className="btn my-5 w-50 d-block mx-auto"
            >
              Contáctanos
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <div className="mx-4">
              <img
                className="w-100 shadow rounded"
                src={imagen8}
                alt="Imagen de servicio"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicioPenal;
