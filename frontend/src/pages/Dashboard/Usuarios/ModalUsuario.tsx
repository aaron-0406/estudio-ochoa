/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Usuario } from "../../../interfaces/Usuario";
// import { toast } from "react-toastify";

interface Props {
  usuario: Usuario;
  render: () => void;
}
const initialState: Usuario = {
  id_usuario: 0,
  apellidos_usuario: "",
  dni: "",
  email_usuario: "",
  estado_usuario: 1,
  rango_usuario: 2,
  nombres_usuario: "",
  telefono_usuario: "",
  authenticate: false,
};
const ModalUsuario: React.FC<Props> = (props) => {
  const [usuario, setUsuario] = useState<Usuario>(initialState);

  useEffect(() => {
    setUsuario(props.usuario);
    return () => {
      setUsuario(initialState);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(usuario.id_usuario===0){
        
        return;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="modal fade" id="createUsuario" tabIndex={-1} aria-labelledby="createUsuario" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="createUsuario">
                {/* {props.option === "agregar" ? "Agregar - " : "Modificar - "} */}
                Usuario
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="py-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" name="dni" placeholder="DNI" onChange={handleChange} value={usuario.dni} />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="nombres" placeholder="Nombre" autoFocus onChange={handleChange} value={usuario.nombres_usuario} />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="apellidos" placeholder="Apellidos" onChange={handleChange} value={usuario.apellidos_usuario} />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="telefono" placeholder="Teléfono" onChange={handleChange} value={usuario.telefono_usuario} />
                </div>
                {/* <button className="btn btn-block btn-primary w-100">{props.option === "agregar" ? "Agregar Usuario" : "Modificar Usuario"}</button> */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUsuario;
