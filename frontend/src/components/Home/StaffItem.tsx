import React from "react";
import { Link } from "react-router-dom";

interface Props {
  url: string;
  image: string;
  job: string;
  name: string;
}
const StaffItem: React.FC<Props> = (props) => {
  return (
    <div className="hst col my-3">
      <div className="card h-100">
        <Link to={props.url}>
          <img src={props.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <Link
            to={props.url}
            className="card-title fs-6 fw-bold w-100 py-2 mx-auto text-dark"
          >
            {props.name}
          </Link>
          <p className="hst-job d-block card-text fw-bold text-decoration-none">
            {props.job}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffItem;
