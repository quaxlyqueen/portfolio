import React, { useRef } from "react";
import ProjectCard from "./components/ProjectCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";

export default function Projects({ cardData }) {
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
            modules={[Navigation, Scrollbar]}
            navigation
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
                  descriptionA={c.descriptionA}
                  featureList={c.featureList}
                  image={c.image}
                  imageGallery={c.imageGallery}
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
