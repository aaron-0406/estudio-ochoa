/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// Componentes
import MensajeItem from "./MensajeItem";

// Services
import * as contactoServices from "../../../services/ContactoServices";

// Interfaces
import Contacto from "../../../interfaces/Contacto";
interface Props {
  setTrigguer: (trigguer: number) => void;
  trigguer: number;
  mensajeModal: Contacto;
  setMensajeModal: (mensajeModal: Contacto) => void;
  filtro: string;
}

const ListaMensajes: React.FC<Props> = (props) => {
  //Cargar datos
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [loadContactos, setLoadContactos] = useState<boolean>(false);

  const [cantidad, setCantidad] = useState<number>(0);
  const [cantidadPaginas, setCantidadPaginas] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const getContactos = async () => {
    const res = await contactoServices.getAll(page, props.filtro);
    if (res.data.error) return;
    setContactos(res.data.mensajes);
    setLoadContactos(true);
  };

  const getCantidad = async () => {
    const res = await contactoServices.getCount(props.filtro);
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
    setContactos([]);
    setLoadContactos(false);
  };

  useEffect(() => {
    getContactos();
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
        <caption>Cantidad de mensajes de contacto: {cantidad}</caption>
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
          {!loadContactos ? (
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
              {contactos.length === 0 ? (
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
                  {contactos.map((contacto, i) => {
                    return <MensajeItem i={i + 1} getContactos={getContactos} setMensajeModal={props.setMensajeModal} contacto={contacto} key={contacto.id_contacto} />;
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

export default ListaMensajes;
