import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

const Solicitudes: React.FC = () => {
  return (
    <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="card mt-4">
              <div className="card-header">
                <h3 className="card-title"> Gestión de Expedientes</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#createExpediente"
                    onClick={() => {
                      //   setExpedienteModal(initialState);
                    }}
                  >
                    <AiOutlineFileAdd className="fs-4" color="#fff" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="w-100"></div>
                <div className="w-100 d-flex justify-content-end"></div>
                <div className="table-responsive mt-4"></div>
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
