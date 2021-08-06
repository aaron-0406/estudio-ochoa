import React from "react";
import { toast } from "react-toastify";
import Solicitud from "../../../interfaces/Solicitud";
import * as solicitudesServices from "../../../services/SolicitudesServices";

interface Props {
  trigguer: number;
  setTrigguer: (trigguer: number) => void;
  i: number;
  solicitud: Solicitud;
  getSolicitudes: () => void;
  setSolicitudModal: (solicitud: Solicitud) => void;
}
const HistorialItem: React.FC<Props> = (props) => {
  const aceptarSolicitud = async () => {
    const res = await solicitudesServices.editarSolicitud(props.solicitud.id_solicitud + "", props.solicitud, "EN USO");
    if (res.data.success) {
      props.setTrigguer(props.trigguer + 1);
      props.getSolicitudes();
      toast.success(res.data.success);
      return;
    }
    if (res.data.error) {
      return toast.error(res.data.error);
    }
  };
  return (
    <tr>
      <td>{props.i}</td>
      <td>{props.solicitud.codigo_expediente}</td>
      <td>{props.solicitud.fecha_solicitud}</td>
      <td>{props.solicitud.fecha_entrega_usuario}</td>
      <td>{props.solicitud.estado_solicitud}</td>
      <td>
        <button
          data-bs-toggle="modal"
          data-bs-target="#createSolicitud"
          onClick={() => {
            props.setSolicitudModal(props.solicitud);
          }}
          className="btn btn-primary"
        >
          <i className="nav-icon fas fa-eye" />
        </button>
      </td>
      {props.solicitud.estado_solicitud === "SOLICITADO" ? (
        <>
          <td>
            <button
              onClick={() => {
                props.setSolicitudModal(props.solicitud);
                aceptarSolicitud();
              }}
              className="btn btn-success"
            >
              <i className="nav-icon fas fa-check" />
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                props.setSolicitudModal(props.solicitud);
              }}
              data-bs-toggle="modal"
              data-bs-target="#createSolicitud"
              className="btn btn-danger"
            >
              <i className="nav-icon fas fa-window-close" />
            </button>
          </td>
        </>
      ) : (
        <>
          <td></td>
          <td></td>
        </>
      )}
    </tr>
  );
};

export default HistorialItem;
