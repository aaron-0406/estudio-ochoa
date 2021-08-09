// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";

// Componentes
import Buscador from "../../../components/Buscador";
import ListaReclamos from "./ListaReclamos";
import ModalReclamo from "./ModalReclamo";

// Interfaces
import Reclamo from "../../../interfaces/Reclamo";

const initialState: Reclamo = {
  id_reclamo: 0,
  apellido_reclamo: "",
  correo_reclamo: "",
  direccion_reclamo: "",
  distrito_reclamo: "",
  identificacion_reclamo: "",
  mensaje_reclamo: "",
  motivo_reclamo: "",
  nombre_reclamo: "",
  producto_reclamo: "",
  provincia_reclamo: "",
  telefono_reclamo: "",
  visto: 1,
};
const Reclamos: React.FC = () => {
  // States
  const [reclamoModal, setReclamoModal] = useState<Reclamo>(initialState);
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
                <h3 className="card-title">
                  <i className="nav-icon fas fa-book-open fs-4 me-2" />
                  Mensajes de Reclamación Recibidos
                </h3>
              </div>
              <div className="card-body">
                <div className="w-100 d-flex justify-content-end">
                  <Buscador placeholder="Buscar Mensaje" funcion={buscar} />
                </div>
                <div className="table-responsive mt-4">
                  <ListaReclamos trigguer={trigguer} setTrigguer={setTrigguer} filtro={filtro} reclamoModal={reclamoModal} setReclamoModal={setReclamoModal} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModalReclamo reclamoModal={reclamoModal} />

      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">{/* Control sidebar content goes here */}</aside>
      {/* /.control-sidebar */}
    </div>
  );
};

export default Reclamos;
