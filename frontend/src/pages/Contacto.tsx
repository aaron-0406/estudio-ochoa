import React, { useEffect } from "react";
import ContactSectionContactForm from "../components/Contacto/ContactSectionContactForm";
import ContactSectionContactMap from "../components/Contacto/ContactSectionContactMap";
import ServicesSectionRoad from "../components/Equipo/ServicesSectionRoad";

interface Map {
  id: number;
  local: string;
  urlMap: string;
}

const Contacto: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const arrayLocal: Map[] = [
    {
      id: 0,
      local: "ICA",
      urlMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61918.240490714765!2d-75.78101474119563!3d-14.083668421322049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2c3cec74f3d%3A0x5ce1a2b590e67ecd!2sIca!5e0!3m2!1ses!2spe!4v1624841748622!5m2!1ses!2spe",
    },
    {
      id: 1,
      local: "AYACUCHO",
      urlMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62161.04524983226!2d-74.24732384532736!3d-13.158279248519365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127d88f5b2bee9%3A0xe9b3cb843a70a16e!2sAyacucho!5e0!3m2!1ses!2spe!4v1624941809308!5m2!1ses!2spe",
    },
    {
      id: 2,
      local: "HUANCAYO",
      urlMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62430.86002708463!2d-75.2376588499956!3d-12.048423173282078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964104fb82f1%3A0xf8e45b61c55982fa!2sHuancayo!5e0!3m2!1ses!2spe!4v1624941859617!5m2!1ses!2spe",
    },
  ];
  return (
    <>
      <ServicesSectionRoad nameOption="Contáctanos" numberRoad={2} nameRoadOne="Contacto" />
      <ContactSectionContactForm />
      <ContactSectionContactMap arrayLocal={arrayLocal} />
    </>
  );
};

export default Contacto;
