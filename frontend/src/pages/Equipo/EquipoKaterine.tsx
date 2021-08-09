import React, { useEffect } from "react";

// Iconos
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Imagenes
import imagen4 from "../../images/images-team/Equipo4.png";

// Componentes
import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import EquipoDatos from "../../components/Equipo/EquipoDatos";

interface lista {
  texto: any;
}

const EquipoKaterine = () => {
  const array1: lista[] = [
    {
      texto:
        "Abogada, egresada en la carrera de Derecho Y Ciencias Políticas de la Universidad Nacional San Luis Gonzaga, con colegiatura en el Ilustre Colegio de Abogados de Ica.",
    },
  ];

  const array2: lista[] = [
    {
      texto:
        "Con 05 años de experiencia en recuperación de cartera de instituciones bancarias, financieras y conexos (CMAC ICA, FINANCIERA TFC, BANCO PICHINCHA), cobranza judicial y extrajudicial." +
        "Habilidad para la cobranza, la atención personalizada y servicio al cliente, negociando compromisos y acuerdos a fin de establecer propuestas de pago que permitan la recuperación de los créditos judiciales en procesos masivos.",
    },
    {
      texto:
        "Actualmente como abogado del BANCO DE CREDITO DEL PERU, en procesos de recuperaciones en la ciudad de Ica, Nazca, Pisco, Chincha, y Cañete. Disponibilidad absoluta y completa dedicación dirigida al logro de objetivos comunes.",
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
        nameRoadTwo="Katerine"
      />
      <div className="container my-5">
        <div className="row mx-2">
          <div className="col-12 col-md-4">
            <div className="shadow-lg rounded mx-4">
              <img src={imagen4} alt="imagen de abogado" width="100%" />
            </div>
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <h3 className="fw-bold my-4">KATERINE NOEMI GALLO DE LA CRUZ</h3>
            <p style={{ color: "#c17743" }} className="fs-5 fw-bold">
              STAFF
            </p>
            <p>
              <FaPhoneAlt className="fs-5" color="#c17743" />
              <i> </i>
              +51 944 - 246 - 870
            </p>
            <p>
              <FaEnvelope className="fs-5" color="#c17743" />
              <i> </i>
              katerine.gallo@estudioochoamaldonado.com
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

export default EquipoKaterine;
