import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Componentes
import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import ServicesAccordion from "../../components/Servicios/ServicesAccordion";

// Imagenes
import imagen6 from "../../images/images-services/SERVICIO_2.6.png";

interface listaXD {
  titulo: string;
  texto: any;
}

const ServicioConsumidor = () => {
  const listaAccordion: listaXD[] = [
    {
      titulo: "Barreras burocráticas",
      texto: (
        <p>
          Buscando la eliminación entre las entidades del Estado la eliminación
          de barreras burocráticas que dificulten el acceso o permanencia de
          nuestros clientes en el mercado.
        </p>
      ),
    },
    {
      titulo: "Propiedad intelectual",
      texto: (
        <p>
          Asesoramiento de todo tipo de procesos registrales, de control y
          vigilancia de patentes de invención, diseños industriales, signos
          distintivos (marcas, lemas y nombres comerciales) y derechos de autor
          a nivel nacional.
        </p>
      ),
    },
    {
      titulo: "Protección del consumidor",
      texto: (
        <p>
          Brindamos asesoría en los derechos que se ponen en práctica al momento
          de comprar un producto o contratar un servicio en cualquier
          establecimiento comercial o plataforma de ventas por internet.
        </p>
      ),
    },
    {
      titulo: "Libre competencia",
      texto: (
        <p>
          Otorgamos el apoyo para evitar conductas anticompetitivas como el
          abuso de posición de dominio, prácticas colusorias horizontales y
          prácticas colusorias verticales.
        </p>
      ),
    },
    {
      titulo: "Competencia desleal",
      texto: (
        <p>
          Defender a aquellos consumidores más exigentes e informados y
          asegurarnos que nuestros clientes que sean proveedores sean más
          responsables en el campo de la protección de los derechos del
          consumidor y la publicidad comercial, observando la libre y leal
          competencia.
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
        nameRoadTwo="Consumidor"
      />
      <div className="container my-5">
        <div className="row px-3">
          <div className="col-12 col-md-6">
            <h5 className="text-center fw-bold my-4">
              COMPETENCIA Y PROTECCIÓN AL CONSUMIDOR
            </h5>
            <p className="text-justify">
              Defendemos la vulneración de las marcas, inventos, obras
              literarias, conocimientos ancestrales y diseños industriales, por
              citar algunos. Muchos de estos productos, protegidos por los
              derechos de propiedad intelectual, se han vuelto muy valiosos en
              nuestra sociedad.
            </p>
            <p className="text-justify">
              Estamos capacitados para aplicar la regulación del consumo, de la
              actividad publicitaria y del combate de las prácticas desleales.
              Para nuestros clientes del Sistema financiero en su prestación de
              servicios financieros se ven involucradas en denuncias,
              justificadas o no, por violación a las normas de protección al
              consumidor, a pesar de poseer políticas de protección al
              consumidor.
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
                src={imagen6}
                alt="Imagen de servicio"
              />
            </div>
          </div>
        </div>
        <div className="row my-5 px-3">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">
            <p>
              Nuestro estudio presta servicios de asesoría legal en la defensa
              legal de empresas a las que se ha denunciado por violación a las
              normas de protección al consumidor a fin de acreditar el
              cumplimiento del principio de idoneidad tanto a nivel de INDECOPI
              como ante Defensoría del Usuario Financiero.
            </p>
            <p>
              Asimismo, nuestro estudio brinda asesoría legal al consumidor
              respecto del cual se ha violado el principio de idoneidad a fin de
              que pueda obtener el producto o el servicio en condiciones
              idóneas.
            </p>
            <p className="fw-bold text-center">Ofrecemos estos servicios:</p>
            <ServicesAccordion id="accordionUno" lista={listaAccordion} />
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ServicioConsumidor;
