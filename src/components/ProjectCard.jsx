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
        <img src={image} className="shadow" />
      </div>
      <div className="project-text-column shadow">
        <div className="project-text">
          <h3>{title}</h3>
          <p>{descriptionA}</p>
          <ul className="feature-list">
            {featureList.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <div className="row">
            <a className="button" href={url} target="_blank">
              <div className="button-grid">View on GitHub</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
