import React, { useState, useEffect, useRef, RefObject } from "react";

// Toast
import { toast, ToastContainer } from "react-toastify";

// Componentes
import ServicesSectionRoad from "../components/Equipo/ServicesSectionRoad";

// Services
import { sendReclaim } from "../services/ReclamoServices";

// Interfaces
import Reclamo from "../interfaces/Reclamo";

// Encrypt
import Expr from "../encrypt/exprRegular";

const LibroDeReclamaciones: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initialState: Reclamo = {
    id_reclamo: 0,
    nombre_reclamo: "",
    apellido_reclamo: "",
    correo_reclamo: "",
    direccion_reclamo: "",
    identificacion_reclamo: "",
    provincia_reclamo: "",
    telefono_reclamo: "",
    distrito_reclamo: "",
    motivo_reclamo: "",
    producto_reclamo: "",
    mensaje_reclamo: "",
    visto: 1,
  };

  // States
  const [reclamo, setReclamo] = useState(initialState);

  // References
  const refName = useRef<HTMLSpanElement>(null);
  const refSurname = useRef<HTMLSpanElement>(null);
  const refEmail = useRef<HTMLSpanElement>(null);
  const refAdress = useRef<HTMLSpanElement>(null);
  const refIdentification = useRef<HTMLSpanElement>(null);
  const refProvince = useRef<HTMLSpanElement>(null);
  const refTelephone = useRef<HTMLSpanElement>(null);
  const refDistrict = useRef<HTMLSpanElement>(null);
  const refReason = useRef<HTMLSpanElement>(null);
  const refService = useRef<HTMLSpanElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      Expr.nameSurname.test(reclamo.nombre_reclamo) &&
      Expr.nameSurname.test(reclamo.apellido_reclamo) &&
      Expr.email.test(reclamo.correo_reclamo) &&
      Expr.digit.test(reclamo.direccion_reclamo) &&
      Expr.ruc.test(reclamo.identificacion_reclamo) &&
      Expr.nameSurname.test(reclamo.provincia_reclamo) &&
      Expr.telephone.test(reclamo.telefono_reclamo) &&
      Expr.nameSurname.test(reclamo.distrito_reclamo) &&
      Expr.nameSurname.test(reclamo.motivo_reclamo) &&
      Expr.nameSurname.test(reclamo.producto_reclamo) &&
      reclamo.mensaje_reclamo
    ) {
      const res = await sendReclaim(reclamo);
      if (res.data.success) {
        toast.success(res.data.success);
        setReclamo(initialState);
        return;
      }
      if (res.data.error) return toast.error(res.data.error);
    } else {
      toast.error('Campos invalidos');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReclamo({ ...reclamo, [name]: value });
    switch (name) {
      case "nombre_reclamo":
        validation(Expr.nameSurname, e.target, refName);
        break;
      case "apellido_reclamo":
        validation(Expr.nameSurname, e.target, refSurname);
        break;
      case "correo_reclamo":
        validation(Expr.email, e.target, refEmail);
        break;
      case "direccion_reclamo":
        validation(Expr.digit, e.target, refAdress);
        break;
      case "identificacion_reclamo":
        validation(Expr.ruc, e.target, refIdentification);
        break;
      case "provincia_reclamo":
        validation(Expr.nameSurname, e.target, refProvince);
        break;
      case "telefono_reclamo":
        validation(Expr.telephone, e.target, refTelephone);
        break;
      case "distrito_reclamo":
        validation(Expr.nameSurname, e.target, refDistrict);
        break;
      case "motivo_reclamo":
        validation(Expr.nameSurname, e.target, refReason);
        break;
      case "producto_reclamo":
        validation(Expr.nameSurname, e.target, refService);
        break;
    }
  };

  const validation = (
    expr: RegExp,
    e: EventTarget & (HTMLInputElement | HTMLTextAreaElement),
    ref: RefObject<HTMLSpanElement>
  ) => {
    if (expr.test(e.value)) {
      e.classList.remove("is-invalid");
      ref.current?.classList.add("d-none");
      return;
    }
    e.classList.add("is-invalid");
    ref.current?.classList.remove("d-none");
  };

  return (
    <>
      <ToastContainer />
      <ServicesSectionRoad
        nameOption="Libro de Reclamaciones"
        numberRoad={2}
        nameRoadOne="Reclamaciones"
      />

      <div className="container my-5 px-5">
        <div className="row">
          <div className="col-12">
            <p className="text-justify">
              Con gusto nuestros ejecutivos especializados, atenderán tus dudas,
              recibiran tus comentarios y te brindaran el servicio que
              requieres. Ponemos a tu alcance el medio de comunicación más
              cómodo para tí.
            </p>
            <p className="fw-bold">
              Por favor llena los campos para que podamos comunicarnos contigo:
            </p>
            <p>Los campos son obligatorios.</p>
          </div>
        </div>
      </div>

      <div className="container my-5 px-5">
        <form className="row g-3" onSubmit={handleSubmit}>
          <p
            style={{ color: "#c17743", borderBottom: "#c17743 solid 2px" }}
            className="fw-bold fs-5 my-4 px-0"
          >
            DATOS PERSONALES
          </p>
          <div className="col-12 col-md-6">
            <label htmlFor="inputNombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="nombre_reclamo"
              value={reclamo.nombre_reclamo}
              className="form-control"
              id="inputNombre"
            />
            <span ref={refName} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputApellidos" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="apellido_reclamo"
              value={reclamo.apellido_reclamo}
              className="form-control"
              id="inputApellidos"
            />
            <span ref={refSurname} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              E - mail
            </label>
            <input
              type="email"
              onChange={handleChange}
              name="correo_reclamo"
              value={reclamo.correo_reclamo}
              className="form-control"
              id="inputEmail"
            />
            <span ref={refEmail} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputDireccion" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="direccion_reclamo"
              value={reclamo.direccion_reclamo}
              className="form-control"
              id="inputDireccion"
            />
            <span ref={refAdress} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputDni" className="form-label">
              DNI O RUC
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="identificacion_reclamo"
              value={reclamo.identificacion_reclamo}
              id="inputDni"
            />
            <span ref={refIdentification} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputProvincia" className="form-label">
              Provincia
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="provincia_reclamo"
              value={reclamo.provincia_reclamo}
              id="inputProvincia"
            />
            <span ref={refProvince} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputTelefono" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="telefono_reclamo"
              value={reclamo.telefono_reclamo}
              id="inputTelefono"
            />
            <span ref={refTelephone} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputDistrito" className="form-label">
              Distrito
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="distrito_reclamo"
              value={reclamo.distrito_reclamo}
              id="inputDistrito"
            />
            <span ref={refDistrict} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>

          <p
            style={{ color: "#c17743", borderBottom: "#c17743 solid 2px" }}
            className="fw-bold fs-5 mt-5 px-0"
          >
            REFERENCIAS Y DETALLES:
          </p>

          <div className="col-12 col-md-6">
            <label htmlFor="inputMotivo" className="form-label">
              Motivo
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="motivo_reclamo"
              value={reclamo.motivo_reclamo}
              id="inputMotivo"
            />
            <span ref={refReason} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="inputServicio" className="form-label">
              Producto / Servicio
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="producto_reclamo"
              value={reclamo.producto_reclamo}
              id="inputServicio"
            />
            <span ref={refService} className="text-danger d-none">
              Caracteres incorrectos
            </span>
          </div>
          <div className="col-12">
            <label htmlFor="inputMensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              onChange={handleChange}
              name="mensaje_reclamo"
              value={reclamo.mensaje_reclamo}
              id="inputMensaje"
              rows={3}
            />
          </div>

          <div className="col-12 mt-5">
            <button
              type="submit"
              className="btn"
              style={{
                background: "#c17743",
                color: "#fff",
              }}
            >
              Enviar Datos
            </button>
          </div>
        </form>

        <p className="row my-5">
          QUEJA.- Disconformidad no relacionada a los productos o servicios; o,
          malestar o descontento respecto a la atención al público.
          <br />
          <br /> RECLAMO.- Disconformidad relacionada a los productos o
          servicios.
        </p>
      </div>
    </>
  );
};

export default LibroDeReclamaciones;
