import React from "react";

/*
 * An individual Project Card component, generated from project data in /App.jsx. Displays an image/gif
 * of the project to the left on desktop, and above on mobile, a card. This card is simple, just a header,
 * some description text, a list of implemented features, and a button to navigate to the GitHub for the 
 * project.
 *
 * Managed by /Projects.jsx.
 * Data by /App.jsx.
 *
 * @param title String
 * @param description String
 * @param featureList String[]
 * @param image String
 * @param url String
 */
const ProjectCard = ({
  title,
  description,
  featureList,
  image,
  url,
}) => {
  return (
    <div className="project-card">
      <div className="img-container">
        <img src={image} className="shadow" />
      </div>
      <div className="project-text-column shadow">
        <div className="project-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul className="feature-list">
            {featureList.map((item, index) => (
              <li key={index}>{item}</li>
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

export default ProjectCard;
