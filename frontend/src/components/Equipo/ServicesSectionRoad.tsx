import React from "react";
import { Link } from "react-router-dom";
interface Props {
  nameOption: string;
  numberRoad: number;
  nameRoadOne: string;
  nameRoadTwo?: string;
}

const ServicesSectionRoad: React.FC<Props> = (props) => {
  return (
    <div className="services-section-road w-100">
      <div className="container h-100 d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
        <h2>{props.nameOption}</h2>
        {props.numberRoad === 2 ? (
          <nav aria-label="breadcrumb">
            <ol className="list-unstyled d-flex">
              <li className="breadcrumb-item">
                <Link to="/">Inicio</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.nameRoadOne}
              </li>
            </ol>
          </nav>
        ) : (
          <nav aria-label="breadcrumb">
            <ol className="list-unstyled d-flex">
              <li className="breadcrumb-item">
                <Link to="/">Inicio</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.nameRoadTwo}
              </li>
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default ServicesSectionRoad;
