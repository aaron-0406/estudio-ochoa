/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUsuario } from "../auth/UsuarioProvider";
import auth from "../auth/auth";

// Imagenes
import fotoPerfil from "../images/user2-160x160.jpg";

// Iconos
import { GoFileSubmodule } from "react-icons/go";
import { RiFileTransferFill } from "react-icons/ri";

// Services
import * as contactoServices from "../services/ContactoServices";
import * as reclamosServices from "../services/ReclamoServices";

//Images
import logo from "../images/logo.png";

const DashboardAside: React.FC = () => {
  const { usuario, loadUser } = useUsuario();
  const [cantidadMensajesNews, setcantidadMensajesNews] = useState<number>(0);
  const [cantidadReclamosNews, setcantidadReclamosNews] = useState<number>(0);

  useEffect(() => {
    if (!loadUser) return;
    if (auth.getRango() === "2") return;
    getMensajesCantidad();
    getReclamosCantidad();
    return () => {};
  }, [loadUser]);

  const getMensajesCantidad = async () => {
    const res = await contactoServices.getCountNew();
    setcantidadMensajesNews(res.data);
  };
  const getReclamosCantidad = async () => {
    const res = await reclamosServices.getCountNew();
    setcantidadReclamosNews(res.data);
  };

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
            <li className="nav-header">Expedientes</li>
            <li className="nav-item">
              <Link to="/Dashboard/Inventario" className="nav-link">
                <GoFileSubmodule className="nav-icon" />
                <p>Inventario</p>
              </Link>
            </li>
            {auth.getRango() === "2" ? (
              <>
                <li className="nav-item">
                  <Link to="/Dashboard/Historial" className="nav-link">
                    <RiFileTransferFill className="nav-icon" />
                    <p>Historial</p>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/Dashboard/Solicitudes" className="nav-link">
                    <i className="fas fa-file-signature nav-icon" />
                    <p>Solicitudes</p>
                  </Link>
                </li>
                <li className="nav-header">Usuarios</li>
                <li className="nav-item">
                  <Link to="/Dashboard/Usuarios" className="nav-link">
                    <i className="nav-icon fas fa-user-friends" />
                    <p>Usuarios</p>
                  </Link>
                </li>
                <li className="nav-header">Sitio Web</li>
                <li className="nav-item">
                  <Link to="/Dashboard/Mensajes" className="nav-link">
                    <i className="nav-icon far fa-envelope" />
                    <p>
                      Mensajes de Contáctanos
                      {cantidadMensajesNews === 0 ? (
                        <></>
                      ) : (
                        <>
                          <span className="badge badge-info right">{cantidadMensajesNews}</span>
                        </>
                      )}
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Dashboard/Reclamos" className="nav-link">
                    <i className="nav-icon fas fa-book-open" />
                    <p>
                      Libro de Reclamaciones
                      {cantidadReclamosNews === 0 ? (
                        <></>
                      ) : (
                        <>
                          <span className="badge badge-info right">{cantidadReclamosNews}</span>
                        </>
                      )}
                    </p>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
    </aside>
  );
};

export default DashboardAside;
