import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../styles.css";

export default function VerticalSlider({ slideData }) {
  return (
    <>
      <Swiper
        modules={[Mousewheel, Pagination]}
        direction={"vertical"}
        speed={800}
        loop={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={{
          thresholdDelta: 50,
          sensitivity: 1,
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="slide-container">
                <div className="info">
                  <h1 data-color={slide.color}>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
                <div className="item">
                  <div
                    className={`circle ${isActive ? "animated-circle" : ""}`}
                    data-item={slide.color}
                  ></div>
                  <img src={slide.image} alt={slide.alt} />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
