import React, { useState } from "react";
interface Map {
  id: number;
  local: string;
  urlMap: string;
}
interface Props {
  arrayLocal: Map[];
}
const ContactSectionContactMap: React.FC<Props> = (props) => {
  const [urlMap, setUrlMap] = useState(props.arrayLocal[0].urlMap);

  const changeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUrlMap(props.arrayLocal[parseInt(e.target.value)].urlMap);
  };

  return (
    <div className="contact-section-contact-map w-100 position-relative">
      <div className="contact-section-contact-map__media position-absolute top-0 end-0">
        <span className="contact-section-contact-map__media-title1 fw-bold d-block">VISITANOS EN</span>
        <span className="contact-section-contact-map__media-title2 fw-bold d-block">NUESTRAS SEDES</span>
        <span className="contact-section-contact-map__media-title3 d-block">Ubícanos en la sede más cercana</span>
        <select className="form-select form-select-lg mb-3" aria-label="form-select-lg example" onChange={changeOption}>
          {props.arrayLocal.map(function (local) {
            return (
              <option key={local.id} value={local.id}>
                {local.local}
              </option>
            );
          })}
        </select>
        <span className="contact-section-contact-map__media-title4">
          <p></p>
        </span>
      </div>

      <iframe title="mapa" src={urlMap} width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
    </div>
  );
};

export default ContactSectionContactMap;
