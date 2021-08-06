import React from "react";

import { FaDotCircle } from "react-icons/fa";

interface Props {
  titulo: string;
  array: lista[];
}

interface lista {
  texto: any;
}

const EquipoDatos: React.FC<Props> = (props) => {
  return (
    <div className="my-5 mx-3">
      <p className="fs-5 fw-bold">{props.titulo}</p>
      {props.array.map((parrafo, i) => {
        return (
          <div className="row" key={i}>
            <div className="col-1">
              <FaDotCircle className="fs-5" color="#c17743" />
            </div>
            <div className="col-11">
              <p className="mx-3 text-justify">{parrafo.texto}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EquipoDatos;
