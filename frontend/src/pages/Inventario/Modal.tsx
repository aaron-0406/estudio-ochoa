import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

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

interface Props {
    optionModal: string;
    expedientes: () => Promise<void>;
    datos: any;
    bancos: never[];
    materias: never[];
}

const Modal = (props: Props) => {
    const [expediente, setExpediente] = useState(initStateExpediente);
    const [bancos, setBancos] = useState([]);
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        setBancos(props.bancos);
        setMaterias(props.materias);
        setExpediente(props.datos);
        return () => {
            setBancos([]);
            setMaterias([]);
            setExpediente(initStateExpediente);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.datos]);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setExpediente({ ...expediente, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (props.optionModal === "modificar") {
            try {
                const response = await axios.put(
                    `http://localhost:4000/api/expedientes/${expediente.codigo_estudio}`,
                    expediente
                );

                props.expedientes();

                if (response.data.success) {
                    toast.success(response.data.success);
                } else {
                    toast.error(response.data.error);
                }
            } catch (error) {
                console.error(error);
            }
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:4000/api/expedientes",
                expediente
            );

            props.expedientes();

            if (response.data.success) {
                toast.success(response.data.success);
            } else {
                toast.error(response.data.error.sqlMessage);
            }
        } catch (error) {
            console.error(error);
        }
        return;
    };

    return (
        <>
            <div
                className="modal fade"
                id="exampleModal_DashboardExpedientes"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {props.optionModal === "agregar" ? "Agregar - " : "Modificar - "}
                                Expediente
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form className="row py-3" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Codigo_Estudio"
                                        className="form-label fw-normal"
                                    >
                                        Codigo Estudio
                                    </label>
                                    {props.optionModal === "agregar" ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="input_Codigo_Estudio"
                                            name="codigo_estudio"
                                            onChange={handleChange}
                                            value={expediente.codigo_estudio}
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="input_Codigo_Estudio"
                                            name="codigo_estudio"
                                            onChange={handleChange}
                                            value={expediente.codigo_estudio}
                                            disabled
                                        />
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Fecha_Asignacion"
                                        className="form-label fw-normal"
                                    >
                                        Fecha de Asignación
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="input_Fecha_Asignacion"
                                        name="fecha_asignacion"
                                        onChange={handleChange}
                                        value={expediente.fecha_asignacion}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label className="form-label fw-normal">Materia</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="materia_id_materia"
                                        onChange={handleChange}
                                        value={expediente.materia_id_materia}
                                    >
                                        <option>Seleccione</option>
                                        {materias.map((item: any) => (
                                            <option key={item.id_materia} value={item.id_materia}>
                                                {item.sigla_nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label className="form-label fw-normal">Banco</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="bancos_id_bancos"
                                        onChange={handleChange}
                                        value={expediente.bancos_id_bancos}
                                    >
                                        <option>Seleccione</option>
                                        {bancos.map((item: any) => (
                                            <option key={item.id_bancos} value={item.id_bancos}>
                                                {item.nombre_banco}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Fecha_EP"
                                        className="form-label fw-normal"
                                    >
                                        Fecha EP
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="input_Fecha_EP"
                                        name="fecha_ep"
                                        onChange={handleChange}
                                        value={expediente.fecha_ep}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Estado_Actual"
                                        className="form-label fw-normal"
                                    >
                                        Estado Actual
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="input_Estado_Actual"
                                        name="estado_actual"
                                        onChange={handleChange}
                                        value={expediente.estado_actual}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Nombre_Cliente"
                                        className="form-label fw-normal"
                                    >
                                        Nombre Cliente
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="input_Nombre_Cliente"
                                        rows={2}
                                        name="nombre_cliente"
                                        onChange={handleChange}
                                        value={expediente.nombre_cliente}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Contrato"
                                        className="form-label fw-normal"
                                    >
                                        Contrato
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="input_Contrato"
                                        rows={2}
                                        name="contrato"
                                        onChange={handleChange}
                                        value={expediente.contrato}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Codigo_Expediente"
                                        className="form-label fw-normal"
                                    >
                                        Codigo Expediente
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="input_Codigo_Expediente"
                                        name="codigo_expediente"
                                        onChange={handleChange}
                                        value={expediente.codigo_expediente}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Fecha_Demanda"
                                        className="form-label fw-normal"
                                    >
                                        Fecha de Demanda
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="input_Fecha_Demanda"
                                        name="demanda"
                                        onChange={handleChange}
                                        value={expediente.demanda}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Documentos"
                                        className="form-label fw-normal"
                                    >
                                        Documentos
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="input_Documentos"
                                        rows={2}
                                        name="documentos"
                                        onChange={handleChange}
                                        value={expediente.documentos}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Juzgado"
                                        className="form-label fw-normal"
                                    >
                                        Juzgado
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="input_Juzgado"
                                        rows={2}
                                        name="juzgado"
                                        onChange={handleChange}
                                        value={expediente.juzgado}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label htmlFor="input_Monto" className="form-label fw-normal">
                                        Monto
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="input_Monto"
                                        rows={2}
                                        name="monto"
                                        onChange={handleChange}
                                        value={expediente.monto}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Estado_Procesal"
                                        className="form-label fw-normal"
                                    >
                                        Estado Procesal
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="input_Estado_Procesal"
                                        rows={2}
                                        name="estado_procesal"
                                        onChange={handleChange}
                                        value={expediente.estado_procesal}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label
                                        htmlFor="input_Control_Estado"
                                        className="form-label fw-normal"
                                    >
                                        Control de estado
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="input_Control_Estado"
                                        name="estado_uso"
                                        onChange={handleChange}
                                        value={expediente.estado_uso}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <label htmlFor="input_Folio" className="form-label fw-normal">
                                        Folio
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="input_Folio"
                                        name="folio"
                                        onChange={handleChange}
                                        value={expediente.folio}
                                    />
                                </div>

                                <button className="btn btn-block btn-primary w-50 mt-4 mx-auto">
                                    {props.optionModal === "agregar"
                                        ? "Agregar Expediente"
                                        : "Modificar Expediente"}
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;