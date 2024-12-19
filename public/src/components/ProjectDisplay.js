import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
/*
 * Create a clickable frame which expands to expose additional information on click.
 *
 * @param String id "Lowercase string representation of the project name."
 * @param String name "The name of the project."
 * @param String description "A description of the project."
 * @param String url "The URL for the repository of the project."
 * 
 * TODO: Need to implement onClick
 */
export default function ProjectDisplay( {frontend, backend, id, name, description, url} ) {
  const [isDisplayCollapsed, setIsDisplayCollapsed] = useState(false);

  const toggleDisplay = () => {
    setIsDisplayCollapsed(!isDisplayCollapsed);
  }
  return (
    <>
      <div
        className={`panel ${frontend} ${backend} ${isDisplayCollapsed ? 'open open-active' : ''}`}
        id={id}
        onClick={toggleDisplay}
        aria-expanded={!isDisplayCollapsed} // Invert the condition for aria-expanded
      >
        <h3 className="label">{name}</h3>
        {isDisplayCollapsed && ( // Conditionally render additional content
          <>          
            <h4 className="label-text">{description}</h4>
            <button type="button" className="btn btn-primary">
              <a target="_blank" href={url}>
                View Code on GitHub
              </a>
            </button>
          </>
        )}
      </div>
    </>
  );
}
