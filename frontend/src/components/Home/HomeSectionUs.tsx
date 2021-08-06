import React from "react";
import { Link } from "react-router-dom";

import imagenUs from "../../images/home-section-us.jpg";

const HomeSectionUs: React.FC = () => {
  return (
    <div className="hsu py-2">
      <div className="container py-5">
        <div className="row text-center text-md-left">
          <div className="col-12 col-md-6">
            <h2 className="fs-4 fw-bold mb-4 text-center">
              Quienes <span>Somos</span>
            </h2>
            <p className="px-5">Nuestro Estudio Jurídico ofrece servicios de asesoría legal integral de muy buena calidad, de manera eficaz y eficiente, comprometido con las necesidades particulares de nuestros clientes.</p>
            <p className="px-5">Nuestra obligación de asesoramiento pone gran énfasis en usar los más altos estándares éticos y profesionales bajo enfoque de trabajo en grupo de sus propios colaboradores en beneficio de sus clientes.</p>
            <Link to="/Historia" className="btn text-decoration-none d-block w-75 mx-auto my-5 px-4 text-white">
              Leer Más
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <img alt="" className="rounded" src={imagenUs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionUs;
