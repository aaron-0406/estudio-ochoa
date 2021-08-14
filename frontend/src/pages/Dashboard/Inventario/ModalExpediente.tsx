import React, { useEffect, useRef, useState } from "react";
import expr from "../../../encrypt/exprRegular";
// Services
import * as bancoServices from "../../../services/BancoServices";
import * as materiaServices from "../../../services/MateriaServices";
import * as expedienteServices from "../../../services/ExpedienteServices";

// Iconos
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaEdit, FaEye } from "react-icons/fa";

// Toast
import { toast } from "react-toastify";

// Interfaces
import Expediente from "../../../interfaces/Expediente";

interface Props {
  setTrigguer: (trigguer: number) => void;
  trigguer: number;
  expediente: Expediente;
  render: () => void;
}
const initStateExpediente: Expediente = {
  id_expediente: 0,
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
  estado_uso: "0",
  habilitado: "1",
  id_materia: 0,
  id_banco: 0,
  archivo: [new File([""], "filename")],
};
const ModalExpediente: React.FC<Props> = (props) => {
  // States
  const [bancos, setBancos] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [expediente, setExpediente] = useState(initStateExpediente);

  // References
  const refInputFile = useRef<HTMLInputElement | null>();
  const refButton = useRef<HTMLButtonElement | null>();
  const refCodigoEstudio = useRef<HTMLInputElement>(null);
  const refCodigoExpediente = useRef<HTMLInputElement>(null);
  const refEstadoActual = useRef<HTMLInputElement>(null);
  const refFolio = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !(
        expr.digit.test(expediente.codigo_estudio) &&
        expr.digit.test(expediente.codigo_expediente) &&
        expr.digit.test(expediente.folio) &&
        expr.letter.test(expediente.estado_actual) &&
        expediente.nombre_cliente &&
        expediente.demanda &&
        expediente.fecha_ep &&
        expediente.fecha_asignacion &&
        expediente.id_materia &&
        expediente.id_banco &&
        expediente.contrato &&
        expediente.estado_procesal &&
        expediente.documentos &&
        expediente.juzgado &&
        expediente.monto &&
        expediente.archivo
      )
    )
      return toast.error("Campos invalidos");
    // Crear
    const formData = new FormData();
    formData.set("codigo_estudio", expediente.codigo_estudio);
    formData.set("fecha_asignacion", expediente.fecha_asignacion);
    formData.set("nombre_cliente", expediente.nombre_cliente);
    formData.set("contrato", expediente.contrato);
    formData.set("documentos", expediente.documentos);
    formData.set("monto", expediente.monto);
    formData.set("codigo_expediente", expediente.codigo_expediente);
    formData.set("juzgado", expediente.juzgado);
    formData.set("demanda", expediente.demanda);
    formData.set("estado_procesal", expediente.estado_procesal);
    formData.set("fecha_ep", expediente.fecha_ep);
    formData.set("estado_actual", expediente.estado_actual);
    formData.set("folio", expediente.folio);
    formData.set("estado_uso", "0");
    formData.set("habilitado", "1");
    formData.set("id_materia", expediente.id_materia + "");
    formData.set("id_banco", expediente.id_banco + "");
    if (expediente.archivo) formData.append("archivo", expediente.archivo[0]);

    if (expediente.id_expediente === 0) {
      const res = await expedienteServices.createExpediente(formData);
      if (res.data.success) {
        setExpediente(initStateExpediente);
        props.render();
        props.setTrigguer(props.trigguer + 1);
        if (refButton.current) refButton.current.click();
        if (refInputFile.current) refInputFile.current.value = "";
        return toast.success(res.data.success);
      }
      if (res.data.error) return toast.error(res.data.error);
      return;
    }
    // Actualizar
    const res = await expedienteServices.editarExpediente(
      expediente.id_expediente + "",
      formData
    );
    if (res.data.success) {
      setExpediente(initStateExpediente);
      props.render();
      props.setTrigguer(props.trigguer + 1);
      if (refButton.current) refButton.current.click();
      if (refInputFile.current) refInputFile.current.value = "";
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
    return;
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files)
      setExpediente({ ...expediente, [e.target.name]: e.target.files });
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setExpediente({ ...expediente, [event.target.name]: event.target.value });
    switch (event.target.name) {
      case "codigo_estudio":
        validation(expr.digit, event.target);
        break;
      case "codigo_expediente":
        validation(expr.digit, event.target);
        break;
      case "folio":
        validation(expr.digit, event.target);
        break;
      case "estado_actual":
        validation(expr.letter, event.target);
        break;
    }
  };

  const validation = (
    expr: RegExp,
    e: EventTarget &
      (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)
  ) => {
    if (expr.test(e.value)) {
      e.classList.remove("is-invalid");
      return;
    }
    e.classList.add("is-invalid");
  };

  //El useeffect no lleva nada de callback
  const getBancos = async () => {
    const res = await bancoServices.getAll();
    setBancos(res.data);
  };

  const getMaterias = async () => {
    const res = await materiaServices.getAll();
    setMaterias(res.data);
  };

  useEffect(() => {
    getBancos();
    getMaterias();
    return () => {
      setBancos([]);
      setMaterias([]);
    };
  }, []);

  useEffect(() => {
    setExpediente(props.expediente);
    return () => {
      setExpediente(initStateExpediente);
      console.log("unmounth");
    };
  }, [props.expediente]);

  const cleanInputs = () => {
    refCodigoEstudio.current?.classList.remove("is-invalid");
    refCodigoExpediente.current?.classList.remove("is-invalid");
    refEstadoActual.current?.classList.remove("is-invalid");
    refFolio.current?.classList.remove("is-invalid");
    setExpediente(initStateExpediente);
  };

  return (
    <div
      className="modal fade"
      id="createExpediente"
      tabIndex={-1}
      aria-labelledby="createExpediente"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            {expediente.id_expediente === 0 ? (
              <>
                <div className="modal-header bg-dark">
                  <h5 className="modal-title" id="createExpediente">
                    <AiOutlineFileAdd className="fs-3 mb-2 me-1" color="#fff" />{" "}
                    Crear Expediente
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    onClick={cleanInputs}
                    aria-label="Close"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="modal-header bg-warning">
                  <h5 className="modal-title" id="createExpediente">
                    <FaEdit className="fs-4 mb-2 me-1" color="#000" />
                    Modificar Expediente
                  </h5>
                  <button
                    type="button"
                    onClick={cleanInputs}
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </>
            )}

            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label
                    htmlFor="input_Codigo_Estudio"
                    className="form-label fw-normal"
                  >
                    Codigo Estudio
                  </label>
                  {expediente.id_expediente === 0 ? (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        id="input_Codigo_Estudio"
                        ref={refCodigoEstudio}
                        name="codigo_estudio"
                        onChange={handleChange}
                        value={expediente.codigo_estudio}
                      />
                      <div className="invalid-feedback">
                        Caracteres incorrectos
                      </div>
                    </>
                  ) : (
                    <>
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        id="input_Codigo_Estudio"
                        ref={refCodigoEstudio}
                        name="codigo_estudio"
                        onChange={handleChange}
                        value={expediente.codigo_estudio}
                      />
                      <div className="invalid-feedback">
                        Caracteres incorrectos
                      </div>
                    </>
                  )}
                  {/* <input type="text" className="form-control" id="input_Codigo_Estudio" name="codigo_estudio" onChange={handleChange} value={expediente.codigo_estudio} disabled /> */}
                </div>
                <div className="col-12 col-md-6 col-lg-6">
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
                    ref={refCodigoExpediente}
                    name="codigo_expediente"
                    onChange={handleChange}
                    value={expediente.codigo_expediente}
                  />
                  <div className="invalid-feedback">Caracteres incorrectos</div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label className="form-label fw-normal">Materia</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="id_materia"
                    onChange={handleChange}
                    value={expediente.id_materia}
                  >
                    <option>Seleccione</option>
                    {materias.map((item: any) => (
                      <option key={item.id_materia} value={item.id_materia}>
                        {item.sigla_nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label className="form-label fw-normal">Banco</label>
                  {expediente.id_expediente === 0 ? (
                    <>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="id_banco"
                        onChange={handleChange}
                        value={expediente.id_banco}
                      >
                        <option>Seleccione</option>
                        {bancos.map((item: any) => (
                          <option key={item.id_banco} value={item.id_banco}>
                            {item.nombre_banco}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        disabled
                        name="id_banco"
                        onChange={handleChange}
                        value={expediente.id_banco}
                      >
                        <option>Seleccione</option>
                        {bancos.map((item: any) => (
                          <option key={item.id_banco} value={item.id_banco}>
                            {item.nombre_banco}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
                <div className="col-12 col-md-6 col-lg-6">
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
                    ref={refEstadoActual}
                    onChange={handleChange}
                    value={expediente.estado_actual}
                  />
                  <div className="invalid-feedback">Caracteres incorrectos</div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-md-6 col-lg-6">
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
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Folio" className="form-label fw-normal">
                    Folio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="input_Folio"
                    name="folio"
                    ref={refFolio}
                    onChange={handleChange}
                    value={expediente.folio}
                  />
                  <div className="invalid-feedback">Caracteres incorrectos</div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Folio" className="form-label fw-normal">
                    Archivo
                  </label>
                  {expediente.id_expediente === 0 ? (
                    <>
                      <input
                        ref={(node) => (refInputFile.current = node)}
                        required
                        type="file"
                        className="form-control"
                        id="archivo"
                        name="archivo"
                        onChange={handleChangeFile}
                      />
                    </>
                  ) : (
                    <>
                      <input
                        ref={(node) => (refInputFile.current = node)}
                        type="file"
                        className="form-control"
                        id="archivo"
                        name="archivo"
                        onChange={handleChangeFile}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={(node) => (refButton.current = node)}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={cleanInputs}
              >
                Cerrar
              </button>
              {expediente.id_expediente === 0 ? (
                <>
                  <button type="submit" className="btn btn-primary">
                    <AiOutlineFileAdd className="fs-4 me-1" color="#fff" />
                    Crear Expediente
                  </button>
                </>
              ) : (
                <>
                  <a
                    href={`https://drive.google.com/file/d/${expediente.id_documento}/view?usp=sharing`}
                    target="__blank"
                    className="btn btn-primary"
                  >
                    <FaEye className="fs-4 me-1" color="#fff" />
                    Ver Expediente Digital
                  </a>
                  <button type="submit" className="btn btn-warning">
                    <FaEdit className="fs-4 me-1" color="#000" />
                    Modificar Expediente
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalExpediente;
