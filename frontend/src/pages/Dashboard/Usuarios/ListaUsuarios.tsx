/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Usuario } from "../../../interfaces/Usuario";

// Componentes
import ModalUsuario from "./ModalUsuario";

// Services
import * as usuarioServices from "../../../services/UsuarioServices";

// Componentes
import UsuarioItem from "./UsuarioItem";

// Interfaces
interface Props {
  setUsuarioModal: (usuario: Usuario) => void;
  usuarioModal: Usuario;
  filtro: string;
}

const ListaUsuarios: React.FC<Props> = (props) => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loadUsuarios, setLoadUsuarios] = useState<boolean>(false);
  const [trigguer, setTrigguer] = useState<number>(0);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const getUsuarios = async () => {
    const res = await usuarioServices.getAll(page, props.filtro);
    if (res.data.error) return;
    setUsuarios(res.data.usuarios);
    setLoadUsuarios(true);
  };
  const getCantidad = async () => {
    const res = await usuarioServices.getCount(props.filtro);
    setCantidad(res.data);
    setCantidadPaginas(Math.ceil(res.data / 12));
  };
  const paginaSiguiente = () => {
    if (page === cantidadPaginas) return;
    setPage(page + 1);
  };

  const paginaAnterior = () => {
    if (page === 1) return;
    setPage(page - 1);
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
  }, [props.filtro, trigguer]);
  return (
    <>
      <table className="table table-bordered table-hover table-striped">
        <caption>Cantidad de usuarios: {cantidad}</caption>
        <thead>
          <tr>
            <th className="border-0">#</th>
            <th className="border-0">DNI</th>
            <th className="border-0">USUARIO</th>
            <th className="border-0">CORREO</th>
            <th className="border-0" style={{ width: 40 }}></th>
            <th className="border-0" style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {!loadUsuarios ? (
            <>
              <tr className="m-3">
                <td>Cargando datos...</td>
              </tr>
            </>
          ) : (
            <>
              {usuarios.length === 0 ? (
                <>
                  <tr className="m-3">
                    <td> No hay usuarios registrados aún</td>
                  </tr>
                </>
              ) : (
                <>
                  {usuarios.map((usuario, i) => {
                    return <UsuarioItem i={i + 1} getUsuarios={getUsuarios} setUsuarioModal={props.setUsuarioModal} usuario={usuario} key={usuario.id_usuario} />;
                  })}
                </>
              )}
            </>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        {cantidadPaginas === 0 ? (
          <></>
        ) : (
          <>
            {page === 1 ? (
              <></>
            ) : (
              <>
                <button
                  onClick={() => {
                    paginaAnterior();
                  }}
                  className="btn btn__blue"
                >
                  <span aria-hidden="true">&laquo; Página Anterior</span>
                </button>
              </>
            )}
            {page === cantidadPaginas ? (
              <></>
            ) : (
              <>
                <button
                  onClick={() => {
                    paginaSiguiente();
                  }}
                  className="btn btn__blue ms-auto"
                >
                  <span aria-hidden="true">Página Siguiente &raquo;</span>
                </button>
              </>
            )}
          </>
        )}
      </div>
      <ModalUsuario setTrigguer={setTrigguer} trigguer={trigguer} render={getUsuarios} usuario={props.usuarioModal} />
    </>
  );
};

export default ListaUsuarios;
