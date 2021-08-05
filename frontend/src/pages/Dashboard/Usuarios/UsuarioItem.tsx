import React from "react";
import { Usuario } from "../../../interfaces/Usuario";
interface Props {
  usuario: Usuario;
  getUsuarios:()=>void;
  setUsuarioModal:(usuario:Usuario)=>void;
}
const UsuarioItem: React.FC<Props> = (props) => {
  return <div></div>;
};

export default UsuarioItem;
