import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Variables globales
import { UsuarioProvider } from "../auth/UsuarioProvider";

//Pages
import Home from "../pages/Home";
import Historia from "../pages/Historia";
import Equipo from "../pages/Equipo";
import EquipoJulio from "../pages/Equipo/EquipoJulio";
import EquipoMauricio from "../pages/Equipo/EquipoMauricio";
import EquipoGino from "../pages/Equipo/EquipoGino";
import EquipoKaterine from "../pages/Equipo/EquipoKaterine";
import EquipoCarlos from "../pages/Equipo/EquipoCarlos";
import EquipoRamiro from "../pages/Equipo/EquipoRamiro";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import LayoutUsuario from "../partials/LayoutUsuario";
import Servicios from "../pages/Servicios";
import ServicioCivil from "../pages/Servicios/ServicioCivil";
import ServicioConcursal from "../pages/Servicios/ServicioConcursal";
import ServicioConsumidor from "../pages/Servicios/ServicioConsumidor";
import ServicioContratos from "../pages/Servicios/ServicioContratos";
import ServicioCorporativa from "../pages/Servicios/ServicioCorporativa";
import ServicioFinanzas from "../pages/Servicios/ServicioFinanzas";
import ServicioLaboral from "../pages/Servicios/ServicioLaboral";
import ServicioLitigios from "../pages/Servicios/ServicioLitigios";
import ServicioPenal from "../pages/Servicios/ServicioPenal";
import ServicioRecuperaciones from "../pages/Servicios/ServicioRecuperaciones";
import Clientes from "../pages/Clientes";
import Contacto from "../pages/Contacto";
import LibroDeReclamaciones from "../pages/LibroDeReclamaciones";

// Dashboard Pages
import LayoutDash from "../partials/LayoutDash";
import Dashboard from "../pages/Dashboard/Dashboard";
import Usuarios from "../pages/Dashboard/Usuarios/Usuarios";
import Inventario from "../pages/Dashboard/Inventario/Inventario";
import Solicitudes from "../pages/Dashboard/Solicitudes/Solicitudes";
import Historial from "../pages/Dashboard/Historial/Historial";
import DashboardContacto from "../pages/Dashboard/Contacto/Contactos";
import Reclamos from "../pages/Dashboard/Reclamo/Reclamos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutUsuario exact path="/" component={Home} />
        <LayoutUsuario exact path="/Historia" component={Historia} />
        <LayoutUsuario exact path="/Servicios" component={Servicios} />
        <LayoutUsuario exact path="/Servicios/Civil" component={ServicioCivil} />
        <LayoutUsuario exact path="/Servicios/Concursal" component={ServicioConcursal} />
        <LayoutUsuario exact path="/Servicios/Consumidor" component={ServicioConsumidor} />
        <LayoutUsuario exact path="/Servicios/Contratos" component={ServicioContratos} />
        <LayoutUsuario exact path="/Servicios/Corporativa" component={ServicioCorporativa} />
        <LayoutUsuario exact path="/Servicios/Finanzas" component={ServicioFinanzas} />
        <LayoutUsuario exact path="/Servicios/Laboral" component={ServicioLaboral} />
        <LayoutUsuario exact path="/Servicios/Litigios" component={ServicioLitigios} />
        <LayoutUsuario exact path="/Servicios/Penal" component={ServicioPenal} />
        <LayoutUsuario exact path="/Servicios/Recuperaciones" component={ServicioRecuperaciones} />
        <LayoutUsuario exact path="/Equipo" component={Equipo} />
        <LayoutUsuario exact path="/Equipo/Julio" component={EquipoJulio} />
        <LayoutUsuario exact path="/Equipo/Mauricio" component={EquipoMauricio} />
        <LayoutUsuario exact path="/Equipo/Gino" component={EquipoGino} />
        <LayoutUsuario exact path="/Equipo/Katerine" component={EquipoKaterine} />
        <LayoutUsuario exact path="/Equipo/Carlos" component={EquipoCarlos} />
        <LayoutUsuario exact path="/Equipo/Ramiro" component={EquipoRamiro} />
        <LayoutUsuario exact path="/Clientes" component={Clientes} />
        <LayoutUsuario exact path="/Contacto" component={Contacto} />
        <LayoutUsuario exact path="/LibroDeReclamaciones" component={LibroDeReclamaciones} />
        <Route exact path="/Iniciar" component={Login} />

        <LayoutDash exact path="/Dashboard" component={Dashboard} />
        <LayoutDash exact path="/Dashboard/Usuarios" component={Usuarios} />
        <LayoutDash exact path="/Dashboard/Inventario" component={Inventario} />
        <LayoutDash exact path="/Dashboard/Solicitudes" component={Solicitudes} />
        <LayoutDash exact path="/Dashboard/Historial" component={Historial} />
        <LayoutDash exact path="/Dashboard/Mensajes" component={DashboardContacto} />
        <LayoutDash exact path="/Dashboard/Reclamos" component={Reclamos} />
    
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
const AuthProviderContext: React.FC = () => {
  return (
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  );
};
export default AuthProviderContext;
