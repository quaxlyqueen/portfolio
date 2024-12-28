import React from "react";
import ProjectCard from "./components/ProjectCard";

export default function Projects({ cardData }) {
  return (
    <>
      <div id="project-container">
        <div id="project-grid-container">
          <h1>Projects</h1>
          <div id="project-cards-section">
            {cardData.map((c) => (
              <ProjectCard
                title={c.title}
                descriptionA={c.descriptionA}
                featureList={c.featureList}
                image={c.image}
                imageGallery={c.imageGallery}
                url={c.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
