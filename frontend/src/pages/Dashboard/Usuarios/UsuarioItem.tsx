import React from "react";
import { Usuario } from "../../../interfaces/Usuario";
interface Props {
  i: number;
  usuario: Usuario;
  getUsuarios: () => void;
  setUsuarioModal: (usuario: Usuario) => void;
}
const UsuarioItem: React.FC<Props> = (props) => {
  return (
    <tr>
      <td>{props.i}</td>
      <td>{props.usuario.dni}</td>
      <td>
        {props.usuario.nombres_usuario} {props.usuario.apellidos_usuario}
      </td>
      <td>{props.usuario.estado_usuario === "1" ? <>Habilitado</> : <>Inhabilitado </>}</td>
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
        <button className="btn btn-danger">
          <i className="nav-icon fas fa-trash-alt" />
        </button>
      </td>
    </tr>
  );
};

export default UsuarioItem;
