/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Usuario } from "../../../interfaces/Usuario";
import * as usuarioServices from "../../../services/UsuarioServices";
import { toast } from "react-toastify";

interface Props {
  setTrigguer: (trigguer: number) => void;
  trigguer: number;
  usuario: Usuario;
  render: () => void;
}
const initialState: Usuario = {
  id_usuario: 0,
  apellidos_usuario: "",
  dni: "",
  email_usuario: "",
  estado_usuario: "1",
  rango_usuario: 2,
  nombres_usuario: "",
  telefono_usuario: "",
  authenticate: false,
};

const ModalUsuario: React.FC<Props> = (props) => {
  const [usuario, setUsuario] = useState<Usuario>(initialState);

  const refButton = useRef<HTMLButtonElement | null>();

  useEffect(() => {
    setUsuario(props.usuario);
    return () => {
      setUsuario(initialState);
    };
  }, [props.usuario]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Crear
    if (usuario.id_usuario === 0) {
      const res = await usuarioServices.crearUsuario(usuario);
      if (res.data.success) {
        toast.success(res.data.success);
        setUsuario(initialState);
        props.render();
        props.setTrigguer(props.trigguer + 1);
        if (refButton.current) refButton.current.click();
        return;
      }
      if (res.data.error) return toast.error(res.data.error);
    }
    // Editar
    const res = await usuarioServices.editarUsuario(usuario.id_usuario + "", usuario);
    console.log(res);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="modal fade" id="createUsuario" tabIndex={-1} aria-labelledby="createUsuario" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {usuario.id_usuario === 0 ? (
              <>
                <div className="modal-header bg-dark">
                  <h5 className="modal-title" id="createUsuario">
                  <i className="fas fa-user-plus me-2"></i>
                    Agregar Usuario
                  </h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                </div>
              </>
            ) : (
              <>
                <div className="modal-header bg-warning">
                  <h5 className="modal-title" id="createUsuario">
                  <i className="fas fa-user-edit me-2"></i>
                    Modificar Usuario
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
              </>
            )}
            <form className="py-3" onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-floating mb-3">
                  {usuario.id_usuario === 0 ? (
                    <>
                      <input  id="floatingDni"  type="text" className="form-control" name="dni" placeholder="DNI" onChange={handleChange} value={usuario.dni} />
                    </>
                  ) : (
                    <>
                      <input  id="floatingDni"  disabled type="text" className="form-control" name="dni" placeholder="DNI" onChange={handleChange} value={usuario.dni} />
                    </>
                  )}
                   <label htmlFor="floatingDni">DNI</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingNombres" name="nombres_usuario" placeholder="Nombre" autoFocus onChange={handleChange} value={usuario.nombres_usuario} />
                  <label htmlFor="floatingNombres">Nombres</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingApellidos" name="apellidos_usuario" placeholder="Apellidos" onChange={handleChange} value={usuario.apellidos_usuario} />
                  <label htmlFor="floatingApellidos">Apellidos</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingtelefono" name="telefono_usuario" placeholder="Teléfono" onChange={handleChange} value={usuario.telefono_usuario} />
                  <label htmlFor="floatingtelefono">Teléfono</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" id="floatingEmail" className="form-control" name="email_usuario" placeholder="E-mail" onChange={handleChange} value={usuario.email_usuario} />
                  <label htmlFor="floatingEmail">Correo</label>
                </div>
              </div>
              <div className="modal-footer">
                <button ref={(node) => (refButton.current = node)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cerrar
                </button>
                {usuario.id_usuario === 0 ? (
                  <>
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-user-plus me-2"></i>
                      Agregar Usuario
                    </button>
                  </>
                ) : (
                  <>
                    <button type="submit" className="btn btn-warning">
                      <i className="fas fa-user-edit me-2"></i>
                      Modificar Usuario
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUsuario;
