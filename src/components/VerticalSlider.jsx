import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/*
 * For my portfolio, this is the wrapper in which all other content is displayed. Every component is
 * a child of the VerticalSlider, excluding the Resume page (for now?). 
 *
 * Utilizes swiperjs, see https://swiperjs.com/ for documentation.
 *
 * @param slides ReactComponent[], an array of pages or "slides" to display in a vertical slider.
 */
const VerticalSlider = ({ slides }) => {
  // Mousewheel is for scrolling effect. Pagination is for "bullets" to indicate active and inactive slides. Pagination
  // clickable allows for going to the corresponding page or "slide".
  return (
    <>
      <Swiper
        modules={[Mousewheel, Pagination]}
        direction={"vertical"}
        speed={800}
        loop={false}
        pagination={{
          clickable: true,
        }}
        mousewheel={{
          thresholdDelta: 50,
          sensitivity: 1,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {<div className="slide-container">{slide}</div>}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default VerticalSlider;
