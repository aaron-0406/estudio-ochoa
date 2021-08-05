import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
const ContactSectionContactForm: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 shadow py-3 px-5 my-5 bg-white rounded d-flex flex-column justify-content-center">
          <p className="fs-3 text-center mb-5 pb-4" style={{ borderBottom: "1px solid #553620" }}>
            ¡Contáctanos ahora!
          </p>
          <form action="/links/add" method="POST">
            <input type="text" className="form-control" name="title" placeholder="Nombre Completo" autoFocus />
            <br />
            <input type="email" className="form-control" name="url" placeholder="E - mail" />
            <br />
            <input type="text" className="form-control" name="title" placeholder="Teléfono" />
            <br />
            <textarea name="description" rows={4} className="form-control" placeholder="Mensaje"></textarea>
            <br />
            <button className="btn btn-block w-100" style={{ backgroundColor: "#553620", color: "#fff" }}>
              Enviar
            </button>
          </form>
        </div>
        <div className="col-12 col-md-12 col-lg-6 py-3 px-4 my-5">
          <div className="row py-2">
            <div className="col-4 d-flex justify-content-center mt-3">
              <FontAwesomeIcon className="pe-2 d-block" icon={faMapMarkerAlt} color="#C17743" size="3x" />
            </div>
            <div className="col-8">
              <p className="fw-bold">DIRECCIÓN</p>
              <p>
                <b>ICA</b>: Mz. A Dpto 113 Urbanización Residencial San Martín.
                <br />
                <b>AYACUCHO</b>: Calle Arequipa 367 distrito de Huamanga.
                <br />
                <b>HUANCAYO</b>: Jirón Parra del Riego N° 535 Oficina 31-B, distrito El Tambo.
              </p>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-4 d-flex justify-content-center mt-3">
              <FontAwesomeIcon className="pe-2 d-block" icon={faPhoneAlt} color="#C17743" size="3x" />
            </div>
            <div className="col-8">
              <p className="fw-bold">TELÉFONO</p>
              <p>056 - 763272</p>
              <p className="fw-bold">MÓVILES</p>
              <p>
                956 - 663 - 286 | 944 - 246 - 870 | 942 - 428 - 677 <br />
                956 - 653 - 030 | 971 - 092 - 525 | 971 - 236 - 604
              </p>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-4 d-flex justify-content-center mt-3">
              <FontAwesomeIcon className="pe-2 d-block" icon={faEnvelope} color="#C17743" size="3x" />
            </div>
            <div className="col-8">
              <p className="fw-bold">E - MAIL</p>
              <p>
                julio.ochoa@estudio
                <br />
                ochoamaldonado.com
              </p>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-4 d-flex justify-content-center mt-3">
              <FontAwesomeIcon className="pe-2 d-block" icon={faClock} color="#C17743" size="3x" />
            </div>
            <div className="col-8">
              <p className="fw-bold">HORARIO</p>
              <p>08:00 AM - 13:00 PM</p>
              <p>15:00 PM - 18:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionContactForm;
