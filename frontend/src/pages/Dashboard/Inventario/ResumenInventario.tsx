import React, { useEffect, useState } from "react";

// Services
import * as expedienteServices from "../../../services/ExpedienteServices";

// Interfaces
import Banco from "../../../interfaces/Banco";
import Materia from "../../../interfaces/Materia";

interface Estado {
  estado_uso: string;
  cantidad: number;
}
interface Props {
  trigguer: number;
}
const ResumenInventario: React.FC<Props> = (props) => {
  const [bancos, setBancos] = useState<Banco[]>([]);
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [estados, setEstados] = useState<Estado[]>([]);

  const getResumen = async () => {
    const res = await expedienteServices.getResumen();
    if (res.data.error) return;
    setBancos(res.data.datos[0].bancos);
    setMaterias(res.data.datos[1].materia);
    setEstados(res.data.datos[2].estado);
  };

  useEffect(() => {
    getResumen();
    return () => {};
  }, [props.trigguer]);
  return (
    <div className="card">
      <div className="card-header bg-dark">
        <h3 className="card-title"> Resumen de Expedientes</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <div className="card">
              <div className="card-header bg-dark">
                <h3 className="card-title"> Bancos</h3>
              </div>
              <div className="card-body" style={{ maxHeight: "270px", minHeight: "270px", overflowX: "hidden" }}>
                <table className="table table-hover table-striped table-bordered">
                  <thead>
                    <tr>
                      <th className="border-0 text-center">#</th>
                      <th className="border-0">Nombre del Banco</th>
                      <th className="border-0">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bancos.map((banco, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{banco.nombre_banco}</td>
                          <td>{banco.cantidad}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <div className="card">
              <div className="card-header bg-dark">
                <h3 className="card-title"> Estado</h3>
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
                          <td>{estado.estado_uso === "0" ? <>En Inventario</> : <>En Uso</>}</td>
                          <td>{estado.cantidad}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <div className="card">
              <div className="card-header bg-dark">
                <h3 className="card-title"> Materia</h3>
              </div>
              <div className="card-body" style={{ maxHeight: "270px", minHeight: "270px", overflowX: "hidden" }}>
                <table className="table table-hover table-striped table-bordered">
                  <thead>
                    <tr>
                      <th className="border-0 text-center">#</th>
                      <th className="border-0">Nombre de la Materia</th>
                      <th className="border-0">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materias.map((materia, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{materia.nombre_materia}</td>
                          <td>{materia.cantidad}</td>
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

export default ResumenInventario;
