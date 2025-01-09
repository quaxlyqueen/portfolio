import React from "react";

/*
 * Resume page component.
 */
const Resume = ({ jobData, eduData, skillData }) => {
  return (
    <>
      <div id="resume-section">
        <h1>Josh Ashton</h1>
        <h3>Junior Full-Stack Developer</h3>
        <h3>Work Experience</h3>
        <div className="jobs">
          {jobData.map((job, index) => (
            <Job key={index} company={job.company} title={job.title} start={job.start} end={job.end} location={job.location} responsibilities={job.responsibilities} />
          ))}
        </div>
        <h3>Education</h3>
        <div className="education-section">
          {eduData.map((edu, index) => (
            <Education key={index} institution={edu.institution} degree={edu.degree} gpa={edu.gpa} start={edu.start} end={edu.end} />
          ))}
        </div>
        <h3>Skills</h3>
        <Skill languages={skillData.languages} tools={skillData.tools} other={skillData.other} />
      </div>
    </>
  );
}

function Skill({ languages, tools, other }) {
  return (
    <>
      <div className="resume-skills">
        <div className="resume-skills-skill">
          <h4>Languages:</h4>
          <p>{languages.join(", ")}</p>
        </div>
        <div className="resume-skills-skill">
          <h4>Tools:</h4>
          <p>{tools.join(", ")}</p>
        </div>
        <div className="resume-skills-skill">
          <h4>Other:</h4>
          <p>{other.join(", ")}</p>
        </div>
      </div>
    </>
  );
}

function Education({ institution, degree, gpa, start, end }) {
  return (
    <>

      <div className="edu">
        <div className="edu-header">
          <div className="edu-header-row">
            <div className="edu-and-degree">
              <h4>{institution}</h4>
              <h6>- {degree}</h6>
            </div>
            <h6 className="edu-time">{start} - {end}</h6>
          </div>
          <h5>{gpa}</h5>
        </div>
      </div>
    </>
  );
}

function Job({ company, title, start, end, location, responsibilities }) {
  return (
    <>
      <div className="job">
        <div className="job-header">
          <div className="job-header-row">
            <div className="company-and-location">
              <h4>{company} </h4>
              <h6>- {location}</h6>
            </div>
            <h6 className="job-time">{start} - {end}</h6>
          </div>
          <h5>{title}</h5>
        </div>
        <ul className="job-list">
          {responsibilities.map((r, index) => (
            <li key={index} className="job-list-item">{r}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Resume;
