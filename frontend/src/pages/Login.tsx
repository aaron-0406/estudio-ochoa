import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useUsuario } from "../auth/UsuarioProvider";
import { API } from "../config/config";
import axios from "axios";
import auth from "../auth/auth";

import { toast } from "react-toastify";

import imgLogo from "../images/logo-home.png";
import imgLogo2 from "../images/logo.png";

const Login: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { setUsuario } = useUsuario();

  //Llamamos al useHistory();
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.post(`${API}/signin`, user);
    if (res.data.success) {
      setUsuario(res.data.user);
      //Usamos el método de auth y hacemos login, pasamos los datos del usuario obtenidos de la base de datos
      auth.sigIn();
      auth.setRango(res.data.user.rango);
      //history.push() -> nos permite navegar a otra pàgina
      history.push("/Dashboard");
    }
    if (res.data.error) return toast.error(res.data.error);
  };
  return (
    <div className="login container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-75">
        <div className="login-first col-12 col-md-12 col-lg-6 h-100 my-auto py-3">
          <Link to="/">
            <img alt="" className="login-img d-none d-md-block m-auto py-4 w-100" src={imgLogo} />
            <img alt="" className="login-img d-block d-md-none m-auto py-2 w-50" src={imgLogo2} />
          </Link>
        </div>
        <div className="login-second col-12 col-md-12 col-lg-6">
          <form className="py-3" onSubmit={handleSubmit}>
            <h6 className="py-2">Ingresa a tu cuenta</h6>
            <div className="mb-3">
              <input value={user.email} type="email" className="form-control" name="email" placeholder="Correo" autoFocus onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input value={user.password} type="password" className="form-control" name="password" placeholder="Contraseña" autoFocus onChange={handleChange} />
            </div>
            <button className="btn btn-block w-100">Inicia sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
