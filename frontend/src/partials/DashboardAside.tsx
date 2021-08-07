import React from "react";
import { Link } from "react-router-dom";
import { useUsuario } from "../auth/UsuarioProvider";
import auth from "../auth/auth";
import fotoPerfil from "../images/user2-160x160.jpg";
//Images
import logo from "../images/logo.png";
const DashboardAside: React.FC = () => {
  const { usuario } = useUsuario();
  return (
    <aside className="position-fixed main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/" className="brand-link text-decoration-none">
        <img src={logo} alt="" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
        <span className="brand-text font-weight-light"> Ochoa Maldonado</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={fotoPerfil} className="img-circle elevation-2" alt="" />
          </div>
          <div className="info">
            <a href="/" className="d-block">
              {usuario.nombres_usuario}
            </a>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-header">Dashboard</li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Expedientes
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                {usuario.rango_usuario === "1" ? (
                  <>
                    <li className="nav-item">
                      <Link to="/Dashboard/Solicitudes" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Solicitudes</p>
                      </Link>
                    </li>
                  </>
                ) : (
                  <></>
                )}

                <li className="nav-item">
                  <Link to="/Dashboard/Inventario" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Inventario</p>
                  </Link>
                </li>
                {usuario.rango_usuario === "2" ? (
                  <>
                    <li className="nav-item">
                      <Link to="/Dashboard/Historial" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Historial</p>
                      </Link>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/Dashboard/Usuarios" className="nav-link">
                <i className="nav-icon fas fa-user-friends" />
                <p>Usuarios</p>
              </Link>
            </li>
            {auth.getRango() === 2 ? null : <></>}

            <li className="nav-header">Sitio Web</li>
            <li className="nav-item">
              <a href="pages/calendar.html" className="nav-link">
                <i className="nav-icon far fa-envelope" />
                <p>
                  Contactos
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
    </aside>
  );
};

export default DashboardAside;
