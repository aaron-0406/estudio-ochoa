import React, { useState } from "react";
import Buscador from "../../../components/Buscador";
import Solicitud from "../../../interfaces/Solicitud";
import ListaSolicitudes from "./ListaSolicitudes";
const initialState: Solicitud = {
  estado_solicitud: "",
  fecha_entrega_inventario: "",
  fecha_entrega_usuario: "",
  fecha_solicitud: "",
  id_expediente: 0,
  id_usuario: 0,
  motivo_admin: "",
  motivo_usuario: "",
  id_solicitud: 0,
};
const Solicitudes: React.FC = () => {
  const [solicitudModal, setSolicitudModal] = useState<Solicitud>(initialState);
  const [trigguer, setTrigguer] = useState<number>(0);

  const [filtro, setFiltro] = useState<string>("");
  const buscar = (text: string) => setFiltro(text);
  return (
    <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="card mt-4">
              <div className="card-header">
                <h3 className="card-title"> Solicitudes de Expedientes</h3>
                <div className="card-tools">
                </div>
              </div>
              <div className="card-body">
                <div className="w-100"></div>
                <div className="w-100 d-flex justify-content-end">
                  <Buscador placeholder="Buscar Solicitud" funcion={buscar} />
                </div>
                <div className="table-responsive mt-4">
                  <ListaSolicitudes setTrigguer={setTrigguer} trigguer={trigguer} filtro={filtro} solicitudModal={solicitudModal} setSolicitudModal={setSolicitudModal} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">{/* Control sidebar content goes here */}</aside>
      {/* /.control-sidebar */}
    </div>
  );
};

export default Solicitudes;
