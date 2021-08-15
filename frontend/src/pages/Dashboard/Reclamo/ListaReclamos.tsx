/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// Services
import * as reclamosServices from "../../../services/ReclamoServices";

// Componentes
import ReclamoItem from "./ReclamoItem";

// Interfaces
import Reclamo from "../../../interfaces/Reclamo";

interface Props {
  setTrigguer: (trigguer: number) => void;
  trigguer: number;
  reclamoModal: Reclamo;
  setReclamoModal: (mensajeModal: Reclamo) => void;
  filtro: string;
}
const ListaReclamos: React.FC<Props> = (props) => {
  //Cargar datos
  const [reclamos, setReclamos] = useState<Reclamo[]>([]);
  const [loadReclamos, setLoadReclamos] = useState<boolean>(false);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const getReclamos = async () => {
    const res = await reclamosServices.getAll(page, props.filtro);
    if (res.data.error) return;
    setReclamos(res.data.reclamos);
    setLoadReclamos(true);
  };

  const getCantidad = async () => {
    const res = await reclamosServices.getCount(props.filtro);
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
    setReclamos([]);
    setLoadReclamos(false);
  };

  useEffect(() => {
    getReclamos();
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
  }, [props.filtro, props.trigguer]);

  return (
    <>
      <table className="table table-bordered table-hover table-striped">
        <caption>Cantidad de mensajes de reclamo: {cantidad}</caption>
        <thead>
          <tr>
            <th className="border-0" style={{ width: 10 }}>
              #
            </th>
            <th className="border-0">Nombres</th>
            <th className="border-0">Correo</th>
            <th className="border-0">Teléfono</th>
            <th className="border-0" style={{ width: 40 }}></th>
            <th className="border-0" style={{ width: 40 }}></th>
            <th className="border-0" style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {!loadReclamos ? (
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
              {reclamos.length === 0 ? (
                <>
                  <tr className="m-3">
                    <td> No hay mensajes registrados aún</td>
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
                  {reclamos.map((reclamo, i) => {
                    return <ReclamoItem i={i + 1} getReclamos={getReclamos} setReclamoModal={props.setReclamoModal} reclamo={reclamo} key={reclamo.id_reclamo} />;
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
    </>
  );
};

export default ListaReclamos;
