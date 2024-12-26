import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({
  title,
  descriptionA,
  featureList,
  image,
  imageGallery,
  url,
}) {
  return (
    <div className="project-card">
      <div className="img-container">
        <img src={image} />
      </div>
      <div className="project-text-column">
        <div className="project-text">
          <h3 className="project-header">{title}</h3>
          <p>{descriptionA}</p>
          <div className="row">
            <ul className="feature-list">
              {featureList.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="button">
            <a className="view-button-link" href={url} target="_blank">
              View on GitHub
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
