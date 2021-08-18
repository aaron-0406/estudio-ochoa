import { useState } from "react";


// Componentes
import Buscador from "../../../components/Buscador";
import ListaExpediente from "./ListaExpediente";
import ResumenInventario from "./ResumenInventario";

// Interfaces
import Expediente from "../../../interfaces/Expediente";

// Iconos
import { AiOutlineFileAdd } from "react-icons/ai";
import { GoFileSubmodule } from "react-icons/go";

const initialState: Expediente = {
  id_expediente: 0,
  codigo_estudio: "",
  codigo_expediente: "",
  contrato: "",
  demanda: "",
  documentos: "",
  estado_actual: "",
  estado_procesal: "",
  estado_uso: "0",
  fecha_asignacion: "",
  fecha_ep: "",
  folio: "",
  habilitado: "1",
  id_materia: 0,
  id_banco: 0,
  juzgado: "",
  monto: "",
  nombre_cliente: "",
};
const Inventario: React.FC = () => {
  const [expedienteModal, setExpedienteModal] = useState<Expediente>(initialState);
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
                  <GoFileSubmodule className="fs-3 me-2" />
                  Gestión de Expedientes
                </h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#createExpediente"
                    onClick={() => {
                      setExpedienteModal(initialState);
                    }}
                  >
                    <AiOutlineFileAdd className="fs-4" color="#fff" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="w-100">
                  <ResumenInventario trigguer={trigguer} />
                </div>
                <div className="w-100 d-flex justify-content-end">
                  <Buscador tooltip="Buscar por código de expediente o nombre del cliente" placeholder="Buscar Expediente" funcion={buscar} />
                </div>
                <div className="table-responsive mt-4">
                  <ListaExpediente setTrigguer={setTrigguer} trigguer={trigguer} expedienteModal={expedienteModal} setExpedienteModal={setExpedienteModal} filtro={filtro} />
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

export default Inventario;
