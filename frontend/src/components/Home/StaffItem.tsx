import React from "react";
interface Props {
  image: string;
  job: string;
  name: string;
}
const StaffItem: React.FC<Props> = (props) => {
  return (
    <div className="hst col my-3">
      <div className="card h-100">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-6 fw-bold w-100 py-2 mx-auto">{props.name}</h5>
          <a href="/" className="hst-job d-block card-text fw-bold text-decoration-none">
            {props.job}
          </a>
        </div>
      </div>
    </div>
  );
};

export default StaffItem;
