import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

//Toast
import { toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";

const initStateExpediente = {
    id_expedientes: "",
    codigo_estudio: "",
    fecha_asignacion: "",
    nombre_cliente: "",
    contrato: "",
    documentos: "",
    monto: "",
    codigo_expediente: "",
    juzgado: "",
    demanda: "",
    estado_procesal: "",
    fecha_ep: "",
    estado_actual: "",
    folio: "",
    estado_uso: "",
    habilitado: "1",
    materia_id_materia: "",
    bancos_id_bancos: "",
};

const DashboardInventorySectionTable = () => {
    //Cargar datos
    const [expedientes, setExpedientes] = useState([]);
    const [bancos, setBancos] = useState([]);
    const [materias, setMaterias] = useState([]);

    //Datos para modal expediente
    const [datosVerExpediente, setDatosVerExpediente] =
        useState(initStateExpediente);

    const getExpedientes = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/expedientes");
            setExpedientes(response.data);
        } catch (error) {
            toast.error(error);
        }
    };

    const getBancos = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/bancos");
            setBancos(response.data);
        } catch (error) {
            toast.error(error);
        }
    };

    const getMaterias = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/materias");
            setMaterias(response.data);
        } catch (error) {
            toast.error(error);
        }
    };

    //El useeffect no lleva nada de callback
    useEffect(() => {
        getBancos();
        getMaterias();
        getExpedientes();
    }, []);

    const [optionModal, setOptionModal] = useState("agregar");

    const handleOptionModal_agregar = () => {
        setDatosVerExpediente(initStateExpediente);
        setOptionModal("agregar");
    };

    const eliminarRow = async (id: string) => {
        try {
            const response = await axios.delete(
                `http://localhost:4000/api/expedientes/${id}`
            );

            //Actualizar datos de tabla
            getExpedientes();

            if (response.data.success) {
                toast.success(response.data.success);
            } else {
                toast.error(response.data.error.sqlMessage);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <React.Fragment>
            <div className="card my-4">
                <div className="card-header">
                    <h3 className="card-title">Gestión de expedientes</h3>
                    <div className="card-tools">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal_DashboardExpedientes"
                            onClick={() => {
                                handleOptionModal_agregar();
                            }}
                        >
                            <FontAwesomeIcon
                                className=""
                                icon={faUserPlus}
                                color="#fff"
                                size="1x"
                            />
                        </button>
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="border-0" style={{ width: 10 }}>
                                    #
                                </th>
                                <th className="border-0">Expediente</th>
                                <th className="border-0">Estado</th>
                                <th className="border-0">Materia</th>
                                <th className="border-0">Banco</th>
                                <th className="border-0" style={{ width: 40 }}></th>
                                <th className="border-0" style={{ width: 40 }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {expedientes.map((item: any, i) => (
                                <tr key={item.id_expedientes}>
                                    <td>{i + 1}</td>
                                    <td>{item.codigo_estudio}</td>
                                    <td>{item.estado_actual}</td>
                                    {/* <td>
                                        {materias[item.materia_id_materia - 1] == null
                                            ? ""
                                            : materias[item.materia_id_materia - 1].sigla_nombre}
                                    </td>
                                    <td>
                                        {bancos[item.bancos_id_bancos - 1] == null
                                            ? ""
                                            : bancos[item.bancos_id_bancos - 1].nombre_banco}
                                    </td> */}
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal_DashboardExpedientes"
                                            onClick={() => {
                                                setDatosVerExpediente(item);
                                                setOptionModal("modificar");
                                            }}
                                        >
                                            <i className="nav-icon fas fa-eye" />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => {
                                                eliminarRow(item.codigo_estudio);
                                            }}
                                        >
                                            <i className="nav-icon fas fa-trash-alt" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* /.card-body */}
                <Modal
                    optionModal={optionModal}
                    expedientes={getExpedientes}
                    datos={datosVerExpediente}
                    bancos={bancos}
                    materias={materias}
                />
            </div>
        </React.Fragment>
    );
};

export default DashboardInventorySectionTable;