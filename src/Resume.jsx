import React from "react";

/*
 * Page to display my Resume.
 *
 * TODO: Rework resume to make it one page
 * TODO: Convert resume to a React component, with a link to save as PDF
 */
export default function Resume() {
  /*
   *     
  {
    company: "",
    title: "",
    start: "",
    end: "",
    location: "",
    responsibilities: [
      "",
    ],
  },

   */
  const jobData = [
    {
      company: "SLC Public Library",
      title: "Technology & Digital Equity Assistant",
      start: "Aug. 2023",
      end: "Present",
      location: "Salt Lake City, UT",
      responsibilities: [
        "Assist library patrons with using technology, on devices such as publicly available PCs, laptops, mobile devices, and more.",
        "Teach fundamental computer usage skills.",
        "Expose patrons to the importance of digital security, password management, and two-factor authentication.",
        "Developing workshop curriculum for Raspberry Pi’s."
      ],
    },
    {
      company: "Trust Lands Administration",
      title: "IT Intern",
      start: "Aug. 2023",
      end: "Aug. 2024",
      location: "Salt Lake City, UT",
      responsibilities: [
        "Orchestrated Microsoft Intune setup and deployment to multiple platforms.",
        "Streamlined IT equipment inventory process",
        "Provided training to optimize the usage of hardware and software.",
        "Troubleshoot and repair hardware and software on a variety of devices.",
        "Developed automation scripts for use in various parts of the business.",
      ],
    },
  ];
  return (
    <>
      <div id="resume-section">
        <h1>Josh Ashton</h1>
        <h2>Junior Full-Stack Developer</h2>
        <h3>Work Experience</h3>
        {jobData.map((job, index) => (
          <Job key={index} company={job.company} title={job.title} start={job.start} end={job.end} location={job.location} responsibilities={job.responsibilities} />
        ))}
        <a href="/"><h3>Coding Experience</h3></a>
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
