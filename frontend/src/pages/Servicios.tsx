import React, { useEffect } from "react";

import ServicesSectionRoad from "../components/Equipo/ServicesSectionRoad";
import ServicesSectionService from "../components/Servicios/ServicesSectionService";

import img_servicio1 from "../images/images-services/SERVICIO_2.1.jpg";
import img_servicio2 from "../images/images-services/SERVICIO_2.2.png";
import img_servicio3 from "../images/images-services/SERVICIO_2.3.png";
import img_servicio4 from "../images/images-services/SERVICIO_2.4.png";
import img_servicio5 from "../images/images-services/SERVICIO_2.5.png";
import img_servicio6 from "../images/images-services/SERVICIO_2.6.png";
import img_servicio7 from "../images/images-services/SERVICIO_2.7.png";
import img_servicio8 from "../images/images-services/SERVICIO_2.8.png";
import img_servicio9 from "../images/images-services/SERVICIO_2.9.png";
import img_servicio10 from "../images/images-services/SERVICIO_2.10.png";
import ServicesSectionPhrase from "../components/Servicios/ServicesSectionPhrase";

const Servicios: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesSectionRoad
        nameOption="Nuestros Servicios"
        numberRoad={2}
        nameRoadOne="Servicios"
      />
      <div className="container my-3">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Corporativa"
              image={img_servicio1}
              title="Corporativa y Mercantil"
              text="Nuestro Estudio ha desarrollado una vasta experiencia en la creación de estructuras corporativas ..."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Finanzas"
              image={img_servicio2}
              title="Finanzas Banca y Seguros"
              text="Nuestro Estudio se encuentra familiarizado con la implementación de proyectos de financiamiento ..."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Contratos"
              image={img_servicio3}
              title="Estudio de Tìtulos y Elaboraciòn de Contratos"
              text="Elaboración de toda clase de contratos civiles y bancarios ..."
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Laboral"
              image={img_servicio4}
              title="Laboral"
              text="Nuestro Estudio ofrece completa asesoría en relación con la legislación laboral vigente en el Perú ..."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Concursal"
              image={img_servicio5}
              title="Concursal"
              text="El Derecho Concursal tiene una doble óptica; por un lado, la perspectiva del deudor en situación económica ..."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Consumidor"
              image={img_servicio6}
              title="Competencia y Protección al Consumidor"
              text="Defendemos la vulneración de las marcas, inventos, obras literarias ..."
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Civil"
              image={img_servicio7}
              title="Civil"
              text="Esta área está orientada a brindar asesoría legal en las distintas materias del derecho Civil ..."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Penal"
              image={img_servicio8}
              title="Penal"
              text="El Estudio posee amplia experiencia en la asesoría legal en la defensa de los bienes jurídicos ..."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Recuperaciones"
              image={img_servicio9}
              title="Recuperaciones Judiciales y Extrajudiciales de Deudas"
              text="Asimismo, nos encargamos de recuperaciones de cartera morosa a través de la cobranza judicial o extrajudicial ..."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3">
            <ServicesSectionService
              url="/Servicios/Litigios"
              image={img_servicio10}
              title="Litigios"
              text="Nuestro Estudio se encarga de patrocinar a nuestros clientes en sus procesos judiciales ..."
            />
          </div>
        </div>
      </div>
      <ServicesSectionPhrase />
    </>
  );
};

export default Servicios;
