/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import expr from "../../../encrypt/exprRegular";

// Toast
import { toast } from "react-toastify";

// Services
import * as usuarioServices from "../../../services/UsuarioServices";

// Interfaces
import { Usuario } from "../../../interfaces/Usuario";
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
  rango_usuario: "2",
  nombres_usuario: "",
  telefono_usuario: "",
  authenticate: false,
};

const ModalUsuario: React.FC<Props> = (props) => {
  const [usuario, setUsuario] = useState<Usuario>(initialState);

  // Referencias
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
    if (expr.dni.test(usuario.dni) && expr.nameSurname.test(usuario.nombres_usuario) && expr.nameSurname.test(usuario.apellidos_usuario) && expr.telephone.test(usuario.telefono_usuario) && expr.email.test(usuario.email_usuario)) {
      if (usuario.id_usuario === 0) {
        const res = await usuarioServices.crearUsuario(usuario);
        if (res.data.success) {
          toast.success(res.data.success);
          setUsuario(initialState);
          props.render();
          props.setTrigguer(props.trigguer + 1);
          if (refButton.current) {
            refButton.current.click();
          }
          return;
        }
        if (res.data.error) return toast.error(res.data.error);
      }
      const res = await usuarioServices.editarUsuario(usuario.id_usuario + "", usuario);
      if (res.data.success) {
        toast.success(res.data.success);
        props.render();
        props.setTrigguer(props.trigguer + 1);
        if (refButton.current) refButton.current.click();
        return;
      }
      if (res.data.error) return toast.error(res.data.error);
    } else {
      toast.error("Campos invalidos");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "dni":
        validation(expr.dni, e.target);
        break;
      case "nombres_usuario":
        validation(expr.nameSurname, e.target);
        break;
      case "apellidos_usuario":
        validation(expr.nameSurname, e.target);
        break;
      case "telefono_usuario":
        validation(expr.telephone, e.target);
        break;
      case "email_usuario":
        validation(expr.email, e.target);
        break;
    }
  };

  const validation = (expr: RegExp, e: EventTarget & HTMLInputElement) => {
    if (expr.test(e.value)) {
      e.classList.remove("is-invalid");
      return;
    }
    e.classList.add("is-invalid");
  };

  return (
    <>
      <div className="modal fade" id="createUsuario" tabIndex={-1} aria-labelledby="createUsuario" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <form className="py-3" onSubmit={handleSubmit}>
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
              <div className="modal-body">
                <div className="form-floating mb-3">
                  {usuario.id_usuario === 0 ? (
                    <>
                      <input id="floatingDni" type="text" className="form-control" name="dni" placeholder="DNI" onChange={handleChange} value={usuario.dni} />
                      <div className="invalid-feedback">8 digitos permitidos</div>
                    </>
                  ) : (
                    <>
                      <input id="floatingDni" disabled type="text" className="form-control" name="dni" placeholder="DNI" onChange={handleChange} value={usuario.dni} />
                      <div className="invalid-feedback">8 digitos permitidos</div>
                    </>
                  )}
                  <label htmlFor="floatingDni">DNI</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingNombres" name="nombres_usuario" placeholder="Nombre" autoFocus onChange={handleChange} value={usuario.nombres_usuario} />
                  <div className="invalid-feedback">Permitido letras, espacios y acentos</div>
                  <label htmlFor="floatingNombres">Nombres</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingApellidos" name="apellidos_usuario" placeholder="Apellidos" onChange={handleChange} value={usuario.apellidos_usuario} />
                  <div className="invalid-feedback">Permitido letras, espacios y acentos</div>
                  <label htmlFor="floatingApellidos">Apellidos</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingtelefono" name="telefono_usuario" placeholder="Teléfono" onChange={handleChange} value={usuario.telefono_usuario} />
                  <div className="invalid-feedback">9 digitos permitidos</div>
                  <label htmlFor="floatingtelefono">Teléfono</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" id="floatingEmail" className="form-control" name="email_usuario" placeholder="E-mail" onChange={handleChange} value={usuario.email_usuario} />
                  <div className="invalid-feedback">Correo invalido (correo@ejemplo.com)</div>
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalUsuario;
