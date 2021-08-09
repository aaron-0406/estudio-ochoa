import React, { useRef, useState } from "react";
import { useUsuario } from "../../../auth/UsuarioProvider";
import { API } from "../../../config/config";

// Toast
import { toast } from "react-toastify";

// Interfaces
import Solicitud from "../../../interfaces/Solicitud";

// Services
import * as informeServices from "../../../services/InformeServices";
import * as solicitudesServices from "../../../services/SolicitudesServices";

const ModalHistorialInforme:React.FC = () => {
  const refButton = useRef<HTMLButtonElement | null>();

  const [fecha, setFecha] = useState("");
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const { usuario } = useUsuario();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fecha === "") return toast.warning("Seleccione una fecha");
    const res = await informeServices.getInformeByIdUsuario(fecha, usuario.id_usuario + "");
    var link = document.createElement("a");
    link.href = `${API}/api/v0/informe/${res.data.nombre_archivo}`;
    link.download = "report.pdf";
    link.target = "__blank";
    link.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFecha(e.target.value);
  };

  const search = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (fecha === "") return toast.warning("Seleccione una fecha");
    const res = await solicitudesServices.getByFechaIdUsuario(fecha, usuario.id_usuario + "");
    setSolicitudes(res.data);
  };
  return (
    <div className="modal fade" id="createInformeHistorial" tabIndex={-1} aria-labelledby="createInformeHistorial" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="createInformeHistorial">
                <i className="nav-icon far fa-file-pdf me-2" />
                Generar Informe
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-8">
                  <div className="mb-3">
                    <label htmlFor="fecha">Fecha de Solicitud</label>
                    <input required onChange={handleChange} type="date" id="fecha" name="fecha" className="form-control form-control-border border-width-2" />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="w-100 h-100 mb-3 d-flex justify-content-center align-items-center">
                    <button onClick={search} className="btn btn-dark h-auto">
                      <i className="fas fa-search me-2"></i>
                      Consultar
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Expediente</th>
                        <th>Fecha de Entrega</th>
                        <th>Fecha Entregado</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {solicitudes.length === 0 ? (
                        <>
                          <tr>
                            <td>No hay solicitudes en esa fecha</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </>
                      ) : (
                        <>
                          {solicitudes.map((solicitud, i) => {
                            return (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{solicitud.codigo_expediente}</td>
                                <td>{solicitud.fecha_entrega_usuario}</td>
                                <td>{solicitud.fecha_entrega_inventario}</td>
                                <td>{solicitud.estado_solicitud}</td>
                              </tr>
                            );
                          })}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={(node) => (refButton.current = node)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="submit" className="btn btn-dark">
                <i className="nav-icon far fa-file-pdf me-1" />
                Generar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalHistorialInforme;
