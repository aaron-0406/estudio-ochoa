/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Usuario } from "../../../interfaces/Usuario";
import ModalUsuario from "./ModalUsuario";
import * as usuarioServices from "../../../services/UsuarioServices";
import UsuarioItem from "./UsuarioItem";

interface Props {
  filtro: string;
}

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
const ListaUsuarios: React.FC<Props> = (props) => {
  const [usuarioModal, setUsuarioModal] = useState<Usuario>(initialState);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loadUsuarios, setLoadUsuarios] = useState<boolean>(false);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const getUsuarios = async () => {
    const res = await usuarioServices.getAll(page, props.filtro);
    setUsuarios(res.data);
    setLoadUsuarios(true);
  };
  const getCantidad = async () => {
    const res = await usuarioServices.getCount(props.filtro);
    setCantidad(res.data);
    setCantidadPaginas(Math.ceil(res.data / 12));
  };
  const limpieza = () => {
    setUsuarios([]);
    setLoadUsuarios(false);
  };
  useEffect(() => {
    getUsuarios();
    return () => limpieza();
  }, [page, props.filtro]);

  useEffect(() => {
    setPage(1);
    setCantidadPaginas(0);
    getCantidad();
    return () => {
      setCantidad(0);
      setCantidadPaginas(0);
      setPage(1);
    };
  }, [props.filtro]);
  return (
    <>
    <table className="table table-bordered table-hover">
        <caption>Cantidad de estudiantes: {cantidad}</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>APELLIDOS</th>
            <th>CORREO</th>
            <th>PROFESION</th>
            <th className="text-center">VER MÁS</th>
            <th className="text-center">DESHABILITAR</th>
          </tr>
        </thead>
        <tbody>
          {!loadUsuarios ? (
            <>
              <tr>
                <td>Cargando datos...</td>
              </tr>
            </>
          ) : (
            <>
              {usuarios.length === 0 ? (
                <>
                  <tr>
                    <td>No hay profesores registrados aún</td>
                  </tr>
                </>
              ) : (
                <>
                  {usuarios.map((usuario) => {
                    return <UsuarioItem getUsuarios={getUsuarios} setUsuarioModal={setUsuarioModal} usuario={usuario} key={usuario.id_usuario} />;
                  })}
                </>
              )}
            </>
          )}
        </tbody>
      </table>
      <ModalUsuario render={getUsuarios} usuario={usuarioModal} />
    </>
  );
};

export default ListaUsuarios;
