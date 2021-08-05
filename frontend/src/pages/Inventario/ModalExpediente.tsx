import React, { useEffect, useRef, useState } from "react";
import Expediente from "../../interfaces/Expediente";
import * as bancoServices from "../../services/BancoServices";
import * as materiaServices from "../../services/MateriaServices";
import * as expedienteServices from "../../services/ExpedienteServices";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import { toast } from "react-toastify";

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
  estado_uso: "",
  habilitado: "1",
  id_materia: 0,
  id_banco: 0,
};
const ModalExpediente: React.FC<Props> = (props) => {
  const [bancos, setBancos] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [expediente, setExpediente] = useState(initStateExpediente);

  const refButton = useRef<HTMLButtonElement | null>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (expediente.id_expediente === 0) {
      const res = await expedienteServices.createExpediente(expediente);
      if (res.data.success) {
        toast.success(res.data.success);
        setExpediente(initStateExpediente);
        props.render();
        props.setTrigguer(props.trigguer + 1);
        if (refButton.current) refButton.current.click();
        return toast.success(res.data.success);
      }
      if (res.data.error) return toast.error(res.data.error);
      return;
    }
    const res = await expedienteServices.editarExpediente(expediente.id_expediente + "", expediente);
    if (res.data.success) {
      props.render();
      props.setTrigguer(props.trigguer + 1);
      if (refButton.current) refButton.current.click();
      return toast.success(res.data.success);
    }
    if (res.data.error) return toast.error(res.data.error);
    return;
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setExpediente({ ...expediente, [event.target.name]: event.target.value });
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
    };
  }, [props.expediente]);

  return (
    <div className="modal fade" id="createExpediente" tabIndex={-1} aria-labelledby="createExpediente" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            {expediente.id_expediente === 0 ? (
              <>
                <div className="modal-header bg-dark">
                  <h5 className="modal-title" id="createExpediente">
                    <AiOutlineFileAdd className="fs-3 mb-2 me-1" color="#fff" /> Crear Expediente
                  </h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                </div>
              </>
            ) : (
              <>
                <div className="modal-header bg-warning">
                  <h5 className="modal-title" id="createExpediente">
                    <FaEdit className="fs-4 mb-2 me-1" color="#000" />
                    Modificar Expediente
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
              </>
            )}

            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Codigo_Estudio" className="form-label fw-normal">
                    Codigo Estudio
                  </label>
                  {expediente.id_expediente === 0 ? (
                    <>
                      <input type="text" className="form-control" id="input_Codigo_Estudio" name="codigo_estudio" onChange={handleChange} value={expediente.codigo_estudio} />
                    </>
                  ) : (
                    <>
                      <input disabled type="text" className="form-control" id="input_Codigo_Estudio" name="codigo_estudio" onChange={handleChange} value={expediente.codigo_estudio} />
                    </>
                  )}
                  {/* <input type="text" className="form-control" id="input_Codigo_Estudio" name="codigo_estudio" onChange={handleChange} value={expediente.codigo_estudio} disabled /> */}
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Codigo_Expediente" className="form-label fw-normal">
                    Codigo Expediente
                  </label>
                  <input type="text" className="form-control" id="input_Codigo_Expediente" name="codigo_expediente" onChange={handleChange} value={expediente.codigo_expediente} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Nombre_Cliente" className="form-label fw-normal">
                    Nombre Cliente
                  </label>
                  <textarea className="form-control" id="input_Nombre_Cliente" rows={2} name="nombre_cliente" onChange={handleChange} value={expediente.nombre_cliente} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Fecha_Demanda" className="form-label fw-normal">
                    Fecha de Demanda
                  </label>
                  <input type="date" className="form-control" id="input_Fecha_Demanda" name="demanda" onChange={handleChange} value={expediente.demanda} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Fecha_EP" className="form-label fw-normal">
                    Fecha EP
                  </label>
                  <input type="date" className="form-control" id="input_Fecha_EP" name="fecha_ep" onChange={handleChange} value={expediente.fecha_ep} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Fecha_Asignacion" className="form-label fw-normal">
                    Fecha de Asignación
                  </label>
                  <input type="date" className="form-control" id="input_Fecha_Asignacion" name="fecha_asignacion" onChange={handleChange} value={expediente.fecha_asignacion} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label className="form-label fw-normal">Materia</label>
                  <select className="form-select" aria-label="Default select example" name="id_materia" onChange={handleChange} value={expediente.id_materia}>
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
                      <select className="form-select" aria-label="Default select example" name="id_banco" onChange={handleChange} value={expediente.id_banco}>
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
                      <select className="form-select" aria-label="Default select example" disabled name="id_banco" onChange={handleChange} value={expediente.id_banco}>
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
                  <label htmlFor="input_Estado_Actual" className="form-label fw-normal">
                    Estado Actual
                  </label>
                  <input type="text" className="form-control" id="input_Estado_Actual" name="estado_actual" onChange={handleChange} value={expediente.estado_actual} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Contrato" className="form-label fw-normal">
                    Contrato
                  </label>
                  <textarea className="form-control" id="input_Contrato" rows={2} name="contrato" onChange={handleChange} value={expediente.contrato} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Estado_Procesal" className="form-label fw-normal">
                    Estado Procesal
                  </label>
                  <textarea className="form-control" id="input_Estado_Procesal" rows={2} name="estado_procesal" onChange={handleChange} value={expediente.estado_procesal} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Documentos" className="form-label fw-normal">
                    Documentos
                  </label>
                  <textarea className="form-control" id="input_Documentos" rows={2} name="documentos" onChange={handleChange} value={expediente.documentos} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Juzgado" className="form-label fw-normal">
                    Juzgado
                  </label>
                  <textarea className="form-control" id="input_Juzgado" rows={2} name="juzgado" onChange={handleChange} value={expediente.juzgado} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Monto" className="form-label fw-normal">
                    Monto
                  </label>
                  <textarea className="form-control" id="input_Monto" rows={2} name="monto" onChange={handleChange} value={expediente.monto} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <br />
                  <label htmlFor="input_Folio" className="form-label fw-normal">
                    Folio
                  </label>
                  <input type="text" className="form-control" id="input_Folio" name="folio" onChange={handleChange} value={expediente.folio} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={(node) => (refButton.current = node)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
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