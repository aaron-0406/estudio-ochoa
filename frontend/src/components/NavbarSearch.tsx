import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  referencia: React.RefObject<HTMLDivElement>;
}

const NavbarSearch: React.FC<Props> = (props) => {
  const inputSearch = useRef<HTMLInputElement>(null);
  const box_search = useRef<HTMLUListElement>(null);

  const buscador_interno = () => {
    let li: any = [];
    let filter = "";
    if (inputSearch.current) {
      filter = inputSearch.current.value.toUpperCase();
    }
    if (box_search.current) {
      li = box_search.current.getElementsByTagName("li");
    }

    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      let textValue = a.textContent || a.innerText;

      if (textValue.toUpperCase().indexOf(filter) >= 0) {
        li[i].style.display = "";
        if (box_search.current) {
          box_search.current.style.display = "block";
        }

        if (inputSearch.current) {
          if (inputSearch.current.value === "") {
            if (box_search.current) {
              box_search.current.style.display = "none";
            }
          }
        }
      } else {
        li[i].style.display = "none";
      }
    }
  };

  return (
    <div ref={props.referencia} className="navbar-search">
      <div id="ctn-bars-search">
        <input
          ref={inputSearch}
          type="text"
          id="inputSearch"
          placeholder="Qué deseas buscar?"
          onChange={() => {
            buscador_interno();
          }}
        ></input>
      </div>

      <ul ref={box_search} id="box-search" className="list-unstyled">
        <li>
          <Link to="/Servicios">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CORPORATIVA Y MERCANTIL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CONSTITUCIÓN DE SOCIEDADES PERUANAS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CREACIÓN DE SUCURSALES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CONTRATOS PARTICIPATIVOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            FUSIONES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ESCISIONES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            AUMENTO DE CAPITAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ELABORACIÓN DE ACTAS DE JUNTA GENERAL DE ACCIONISTAS Y SEGUIMIENTO
            DE ACUERDOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            IMPUGNACIÓN DE ACUERDOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Corporativa">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DISOLUCIÓN Y LIQUIDACIÓN DE PERSONAS JURÍDICAS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Finanzas">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            FINANZAS BANCA Y SEGUROS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Finanzas">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            SERVICIOS FINANCIEROS PARA EXCEDENTES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Finanzas">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            SERVICIOS DE FINANCIAMIENTO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Finanzas">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CONSTITUIR FIDEICOMISOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Finanzas">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DERECHO BANCARIO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contratos">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ESTUDIO DE TÍTULOS Y ELABORACIÓN DE CONTRATOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contratos">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CONTRATOS CIVILES Y BANCARIOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contratos">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CONTRATOS DE GARANTÍA MOBILIARIA
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Laboral">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            LABORAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Laboral">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            LEGISLACIÓN LABORAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Laboral">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DEFENSA EMPRESARIAL Y PERSONAL DE SOLICITUDES DE PAGOS DE BENEFICIOS
            SOCIALES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Laboral">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DESNATURALIZACIÓN DE LA RELACIÓN CONTRACTUAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Laboral">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DESPIDO ARBITRARIO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Laboral">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DESPIDO NULO O FRAUDULENTO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Laboral">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            INFRACCIONES DEL ENTE REGULADOR
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Concursal">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DERECHO CONCURSAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Concursal">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            PROCESO CONCURSAL ORDINARIO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Concursal">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CONCURSO PREVENTIVO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Concursal">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            SOLICITUD DE ACCESO AL PROCEDIMIENTO CONCURSAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Concursal">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DEFENSA ANTE JUNTA DE ACREEDORES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Concursal">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            NOMBRAMIENTO DE ADMINISTRADOR CONCURSAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Concursal">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CONCLUSIÓN DEL PROCEDIMIENTO CONCURSAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            COMPETENCIA Y PROTECCIÓN AL CONSUMIDOR
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            VULNERACIÓN DE MARCAS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            VULNERACIÓN DE INVENTOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            VULNERACIÓN DE OBRAS LITERARIAS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            VULNERACIÓN DE CONOCIMIENTOS ANCESTRALES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            VULNERACIÓN DE DISEÑOS INDUSTRIALES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            REGULACIÓN DEL CONSUMO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            REGULACIÓN DE LA ACTIVIDAD PUBLICITARIA
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            REGULACIÓN DEL COMBATE DE LAS PRÁCTICAS DESLEALES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Consumidor">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ASESORÍA LEGAL AL CONSUMIDOR
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DERECHO CIVIL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DERECHO CIVIL PATRIMONIAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ASESORÍA EN DERECHO DE FAMILIA
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DIVORCIOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DIVORCIOS DE MUTUO ACUERDO NOTARIALES O MUNICIPALES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            SUCESIONES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DERECHOS REALES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            SUCESIÓN INTESTADA
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            REDACCIÓN DE TESTAMENTOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            PRESCRIPCIÓN ADQUISITIVA Y EXTINTIVA
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            INDEMNIZACIONES DE DAÑOS Y PERJUICIOS CONTRACTUAL Y EXTRACONTRACTUAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            COMPRAVENTA
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Civil">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            INMATRICULACIÓN Y RECTIFICACIÓN DE ÁREAS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Penal">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DERECHO PENAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Penal">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DEFENSA DE LOS BIENES JURÍDICOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            RECUPERACIONES JUDICIALES Y EXTRAJUDICIALES DE DEUDAS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            RECUPERACIONES DE CARTERA MOROSA
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            COBRANZA JUDICIAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            COBRANZA EXTRAJUDICIAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            EJECUCIÓN DE GARANTÍAS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            MEDIDAS CAUTELARES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            OBLIGACIÓN DE DAR SUMA DE DINERO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            PAGO DE SUMA DE DINERO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            REMATES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CANCELACIÓN TOTAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            TRANSACCIÓN JUDICIAL O EXTRAJUDICIAL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            MEDIDAS DEL ACREEDOR
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Recuperaciones">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DACIÓN EN PAGO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Litigios">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            LITIGIOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Litigios">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            LITIGACIÓN ORAL Y ARBITRALES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            TELEFONO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            EMAIL
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            DIRECCIÓN
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Equipo">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            EQUIPO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Equipo">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ABOGADOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CONTÁCTENOS
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CONTACTO
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Clientes">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            CLIENTES
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Equipo">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            SOCIO FUNDADOR
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Historia">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            MISIÓN
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Historia">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            VISIÓN
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Historia">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            HISTORIA
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ¿CÓMO PUEDO COMUNICARME?
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ¿COMO PUEDO COMUNICARME?
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ¿QUIÉNES ESTAN A CARGO?
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ¿QUIENES ESTAN A CARGO?
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ¿PUEDO COMUNICARME CON USTEDES?
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ¿CUÁL ES SU HORARIO DE ATENCIÓN?
          </Link>
        </li>
        <li>
          <Link to="/Servicios/Contacto">
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            ¿CUAL ES SU HORARIO DE ATENCIÓN?
          </Link>
        </li>
        <li>
          <a
            href="https://web.facebook.com/Estudio-Jur%C3%ADdico-Ochoa-Maldonado-Abogados-Sociedad-Civil-105613827900367/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            FACEBOOK
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/estudiojuridicoochoam/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            INSTAGRAM
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/estudio-jur%C3%ADdico-ochoa-maldonado-abogados-sociedad-civil-35b2041b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFEv%2BvHgSSY6DKBwDhf%2FIFw%3D%3D"
          >
            <FontAwesomeIcon
              className="ms-3 me-4"
              icon={faSearch}
              color="#C17743"
              size="lg"
            />
            LINKEDIN
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarSearch;
