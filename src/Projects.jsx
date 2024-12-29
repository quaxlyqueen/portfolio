import React from "react";
import ProjectCard from "./components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";

export default function Projects({ cardData }) {
  return (
    <>
      <div id="project-section">
        <div id="project-grid-container">
          <h1>Projects</h1>
          <Swiper
            modules={[Scrollbar, Mousewheel, Pagination]}
            slidesPerView={1}
            loop={false}
            id="project-cards-section"
            className="mySwiper"
            mousewheel={{
              thresholdDelta: 50,
              sensitivity: 1,
            }}
            scrollbar={{ hide: false, el: ".swiper-slide" }}
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
      </div>
    </>
  );
}
