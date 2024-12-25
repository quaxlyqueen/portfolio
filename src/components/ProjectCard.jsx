import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({
  title,
  description,
  image,
  imageGallery,
  url,
}) {
  return (
    <div className="project-card">
      <img src={image} />
      <div className="project-text">
        <div className="row">
          <h3 className="project-header">{title}</h3>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
