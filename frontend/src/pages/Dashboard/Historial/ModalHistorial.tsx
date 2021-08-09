import React, { useEffect, useRef, useState } from "react";
import { useUsuario } from "../../../auth/UsuarioProvider";
import expr from "../../../encrypt/exprRegular";

// Toast
import { toast } from "react-toastify";

// Iconos
import { AiOutlineFileAdd } from "react-icons/ai";

// Services
import * as solicitudesServices from "../../../services/SolicitudesServices";
import * as expedientesServices from "../../../services/ExpedienteServices";

// Interfaces
import Solicitud from "../../../interfaces/Solicitud";
import Expediente from "../../../interfaces/Expediente";

interface Props {
  setTrigguer: (trigguer: number) => void;
  trigguer: number;
  solicitud: Solicitud;
  render: () => void;
}
const initialState: Solicitud = {
  estado_solicitud: "",
  fecha_entrega_inventario: "0000-00-00",
  fecha_entrega_usuario: "",
  fecha_solicitud: "",
  id_expediente: 0,
  id_usuario: 0,
  motivo_admin: "",
  motivo_usuario: "",
  id_solicitud: 0,
};
const initStateExpediente: Expediente = {
  id_expediente: 0,
  codigo_estudio: "",
  fecha_asignacion: "",
  nombre_cliente: "",
  contrato: "",
  documentos: "",
  monto: "",
  codigo_expediente: "",
  juzgado: "",
  demanda: "",
  estado_procesal: "",
  fecha_ep: "",
  estado_actual: "",
  folio: "",
  estado_uso: "",
  habilitado: "1",
  id_materia: 0,
  id_banco: 0,
};
const ModalHistorial: React.FC<Props> = (props) => {
  const [solicitud, setSolicitud] = useState<Solicitud>(initialState);
  const [expediente, setExpediente] = useState<Expediente>(initStateExpediente);
  const { usuario } = useUsuario();
  const refButton = useRef<HTMLButtonElement | null>();

  useEffect(() => {
    setSolicitud(props.solicitud);
    return () => setSolicitud(initialState);
  }, [props.solicitud]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (expr.digit.test(expediente.codigo_expediente) && solicitud.fecha_entrega_usuario && solicitud.motivo_usuario) {
      const fecha = new Date();
      let dia = fecha.getDate();
      let mes = fecha.getMonth() + 1;
      let year = fecha.getFullYear();
      const resExpediente = await expedientesServices.getByCodigoExpediente(expediente.codigo_expediente + "");
      if (resExpediente.data.error) return toast.error(resExpediente.data.error);
      if (resExpediente.data.success) {
        const newSolicitud: Solicitud = {
          fecha_solicitud: `${year}-${mes}-${dia}`,
          fecha_entrega_usuario: solicitud.fecha_entrega_usuario,
          fecha_entrega_inventario: "0000-00-00",
          motivo_usuario: solicitud.motivo_usuario,
          motivo_admin: "",
          estado_solicitud: "SOLICITADO",
          id_usuario: usuario.id_usuario,
          id_expediente: resExpediente.data.expediente.id_expediente,
        };
        const res = await solicitudesServices.createSolicitud(newSolicitud);
        if (res.data.success) {
          setSolicitud(initialState);
          setExpediente(initStateExpediente);
          if (refButton.current) refButton.current.click();
          props.render();
          props.setTrigguer(props.trigguer + 1);
          return toast.success(res.data.success);
        }
        if (res.data.error) return toast.success(res.data.error);
        return;
      }
    } else {
      toast.error("Campos invalidos");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSolicitud({ ...solicitud, [e.target.name]: e.target.value });
  };
  const handleChangeEx = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setExpediente({ ...expediente, [e.target.name]: e.target.value });
    if (e.target.name === "codigo_expediente") {
      if (expr.digit.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        return;
      }
      e.target.classList.add("is-invalid");
    }
  };
  return (
    <div className="modal fade" id="createSolicitud" tabIndex={-1} aria-labelledby="createSolicitud" aria-hidden="true">
      <div className={`modal-dialog modal-lg modal-dialog-scrollable`}>
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            {solicitud.id_solicitud ? (
              <>
                <div className="modal-header bg-primary">
                  <h5 className="modal-title" id="createSolicitud">
                    <i className="fas fa-eye me-2"></i>
                    Datos de la solicitud
                  </h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              </>
            ) : (
              <>
                <div className="modal-header bg-dark">
                  <h5 className="modal-title" id="createSolicitud">
                    <i className="fas fa-plus me-2"></i>
                    Solicitar un expediente
                  </h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              </>
            )}

            <div className="modal-body">
              <div className="card-body">
                <div className="row">
                  {solicitud.id_solicitud ? (
                    <>
                      <div className="col-12 col-sm-6 col-lg-6 col-md-6">
                        <div className="mb-4">
                          <label className="form-label" htmlFor="codigo_expediente">
                            Código del expediente
                          </label>
                          <input disabled required value={solicitud.codigo_expediente} onChange={handleChangeEx} placeholder="Código del expediente" name="codigo_expediente" id="codigo_expediente" className="form-control form-control-border border-width-2" type="text" />
                          <div className="invalid-feedback">Solo digitos permitidos</div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-lg-6 col-md-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="fecha">
                            Fecha de Entrega
                          </label>
                          <input disabled required value={solicitud.fecha_entrega_usuario} onChange={handleChange} id="fecha" name="fecha_entrega_usuario" type="date" placeholder="Fecha de Entrega" className="form-control form-control-border border-width-2" />
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="motivo_usuario">
                            Motivo de Solicitud
                          </label>
                          <textarea style={{ minHeight: "200px", maxHeight: "200px" }} disabled required value={solicitud.motivo_usuario} onChange={handleChange} id="motivo_usuario" name="motivo_usuario" placeholder="Motivo de la solicitud" className="form-control form-control-border border-width-2" />
                        </div>
                      </div>

                      {solicitud.estado_solicitud === "DENEGADO" ? (
                        <>
                          <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="motivo_admin">
                                Motivo de Rechazo
                              </label>
                              <textarea style={{ minHeight: "200px", maxHeight: "200px" }} disabled required value={solicitud.motivo_admin} onChange={handleChange} id="motivo_admin" name="motivo_admin" placeholder="Motivo de la solicitud" className="form-control form-control-border border-width-2" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="col-12 col-sm-6 col-lg-6 col-md-6">
                        <div className="mb-4">
                          <label className="form-label" htmlFor="codigo_expediente">
                            Código del expediente
                          </label>
                          <input required value={expediente.codigo_expediente} onChange={handleChangeEx} placeholder="Código del expediente" name="codigo_expediente" id="floatingInput" className="form-control form-control-border border-width-2" type="text" />
                          <div className="invalid-feedback">Solo digitos permitidos</div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-lg-6 col-md-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="fecha">
                            Fecha de Entrega
                          </label>
                          <input required value={solicitud.fecha_entrega_usuario} onChange={handleChange} id="fecha" name="fecha_entrega_usuario" type="date" placeholder="Fecha de Entrega" className="form-control form-control-border border-width-2" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="motivo_usuario">
                            Motivo de Solicitud
                          </label>
                          <textarea style={{ minHeight: "200px", maxHeight: "200px" }} required value={solicitud.motivo_usuario} onChange={handleChange} name="motivo_usuario" placeholder="Motivo de la solicitud" className="form-control form-control-border border-width-2" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={(node) => (refButton.current = node)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              {solicitud.id_solicitud ? (
                <></>
              ) : (
                <>
                  <button type="submit" className="btn btn-primary">
                    <AiOutlineFileAdd className="fs-4 me-1" color="#fff" />
                    Realizar Solicitud
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalHistorial;
