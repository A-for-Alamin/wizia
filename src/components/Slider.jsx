import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SliderCard from "./common/sliderCard";

function Slider() {
  const SwiperSlideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section className="py-12 md:py-24 relative">
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // autoplay
        modules={[Navigation, Pagination, Autoplay]}
      >
        {slideItems.map((slideItem, i) => (
          <SwiperSlide key={i} style={SwiperSlideStyle}>
            <SliderCard {...slideItem} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full swiper-pagination space-x-6 mb-6" />
      <div className="swiper-button-prev hidden lg:block">
        <IoArrowForward className="rotate-180" />
      </div>
      <div className="swiper-button-next hidden lg:block">
        <IoArrowBack className="rotate-180" />
      </div>
    </section>
  );
}

const slideItems = [
  {
    desc: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Deo",
    tag: "Chief Strategy Officer @ Company",
  },
  {
    desc: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "Eshan Ahmed",
    tag: "Founder of Hablu Programmer",
  },
  {
    desc: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "Tutul",
    tag: "Co-Founder of Hablu Programmer",
  },
];

export default Slider;
