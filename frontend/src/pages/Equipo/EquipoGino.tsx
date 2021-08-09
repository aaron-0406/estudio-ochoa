import React, { useEffect } from "react";

// Iconos
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Imagenes
import imagen5 from "../../images/images-team/Equipo5.png";

// Componentes
import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import EquipoDatos from "../../components/Equipo/EquipoDatos";

interface lista {
  texto: any;
}

const EquipoGino = () => {
  const array1: lista[] = [
    {
      texto:
        "Posee estudios de Maestría de Derecho Penal en la Escuela de Postgrado de la Universidad San Martín de Porres, egresado del Curso “Negociación para la Resolución de Conflictos y Disputas”, organizado por United Nations Institute for Training and Research – UNITAR y el Ministerio de Asuntos Exteriores y de Cooperación del Gobierno de España.",
    },
    {
      texto:
        "Con estudios de Diplomados en Derecho Penal, Derecho Procesal Penal, Derecho Laboral, Derecho Tributario y Gestión Pública; con amplia experiencia en el ejercicio profesional de la defensa desde el año 2006.",
    },
    {
      texto:
        "Dentro de su especialización en las áreas del derecho se encuentran el Derecho Penal, Procesal Penal, Laboral, Gestión Pública y Tributario.",
    },
  ];

  const array2: lista[] = [
    {
      texto:
        "Dentro de su Trayectoria Profesional ha laborado en el Ministerio Público – Distrito Fiscal de Ica, habiendo ocupado el cargo de Fiscal Adjunto Provincial Penal en los años 2009-2012.",
    },
    {
      texto:
        "Sub Gerente de Asesoramiento del Servicio de Administración Tributaria de Ica – SAT-ICA en los años 2012-2019.",
    },
    {
      texto:
        "Cuenta con amplia experiencia en litigios penales y laborales, así como en asesoría procesal y preventiva que minimice contingencias penales en operaciones societarias, contractuales o fiscales y de negocios en general.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesSectionRoad
        nameOption="Nuestro Equipo"
        numberRoad={3}
        nameRoadOne="Equipo"
        nameRoadTwo="Gino"
      />
      <div className="container my-5">
        <div className="row mx-2">
          <div className="col-12 col-md-4">
            <div className="shadow-lg rounded mx-4">
              <img src={imagen5} alt="imagen de abogado" width="100%" />
            </div>
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <h3 className="fw-bold my-4">GINO MARTÍN NAVARRO RAMOS</h3>
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
              gino.navarro@estudioochoamaldonado.com
            </p>
            <p className="text-justify">
              Nuestro Abogado colaborador del Estudio Jurídico, nacido en Lima
              en 1,978, ex alumno Vicentino de Ica, profesional graduado en
              Derecho y Ciencias Políticas en la Universidad Nacional “San Luis
              Gonzaga” de Ica, con formación académica para el ejercicio de la
              disciplina jurídica, con Título de Abogado y Colegiatura del
              Ilustre Colegio de Abogados de Ica.
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

export default EquipoGino;
