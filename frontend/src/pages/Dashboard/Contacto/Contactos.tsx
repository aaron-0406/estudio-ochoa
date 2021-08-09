// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";

// Interfaces
import Contacto from "../../../interfaces/Contacto";

// Components
import Buscador from "../../../components/Buscador";
import ListaMensajes from "./ListaMensajes";
import ModalMensajes from "./ModalMensajes";

const initialState: Contacto = {
  id_contacto: 0,
  nombre_contacto: "",
  email_contacto: "",
  telefono_contacto: "",
  visto: 1,
  text: "",
};
const Contactos: React.FC = () => {
  // States
  const [mensajeModal, setMensajeModal] = useState<Contacto>(initialState);
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
                  <i className="fas fa-envelope fs-4 me-2" />
                  Mensajes de Contacto Recibidos
                </h3>
              </div>
              <div className="card-body">
                <div className="w-100 d-flex justify-content-end">
                  <Buscador placeholder="Buscar Mensaje" funcion={buscar} />
                </div>
                <div className="table-responsive mt-4">
                  <ListaMensajes trigguer={trigguer} setTrigguer={setTrigguer} filtro={filtro} mensajeModal={mensajeModal} setMensajeModal={setMensajeModal} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModalMensajes mensajeModal={mensajeModal} />

      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">{/* Control sidebar content goes here */}</aside>
      {/* /.control-sidebar */}
    </div>
  );
};

export default Contactos;
