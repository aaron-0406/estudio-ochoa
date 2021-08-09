import { useState } from "react";

import Buscador from "../../../components/Buscador";

/* const initialState = {
  id_contacto: 0,
  nombre_contacto: '',
  email_contacto: '',
  telefono: '',
  text: ''
}; */
const Contacto: React.FC = () => {

  // States
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                <h3 className="card-title">Mensajes Recibidos</h3>
              </div>
              <div className="card-body">
                <div className="w-100 d-flex justify-content-end">
                  <Buscador placeholder="Buscar Mensaje" funcion={buscar} />
                </div>
                <div className="table-responsive mt-4">
                  Tabla
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>
  );
};

export default Contacto;
