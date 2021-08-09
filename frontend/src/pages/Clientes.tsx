import React, { useEffect } from "react";

// Componentes
import ServicesSectionRoad from "../components/Equipo/ServicesSectionRoad";

// Imagenes
import logobbva from "../images/images-customers/logobbva.png";
import logopichincha from "../images/images-customers/logopichincha.png";
import logobanbif from "../images/images-customers/logobanbif.png";
import logomibanco from "../images/images-customers/logomibanco.png";
import logobcp from "../images/images-customers/logobcp.png";

const Clientes:React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesSectionRoad nameOption="Nuestros Clientes" numberRoad={2} nameRoadOne="Clientes" />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="shadow p-3 mb-5 bg-white rounded w-100 h-75">
              <img alt="" className="w-100 d-inline-block" src={logobbva} />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="shadow p-3 mb-5 bg-white rounded w-100 h-75">
              <img alt="" className="w-100" src={logopichincha} />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="shadow p-3 mb-5 bg-white rounded w-100 h-75">
              <img alt="" className="w-100" src={logobanbif} />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="shadow p-3 mb-5 bg-white rounded w-100 h-75">
              <img alt="" className="w-100" src={logomibanco} />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="shadow p-3 mb-5 bg-white rounded w-100 h-75">
              <img alt="" className="w-100" src={logobcp} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientes;
