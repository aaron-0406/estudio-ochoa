import React from "react";

import { Link } from "react-router-dom";

import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import ServicesAccordion from "../../components/Servicios/ServicesAccordion";

import imagen2 from "../../images/images-services/SERVICIO_2.2.png";

interface listaXD {
  titulo: string;
  texto: any;
}

const ServicioFinanzas = () => {
  const listaAccordion: listaXD[] = [
    {
      titulo: "Servicios financieros para excedentes",
      texto: (
        <p>
          Depósito a plazo fijo.
          <br />
          Certificados bancarios en monedad nacional o extranjero y otros que
          permitan rentabilizar sus ahorros.
        </p>
      ),
    },
    {
      titulo: "Servicios de financiamiento",
      texto: (
        <p>
          Trámites para lograr financiamiento bancario o microfinanciero de
          acuerdo con la capacidad de la empresa, arrendamiento financiero o
          lease back, créditos con garantía líquida.
        </p>
      ),
    },
    {
      titulo: "Constituir fideicomisos",
      texto: "",
    },
  ];

  return (
    <>
      <ServicesSectionRoad
        nameOption="Nuestros Servicios"
        numberRoad={3}
        nameRoadOne="Servicios"
        nameRoadTwo="Finanzas"
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5 className="text-center fw-bold my-4">
              FINANZAS BANCA Y SEGUROS
            </h5>
            <p className="text-justify">
              Como parte de la formación de empresas y su funcionamiento,
              nuestro Estudio se encuentra familiarizado con la implementación
              de proyectos de financiamiento, así como, el uso de herramientas
              financieras de diversa índole.
            </p>
            <p className="text-justify">
              Por otro lado, nuestra experiencia en Derecho Bancario nos permite
              ofrecer nuestros servicios de asesoría referida al sector
              financiero y de seguros, garantizando la adecuada aplicación del
              ordenamiento establecido en la Ley General del Sistema Financiero
              y de Seguros y demás normas complementarias.
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
                src={imagen2}
                alt="Imagen de servicio"
              />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">
            <p>
              Nuestra experiencia en recuperaciones judiciales y extrajudiciales
              de créditos provenientes de operaciones financieras nos permite
              otorgar un servicio con las últimas técnicas de cobranza a su
              servicio.
            </p>
            <p className="fw-bold text-center">
              Algunos de nuestros servicios sin limitación alguna.
            </p>
            <ServicesAccordion id="accordionUno" lista={listaAccordion} />
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ServicioFinanzas;
