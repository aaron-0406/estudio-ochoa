import React from "react";
import { Link } from "react-router-dom";

interface Props {
  url: string;
  image: string;
  title: string;
  text: string;
}

const ServicesSectionService: React.FC<Props> = (props) => {
  return (
    <div className="card h-100 shadow p-3 pb-0 bg-body rounded">
      <Link to={props.url}>
        <img src={props.image} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <a href="/" className="services-section-service__title card-title fw-bold text-decoration-none d-block mb-3">
          {props.title}
        </a>
        <p className="card-text">{props.text}</p>
        <a href="/" className="text-decoration-none fs-1">
          ...
        </a>
      </div>
    </div>
  );
};
export default ServicesSectionService;
