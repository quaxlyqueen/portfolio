import React, { useState } from "react";
import SlccCoursePage from "./components/SlccCoursePage.jsx";

export default function SlccCourseView() {
  const courseData = [
    {
      name: "POLS 1100",
      header: "POLS 1100 - Intro. to US Government and Politics",
      sections: [
        {
          header: "Overview",
          text: "I thoroughly enjoyed the assignments in POLS 1100, as I have always struggled to relay my thoughts effectively to others, and writing my political thoughts in this course seems to be a natural outlet for my internal dialogue. This course, paired with ENGL 1010, has inspired me to pursue writing -not as a career, but for my own enjoyment as I have truly come to enjoy the writing I have done over the Summer 2021 semester when I took these courses.",
          pathToPdf: null,
        },
        {
          header: "Public Policy Project",
          text: "On this signature assignment, I wrote a research paper broken into four parts: defining the problems caused by unsafe storage of firearms, criteria to determine the efficacy of a policy, three possible policy solutions, and in-depth analysis on my chosen public policy solution, creating a tax credit for safe storage options. This project challenged me to think critically about the existing positions that I have regarding safe firearm storage, and to communicate those thoughts with data and clear speech. Part of why I chose this topic was because of my experience as the Political Director for March for our Lives Arizona, a youth-led gun violence prevention organization in which I advocated for the principles and policy agenda I write about. I enjoyed this assignment fully, and it acted as part of the push towards my own personal enjoyment of writing when paired with the Rhetorical Analysis Essay for ENGL 1010.",
          pathToPdf: "/slcc/Public Policy Project.pdf",
        },
        {
          header: "The First Amendment",
          text: "In this essay, I examined how and why our First Amendment is the most critical foundation to the United States. These three essays allowed me to confront some big issues in our formal and informal political systems, that are unfortunately rarely mentioned in our political discourse. The thinking that I've had on these issues has largely remained the same but pushed towards writing to more clearly convey my thoughts and opinions. These essays in particular played an enormous role in kickstarting my long-dead love of writing and changed my perspective to approach life looking to learn.",
          pathToPdf: "/slcc/Unit 1 Analytical Essay.pdf",
        },
        {
          header: "The Danger of Hyper-Partisanship",
          text: "Here, I investigated the Founder's Vision for the United States Congress -and how today we fail to meet that standard. These three essays allowed me to confront some big issues in our formal and informal political systems, that are unfortunately rarely mentioned in our political discourse. The thinking that I've had on these issues has largely remained the same but pushed towards writing to more clearly convey my thoughts and opinions. These essays in particular played an enormous role in kickstarting my long-dead love of writing and changed my perspective to approach life looking to learn.",
          pathToPdf: "/slcc/Unit 2 Analytical Essay.pdf",
        },
        {
          header: "Big Tech's Bubble Effect on Politics",
          text: "In this paper, I scrutinized the role Big Tech has in our politics, particularly how the content we consume is designed to reinforce our existing beliefs. These three essays allowed me to confront some big issues in our formal and informal political systems, that are unfortunately rarely mentioned in our political discourse. The thinking that I've had on these issues has largely remained the same but pushed towards writing to more clearly convey my thoughts and opinions. These essays in particular played an enormous role in kickstarting my long-dead love of writing and changed my perspective to approach life looking to learn.",
          pathToPdf: "/slcc/Unit 3 Analytical Essay.pdf",
        },
      ],
    },
    {
      name: "ENGL 1010",
      header: "ENGL 1010 - Introduction to Writing",
      sections: [
        {
          header: "Rhetorical Analysis",
          text: "This signature assignment had a focus on examining the rhetorical devices authors use, and how they use those devices, to determine the effectiveness of their voice and argument.",
          pathToPdf: "/slcc/Rhetorical Analysis.pdf",
        },
        {
          header: "Portrait of My Writing Life",
          text: "This assignment acts as a reflection of my writing over the Summer 2021 semester, where I've begun, and where I am now. I wrote about the two considerations that were talked about every day in class: audience and purpose, and practice.",
          pathToPdf: "/slcc/Portrait of My Writing Life.pdf",
        },
        {
          header: "Sensory Paper",
          text: "This introductory essay had the task of writing a description of 5 senses in as much detail as possible. This essay in particular was a challenge for me, as I am unfamiliar and unpracticed with writing with sensory details.",
          pathToPdf: "/slcc/Sensory Paper.pdf",
        },
      ],
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(0);

  const handleCourseSelect = (index) => {
    setSelectedCourse(index);
  };

  return (
    <>
      <div id="course-view-container">
        <div id="course-view-selector">
          <div className="course-nav">
            {courseData.map((course, index) => (
              <div
                key={index}
                className={`course-nav-selector ${selectedCourse === index ? "course-nav-selector-active" : ""}`}
                onClick={() => handleCourseSelect(index)}
              >
                {course.name}
              </div>
            ))}
          </div>
        </div>
        <div id="course-view">
          {<SlccCoursePage course={courseData[selectedCourse]} />}
        </div>
      </div>
    </>
  );
}
