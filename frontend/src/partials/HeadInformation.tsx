import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const HeadInformation = () => {
  return (
    <div className="head-information container-fluid py-md-3 py-lg-2">
      <div className="container d-none d-md-block text-center d-lg-flex justify-content-lg-between align-items-center">
        <p className="head-information__title my-lg-0">
          <FontAwesomeIcon
            className="mx-2"
            icon={faGlobeAmericas}
            color="#C17743"
            size="lg"
          />
          Bienvenido al ESTUDIO JURÍDICO OCHOA MALDONADO
        </p>
        <ul className="head-information__items d-md-flex justify-content-md-center list-unstyled my-lg-0">
          <li>
            <Link to="/" className="text-decoration-none">
              <FontAwesomeIcon
                className="mx-2"
                icon={faEnvelope}
                color="#C17743"
                size="lg"
              />
              julio.ochoa@estudioochoamaldonado.com
            </Link>
          </li>
          <li>
            <Link to="/Contacto" className="text-decoration-none">
              <FontAwesomeIcon
                className="mx-2"
                icon={faPhoneAlt}
                color="#C17743"
                size="lg"
              />
              977 426 510
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeadInformation;
