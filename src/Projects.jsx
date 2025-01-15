import React, { useRef } from "react";
import ProjectCard from "./components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";

/*
 * The Projects page or "slide". Implements swiperjs (see documentation at https://swiperjs.com/) to create a nested
 * slider/swiper inside of the root VerticalSlider. This nested slider is horizontal, and displays Project Cards
 * (see /components/ProjectCard.jsx), generated for each element of the parameter cardData.
 *
 * Managed by /App.jsx.
 * Data by /main.jsx.
 *
 * @param cardData json[], each object contains the following: title, descriptionA, featureList, image, url
 *
 * TODO: Cursor icon when hover on the slide buttons should be a pointer, not highlighter.
 */
const Projects = ({ cardData }) => {
  // Reference the nested slider instead of the root slider.
  const projectSwiperRef = useRef(null);

  const prevSlide = () => {
    if (projectSwiperRef.current) {
      projectSwiperRef.current.swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (projectSwiperRef.current) {
      projectSwiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div id="project-section">
        <div id="project-grid-container">
          <div id="projects-header-row">
            <h1>Projects</h1>
            <div id="projects-nav-buttons">
              <div className="slider-nav-button tooltip" onClick={prevSlide}>
                <span className="material-icons project-nav-icon">
                  chevron_left
                </span>
                <span className="tooltip-text">Previous Project</span>
              </div>

              <div className="slider-nav-button tooltip" onClick={nextSlide}>
                <span className="material-icons project-nav-icon">
                  chevron_right
                </span>
                <span className="tooltip-text">Next Project</span>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Scrollbar]}
            slidesPerView={1}
            loop={false}
            id="project-cards-section"
            className="mySwiper"
            scrollbar={{ hide: false, el: ".swiper-slide" }}
            ref={projectSwiperRef}
          >
            {cardData.map((c, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  title={c.title}
                  description={c.description}
                  featureList={c.featureList}
                  image={c.image}
                  url={c.url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div >
    </>
  );
}

export default Projects;
