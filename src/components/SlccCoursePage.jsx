import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SlccCourseSection from "./SlccCourseSection";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function SlccCoursePage({ course }) {
  return (
    <>
      <h2 className="course-header">{course.header}</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="course-page-slider"
      >
        {course.sections.map((section, index) => (
          <SwiperSlide>
            <SlccCourseSection
              key={index}
              header={section.header}
              text={section.text}
              pathToPdf={section.pathToPdf}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
