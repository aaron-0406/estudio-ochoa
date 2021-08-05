import React from "react";

const ServicesSectionPhrase: React.FC = () => {
  return (
    <div className="services-section-phrase w-100 py-4">
      <div className="container py-3 d-flex flex-column  flex-md-row justify-content-between align-items">
        <h2 className="d-block">
          Para un <span className="fw-bold">Asesoramiento Experto</span>, puede Confiar en Nosotros
        </h2>
        <a href="/" className="my-3 text-decoration-none">
          Contáctanos
        </a>
      </div>
    </div>
  );
};

export default ServicesSectionPhrase;
