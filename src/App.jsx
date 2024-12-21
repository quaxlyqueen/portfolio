import React, { useRef, useState } from "react";
import VerticalSlider from "./components/VerticalSlider";
import "./styles.css";
export default function App() {
  const data = [
    {
      title: "Test Header",
      description: "A description of some length. Lorem ipsum this shit.",
      color: "purple",
      image: "/images/landscape.jpg",
      alt: "A pretty background.",
    },
    {
      title: "Another one",
      description: "A description of some length. Lorem ipsum this shit.",
      color: "purple",
      image: "/images/landscape.jpg",
      alt: "A pretty background.",
    },
  ];
  return <VerticalSlider slideData={data} />;
}
