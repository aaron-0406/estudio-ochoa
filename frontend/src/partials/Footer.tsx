import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faPaperPlane, faPhoneAlt, faTty } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import image1 from "../images/images-instagram/1.png";
import image2 from "../images/images-instagram/2.png";
import image3 from "../images/images-instagram/3.png";
import image4 from "../images/images-instagram/4.png";
import image5 from "../images/images-instagram/5.png";
import image6 from "../images/images-instagram/6.png";

const Footer: React.FC = () => {
  return (
    <div className="footer w-100 py-5">
      <div className="container">
        <div className="row">
          <div className="footer-content py-4 col-12 col-md-6 col-lg-3">
            <div className="d-flex justify-content-center">
              <a href="/" className="footer-content__logo text-decoration-none">
                <span className="d-inline-block"></span>M
              </a>
            </div>
            <p>Nuestro Estudio Jurídico ofrece servicios de asesoría legal integral de muy buena calidad, de manera eficaz y eficiente, comprometido con las necesidades particulares de nuestros clientes.</p>
            <ul className="list-unstyled d-flex">
              <li>
                <a href="/" className="border p-1 me-2">
                  <FontAwesomeIcon className="mx-2" icon={faFacebookF} color="#C17743" size="1x" />
                </a>
              </li>
              <li>
                <a href="/" className="border p-1 me-2">
                  <FontAwesomeIcon className="mx-2" icon={faInstagram} color="#C17743" size="1x" />
                </a>
              </li>
              <li>
                <a href="/" className="border p-1 me-2">
                  <FontAwesomeIcon className="mx-2" icon={faLinkedinIn} color="#C17743" size="1x" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-content py-4 col-12 col-md-6 col-lg-3">
            <h3 className="fs-4 mb-4">Servicios</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} color="#C17743" size="1x" />
                Corporativa Y Mercantil
              </li>
              <li className="mb-3">
                <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} color="#C17743" size="1x" />
                Finanzas Banca Y Seguros
              </li>
              <li className="mb-3">
                <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} color="#C17743" size="1x" />
                Elaboración de contratos
              </li>
              <li className="mb-3">
                <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} color="#C17743" size="1x" />
                Laboral
              </li>
              <li className="mb-3">
                <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleRight} color="#C17743" size="1x" />
                Concursal
              </li>
            </ul>
          </div>
          <div className="footer-content py-4 col-12 col-md-6 col-lg-3">
            <h3 className="fs-4 mb-4">Oficina Corporativa</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon className="mx-2" icon={faPaperPlane} color="#C17743" size="1x" />
                ICA: Mz. A Dpto 113 Urbanización Residencial San Martín.
              </li>
              <li className="mb-3">
                <FontAwesomeIcon className="mx-2" icon={faPhoneAlt} color="#C17743" size="1x" />
                056 - 763272
              </li>
              <li className="mb-3">
                <FontAwesomeIcon className="mx-2" icon={faTty} color="#C17743" size="1x" />
                +51 956 663 286
              </li>
            </ul>
          </div>
          <div className="footer-content py-4 col-12 col-md-6 col-lg-3">
            <h3 className="fs-4 mb-4">Imagenes</h3>
            <div className="row px-2 text-center">
              <div className="col-4 col-md-4 col-lg-4 p-2">
                <img alt="" src={image1} />
              </div>
              <div className="col-4 col-md-4 col-lg-4 p-2">
                <img alt="" src={image2} />
              </div>
              <div className="col-4 col-md-4 col-lg-4 p-2">
                <img alt="" src={image3} />
              </div>
              <div className="col-4 col-md-4 col-lg-4 p-2">
                <img alt="" src={image4} />
              </div>
              <div className="col-4 col-md-4 col-lg-4 p-2">
                <img alt="" src={image5} />
              </div>
              <div className="col-4 col-md-4 col-lg-4 p-2">
                <img alt="" src={image6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
