/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useUsuario } from "../../../auth/UsuarioProvider";

// Services
import * as solicitudesServices from "../../../services/SolicitudesServices";

// Interfaces
interface Estado {
  estado_solicitud: string;
  cantidad: number;
}
interface Props {
  trigguer: number;
}
const ResumenHistorial: React.FC<Props> = (props) => {
  const [estados, setEstados] = useState<Estado[]>([]);
  const { usuario, loadUser } = useUsuario();
  const getResumen = async () => {
    const res = await solicitudesServices.getResumenByUsuarioId(usuario.id_usuario + "");
    if (res.data.error) return;
    setEstados(res.data.datos[0].estado);
  };

  useEffect(() => {
    if (loadUser) getResumen();
    return () => {};
  }, [props.trigguer, loadUser]);

  return (
    <div className="card">
      <div className="card-header bg-dark">
        <h3 className="card-title"> Resumen de Solicitudes</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <div className="card">
              <div className="card-header bg-dark">
                <h3 className="card-title"> Estados</h3>
              </div>
              <div className="card-body" style={{ maxHeight: "270px", minHeight: "270px", overflowX: "hidden" }}>
                <table className="table table-hover table-striped table-bordered">
                  <thead>
                    <tr>
                      <th className="border-0 text-center">#</th>
                      <th className="border-0">Nombre del Estado</th>
                      <th className="border-0">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estados.map((estado, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{estado.estado_solicitud}</td>
                          <td>{estado.cantidad}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumenHistorial;
