import React from "react";
import { Link } from "react-router-dom";

// Componentes
import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import ServicesAccordion from "../../components/Servicios/ServicesAccordion";

// Imagenes
import imagen1 from "../../images/images-services/SERVICIO_2.1.jpg";

interface listaXD {
  titulo: string;
  texto: any;
}

const ServicioCorporativa = () => {
  const listaAccordion: listaXD[] = [
    {
      titulo: "Contitución de sociedades peruanas",
      texto: (
        <p>
          Sociedad anónimas abiertas, sociedades anónimas por oferta pública,
          sociedades anónimas.
          <br /> Sociedad comercial de responsabilidad limitada.
          <br />
          Sociedades colectivas.
          <br /> Sociedades civiles: Ordinarias y de responsabilidad limitada.
          <br /> Sociedades en comandita: simple y por acciones.
        </p>
      ),
    },
    {
      titulo: "Creación de sucursales",
      texto: <p>En el Perú y en el extranjero.</p>,
    },
    {
      titulo: "Contratos participativos",
      texto: <p>En asociación, consorcio.</p>,
    },
    {
      titulo: "Fusiones",
      texto: (
        <p>
          Unir dos o más empresas con un solo capital y accionariado ya sea por
          integración o por absorción.
        </p>
      ),
    },
    {
      titulo: "Escisiones",
      texto: <p>Dividir una sociedad en dos o más grupos societarios.</p>,
    },
    {
      titulo: "Aumento de capital",
      texto: (
        <p>
          Por aportes nuevos, por aporte de bienes y por distribución de
          utilidades.
        </p>
      ),
    },
    {
      titulo:
        "Elaboración de actas de junta general de accionistas y seguimiento de acuerdos",
      texto: "",
    },
    {
      titulo: "Impugnación de acuerdos",
      texto: (
        <p>
          Los socios pueden disentir de los acuerdos tomados en la Junta de
          Accionistas, asesoramos la oposición de estos de acuerdo con las
          normas legales vigentes.
        </p>
      ),
    },
  ];

  return (
    <>
      <ServicesSectionRoad
        nameOption="Nuestros Servicios"
        numberRoad={3}
        nameRoadOne="Servicios"
        nameRoadTwo="Corporativa"
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5 className="text-center fw-bold my-4">
              CORPORATIVA Y MERCANTIL
            </h5>
            <p className="text-justify">
              Nuestro Estudio ha desarrollado una vasta experiencia en la
              creación de estructuras corporativas buscando que las mismas se
              conviertan en una herramienta adecuada para el desarrollo de los
              negocios de nuestros clientes.
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
              <img
                className="w-100 shadow rounded"
                src={imagen1}
                alt="Imagen de servicio"
              />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">
            <p className="fw-bold text-center">
              Algunos ejemplos de nuestra asesoría:
            </p>
            <ServicesAccordion id="accordionUno" lista={listaAccordion} />
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ServicioCorporativa;
