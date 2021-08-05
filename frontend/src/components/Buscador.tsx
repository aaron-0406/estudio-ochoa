import React from "react";

// Interfaces
interface Props {
  funcion: (text: string) => void;
  placeholder: string;
}

const Buscador: React.FC<Props> = (props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => props.funcion(e.target.value);

  return (
    <div className="d-flex justify-content-between">
      <input name="buscar" onChange={handleInputChange} type="text" placeholder={props.placeholder} className="form-control" />
    </div>
  );
};

export default Buscador;
