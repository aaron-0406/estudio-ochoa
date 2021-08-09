import React from "react";
import { Link } from "react-router-dom";

interface Props {
  url: string;
  image: string;
  name: string;
  job: string;
}

const TeamSectionTeam: React.FC<Props> = (props) => {
  return (
    <div className="team-section-team card shadow-lg p-3 bg-white mb-4 rounded">
      <Link to={props.url}>
        <img src={props.image} className="card-img-top" alt="imagen de abogado" />
      </Link>
      <div className="team-section-team__media card-body text-center">
        <Link to={props.url} className="d-block text-decoration-none fw-bold pb-2">
          {props.name}
        </Link>
        <p className="fw-bold py-2">{props.job}</p>
      </div>
    </div>
  );
};

export default TeamSectionTeam;
