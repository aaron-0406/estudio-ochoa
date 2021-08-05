import React from "react";
import { Link } from "react-router-dom";

import slide1 from "../../images/images-carousel/slide1.jpg";
import slide2 from "../../images/images-carousel/slide2.jpg";
import slide3 from "../../images/images-carousel/slide3.jpg";

const Carousel: React.FC = () => {
  return (
    <div className="home-carousel container-fluid px-0">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="..." />
            <div className="home-carousel__content carousel-caption d-none d-md-flex flex-md-column justify-content-md-center h-100">
              <h5 className="fw-bold">Nuestra Presencia</h5>
              <p className="pb-4 fw-light">En la noble y señorial ciudad de ICA y también en las pujantes ciudades de AYACUCHO y HUANCAYO, tiene notable y destacada presencia el Estudio Jurídico "OCHOA MALDONADO" integrado por una selecta plana de especialistas del derecho con más de 10 años de experiencia.</p>
              <ul className="list-unstyled d-md-flex justify-content-center">
                <li>
                  <Link to="/Historia" className="home-carousel__content-boton1 text-decoration-none px-5 py-3 me-2 fw-light">
                    Conócenos
                  </Link>
                </li>
                <li>
                  <Link to="/Equipo" className="home-carousel__content-boton2 text-decoration-none px-5 py-3 ms-2 fw-light">
                    Equipo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
            <div className="home-carousel__content carousel-caption d-none  d-md-flex flex-md-column justify-content-md-center h-75">
              <p className="pb-4"></p>
              <ul className="list-unstyled d-md-flex justify-content-center">
                <li>
                  <Link to="/Servicios" className="home-carousel__content-boton1 text-decoration-none px-5 py-3 me-2 fw-light">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link to="/Contacto" className="home-carousel__content-boton2 text-decoration-none px-5 py-3 ms-2 fw-light">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..." />
            <div className="home-carousel__content carousel-caption d-none  d-md-flex flex-md-column justify-content-md-center h-75">
              <p className="pb-4"></p>
              <ul className="list-unstyled d-md-flex justify-content-center">
                <li>
                  <Link to="/Historia" className="home-carousel__content-boton1 text-decoration-none px-5 py-3 me-2 fw-light">
                    Conócenos
                  </Link>
                </li>
                <li>
                  <Link to="/Equipo" className="home-carousel__content-boton2 text-decoration-none px-5 py-3 ms-2 fw-light">
                    Equipo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
