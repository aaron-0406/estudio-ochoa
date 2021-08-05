import React from "react";

import Carousel from "../components/Home/Carousel";
import HomeSectionUs from "../components/Home/HomeSectionUs";
import Servicios from "../components/Home/Servicios";
import StaffItem from "../components/Home/StaffItem";

import imagen2 from "../images/images-team/Equipo2.png";
import imagen1 from "../images/images-team/Equipo1.png";
import imagen4 from "../images/images-team/Equipo4.png";

const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <Servicios />
      <HomeSectionUs />
      <div className="home container text-center my-5 py-5">
        <h2 className="fs-2 fw-bold mb-5">
          Nuestro <span>Equipo</span>
        </h2>
        <p className="mb-5">Nos permitimos presentarles los servicios de asesoría jurídica que brinda nuestro Despacho, constituido por un grupo de abogados cuya experiencia y especialización se complementan y aseguran un eficiente y oportuno servicio a los clientes.</p>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <StaffItem image={imagen2} name="RAÚL ESTEBAN DÍAZ GUERRERO" job="STAFF" />
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <StaffItem image={imagen1} name="JULIO CÉSAR OCHOA MALDONADO" job="SOCIO FUNDADOR" />
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <StaffItem image={imagen4} name="KATERINE NOEMI GALLO DE LA CRUZ" job="STAFF" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
