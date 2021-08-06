import React from "react";
import { Usuario } from "../../../interfaces/Usuario";
import * as usuarioServices from "../../../services/UsuarioServices";
import { toast } from "react-toastify";

interface Props {
  i: number;
  usuario: Usuario;
  getUsuarios: () => void;
  setUsuarioModal: (usuario: Usuario) => void;
}

const UsuarioItem: React.FC<Props> = (props) => {
  const eliminarUsuario = async (id?: number) => {
    const res = await usuarioServices.eliminarUsuario(id + "");
    if (res.data.success) {
      props.getUsuarios();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
  };

  return (
    <tr>
      <td>{props.i}</td>
      <td>{props.usuario.dni}</td>
      <td>
        {props.usuario.nombres_usuario} {props.usuario.apellidos_usuario}
      </td>
      <td>{props.usuario.email_usuario}</td>
      <td>
        <button
          data-bs-toggle="modal"
          data-bs-target="#createUsuario"
          onClick={() => {
            props.setUsuarioModal(props.usuario);
          }}
          className="btn btn-primary"
        >
          <i className="nav-icon fas fa-eye" />
        </button>
      </td>
      <td>
        {props.usuario.estado_usuario === "1" ? (
          <>
            <button
              onClick={() => {
                eliminarUsuario(props.usuario.id_usuario);
              }}
              className="btn btn-danger"
            >
              <i className="nav-icon fas fa-user-slash"></i>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                eliminarUsuario(props.usuario.id_usuario);
              }}
              className="btn btn-success"
            >
              <i className="nav-icon fas fa-user-lock" />
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default UsuarioItem;
