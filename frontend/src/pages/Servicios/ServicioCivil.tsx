import React from "react";
import { Link } from "react-router-dom";

import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import ServicesAccordion from "../../components/Servicios/ServicesAccordion";

import imagen7 from "../../images/images-services/SERVICIO_2.7.png";

interface listaXD {
  titulo: string;
  texto: any;
}

const ServicioCivil = () => {
  const listaAccordion: listaXD[] = [
    {
      titulo: "Sucesión intestada",
      texto: (
        <p>
          Al ocurrir un deceso sin que exista testamento, los clientes que se
          consideren herederos forzosos del fallecido podrán realizarlo de
          manera notarial o judicial por lo que ponemos a disposición el
          asesoramiento eficaz para su declaración.
        </p>
      ),
    },
    {
      titulo: "Redacción de testamentos",
      texto: (
        <p>
          Realizamos el Estudio de títulos y elaboración de testamentos y
          legados para mantener en orden los derechos patrimoniales adquiridos
          en vida por el cliente.
        </p>
      ),
    },
    {
      titulo: "Divorcios",
      texto: (
        <p>
          Efectuamos desde la desvinculación conyugal, junto con la petición de
          los derechos conexos al interés superior del niño y derechos
          patrimoniales, ante solicitud de separación convencional, a nivel
          judicial, municipal y notarial, así como aquellos que posean causal.
        </p>
      ),
    },
    {
      titulo: "Prescripción adquisitiva y extintiva",
      texto: (
        <p>
          Para adquirir un bien mueble o inmueble por el transcurso del plazo
          legal de la posesión legítima, continua y pacífica; por otro lado, de
          acuerdo con lo prescrito por el Código Civil, por el decurso
          prescriptorio podemos exigir la inexistencia del derecho a accionar
          judicialmente sobre derechos que hayan existido previamente.
        </p>
      ),
    },
    {
      titulo:
        "Indemnizaciones de daños y perjuicios contractual y extracontractual",
      texto: (
        <p>
          Dentro de los plazos legales podemos tramitar las indemnizaciones que
          provengan del cumplimiento tardío o defectuoso de los contratos,
          convenios, relaciones comerciales u otros por alguna de las partes y
          asimismo, pedir la indemnización por daños ocasionados por accidentes
          o conductas que perjudiquen al cliente.
        </p>
      ),
    },
    {
      titulo: "Compraventa",
      texto: (
        <p>
          Asesoramos en aquellas negociaciones de compra o venta de bienes
          muebles o inmuebles tanto por el monto como en las condiciones
          especiales que se pretendan.
        </p>
      ),
    },
    {
      titulo: "Inmatriculación y rectificación de áreas",
      texto: (
        <p>
          Cuando un inmueble no ha sido registrado ante la Oficina Registral de
          Predios podemos efectuar la inmatriculación del mismo realizando los
          trámites exigibles y en caso de que el área utilizada del predio no
          sea similar a la registrada realizamos la rectificación cumpliendo con
          los requisitos para ello.
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
        nameRoadTwo="Civil"
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5 className="text-center fw-bold my-4">CIVIL</h5>
            <p className="text-justify">
              Esta área está orientada a brindar asesoría legal en las distintas
              materias del derecho Civil, con especial ponderación en el Derecho
              Civil Patrimonial. El área se encarga de elaborar los distintos
              contratos regulados en nuestro ordenamiento civil vigente tales
              como Compra venta, arrendamiento, locación de servicios, fianza,
              entre otros, diseñando asimismo, estructuras contractuales
              atípicas que se adecuen a los requerimientos específicos de
              nuestros clientes.
            </p>
            <p className="text-justify">
              Esta área también proporciona asesoría en Derecho de Familia
              (divorcios de mutuo acuerdo notariales o municipales, o aquellos
              con causal), Sucesiones, Derechos reales, representación derechos
              reales de garantía y demás áreas.
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
                src={imagen7}
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
            <p className="text-justify my-5">
              Cuando un inmueble no ha sido registrado ante la Oficina Registral
              de Predios podemos efectuar la inmatriculación del mismo
              realizando los trámites exigibles y en caso de que el área
              utilizada del predio no sea similar a la registrada realizamos la
              rectificación cumpliendo con los requisitos para ello.
            </p>
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ServicioCivil;
