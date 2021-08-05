/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Usuario } from "../../../interfaces/Usuario";
import ModalUsuario from "./ModalUsuario";
import * as usuarioServices from "../../../services/UsuarioServices";
import UsuarioItem from "./UsuarioItem";

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
    setUsuarios(res.data);
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
      <table className="table table-bordered table-hover">
        <caption>Cantidad de usuarios: {cantidad}</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>DNI</th>
            <th>USUARIO</th>
            <th>ESTADO</th>
            <th style={{ width: 40 }}></th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {!loadUsuarios ? (
            <>
              <p className="m-3">Cargando datos...</p>
            </>
          ) : (
            <>
              {usuarios.length === 0 ? (
                <>
                  <p className="m-3">No hay usuarios registrados aún</p>
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
      </div>
      <ModalUsuario setTrigguer={setTrigguer} trigguer={trigguer} render={getUsuarios} usuario={props.usuarioModal} />
    </>
  );
};

export default ListaUsuarios;
