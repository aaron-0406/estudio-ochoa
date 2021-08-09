import React from "react";

// Toast
import { toast } from "react-toastify";

// Services
import * as reclamosServices from "../../../services/ReclamoServices";

// Interfaces
import Reclamo from "../../../interfaces/Reclamo";
interface Props {
  i: number;
  reclamo: Reclamo;
  getReclamos: () => void;
  setReclamoModal: (reclamo: Reclamo) => void;
}

const ReclamoItem: React.FC<Props> = (props) => {
  const eliminarMensaje = async (id?: number) => {
    if (!window.confirm("¿Está seguro que desea eliminar este mensaje?")) return;
    const res = await reclamosServices.eliminarReclamo(id + "");
    if (res.data.success) {
      props.getReclamos();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  const setVisto = async (id?: number) => {
    if (props.reclamo.visto === 0) return;
    const res = await reclamosServices.setVisto(id + "");
    if (res.data.success) {
      props.getReclamos();
    }
  };

  return (
    <tr>
      <td>{props.i}</td>
      <td>
        {props.reclamo.nombre_reclamo} {props.reclamo.apellido_reclamo}
      </td>
      <td>{props.reclamo.correo_reclamo}</td>
      <td>{props.reclamo.telefono_reclamo}</td>
      <td>
        {props.reclamo.visto === 1 ? (
          <>
            <span className="right badge badge-danger">Nuevo</span>
          </>
        ) : null}
      </td>
      <td>
        <button
          data-bs-toggle="modal"
          data-bs-target="#verReclamo"
          onClick={() => {
            props.setReclamoModal(props.reclamo);
            setVisto(props.reclamo.id_reclamo);
          }}
          className="btn btn-primary"
        >
          <i className="nav-icon fas fa-eye" />
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            eliminarMensaje(props.reclamo.id_reclamo);
          }}
          className="btn btn-danger"
        >
          <i className="nav-icon fas fa-trash-alt" />
        </button>
      </td>
    </tr>
  );
};

export default ReclamoItem;
