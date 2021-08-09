import React from "react";

// Iconos
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Imagenes
import imagen8 from "../../images/images-team/Equipo8.png";

// Componentes
import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import EquipoDatos from "../../components/Equipo/EquipoDatos";

interface lista {
  texto: any;
}

const EquipoMauricio = () => {
  const array1: lista[] = [
    {
      texto:
        "Posee estudios de administración de negocios, en etapa concluida en ZEGEL IPAE en el año 2018, lo que le posibilita no solo entender las necesidades jurídicas de nuestros clientes, sino también analizar más a fondo el comportamiento comercial a efecto de establecer una cultura de prevención.",
    },
    {
      texto:
        "Dentro de su especialización en las áreas del derecho se encuentran el Derecho Civil y Comercial, Derecho Laboral, Derecho del Consumidor y Derecho de la empresa, tanto es especializo en negociaciones de deudas extrajuciales y judiciales.",
    },
  ];

  const array2: lista[] = [
    {
      texto:
        "Desde Noviembre del año 2017 a la actualidad se desempeña como abogado encargado de la cartera morosa de cobranzas judiciales de la Entidad Financiera MIBANCO, BANCO DE LA MICROEMPRESA S.A, en sus agencias de Ica, Ica Matriz, Pisco, Chincha, Cañete, Mala y Chilca, realizando las labores de estudio de viabilidad de títulos, elaboración de demandas de Ejecución de Garantias, Obligación de Dar Suma de Dinero y elaboración de solicitudes cautelares, tanto como realiza la gestión de negociación, procurando el mayor beneficio para mibanco. Asimismo desempeña la defensa legal de los procesos judiciales del Estudio Jurídico.",
    },
    {
      texto:
        "Desde Junio del 2019 a la actualidad ostenta el cargo de apoderado de la Entidad Financiera MIBANCO, BANCO DE LA MICROEMPRESA S.A, a efectos de representarla en todo proceso judicial, conciliación extrajudicial y en la labor de procuraduría que el banco solicite.",
    },
    {
      texto:
        "Por ultimo inicio sus prácticas profesionales en el año 2015, desempeñándose como practicante, para luego ser asistente del Director del Estudio Jurídico Ochoa Maldonado & Abogados Asociados.",
    },
  ];

  return (
    <>
      <ServicesSectionRoad
        nameOption="Nuestro Equipo"
        numberRoad={3}
        nameRoadOne="Equipo"
        nameRoadTwo="Mauricio"
      />
      <div className="container my-5">
        <div className="row mx-2">
          <div className="col-12 col-md-4">
            <div className="shadow-lg rounded mx-4">
              <img src={imagen8} alt="imagen de abogado" width="100%" />
            </div>
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <h3 className="fw-bold my-4">MAURICIO ANDRE MATTA MORALES</h3>
            <p style={{ color: "#c17743" }} className="fs-5 fw-bold">
              STAFF
            </p>
            <p>
              <FaPhoneAlt className="fs-5" color="#c17743" />
              <i> </i>
              +51 971 - 092 - 525
            </p>
            <p>
              <FaEnvelope className="fs-5" color="#c17743" />
              <i> </i>
              mauricio.matta@estudioochoamaldonado.com
            </p>
            <p className="text-justify">
              Nuestro Abogado, nacido en 1993, ex alumno del Colegio Data
              System`s Ingenieros de Ica, Profesional Graduado en Derecho en el
              año 2016 en la Universidad Privada San Juan Bautista, con
              formación académica de alto rango para el ejercicio de la
              abogacía, con Título Profesional de Abogado y Colegiatura con el
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

export default EquipoMauricio;
