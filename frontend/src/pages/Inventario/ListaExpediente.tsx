/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";

//Toast
//Services

import * as expedienteServices from "../../services/ExpedienteServices";
import Expediente from "../../interfaces/Expediente";
import ExpedienteItem from "./ExpedienteItem";
import ModalExpediente from "./ModalExpediente";

interface Props {
  setTrigguer: (trigguer: number) => void;
  trigguer: number;
  expedienteModal: Expediente;
  setExpedienteModal: (expediente: Expediente) => void;
  filtro: string;
}
const ListaExpediente: React.FC<Props> = (props) => {
  //Cargar datos
  const [expedientes, setExpedientes] = useState<Expediente[]>([]);
  const [loadExpedientes, setLoadExpedientes] = useState<boolean>(false);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const getExpedientes = async () => {
    const res = await expedienteServices.getAll(page, props.filtro);
    setExpedientes(res.data);
    setLoadExpedientes(true);
  };

  const getCantidad = async () => {
    const res = await expedienteServices.getCount(props.filtro);
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
    setExpedientes([]);
    setLoadExpedientes(false);
  };

  useEffect(() => {
    getExpedientes();
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
  }, [props.filtro,props.trigguer]);

  return (
    <>
      <table className="table table-bordered table-hover table-striped">
        <caption>Cantidad de expedientes: {cantidad}</caption>
        <thead>
          <tr>
            <th className="border-0" style={{ width: 10 }}>
              #
            </th>
            <th className="border-0">Expediente</th>
            <th className="border-0">Nombre del Cliente</th>
            <th className="border-0">Estado</th>
            <th className="border-0">Materia</th>
            <th className="border-0">Banco</th>
            <th className="border-0" style={{ width: 40 }}></th>
            <th className="border-0" style={{ width: 40 }}></th>
          </tr>
        </thead>
        <tbody>
          {!loadExpedientes ? (
            <>
              <tr className="m-3">
                <td>Cargando datos...</td>
              </tr>
            </>
          ) : (
            <>
              {expedientes.length === 0 ? (
                <>
                  <tr className="m-3">
                    <td> No hay expedientes registrados aún</td>
                  </tr>
                </>
              ) : (
                <>
                  {expedientes.map((expediente, i) => {
                    return <ExpedienteItem i={i + 1} getExpedientes={getExpedientes} setExpedienteModal={props.setExpedienteModal} expediente={expediente} key={expediente.id_expediente} />;
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
      <ModalExpediente setTrigguer={props.setTrigguer} trigguer={props.trigguer} render={getExpedientes} expediente={props.expedienteModal} />
    </>
  );
};

export default ListaExpediente;
