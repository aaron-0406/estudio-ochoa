import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ListaUsuarios from "./ListaUsuarios";
import Buscador from "../../../components/Buscador";

const Usuarios: React.FC = () => {
  const handleOptionModal_agregar = () => {};
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
                <h3 className="card-title"> Control de Usuarios</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#createUsuario"
                    onClick={() => {
                      handleOptionModal_agregar();
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
                <div className="table-responsive">
                  <ListaUsuarios filtro={filtro} />
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
