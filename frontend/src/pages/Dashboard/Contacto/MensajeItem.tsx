import React from "react";

// Toast
import { toast } from "react-toastify";

// Services
import * as contactoServices from "../../../services/ContactoServices";

// Interfaces
import Contacto from "../../../interfaces/Contacto";
interface Props {
  i: number;
  contacto: Contacto;
  getContactos: () => void;
  setMensajeModal: (contacto: Contacto) => void;
}
const MensajeItem: React.FC<Props> = (props) => {
  const eliminarMensaje = async (id?: number) => {
    if (!window.confirm("¿Está seguro que desea eliminar este mensaje?")) return;
    const res = await contactoServices.eliminarContacto(id + "");
    if (res.data.success) {
      props.getContactos();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  const setVisto = async (id?: number) => {
    if (props.contacto.visto === 0) return;
    const res = await contactoServices.setVisto(id + "");
    if (res.data.success) {
      props.getContactos();
    }
  };

  return (
    <tr>
      <td>{props.i}</td>
      <td>{props.contacto.nombre_contacto}</td>
      <td>{props.contacto.email_contacto}</td>
      <td>{props.contacto.telefono_contacto}</td>
      <td>
        {props.contacto.visto === 1 ? (
          <>
            <span className="right badge badge-danger">Nuevo</span>
          </>
        ) : null}
      </td>
      <td>
        <button
          data-bs-toggle="modal"
          data-bs-target="#verContacto"
          onClick={() => {
            props.setMensajeModal(props.contacto);
            setVisto(props.contacto.id_contacto);
          }}
          className="btn btn-primary"
        >
          <i className="nav-icon fas fa-eye" />
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            eliminarMensaje(props.contacto.id_contacto);
          }}
          className="btn btn-danger"
        >
          <i className="nav-icon fas fa-trash-alt" />
        </button>
      </td>
    </tr>
  );
};

export default MensajeItem;
