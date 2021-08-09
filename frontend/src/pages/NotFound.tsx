import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Componentes
import HeadInformation from "../partials/HeadInformation";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import FooterCopyright from "../partials/FooterCopyright";

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadInformation />
      <Navbar />

      <div style={{ height: "450px" }} className="container">
        <div className="row h-100">
          <div className="text-center col-12 d-flex flex-column justify-content-center align-items-center">
            <p className="fs-1 fw-bold">¡Nos estamos renovando!</p>
            <p className="fs-5 fw-bold">Página no encontrada</p>
            <div>
              <Link
                to="/"
                className="btn m-4 px-5 py-3 fw-bold"
                style={{ background: "#c17743", color: "#fff" }}
              >
                Volver al Inicio
              </Link>
              <Link
                to="/Contacto"
                className="btn m-4 px-5 py-3 fw-bold"
                style={{ background: "#c17743", color: "#fff" }}
              >
                ¡Contáctanos!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FooterCopyright />
    </>
  );
}

export default NotFound;
