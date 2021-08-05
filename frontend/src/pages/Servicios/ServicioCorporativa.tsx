import React from "react";
import { Link } from "react-router-dom";

import imagen1 from "../../images/images-services/SERVICIO_2.1.jpg";

const ServicioCorporativa = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h5 className="text-center fw-bold my-4">CORPORATIVA Y MERCANTIL</h5>
          <p className="text-justify">
            Nuestro Estudio ha desarrollado una vasta experiencia en la creación
            de estructuras corporativas buscando que las mismas se conviertan en
            una herramienta adecuada para el desarrollo de los negocios de
            nuestros clientes.
          </p>
          <p className="text-justify">
            Ello supone además, una completa asesoría para la formación de
            sociedades civiles y mercantiles, así como, en relación a actos
            mercantiles trascendentes como la reorganización de empresas,
            fusiones y escisiones, disolución y liquidación de personas
            jurídicas y otros.
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
            <img className="w-100 shadow rounded" src={imagen1} alt="Imagen de servicio" />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 col-md-2"></div>
        <div className="col-12 col-md-8">
          <p className="fw-bold text-center">
            Algunos ejemplos de nuestra asesoría:
          </p>
          
        </div>
        <div className="col-12 col-md-2"></div>
      </div>
    </div>
  );
};

export default ServicioCorporativa;
