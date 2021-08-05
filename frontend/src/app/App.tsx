import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { UsuarioProvider } from "../auth/UsuarioProvider";

//Pages
import Home from "../pages/Home";
import Equipo from "../pages/Equipo";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import LayoutUsuario from "../partials/LayoutUsuario";
import Servicios from "../components/Home/Servicios";
import Clientes from "../pages/Clientes";
import Contacto from "../pages/Contacto";

import LayoutDash from "../partials/LayoutDash";
import Dashboard from "../pages/Dashboard/Dashboard";
import Usuarios from "../pages/Dashboard/Usuarios/Usuarios";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutUsuario exact path="/" component={Home} />
        <LayoutUsuario exact path="/Servicios" component={Servicios} />
        <LayoutUsuario exact path="/Equipo" component={Equipo} />
        <LayoutUsuario exact path="/Clientes" component={Clientes} />
        <LayoutUsuario exact path="/Contacto" component={Contacto} />
        <Route exact path="/Iniciar" component={Login} />

        <LayoutDash exact path="/Dashboard" component={Dashboard} />

        <LayoutDash exact path="/Dashboard/Usuarios" component={Usuarios} />
        <LayoutDash exact path="/Dashboard/Inventario" component={Dashboard} />

        <LayoutDash exact path="/Dashboard/Historial" component={Dashboard} />
        <LayoutDash exact path="/Dashboard/Solicitudes" component={Dashboard} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
const AuthProviderContext = () => {
  return (
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  );
};
export default AuthProviderContext;
