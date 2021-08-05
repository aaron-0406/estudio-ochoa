import React from "react";

interface Props {
  image: string;
  name: string;
  job: string;
}

const TeamSectionTeam: React.FC<Props> = (props) => {
  return (
    <div className="team-section-team card shadow-lg p-3 bg-white mb-4 rounded">
      <a href="/">
        <img src={props.image} className="card-img-top" alt="imagen de abogado" />
      </a>
      <div className="team-section-team__media card-body text-center">
        <a href="/" className="d-block text-decoration-none fw-bold pb-2">
          {props.name}
        </a>
        <p className="fw-bold py-2">{props.job}</p>
      </div>
    </div>
  );
};

export default TeamSectionTeam;
