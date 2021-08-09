import React from "react";

// Services
import * as expedienteServices from "../../../services/ExpedienteServices";

// Toast
import { toast } from "react-toastify";

// Iconos
import { RiFileForbidLine } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";

// Interfaces
import Expediente from "../../../interfaces/Expediente";
interface Props {
  i: number;
  expediente: Expediente;
  getExpedientes: () => void;
  setExpedienteModal: (expediente: Expediente) => void;
}

const ExpedienteItem: React.FC<Props> = (props) => {
  const eliminarExpediente = async (id?: number) => {
    const res = await expedienteServices.eliminarExpediente(id + "");
    if (res.data.success) {
      props.getExpedientes();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  return (
    <tr>
      <td>{props.i}</td>
      <td>{props.expediente.codigo_expediente}</td>
      <td>{props.expediente.nombre_cliente}</td>
      <td>{props.expediente.estado_uso === "0" ? <>En inventario</> : <> En uso </>}</td>
      <td>{props.expediente.sigla_nombre}</td>
      <td>{props.expediente.nombre_banco}</td>
      <td>
        <button
          data-bs-toggle="modal"
          data-bs-target="#createExpediente"
          onClick={() => {
            props.setExpedienteModal(props.expediente);
          }}
          className="btn btn-primary"
        >
          <i className="nav-icon fas fa-eye" />
        </button>
      </td>
      <td>
        {props.expediente.habilitado === "1" ? (
          <>
            <button
              onClick={() => {
                eliminarExpediente(props.expediente.id_expediente);
              }}
              className="btn btn-danger"
            >
              <RiFileForbidLine className="nav-icon fs-4" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                eliminarExpediente(props.expediente.id_expediente);
              }}
              className="btn btn-success"
            >
              <AiOutlineFileDone className="nav-icon fs-4" />
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ExpedienteItem;
