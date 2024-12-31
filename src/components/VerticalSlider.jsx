import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../main.css";

export default function VerticalSlider({ slides }) {
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
