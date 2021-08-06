import React from "react";

import { Link } from "react-router-dom";

import ServicesAccordion from "../../components/Servicios/ServicesAccordion";

import imagen5 from "../../images/images-services/SERVICIO_2.5.png";

interface listaXD {
  titulo: string;
  texto: any;
}

const ServicioConcursal = () => {
  const listaAccordion: listaXD[] = [
    {
      titulo: "Solicitud de acceso al procedimiento concursal",
      texto: (
        <p>
          Asesoramos a aquellas personas naturales o jurídicas con negocio que
          pretendan reprogramar sus deudas mediante un procedimiento concursal
          preventivo o un procedimiento concursal ordinario.
        </p>
      ),
    },
    {
      titulo: "Defensa ante junta de acreedores",
      texto: (
        <p>
          En defensa de los derechos de los concursados en procedimiento
          concursal ordinario, a fin de que no se pretenda.
        </p>
      ),
    },
    {
      titulo: "Nombramiento de administrador concursal",
      texto: (
        <p>
          A fin de que cumpla con los requisitos por el monto concursado y
          complejidad del procedimiento.
        </p>
      ),
    },
    {
      titulo: "Conclusión del procedimiento concursal",
      texto: (
        <p>
          Buscar la solución y conclusión del procedimiento concursal mediante
          flujos y excedentes que se logren.
        </p>
      ),
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h5 className="text-center fw-bold my-4">CONCURSAL</h5>
          <p className="text-justify">
            El Derecho Concursal tiene una doble óptica; por un lado, la
            perspectiva del deudor en situación económica en crisis que tiene
            que someterse a uno de los procedimientos que la ley contempla; y
            por otro lado, la perspectiva del acreedor que pretende la
            realización de crédito frente a un deudor sometido a uno de dichos
            procedimientos.
          </p>
          <p className="text-justify">
            Para ambas situaciones la Ley Concursal ha establecido dos
            procedimientos específicos cuales son el proceso concursal Ordinario
            y el Concurso Preventivo.
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
              src={imagen5}
              alt="Imagen de servicio"
            />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 col-md-2"></div>
        <div className="col-12 col-md-8">
          <p>
            Nuestro Estudio cuenta con experiencia en asesoramiento tanto de
            acreedores como deudores.
          </p>
          <p className="fw-bold text-center">Entre otros ofrecemos:</p>
          <ServicesAccordion id="accordionUno" lista={listaAccordion} />
          <p className="text-justify my-5">
            Buscar la solución y conclusión del procedimiento concursal mediante
            flujos y excedentes que se logren.
          </p>
        </div>
        <div className="col-12 col-md-2"></div>
      </div>
    </div>
  );
};

export default ServicioConcursal;
