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
      name: "COMM 2110",
      header: "COMM 2110 - Interpersonal Communications",
      sections: [
        {
          header: "",
          text: "",
          pathToPdf: "",
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
    {
      name: "ENGL 2010",
      header: "ENGL 2010 - Intermediate Writing",
      sections: [
        {
          header: "Non-Profit Evaluation",
          text: "In this designed paper, I evaluated the American Civil Liberties Union (ACLU) based on the following criteria: the number of lawsuits won, the number of landmark lawsuits, and how non-partisan the ACLU has been. This was written as if I was the Executive Director or Political Director for the ACLU, and I used the ACLU's design book to make this appear as if it was an official ACLU document as well.",
          pathToPdf: "/slcc/ENGL 2010 Evaluation.pdf",
        },
        {
          header: "Non-Profit Report",
          text: "This report was designed with the same principles in mind as the above evaluation. This report detailed the current issues the ACLU is involved with regarding court-packing and explored some of the primary reasons the ACLU should push for court reform.",
          pathToPdf: "/slcc/ENGL 2010 Report.pdf",
        },
        {
          header: "Non-Profit Proposal",
          text: "With this conclusion of the non-profit assignments, I proposed three measures the ACLU could potentially take to advocate and lobby for court reform. I then elaborated and expanded upon one, a Nomination Commission, that would still remain within the bounds of our Constitution.",
          pathToPdf: "/slcc/ENGL 2010 Proposal.pdf",
        },
      ],
    },
    {
      name: "THEA 1033",
      header: "THEA 1033 - Acting I",
      sections: [
        {
          header: "",
          text: "",
          pathToPdf: "",
        },
      ],
    },
    {
      name: "PHIL 1000",
      header: "PHIL 1000 - Introduction to Philosophy",
      sections: [
        {
          header: "Signature Assignment",
          text: "Introduction to Philosophy was an incredible course to take. Beyond the excitement of learning about Ancient Greek sophists, I was pleasantly surprised by the intensity of the course content. The more we dove into various philosophies, the more I began to examine my own philosophies more closely. When I form views and beliefs, I tend to be somewhat unwavering in them, but this course pushed me to examine the beliefs I hold more critically. That isn't to indicate any kind of belief changing, rather deconstructing the belief into the same foundations of Ontology and Epistemology that we learned about for dozens of philosophers.",
          pathToPdf: "/slcc/Individual Creative Paper.pdf",
        },
      ],
    },
    {
      name: "HIST 1310",
      header: "HIST 1310 - Modern Latin America",
      sections: [
        {
          header: "",
          text: "",
          pathToPdf: "",
        },
      ],
    },
    {
      name: "NUTR 1020",
      header: "NUTR 1020 - Human Nutrition",
      sections: [
        {
          header: "",
          text: "",
          pathToPdf: "",
        },
      ],
    },
    {
      name: "HLAC 1000",
      header: "HLAC 1000 - Cardio Fitness",
      sections: [
        {
          header: "",
          text: "",
          pathToPdf: "",
        },
      ],
    },
    {
      name: "PHYS",
      header: "PHYS",
      sections: [
        {
          header: "",
          text: "",
          pathToPdf: "",
        },
      ],
    },
    {
      name: "MATH 1050",
      header: "MATH 1050 - College Algebra",
      sections: [
        {
          header: "Signature Assignment",
          text: "",
          pathToPdf: "/slcc/Credit Card Lab.pdf",
        },
      ],
    },
    {
      name: "MATH 1210",
      header: "MATH 1210 - Calculus I",
      sections: [
        {
          header: "Related Rates",
          text: "Solving related rates problems involves a systematic approach: first, identifying the variables that are changing and how they are related, then setting up equations that describe these relationships. After that, differentiation with respect to time is used to relate the rates of change. A common challenge I encountered was ensuring that all terms in the equation were differentiated correctly. When I stumbled on a particularly tricky problem, I revisited the relationships and diagrams, which helped clarify the dependencies between the variables. Completing this assignment deepened my understanding of how different rates of change interact, enhancing my problem-solving skills. I’m curious to explore the application of related rates within graph data structures, but similarly they seem very applicable to networking in computer science. If we have two rates, the number of active users and the amount of data being sent and received, those two rates could be used to identify the rate with which an increase in users increases data. Given that related rate, this would serve as a useful metric in optimizing server-side code, as the goal would be to lower that rate. Having this knowledge would allow me to write it into a test function, so every time I make a change to my code it calculates the related rate of data per user.",
          pathToPdf: "/slcc/Related Rates.pdf",
        },
        {
          header: "The Optimization Problem",
          text: "In tackling optimization problems, I’ve learned that a systematic approach is essential. Drawing diagrams and identifying variables helps clarify the relationships between different elements of the problem. In this assignment, I utilized key formulas related to perimeter and area, specifically for a Norman window. However, I encountered challenges in deriving the equations and ensuring accuracy in my calculations. When my initial attempts at finding the maximum area didn’t yield plausible results, I revisited my derivatives, which allowed me to pinpoint errors in my algebra. This iterative process taught me the value of double-checking each step. One key insight I gained was the importance of translating real-world scenarios into mathematical terms, which enhances problem-solving skills. A contrasting real-world optimization problem in computer science is the Traveling Salesman Problem (TSP), where the goal is to determine the shortest route that visits a set of cities exactly once and returns to the origin. This problem is crucial in logistics and transportation, as optimizing delivery routes can significantly reduce costs and improve efficiency. Understanding TSP emphasizes how optimization techniques are vital not only in theoretical contexts but also in practical applications that affect everyday business operations.",
          pathToPdf: "/slcc/Optimization Problem.pdf",
        },
        {
          header: "Course Reflection",
          text: "",
          pathToPdf: "/slcc/Math - Course Reflection.pdf",
        },
      ],
    },
    {
      name: "SOC 1010",
      header: "SOC 1010 - Introduction to Sociology",
      sections: [
        {
          header: "",
          text: "",
          pathToPdf: "",
        },
      ],
    },
    {
      name: "CJ 1010",
      header: "CJ 1010 - Intro. to Criminal Justice.",
      sections: [
        {
          header: "",
          text: "",
          pathToPdf: "",
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
