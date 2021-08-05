import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API } from "../config/config";
import auth from "../auth/auth";
import { useUsuario } from "../auth/UsuarioProvider";
import { Usuario } from "../interfaces/Usuario";

const initialState: Usuario = {
  id_usuario: 0,
  apellidos_usuario: "",
  dni: "",
  email_usuario: "",
  estado_usuario: 1,
  rango_usuario: 2,
  nombres_usuario: "",
  telefono_usuario: "",
  authenticate: false,
};

const DashNavbar: React.FC = () => {
  const { setUsuario } = useUsuario();
  const history = useHistory();

  const handleLogout = async () => {
    const res = await axios.get(`${API}/logout`);
    if (res.data.success) {
      auth.logOut();
      auth.setRango(2);
      setUsuario(initialState);
      history.push("/");
    }
  };
  return (
    <>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-dark">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="/" role="button">
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <p className="nav-link mb-0" data-widget="fullscreen" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </p>
          </li>
          <li className="nav-item">
            <button className="nav-link btn" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt" /> Salir
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DashNavbar;
