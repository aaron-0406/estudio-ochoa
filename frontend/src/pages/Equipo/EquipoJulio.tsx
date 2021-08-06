import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import imagen1 from "../../images/images-team/Equipo1.png";

import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import EquipoDatos from "../../components/Equipo/EquipoDatos";

interface lista {
  texto: any;
}

const EquipoJulio = () => {
  const array1: lista[] = [
    {
      texto:
        "Posee estudios de Maestría de Derecho de la Empresa en la Escuela de Posgrado de la Pontificia Universidad Católica del Perú, egresado del III Programa Internacional de Alta Dirección de la Universidad de la ESAN Graduate School of Business de Perú; terminó el Seminario de Dirección Estratégica en Entidades Financieras dictado en la Universidad Uniempresarial de Bogotá, Colombia. Participación concluida en el Seminario de Dirección Estratégica Comercial de Entidades Financieras de ESIC Bussines & Marketing School de Madrid, España. Egresado de Curso de Neuroliderazgo en la Gestión Estratégica realizado en el Retail Institute de Madrid, España.",
    },
    {
      texto:
        "Acreditado como Conciliador Extrajudicial en el Centro Interamericano de Administración y Comercio y con Diplomados en Derecho Civil, otorgados por el Centro Empresarial Latinoamericano; con amplia experiencia en el ejercicio profesional de la defensa desde el año de 1,998. Árbitro en Derecho debidamente acreditado en la Cámara de Comercio, Industria y Turismo de Ica.",
    },
    {
      texto:
        "Dentro de su especialización en las áreas del derecho se encuentran el Derecho Comercial y Societario, Contratación Privada, Derecho Laboral, Cobranzas Judiciales y Extrajudiciales.",
    },
  ];

  const array2: lista[] = [
    {
      texto:
        "Actualmente es asesor legal externo del Banco BBVA PERU en procesos de contratación y Recuperaciones en la ciudad de Ica, Pisco y Chincha, Ayacucho y Huancayo. Especializado en la elaboración de contratos bancarios con o sin garantía en dicha institución bancaria, estudio de poderes y otros temas de índole legal otorgando la asesoría integral que dicha institución necesita.",
    },
    {
      texto:
        "Director de la Caja Municipal de Ahorro y Crédito de Ica durante el período comprendido en los años 2007-2009 y 2018 hasta la actualidad representando a la Municipalidad Provincial de Ica, Miembro del Comité de Riesgos y Comité de Auditoría, Presidente del Comité de Prevención del Lavado de Activos y Presidente del Comité de Gobierno Corporativo.",
    },
    {
      texto:
        "Por último, fue Asesor Legal del Banco de la Nación en la Oficina de Ica donde efectuó la defensa de dicha entidad en todas las ramas del Derecho, incluido los procesos constitucionales de hábeas data y las de Derecho Administrativo referidos a denuncias por infracción al derecho de protección al consumidor contra del Banco por el uso de tarjetas plásticas, de cajeros, suplantación y de falta de idoneidad en la prestación de servicios sobre falta de información de tarifas y comisiones.",
    },
  ];

  const array3: lista[] = [
    {
      texto:
        "Docente de la Universidad Privada San Juan Bautista Filial Ica en las cátedras de Títulos Valores, Derecho Monetario y Bancario, Derecho de Obligaciones y Derecho Concursal en la Facultad de Derecho y Ciencias Políticas y del Curso de Sociedades y Asociaciones en la Facultad de Ciencias Administrativas desde el año 2007 hasta 2018.",
    },
  ];

  return (
    <>
      <ServicesSectionRoad
        nameOption="Nuestro Equipo"
        numberRoad={3}
        nameRoadOne="Equipo"
        nameRoadTwo="Julio"
      />
      <div className="container my-5">
        <div className="row mx-2">
          <div className="col-12 col-md-4">
            <div className="shadow-lg rounded mx-4">
              <img src={imagen1} alt="imagen de abogado" width="100%" />
            </div>
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <h3 className="fw-bold my-4">JULIO CÉSAR OCHOA MALDONADO</h3>
            <p style={{ color: "#c17743" }} className="fs-5 fw-bold">
              SOCIO FUNDADOR
            </p>
            <p>
              <FaPhoneAlt className="fs-5" color="#c17743" />
              <i> </i>
              +51 956 - 663 - 286
            </p>
            <p>
              <FaEnvelope className="fs-5" color="#c17743" />
              <i> </i>
              julio.ochoa@estudioochoamaldonado.com
            </p>
            <p className="text-justify">
              Nuestro socio fundador y Administrador del Estudio Jurídico,
              nacido en Ica en 1,970, ex alumno salesiano de Huancayo,
              profesional graduado en Derecho y Ciencias Políticas en la
              Universidad Nacional “San Luis Gonzaga” de Ica, con formación
              académica para el ejercicio de la disciplina jurídica, con Título
              de Abogado y Colegiatura del Ilustre Colegio de Abogados de Ica.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <EquipoDatos titulo="Estudios y grados académicos" array={array1} />
            <EquipoDatos titulo="Experiencia Profesional" array={array3} />
          </div>
          <div className="col-12 col-md-6">
            <EquipoDatos titulo="Experiencia Profesional" array={array2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipoJulio;
