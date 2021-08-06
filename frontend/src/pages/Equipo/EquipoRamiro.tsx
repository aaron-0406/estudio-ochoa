import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import imagen7 from "../../images/images-team/Equipo7.png";

import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import EquipoDatos from "../../components/Equipo/EquipoDatos";

interface lista {
  texto: any;
}

const EquipoRamiro = () => {
  const array1: lista[] = [
    {
      texto:
        "Estudios culminados de Maestría en Derecho Civil y Comercial de la Universidad Inca Garcilazo de la Vega Lima, Especialista en Instituciones de Derecho Civil organizado por el Instituto de Capacitación y Actualización Profesional del Colegio de Abogados de Huancavelica.",
    },
    {
      texto:
        "Especialista en Contrataciones con El Estado por la Universidad Continental de Huancayo.",
    },
    {
      texto:
        "Especialista Preparado para la Función Notarial por EGACAL Escuela de Altos Estudios Jurídicos.",
    },
    {
      texto:
        "Especialista en Gestión Pública por la APECC Asociación Peruana de Ciencias Jurídicas y Conciliación, ARBITRO de la: ASOCIACION PERUANA DE PREVENCION Y RESOLUCION DE CONFLICTOS “COSTRUYENDO UNA CULTURA DE PAZ Y CENTRO DE FORMACION Y CAPACITACION DE CONCILIADORES”",
    },
  ];

  const array2: lista[] = [
    {
      texto: "Asesor Legal Externo de la Municipalidad Provincial de Huancayo.",
    },
    {
      texto: "Asesor Legal Externo de la Municipalidad Distrital de El Tambo.",
    },
    {
      texto:
        "Asesor Legal Externo de la Municipalidad Distrital de Pariahuanca.",
    },
    {
      texto:
        "Asesor Legal Externo de la Dirección Regional de Transportes - Junín.",
    },
    {
      texto:
        "Asesor Legal de Comisiones Especial de Procesos Administrativos de la Dirección Regional de Transportes – Junín.",
    },
    {
      texto:
        "Asesor Legal Externo de la Dirección Regional de Transportes-Huancavelica.",
    },
    {
      texto:
        "Asesor Legal Externo de la Dirección Regional de la Producción - Junín.",
    },
    {
      texto:
        "Asesor Legal Externo de la Municipalidad Provincial de Concepción.",
    },
    {
      texto:
        "Asesor Legal Externo de la Municipalidad de Provincial de Pampas– Tayacaja.",
    },
    {
      texto: "Asesor Legal Externo de la Municipalidad de Colcabamba – Pampas.",
    },
    {
      texto:
        "Asesor Legal Externo de la Municipalidad Distrital de Anco – Churcampa.",
    },
    {
      texto:
        "Asesor Legal Externo de la Municipalidad Distrital de Acraquia – Pampas.",
    },
    {
      texto:
        "Asesor Legal Externo de la Sociedad de Beneficencia Pública de Huancayo.",
    },
    {
      texto:
        "Asesor Legal de las Comisiones Auditoras de la Oficina de Control Institucional de la Sociedad de Beneficencia Pública de Huancayo.",
    },
    {
      texto: "Asesor Legal Externo de la Cámara de Comercio de Huancayo.",
    },
    {
      texto:
        "Asesor Legal Externo de la Universidad Nacional del Centro del Perú.",
    },
    {
      texto:
        "Asesor Legal Externo de la Procuraduría Pública de la Municipalidad Provincial de Tayacaja.",
    },
    {
      texto:
        "Asesor Legal Externo de la Municipalidad Provincial de Angaraes - Huancavelica.",
    },
    {
      texto:
        "Asesor Legal Externo de la Municipalidad Distrital de Acoria - Huancavelica.",
    },
  ];

  return (
    <>
      <ServicesSectionRoad
        nameOption="Nuestro Equipo"
        numberRoad={3}
        nameRoadOne="Equipo"
        nameRoadTwo="Ramiro"
      />
      <div className="container my-5">
        <div className="row mx-2">
          <div className="col-12 col-md-4">
            <div className="shadow-lg rounded mx-4">
              <img src={imagen7} alt="imagen de abogado" width="100%" />
            </div>
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <h3 className="fw-bold my-4">RAMIRO DURAND CONTRERAS</h3>
            <p style={{ color: "#c17743" }} className="fs-5 fw-bold">
              STAFF
            </p>
            <p>
              <FaPhoneAlt className="fs-5" color="#c17743" />
              <i> </i>
              056 - 763272
            </p>
            <p>
              <FaEnvelope className="fs-5" color="#c17743" />
              <i> </i>
              ramiro.durand@estudioochoamaldonado.com
            </p>
            <p className="text-justify">
              Nacido en la ciudad de Huancayo, ex alumno del Colegio Salesiano
              Santa Rosa de Huancayo, profesional graduado en Derecho y Ciencias
              Políticas en la Universidad Particular San Martín de Porres de
              Lima, con Título de Abogado y Colegiatura del Colegio de Abogados
              de Junín.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <EquipoDatos titulo="Estudios y grados académicos" array={array1} />
          </div>
          <div className="col-12 col-md-6">
            <EquipoDatos titulo="Experiencia Profesional" array={array2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipoRamiro;
