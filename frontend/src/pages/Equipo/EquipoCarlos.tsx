import React, { useEffect } from "react";

// Iconos
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Imagenes
import imagen6 from "../../images/images-team/Equipo6.png";

// Componentes
import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import EquipoDatos from "../../components/Equipo/EquipoDatos";

interface lista {
  texto: any;
}

const EquipoCarlos = () => {
  const array1: lista[] = [
    {
      texto:
        "Miembro asociado del estudio jurídico, nacido en Nazca el 02 de mayo de 1979, profesional graduado en Derecho y Ciencias Políticas en la Universidad Nacional “San Luis Gonzaga” de Ica, abogado colegiado en el Ilustre Colegio de Abogados de Ica.",
    },
    {
      texto:
        "Con conocimiento y certificación de computación e informática (Experto en Oficce Profesional), estudio de conciliación extrajudicial, con Diplomados en Derecho Civil Patrimonial y cursos acreditados de negociaciones, créditos y cobranzas.",
    },
  ];

  const array2: lista[] = [
    {
      texto:
        "Actualmente es gestor judicial en el Estudio Jurídico Ochoa Maldonado S.C.R.L., encargado de la gestión judicial del Banco Interamericano de Finanzas – BANBIF." +
        "Asimismo la experiencia laboral se circunscribe al ámbito de recuperaciones en cobranza judicial y castigada, no dejando de lado el ejercicio profesional de la defensa jurídica en el ámbito civil desde el año 2007.",
    },
    {
      texto:
        "Fue Secigrista del 5to Juzgado Penal de Ica, acreditado por el Ministerio de Justicia (Minjus), su labor profesional en el sector público comienza en el año 2005 como trabajador del Poder Judicial asignado al juzgado Civil de Chincha, posteriormente asignado al juzgado mixto de parcona y luego al juzgado laboral de Ica.",
    },
    {
      texto:
        "Posteriormente en el mes de marzo del año 2007 empieza su labor como Gestor de cartera castigada de la Caja Municipal de Ahorro y Crédito de Ica S.A. hasta el año 2009 en que fue contratado como Negociador Judicial por la misma entidad hasta el año 2011, posteriormente fue contratado como Gestor judicial de la Cartera Judicial, Castigados y Focmac, de la Caja Municipal de Ahorro y Crédito de Ica S.A. hasta el mes de mayo del 2018.",
    },
    {
      texto:
        "Asimismo fue administrador de la Empresa H&C Abogados Asociados S.C.R.L. encargado de la recuperación de los créditos en cobranza judicial de Caja Municipal de Ahorro y Crédito de Pisco durante el tiempo de intervención por la Superintendencia de Banca y Seguros (SBS) y Financiera TFC S.A. (Cartera Activa en judicial y Cartera Castigada en Judicial) hasta el mes de diciembre del 2019, con conocimiento en manejo de personal, cumplimiento de metas establecidas por la jefatura de recuperaciones y trabajo en equipo.",
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
        nameRoadTwo="Carlos"
      />
      <div className="container my-5">
        <div className="row mx-2">
          <div className="col-12 col-md-4">
            <div className="shadow-lg rounded mx-4">
              <img src={imagen6} alt="imagen de abogado" width="100%" />
            </div>
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <h3 className="fw-bold my-4">CARLOS ENRIQUE HUAMANI CANTORAL</h3>
            <p style={{ color: "#c17743" }} className="fs-5 fw-bold">
              STAFF
            </p>
            <p>
              <FaPhoneAlt className="fs-5" color="#c17743" />
              <i> </i>
              +51 956 - 653 - 030
            </p>
            <p>
              <FaEnvelope className="fs-5" color="#c17743" />
              <i> </i>
              carlos.huamani@estudioochoamaldonado.com
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

export default EquipoCarlos;
