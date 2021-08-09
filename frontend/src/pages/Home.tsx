import React, { useEffect } from "react";

// Componentes
import Carousel from "../components/Home/Carousel";
import HomeSectionUs from "../components/Home/HomeSectionUs";
import Servicios from "../components/Home/Servicios";
import StaffItem from "../components/Home/StaffItem";

// Imagenes
import imagen8 from "../images/images-team/Equipo8.png";
import imagen1 from "../images/images-team/Equipo1.png";
import imagen4 from "../images/images-team/Equipo4.png";

const Home: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Carousel />
      <Servicios />
      <HomeSectionUs />
      <div className="home container text-center my-5 py-5">
        <h2 className="fs-2 fw-bold mb-5">
          Nuestro <span>Equipo</span>
        </h2>
        <p className="mb-5">
          Nos permitimos presentarles los servicios de asesoría jurídica que
          brinda nuestro Despacho, constituido por un grupo de abogados cuya
          experiencia y especialización se complementan y aseguran un eficiente
          y oportuno servicio a los clientes.
        </p>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <StaffItem
              url="/Equipo/Mauricio"
              image={imagen8}
              name="MAURICIO ANDRE MATTA MORALES"
              job="STAFF"
            />
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <StaffItem
              url="/Equipo/Julio"
              image={imagen1}
              name="JULIO CÉSAR OCHOA MALDONADO"
              job="SOCIO FUNDADOR"
            />
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <StaffItem
              url="/Equipo/Katerine"
              image={imagen4}
              name="KATERINE NOEMI GALLO DE LA CRUZ"
              job="STAFF"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
