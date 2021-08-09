import React, { useState } from "react";
import { Usuario } from "../../../interfaces/Usuario";

// Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

// Componentes
import ListaUsuarios from "./ListaUsuarios";
import Buscador from "../../../components/Buscador";
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
const Usuarios: React.FC = () => {
  const [usuarioModal, setUsuarioModal] = useState<Usuario>(initialState);

  const [filtro, setFiltro] = useState<string>("");
  const buscar = (text: string) => setFiltro(text);

  return (
    <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="card mt-4">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-user-friends fs-4 me-2" />
                  Control de Usuarios
                </h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#createUsuario"
                    onClick={() => {
                      setUsuarioModal(initialState);
                    }}
                  >
                    <FontAwesomeIcon icon={faUserPlus} color="#fff" size="1x" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="w-100 d-flex justify-content-end">
                  <Buscador placeholder="Buscar Usuario" funcion={buscar} />
                </div>
                <div className="table-responsive mt-4">
                  <ListaUsuarios usuarioModal={usuarioModal} setUsuarioModal={setUsuarioModal} filtro={filtro} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Usuarios;
