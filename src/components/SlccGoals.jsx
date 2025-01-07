import React from "react";
import SlccGEGoal from "./SlccGEGoal";

export default function SlccGoals() {
  const geGoals = [
    {
      goal: "Students acquire substantive knowledge.",
      text: "This includes substantive knowledge throughout the General Education requirements for their program.",
      link: "TODO",
    },
    {
      goal: "Students communicate effectively.",
      text: "This includes developing critical literacies—reading, writing, speaking, listening, visual understanding—that they can apply in various contexts; organizing and presenting ideas and information orally, visually, and in writing according to standard usage; and understanding and using the elements of effective communication in interpersonal, small group, and mass settings.",
      link: "TODO",
    },
    {
      goal: "Students develop quantitative literacies necessary for their chosen field of study.",
      text: "This includes interpreting, calculating, and communicating with quantitative evidence; and collecting, interpreting, analyzing, and visualizing data.",
      link: "TODO",
    },
    {
      goal: "Students think critically.",
      text: "This includes reasoning effectively from available evidence; taking imaginative and complex positions in their work; engaging in reflective thinking and expression; demonstrating higher-order skills such as analysis, synthesis, and evaluation; problem solving; and applying interdisciplinary and scientific methods to the inquiry process.",
      link: "TODO",
    },
    {
      goal: "Students express themselves creatively.",
      text: "This includes engaging in the creative process to produce unique artwork, designs, or performances; analyzing, interpreting, and critiquing creative works; and producing a unique and professional General Education ePortfolio.",
      link: "",
    },
    {
      goal: "Students develop civic literacy and the capacity to be community-engaged learners who act in mutually beneficial ways with community partners.",
      text: "This includes producing learning artifacts indicating understanding of the political, historical, economic or sociological aspects of social change and continuity; thinking critically about—and weighing the evidence surrounding—issues important to local, national, or global communities; and participating in a broad range of community-engagement and/or service-learning courses for community building and an enhanced academic experience.",
      link: "",
    },
    {
      goal: "Students develop the knowledge and skills to work with others in a professional and constructive manner.",
      text: "This includes engaging with a diverse set of others to produce professional work, contributing to team meetings and performances, making individual contributions outside of team meetings and performances, fostering a constructive team climate, and creating fair and equitable roles based on team members’ diverse backgrounds and skills.",
      link: "",
    },
    {
      goal: "Students develop information literacy.",
      text: "This includes the demonstrated ability to find, synthesize, assess, create, engage with, and cite information in a professional and ethical manner; to conceive that the research process is reflective and iterative; and to understand how information is produced and valued. These abilities and dispositions are rooted in the Framework for Information Literacy developed and adopted by the Association of College & Research Libraries (ACRL).",
      link: "",
    },
    {
      goal: "Students develop computer literacy.",
      text: "This includes demonstrating the ability to create, name, organize, save and retrieve data and/or information in an electronic file management system; using online and electronic resources to communicate, collaborate, and retrieve information; using a variety of technology to support personal, academic, and professional life-long learning and productivity; determining when technology is useful and selecting the appropriate tool(s) and technology resources to address a variety of tasks and problems; and advocating and applying security principles and ethical behaviors when using technology and identify the consequences of misuse.",
      link: "",
    },
  ];
  return (
    <>
      <div id="slcc-goals-section">
        <h1>Goals & Outcomes</h1>
        <div id="slcc-goals">
          <table>
            <thead>
              <tr>
                <th>Short-term Goals</th>
                <th>Long-term Goals</th>
              </tr>
            </thead>
            <tr>
              <th>
                Proficiency of Java, from core syntax and object-oriented
                programming to data structures.
              </th>
              <th>Develop grit and follow-through.</th>
            </tr>
            <tr>
              <th>Develop a personal portfolio.</th>
              <th>
                Focus on web development by mastering a full technology stack.
              </th>
            </tr>
            <tr>
              <th>Contribute to an open-source project.</th>
              <th>
                Become a freelance developer and build a successful independent
                career.
              </th>
            </tr>
          </table>
        </div>
        <div id="slcc-ge-goals-section">
          <h2>SLCC's General Education Learning Outcomes</h2>
          {geGoals.map((goal, index) => (
            <SlccGEGoal
              key={index}
              goal={goal.goal}
              text={goal.text}
              link={goal.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
