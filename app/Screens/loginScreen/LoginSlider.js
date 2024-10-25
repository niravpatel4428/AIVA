"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { slides } from "./loginSlides";
const LoginSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-4 space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
    ),
  };
  return (
    <div className="relative bg-brightBlue rounded-2xl h-full flex justify-center items-center p-4">
      <div className="w-full max-w-[547px] loginSlider">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="flex flex-col justify-center items-center gap-12 text-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width="309"
                  height="100"
                  className="w-full max-w-[309px] mx-auto"
                />
                <div>
                  <h2 className="text-white text-2xl lg:text-3xl xl:text-[32px] font-Md leading-[150%]">
                    {slide.title}
                  </h2>
                  <p className="text-white text-sm xl:text-base font-MetRegular mt-4">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LoginSlider;
