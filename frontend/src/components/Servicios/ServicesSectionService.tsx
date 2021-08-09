import React from "react";
import { Link } from "react-router-dom";

// Interfaces
interface Props {
  url: string;
  image: string;
  title: string;
  text: string;
}

const ServicesSectionService: React.FC<Props> = (props) => {
  return (
    <div className="card h-100 shadow p-3 pb-0 bg-white rounded">
      <Link to={props.url}>
        <img src={props.image} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <Link to={props.url} className="services-section-service__title card-title fw-bold text-decoration-none d-block mb-3">
          {props.title}
        </Link>
        <p className="card-text">{props.text}</p>
        <Link to={props.url} className="text-decoration-none fs-1">
          ...
        </Link>
      </div>
    </div>
  );
};
export default ServicesSectionService;
