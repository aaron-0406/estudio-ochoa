import React from "react";

// Interfaces
interface Props {
  id: string;
  lista: listaXD[];
}

interface listaXD {
  titulo: string;
  texto: any;
}

const ServicesAccordion: React.FC<Props> = (props) => {
  return (
    <div className="accordion" id={props.id}>
      <div className="accordion-item">
        {props.lista.map((accordion, i) => {
          return (
            <div key={i}>
              <h2 className="accordion-header" id={props.id + i}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + props.id + i} aria-expanded="false" aria-controls={"collapse" + props.id + i}>
                  {accordion.titulo}
                </button>
              </h2>
              <div id={"collapse" + props.id + i} className="accordion-collapse collapse" aria-labelledby={"" + i} data-bs-parent={`#${props.id}`}>
                <div className="accordion-body">{accordion.texto}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesAccordion;
