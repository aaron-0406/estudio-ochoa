/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useUsuario } from "../../../auth/UsuarioProvider";

// Services
import * as solicitudesServices from "../../../services/SolicitudesServices";

// Componentes
import HistorialItem from "./HistorialItem";
import ModalHistorial from "./ModalHistorial";

// Interfaces
import Solicitud from "../../../interfaces/Solicitud";

interface Props {
  estado: string;
  setTrigguer: (trigguer: number) => void;
  trigguer: number;
  setSolicitudModal: (solicitud: Solicitud) => void;
  solicitudModal: Solicitud;
  filtro: string;
}
const ListaHistorial: React.FC<Props> = (props) => {
  const { usuario, loadUser } = useUsuario();

  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [loadSolicitudes, setLoadSolicitudes] = useState<boolean>(false);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const getSolicitudes = async () => {
    const res = await solicitudesServices.getAllByUsuarioId(usuario.id_usuario + "", page, props.filtro, props.estado);
    if (res.data.error) return;
    setSolicitudes(res.data.solicitudes);
    setLoadSolicitudes(true);
  };
  const getCantidad = async () => {
    const res = await solicitudesServices.getCountByUsuarioÏd(usuario.id_usuario + "", props.filtro, props.estado);
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
    setSolicitudes([]);
    setLoadSolicitudes(false);
  };
  useEffect(() => {
    if (loadUser) getSolicitudes();
    return () => limpieza();
  }, [page, props.filtro, props.estado, loadUser]);

  useEffect(() => {
    if (loadUser) {
      setPage(1);
      setCantidadPaginas(0);
      getCantidad();
    }
    return () => {
      setCantidad(0);
      setCantidadPaginas(0);
      setPage(1);
    };
  }, [props.filtro, props.trigguer, props.estado, loadUser]);
  return (
    <>
      <table className="table table-bordered table-hover table-striped">
        <caption>Cantidad de Solicitudes: {cantidad}</caption>
        <thead>
          <tr>
            <th className="border-0">#</th>
            <th className="border-0">EXPEDIENTE</th>
            <th className="border-0">FECHA DE SOLICITUD</th>
            <th className="border-0">FECHA DE ENTREGA</th>
            <th className="border-0">ESTADO</th>
            <th className="border-0" style={{ width: 40 }}></th>
            <th className="border-0" style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {!loadSolicitudes ? (
            <>
              <tr className="m-3">
                <td>Cargando datos...</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </>
          ) : (
            <>
              {solicitudes.length === 0 ? (
                <>
                  <tr className="m-3">
                    <td> No hay solictudes registradas aún</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </>
              ) : (
                <>
                  {solicitudes.map((solicitud, i) => {
                    return <HistorialItem trigguer={props.trigguer} setTrigguer={props.setTrigguer} i={i + 1} getSolicitudes={getSolicitudes} setSolicitudModal={props.setSolicitudModal} solicitud={solicitud} key={solicitud.id_solicitud} />;
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
      <ModalHistorial setTrigguer={props.setTrigguer} trigguer={props.trigguer} render={getSolicitudes} solicitud={props.solicitudModal} />
    </>
  );
};

export default ListaHistorial;
