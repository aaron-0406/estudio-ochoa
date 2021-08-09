import React, { useEffect } from "react";

import { Link } from "react-router-dom";

// Componentes
import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import ServicesAccordion from "../../components/Servicios/ServicesAccordion";

// Imagenes
import imagen3 from "../../images/images-services/SERVICIO_2.3.png";

interface listaXD {
  titulo: string;
  texto: any;
}

const ServicioContratos = () => {
  const listaAccordion: listaXD[] = [
    {
      titulo: "Estudio de títulos",
      texto: (
        <p>
          Verificar y analizar la capacidad legal de las partes que participan
          en el contrato de Apertura de cuentas corrientes o de ahorros, de
          compraventa o de garantías mobiliarias o reales. <br />
          Analizar los documentos de titularidad de los bienes materia de
          operación.
          <br />
          Profundizar en cualquier documento necesario para la elaboración de
          contratos o de transacciones que desee realizar el cliente.
        </p>
      ),
    },
    {
      titulo: "Elaboración de contratos",
      texto: (
        <p>
          Hipoteca específica, que va a garantizar una determinada obligación.
          <br />
          Hipoteca genérica: Garantía real que cubre cualquier obligación,
          presente o futura del deudor.
          <br />
          Contratos de arrendamiento financiero o leasing, a fin de adquirir
          activos mediante el financiamiento de la entidad financiera mediante
          arrendamiento con opción de compra.
          <br />
          Contratos de lease back: Cuando el cliente desea financiarse con sus
          propios activos y los vende a la entidad financiera y luego las
          arrienda con opción de compra.
        </p>
      ),
    },
    {
      titulo: "Contratos de garantía mobiliaria",
      texto: (
        <p>
          La garantía mobiliaria puede darse con posesión (garantía mobiliaria
          posesoria) o sin posesión del bien materia de garantía.
          <br />
          Contrato de garantía de bienes muebles con posesión del deudor,
          garantía mobiliaria sobre montos de dinero (contratos de control).
        </p>
      ),
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesSectionRoad
        nameOption="Nuestros Servicios"
        numberRoad={3}
        nameRoadOne="Servicios"
        nameRoadTwo="Contratos"
      />
      <div className="container my-5">
        <div className="row px-3">
          <div className="col-12 col-md-6">
            <h5 className="text-center fw-bold my-4">
              ESTUDIO DE TÍTULOS Y ELABORACIÓN DE CONTRATOS
            </h5>
            <p className="text-justify">
              Nos especializamos en la elaboración de toda clase de contratos
              civiles y bancarios, tales como, el de constitución de hipoteca
              del deudor o de terceros garantes, ampliaciones, ratificaciones,
              modificaciones, créditos hipotecarios en sus distintas modalidades
              (bancarios o NuevoMivivienda), Arrendamiento financiero mobiliario
              e inmobiliario, constitución de garantías mobiliarias en sus
              diversas modalidades, y demás documentos de uso bancario y
              financieros.
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
                src={imagen3}
                alt="Imagen de servicio"
              />
            </div>
          </div>
        </div>
        <div className="row my-5 px-3">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">
            <p className="fw-bold text-center">
              Ofrecemos estos servicios entre otros:
            </p>
            <ServicesAccordion id="accordionUno" lista={listaAccordion} />
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ServicioContratos;
