import React, { useEffect, useRef, useState } from "react";

// Interfaces
import Reclamo from "../../../interfaces/Reclamo";
interface Props {
  reclamoModal: Reclamo;
}
const initialState: Reclamo = {
  id_reclamo: 0,
  apellido_reclamo: "",
  correo_reclamo: "",
  direccion_reclamo: "",
  distrito_reclamo: "",
  identificacion_reclamo: "",
  mensaje_reclamo: "",
  motivo_reclamo: "",
  nombre_reclamo: "",
  producto_reclamo: "",
  provincia_reclamo: "",
  telefono_reclamo: "",
  visto: 1,
};
const ModalReclamo: React.FC<Props> = (props) => {
  const [reclamo, setReclamo] = useState<Reclamo>(initialState);

  const refButton = useRef<HTMLButtonElement | null>();

  useEffect(() => {
    setReclamo(props.reclamoModal);
    return () => setReclamo(initialState);
  }, [props.reclamoModal]);
  return (
    <div className="modal fade" id="verReclamo" tabIndex={-1} aria-labelledby="verReclamo" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-dark">
            <h5 className="modal-title" id="verReclamo">
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
                  {reclamo.nombre_reclamo} {reclamo.apellido_reclamo}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Teléfono:</p>
                  {reclamo.telefono_reclamo}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Correo:</p>
                  {reclamo.correo_reclamo}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Dirección:</p>
                  {reclamo.direccion_reclamo}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Identificación:</p>
                  {reclamo.identificacion_reclamo}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Provincia:</p>
                  {reclamo.provincia_reclamo}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Distrito:</p>
                  {reclamo.distrito_reclamo}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Motivo:</p>
                  {reclamo.motivo_reclamo}
                </div>
                <div className="col-12 col-sm-6 col-lg-6 col-md-6 mb-3">
                  <p className="fw-bold mb-0">Producto / Servicio:</p>
                  {reclamo.producto_reclamo}
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-md-12 mb-3">
                  <p className="fw-bold mb-0">Mensaje de Reclamo:</p>
                  <div className="w-100">
                    <p style={{ textAlign: "justify" }}>{reclamo.mensaje_reclamo}</p>
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

export default ModalReclamo;
