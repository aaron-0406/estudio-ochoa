import React from "react";
import { Link } from "react-router-dom";

import ServicesSectionRoad from "../components/Equipo/ServicesSectionRoad";

const Historia = () => {
  return (
    <>
      <ServicesSectionRoad
        nameOption="Historia Ochoa Maldonado"
        numberRoad={2}
        nameRoadOne="Historia"
      />

      <div className="container py-5">
        <div className="row">
          <div
            style={{ lineHeight: "23px" }}
            className="text-justify col-12 col-md-6 px-4"
          >
            <p style={{ fontSize: "14px" }}>
              Nuestro Estudio Jurídico ofrece servicios de asesoría legal
              integral de muy buena calidad, de manera eficaz y eficiente,
              comprometido con las necesidades particulares de nuestros
              clientes. Nuestra obligación de asesoramiento pone gran énfasis en
              usar los más altos estándares éticos y profesionales bajo un
              enfoque de trabajo en grupo de sus propios colaboradores en
              beneficio de sus clientes.
            </p>
            <p style={{ fontSize: "14px" }}>
              El Estudio fue fundado el 03 de abril del 2007 en la ciudad de Ica
              por su socio mayoritario JULIO CÉSAR OCHOA MALDONADO, con la
              finalidad de crear una sociedad de abogados dedicada al
              patrocinio, defensa y asesoramiento de personas naturales y
              jurídicas nacionales.
            </p>
          </div>
          <div
            style={{ lineHeight: "23px" }}
            className="text-justify col-12 col-md-6 px-4"
          >
            <p style={{ fontSize: "14px" }}>
              Durante el desarrollo profesional del Estudio se ha puesto
              especial énfasis en la asesoría de aquellos clientes con intereses
              comerciales en diversas partes del Perú, lo que nos ha permitido
              no sólo mantener vinculaciones profesionales con otras firmas de
              abogados, sino fundamentalmente adquirir la experiencia necesaria
              y el conocimiento que por supuesto ponemos al servicio de todos
              nuestros clientes.
            </p>

            <Link
              to="/Contacto"
              style={{ background: "#c17743", color: "#fff" }}
              className="btn d-block w-50 mx-auto my-5"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container mb-5"
        style={{ height: "8px", background: "#c17743" }}
      ></div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-12 col-md-6 px-4">
            <div style={{ borderBottom: "#999 8px solid" }}>
              <p className="fs-5" style={{ borderLeft: "#c17743 10px solid" }}>
                <b>
                  <b style={{ color: "#fff" }}>V</b>
                  VISIÓN
                </b>
              </p>
            </div>
            <p style={{ fontSize: "14px" }} className="my-4 text-justify">
              Mantenernos como líderes en la asesoría legal en sus diversas
              ramas y recuperaciones judiciales y extrajudiciales dentro de las
              sedes donde funciona el Estudio Jurídico persiguiendo los valores
              de ética y moralidad que son parte integrante de cada uno de sus
              miembros.
            </p>
          </div>
          <div className="col-12 col-md-6 px-4">
            <div style={{ borderBottom: "#999 8px solid" }}>
              <p className="fs-5" style={{ borderLeft: "#c17743 10px solid" }}>
                <b>
                  <b style={{ color: "#fff" }}>V</b>
                  MISIÓN
                </b>
              </p>
            </div>
            <p style={{ fontSize: "14px" }} className="my-4 text-justify">
              Nuestra misión es la de otorgar un servicio legal con un alto
              estándar de calidad, eficiente y en tiempo oportuno, buscando la
              satisfacción, bienestar y beneficio de nuestros clientes para
              obtener relaciones comerciales a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Historia;
