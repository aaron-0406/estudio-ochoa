import React, { useEffect, useRef, useState } from "react";

// Toast
import { toast } from "react-toastify";

// Services
import * as solicitudesServices from "../../../services/SolicitudesServices";

// Interfaces
import Solicitud from "../../../interfaces/Solicitud";
interface Props {
  setTrigguer: (trigguer: number) => void;
  trigguer: number;
  solicitud: Solicitud;
  render: () => void;
}
const initialState: Solicitud = {
  estado_solicitud: "",
  fecha_entrega_inventario: "0000-00-00",
  fecha_entrega_usuario: "",
  fecha_solicitud: "",
  id_expediente: 0,
  id_usuario: 0,
  motivo_admin: "",
  motivo_usuario: "",
  id_solicitud: 0,
};
const ModalSolicitud: React.FC<Props> = (props) => {
  const [solicitud, setSolicitud] = useState<Solicitud>(initialState);

  const refButton = useRef<HTMLButtonElement | null>();

  useEffect(() => {
    setSolicitud(props.solicitud);
    return () => setSolicitud(initialState);
  }, [props.solicitud]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await solicitudesServices.editarSolicitud(solicitud.id_solicitud + "", solicitud, "EN INVENTARIO");
    if (res.data.success) {
      props.setTrigguer(props.trigguer + 1);
      setSolicitud(initialState);
      if (refButton.current) refButton.current.click();
      props.render();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSolicitud({ ...solicitud, [e.target.name]: e.target.value });
  };
  const formatoFecha = (fecha: string): string => {
    let formato: string = "";
    let dia = fecha.slice(8, 10);
    let mes = fecha.slice(5, 7);
    let year = fecha.slice(0, 4);
    formato = `${dia}/${mes}/${year}`;
    return formato;
  };
  return (
    <div className="modal fade" id="verSolicitud" tabIndex={-1} aria-labelledby="verSolicitud" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="verSolicitud">
                <i className="fas fa-eye me-2"></i>
                Solicitud
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card-body">
                <dl>
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                      <dt>Usuario Solicitante:</dt>
                      <dd>
                        {solicitud.nombres_usuario} {solicitud.apellidos_usuario}
                      </dd>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                      <dt>Código del Expediente:</dt>
                      <dd>{solicitud.codigo_expediente}</dd>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                      <dt>Fecha de Solicitud:</dt>
                      <dd>{formatoFecha(solicitud.fecha_solicitud)}</dd>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                      <dt>Fecha de Entrega:</dt>
                      <dd>{formatoFecha(solicitud.fecha_entrega_usuario)}</dd>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                      <dt>Estado:</dt>
                      <dd>{solicitud.estado_solicitud}</dd>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <dt>Motivo de la Solicitud:</dt>
                      <dd>{solicitud.motivo_usuario}</dd>
                    </div>
                  </div>

                  {solicitud.estado_solicitud === "DENEGADO" ? (
                    <>
                      <dt>Motivo de rechazo</dt>
                      <dd>{solicitud.motivo_admin}</dd>
                    </>
                  ) : (
                    <></>
                  )}
                  {solicitud.estado_solicitud === "EN USO" || solicitud.estado_solicitud === "EN INVENTARIO" ? (
                    <>
                      <dt>Fecha Devuelto:</dt>
                      <input required onChange={handleChange} type="date" name="fecha_entrega_inventario" value={solicitud.fecha_entrega_inventario} className="form-control" />
                    </>
                  ) : (
                    <></>
                  )}
                </dl>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={(node) => (refButton.current = node)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              {solicitud.estado_solicitud === "EN USO" || solicitud.estado_solicitud === "EN INVENTARIO" ? (
                <>
                  <button type="submit" className="btn btn-primary">
                    Guardar Fecha de Entrega
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSolicitud;
