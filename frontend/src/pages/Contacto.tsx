import React, { useEffect } from "react";

// Componentes
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
      urlMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17376.323284660837!2d-75.73554612932341!3d-14.069141685709754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA0JzEzLjIiUyA3NcKwNDMnNDUuNiJX!5e0!3m2!1ses!2spe!4v1628725719407!5m2!1ses!2spe",
    },
    {
      id: 1,
      local: "AYACUCHO",
      urlMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.2421951808326!2d-74.21369324764932!3d-13.16436843368815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA5JzUxLjAiUyA3NMKwMTInNDcuOSJX!5e0!3m2!1ses!2spe!4v1628725797045!5m2!1ses!2spe",
    },
    {
      id: 2,
      local: "HUANCAYO",
      urlMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.84669290552546!2d-75.21226003312805!3d-12.074652339376758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA0JzI4LjgiUyA3NcKwMTInNDMuOCJX!5e0!3m2!1ses!2spe!4v1628725832107!5m2!1ses!2spe",
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
