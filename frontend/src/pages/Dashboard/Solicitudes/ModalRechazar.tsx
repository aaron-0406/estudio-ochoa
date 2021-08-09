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
  fecha_entrega_inventario: "",
  fecha_entrega_usuario: "",
  fecha_solicitud: "",
  id_expediente: 0,
  id_usuario: 0,
  motivo_admin: "",
  motivo_usuario: "",
  id_solicitud: 0,
};

const ModalRechazar: React.FC<Props> = (props) => {
  const [solicitud, setSolicitud] = useState<Solicitud>(initialState);

  const refButton = useRef<HTMLButtonElement | null>();

  useEffect(() => {
    setSolicitud(props.solicitud);
    return () => {
      setSolicitud(initialState);
    };
  }, [props.solicitud]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSolicitud({ ...solicitud, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await solicitudesServices.editarSolicitud(solicitud.id_solicitud + "", solicitud, "DENEGADO");
    if (res.data.success) {
      props.setTrigguer(props.trigguer + 1);
      props.render();
      setSolicitud(initialState);
      if (refButton.current) refButton.current.click();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  return (
    <div className="modal fade" id="rechazarSolicitud" tabIndex={-1} aria-labelledby="rechazarSolicitud" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-danger">
            <h5 className="modal-title" id="rechazarSolicitud">
              <i className="nav-icon fas fa-window-close me-1" />
              Rechazar Solicitud {solicitud.apellidos_usuario}
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-sm-12">
                  <div className="mb-3">
                    <textarea value={solicitud.motivo_admin} onChange={handleChange} required placeholder="Motivo de Rechazo" className="form-control" name="motivo_admin" id="" cols={30} rows={10}></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={(node) => (refButton.current = node)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="submit" className="btn btn-danger">
                <i className="nav-icon fas fa-window-close me-1" />
                Rechazar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalRechazar;
