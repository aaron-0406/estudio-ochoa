import React from "react";
import { Link } from "react-router-dom";

import ServicesSectionRoad from "../../components/Equipo/ServicesSectionRoad";
import ServicesAccordion from "../../components/Servicios/ServicesAccordion";

import imagen9 from "../../images/images-services/SERVICIO_2.9.png";

interface listaXD {
  titulo: string;
  texto: any;
}

const ServicioRecuperaciones = () => {
  const listaAccordion1: listaXD[] = [
    {
      titulo: "Cancelación total",
      texto: (
        <p>
          Buscando que el deudor cancele el total de su deuda, inclusive
          capital, intereses compensatorios y morosos, pudiéndose mejorar el
          valor de los intereses.
        </p>
      ),
    },
    {
      titulo: "Transacción judicial o extrajudicial",
      texto: (
        <p>
          Al culminar las negociaciones, ambas partes (acreedor-deudor) ofrecen
          concesiones recíprocas y llegan a un acuerdo y reconocimiento de deuda
          y ofrecen el pago en cuotas conforme los parámetros que se consideren
          justos.
        </p>
      ),
    },
    {
      titulo: "Medidas del acreedor",
      texto: (
        <p>
          El acreedor podrá proponer campañas o diferentes modos de cobranza que
          aseguraremos puedan cumplirse y lograr la recuperación efectiva del
          bien.
        </p>
      ),
    },
    {
      titulo: "Dación en pago",
      texto: (
        <p>
          Cuando el deudor ofrece un bien para el pago de la deuda y que tenga
          los requerimientos mínimos que alcancen la cancelación de la deuda.
        </p>
      ),
    },
  ];

  const listaAccordion: listaXD[] = [
    {
      titulo: "Ejecución de garantías",
      texto: (
        <p>
          El acreedor podrá interponer la acción de ejecutar las garantías de
          las obligaciones morosas coberturadas o no por el contrato de
          constitución de hipoteca, en ambos casos nos aseguramos de que el
          acreedor efectúe la recuperación efectiva de su crédito.
        </p>
      ),
    },
    {
      titulo: "Medidas cautelares",
      texto: (
        <p>
          Aseguramos el pago de la obligación mediante la búsqueda de bienes
          registrales e interponemos medidas de bloqueo registral para que se
          asegure la recuperación efectiva una vez lo ordene el Juez, estas
          medidas pueden ser realizadas fuera o dentro del proceso de acuerdo
          con el título exigible.
        </p>
      ),
    },
    {
      titulo: "Obligación de dar suma de dinero",
      texto: (
        <p>
          Al no existir bienes materia de aseguramiento de parte del deudor,
          interponemos la demanda indicada y aseguramos que se requiera hasta
          que pague o pase al registro de deudores judiciales morosos, con sus
          respectivas consecuencias.
        </p>
      ),
    },
    {
      titulo: "Pago de suma de dinero",
      texto: (
        <p>
          Cuando el título exigible no tiene mérito ejecutivo, debemos
          interponer demanda de pago de soles adjuntando todos los medios
          probatorios de la deuda.
        </p>
      ),
    },
    {
      titulo: "Remates",
      texto: (
        <p>
          Al concluir los procesos judiciales y de existir bienes nos aseguramos
          de rematar los bienes en subasta para que con el producto de lo
          recaudado por cada uno logremos pagar la deuda.
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
        nameRoadTwo="Recuperaciones"
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5 className="text-center fw-bold my-4">
              RECUPERACIONES JUDICIALES Y EXTRAJUDICIALES DE DEUDAS
            </h5>
            <p className="text-justify">
              Asimismo, nos encargamos de recuperaciones de cartera morosa a
              través de la cobranza judicial o extrajudicial. Nuestra
              experiencia ha permitido que logremos un porcentaje extraordinario
              de resultados favorables, así como, ha logrado que no existan
              conflictos de intereses en caso de que un mismo deudor mantenga
              varias deudas, aplicando un trato personalizado a cada cliente
              acreedor y una organizada labor de manejar los procesos judiciales
              o solicitudes de cobranza extrajudicial.
            </p>
            <p className="text-justify">
              El área tiene personal especialmente asignado para desarrollar
              estrategias que garantizan que el sistema de créditos y cobranzas
              de nuestros clientes funcione óptimamente, tanto en moneda
              nacional como extranjero.
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
                src={imagen9}
                alt="Imagen de servicio"
              />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">
            <p className="fw-bold text-center">
              Los servicios de recuperación judicial, entre otros tenemos:
            </p>
            <ServicesAccordion id="accordionUno" lista={listaAccordion} />
            <p className="my-5">
              Al concluir los procesos judiciales y de existir bienes nos
              aseguramos de rematar los bienes en subasta para que con el
              producto de lo recaudado por cada uno logremos pagar la deuda.
            </p>
            <p className="fw-bold text-center">
              Entre los servicios extra judiciales ofrecemos, sin limitación
              alguna:
            </p>
            <p>
              Este tipo de cobranza infiere la búsqueda del deudor y solicitar
              vía telefónica, cartas, mensajes en redes sociales, el pago de su
              obligación, ofreciéndole todas las condiciones a las que puede
              acceder de acuerdo a su tipo de crédito y lograr así la eficiencia
              en la recuperación efectiva del crédito. Dichas negociaciones que
              pueden ofrecerse son:
            </p>
            <ServicesAccordion id="accordionDos" lista={listaAccordion1} />
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ServicioRecuperaciones;
