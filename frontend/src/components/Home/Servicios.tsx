import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faShoppingCart, faRing, faGavel } from "@fortawesome/free-solid-svg-icons";

const Servicios: React.FC = () => {
  return (
    <div className="hss container-fluid py-5">
      <div className="row text-center">
        <div className="hss-content col-12 col-md-6 py-5 shadow p-3 mb-5 bg-white rounded">
          <FontAwesomeIcon className="pe-2" icon={faChartBar} color="#C17743" size="3x" />
          <a href="/" className="hss-content__title d-block fw-bold text-decoration-none px-3 mb-4">
            Recuperaciones Judiciales y Extrajudiciales de Deudas
          </a>
          <p className="mb-4 px-3 px-lg-4">El área tiene personal especialmente asignado para desarrollar estrategias que garantizan que el sistema de créditos y cobranzas de nuestros clientes funcione óptimamente.</p>
          <a href="/" className="hss-content__more text-decoration-none pb-2 fs-6">
            Leer Más
          </a>
        </div>
        <div className="hss-content col-12 col-md-6 py-5 shadow p-3 mb-5 bg-white rounded">
          <FontAwesomeIcon className="pe-2" icon={faShoppingCart} color="#C17743" size="3x" />
          <a href="/" className="hss-content__title d-block fw-bold text-decoration-none px-4 mb-4">
            Competencia y Protección al Consumidor
          </a>
          <p className="mb-4 px-3 px-lg-4">Nuestro estudio presta servicios de asesoría legal en la defensa legal de empresas a las que se ha denunciado por violación a las normas de protección al consumidor.</p>
          <a href="/" className="hss-content__more text-decoration-none pb-2 fs-6">
            Leer Más
          </a>
        </div>
        <div className="hss-content col-12 col-md-6 py-5 shadow p-3 mb-5 bg-white rounded">
          <FontAwesomeIcon className="pe-2" icon={faRing} color="#C17743" size="3x" />
          <br />
          <br />
          <a href="/" className="hss-content__title d-block fw-bold text-decoration-none px-3 mb-4">
            Civil
          </a>
          <p className="mb-4 px-3 px-lg-4">Esta área está orientada a brindar asesoría legal en las distintas materias del derecho Civil, con especial ponderación en el Derecho Civil Patrimonial.</p>
          <a href="/" className="hss-content__more text-decoration-none pb-2 fs-6">
            Leer Más
          </a>
        </div>
        <div className="hss-content col-12 col-md-6 py-5 shadow p-3 mb-5 bg-white rounded">
          <FontAwesomeIcon className="pe-2" icon={faGavel} color="#C17743" size="3x" />
          <br />
          <br />
          <a href="/" className="hss-content__title d-block fw-bold text-decoration-none px-3 mb-4">
            Penal
          </a>
          <p className="mb-4 px-3 px-lg-4">El Estudio posee amplia experiencia en la asesoría legal en la defensa de los bienes jurídicos vulnerados por la comisión de ilícitos penales de nuestros clientes.</p>
          <a href="/" className="hss-content__more text-decoration-none pb-2 fs-6">
            Leer Más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
