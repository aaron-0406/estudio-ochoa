import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import auth from "../auth/auth";

import NavbarSearch from "../components/NavbarSearch";

import { useUsuario } from "../auth/UsuarioProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import logoHome from "../images/logo-home.png";
import logo from "../images/logo.png";

const Navbar: React.FC = () => {
  const { usuario } = useUsuario();
  const [ariaExpanded, setAriaExpanded] = useState(false);

  const navbar_search = useRef<HTMLDivElement>(null);
  const mostrar_buscador = () => {
    if (navbar_search.current) {
      if (navbar_search.current.style.display === "block") {
        return (navbar_search.current.style.display = "none");
      }

      //let input: any = [];
      //input = navbar_search.current.getElementsByTagName("input");
      navbar_search.current.style.display = "block";
      //input[0].focus();
    }
  };
  return (
    <>
      <div className="hello-navbar container-fluid shadow p-1 bg-white rounded">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-white py-0">
            <div className="container-fluid d-md-block d-lg-flex text-center p-0">
              <Link className="navbar-logo py-0" to="/">
                <img
                  alt=""
                  className="d-none d-md-inline h-100 py-2"
                  src={logoHome}
                ></img>
                <img
                  alt=""
                  className="float-start d-inline-block d-md-none w-25"
                  src={logo}
                ></img>
              </Link>
              <button
                className="navbar-toggler navbar-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarHome"
                aria-controls="navbarSupportedContent"
                aria-expanded={ariaExpanded}
                aria-label="Toggle navigation"
                onClick={() => {
                  setAriaExpanded(!ariaExpanded);
                }}
              >
                <FontAwesomeIcon
                  className="mx-0"
                  icon={faBars}
                  color="#C17743"
                  size="2x"
                />
              </button>
              <ul
                className="navbar-nav justify-content-md-center me-auto mb-2 mb-lg-0 fw-bold navbar-items navbar-collapse collapse"
                id="navbarHome"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active px-3 px-xl-4 py-lg-3"
                    aria-current="page"
                    to="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active px-3 px-xl-4 py-lg-3"
                    aria-current="page"
                    to="/Servicios"
                  >
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active px-3 px-xl-4 py-lg-3"
                    aria-current="page"
                    to="/Equipo"
                  >
                    Equipo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active px-3 px-xl-4 py-lg-3"
                    aria-current="page"
                    to="/Clientes"
                  >
                    Clientes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active px-3 px-xl-4 py-lg-3"
                    aria-current="page"
                    to="/Contacto"
                  >
                    Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      mostrar_buscador();
                    }}
                  >
                    <FontAwesomeIcon
                      className="ms-3 me-4 my-2"
                      icon={faSearch}
                      color="#C17743"
                      size="lg"
                    />
                  </i>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Iniciar"
                    className="d-block d-md-block d-lg-none hello-navbar__session btn fw-bold"
                  >
                    <FontAwesomeIcon
                      className="mx-2"
                      icon={faSignInAlt}
                      color="#C17743"
                      size="lg"
                    />
                  </Link>
                </li>
              </ul>

              {!auth.isAuth() ? (
                <Link
                  to="/Iniciar"
                  className="d-none d-md-none d-lg-block hello-navbar__session btn fw-bold"
                >
                  <FontAwesomeIcon
                    className="mx-2"
                    icon={faSignInAlt}
                    color="#C17743"
                    size="lg"
                  />
                  Inicia Sesión
                </Link>
              ) : (
                <Link
                  to="/Dashboard"
                  className="d-none d-md-none d-lg-block hello-navbar__session btn fw-bold"
                >
                  <FontAwesomeIcon
                    className="mx-2"
                    icon={faSignInAlt}
                    color="#C17743"
                    size="lg"
                  />
                  {usuario.nombres_usuario}
                </Link>
              )}
            </div>
          </nav>
        </div>
        <div className="d-block position-relative">
          <NavbarSearch referencia={navbar_search} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
