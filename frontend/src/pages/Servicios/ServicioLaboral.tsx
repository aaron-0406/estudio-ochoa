import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Componentes
import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import ServicesAccordion from "../../components/Servicios/ServicesAccordion";

// Imagenes
import imagen4 from "../../images/images-services/SERVICIO_2.4.png";

interface listaXD {
  titulo: string;
  texto: any;
}

const ServicioLaboral = () => {
  const listaAccordion: listaXD[] = [
    {
      titulo:
        "Defensa empresarial y personal de solicitudes de pagos de beneficios sociales",
      texto: (
        <p>
          Existen trabajadores que consideran que sus beneficios sociales no les
          han sido cancelados o por el contrario empresas que creen que, si lo
          han hecho, por ello defendemos a nuestros clientes ante tales
          circunstancias, o pago diminuto de los mismos.
        </p>
      ),
    },
    {
      titulo: "Desnaturalización de la relación contractual",
      texto: (
        <p>
          De la misma forma realizamos la defensa en caso existan
          interpretaciones distintas de los contratos de trabajo a plazo
          determinado o indeterminado, así como cualquier otra forma de
          contratación civil que deba ser laboral.
        </p>
      ),
    },
    {
      titulo: "Despido arbitrario",
      texto: (
        <p>
          Cuando existe desvinculación del trabajador sin justificación alguna.
        </p>
      ),
    },
    {
      titulo: "Despido nulo o fraudulento",
      texto: (
        <p>
          Cuando las condiciones del cese laboral se sustentan en situaciones
          ficticias creadas para el despido o no contempladas por las normas
          laborales.
        </p>
      ),
    },
    {
      titulo: "Infracciones del ente regulador",
      texto: (
        <p>
          Existen ante los empleadores las decisiones que sancionan a los
          empleadores por supuestas infracciones cometidos en contra de la norma
          laboral.
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
        nameRoadTwo="Laboral"
      />
      <div className="container my-5">
        <div className="row px-3">
          <div className="col-12 col-md-6">
            <h5 className="text-center fw-bold my-4">LABORAL</h5>
            <p className="text-justify">
              Nuestro Estudio ofrece completa asesoría en relación con la
              legislación laboral vigente en el Perú, la cual ha sido objeto de
              modificaciones sustanciales. En ese sentido, un aspecto importante
              es el asesoramiento de utilización de la forma de contratación más
              adecuada, dentro del giro de la propia empresa, lo que implica una
              correcta elaboración de los contratos laborales pertinentes.
            </p>
            <p className="text-justify">
              Asimismo, el asesoramiento que se brinda tiene el objeto el
              evaluar el otorgamiento de beneficios sociales de manera tal que
              se beneficie la empresa con un menor costo y el trabajador.
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
                src={imagen4}
                alt="Imagen de servicio"
              />
            </div>
          </div>
        </div>
        <div className="row my-5 px-3">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">
            <p>
              Finalmente, la asesoría comprende la representación en todo tipo
              de procesos ante las autoridades y juzgados laborales.
            </p>
            <p className="fw-bold text-center">Entre otros ofrecemos:</p>
            <ServicesAccordion id="accordionUno" lista={listaAccordion} />
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ServicioLaboral;
