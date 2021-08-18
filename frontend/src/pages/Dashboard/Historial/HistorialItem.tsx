import React from "react";

// Toast
import { toast } from "react-toastify";

// Services
import * as solicitudesServices from "../../../services/SolicitudesServices";

// Interfaces
import Solicitud from "../../../interfaces/Solicitud";

interface Props {
  trigguer: number;
  setTrigguer: (trigguer: number) => void;
  i: number;
  solicitud: Solicitud;
  getSolicitudes: () => void;
  setSolicitudModal: (solicitud: Solicitud) => void;
}
const HistorialItem: React.FC<Props> = (props) => {
  const eliminarSolicitud = async () => {
    if (!window.confirm("¿Seguro que desea eliminar su solicitud?")) return;
    const res = await solicitudesServices.eliminarSolicitud(props.solicitud.id_solicitud + "");
    if (res.data.success) {
      props.getSolicitudes();
      props.setTrigguer(props.trigguer + 1);
      toast.success(res.data.success);
      return;
    }
    if (res.data.error) return toast.error(res.data.error);
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
    <tr>
      <td>{props.i}</td>
      <td>{props.solicitud.codigo_expediente}</td>
      <td>{formatoFecha(props.solicitud.fecha_solicitud)}</td>
      <td>{formatoFecha(props.solicitud.fecha_entrega_usuario)}</td>
      <td>{props.solicitud.estado_solicitud}</td>
      <td>
        <button data-bs-toggle="modal" data-bs-target="#createSolicitud" onClick={() => { props.setSolicitudModal(props.solicitud); }} className="btn btn-primary" >
          <i className="nav-icon fas fa-eye" />
        </button>
      </td>
      <td>
        {props.solicitud.estado_solicitud === "DENEGADO" ? (
          <>
            <button onClick={() => { eliminarSolicitud(); }} className="btn btn-danger" >
              <i className="nav-icon fas fa-trash-alt" />
            </button>
          </>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
};

export default HistorialItem;
