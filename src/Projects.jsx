import React from "react";
import ProjectCard from "./components/ProjectCard";

export default function Projects({ cardData }) {
  return (
    <>
      <div id="project-container">
        <div className="project-grid-container">
          <div id="project-header">
            <h2 className="project-header">Projects</h2>

            <p>
              Here are some projects of mine. Lorem ipsum odor amet,
              consectetuer adipiscing elit. Purus molestie vel ornare volutpat
              elit et per montes. Lacus fames diam a non taciti sem.
            </p>
          </div>
          <div id="project-cards-section">
            {cardData.map((c) => (
              <ProjectCard
                title={c.title}
                description={c.description}
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
