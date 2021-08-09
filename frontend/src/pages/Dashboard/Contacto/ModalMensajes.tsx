import React, { useEffect, useRef, useState } from "react";

// Interfaces
import Contacto from "../../../interfaces/Contacto";
interface Props {
  mensajeModal: Contacto;
}
const initialState: Contacto = {
  id_contacto: 0,
  nombre_contacto: "",
  email_contacto: "",
  telefono_contacto: "",
  visto: 1,
  text: "",
};
const ModalMensajes: React.FC<Props> = (props) => {
  const [solicitud, setSolicitud] = useState<Contacto>(initialState);

  const refButton = useRef<HTMLButtonElement | null>();

  useEffect(() => {
    setSolicitud(props.mensajeModal);
    return () => setSolicitud(initialState);
  }, [props.mensajeModal]);

  return (
    <div className="modal fade" id="verContacto" tabIndex={-1} aria-labelledby="verContacto" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-dark">
            <h5 className="modal-title" id="verContacto">
              <i className="fas fa-eye me-2"></i>
              Mensaje de Contacto
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Nombre:</p>
                  {solicitud.nombre_contacto}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Teléfono:</p>
                  {solicitud.telefono_contacto}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Correo:</p>
                  {solicitud.email_contacto}
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-md-12 mb-3">
                  <p className="fw-bold mb-0">Mensaje:</p>
                  <div className="w-100">
                    <p style={{ textAlign: "justify" }}>{solicitud.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button ref={(node) => (refButton.current = node)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMensajes;
