/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination } from "swiper/modules";

const Swipers = () => {

  

  return (
    <section className="">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1024: {
            width: 1024,
            slidesPerView: 5,
          },
          1440: {
            width: 1440,
            slidesPerView: 6,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-100 rounded-lg"
      >
        <SwiperSlide>
          <div className="">
            <img
              src="/assets/img1.avif"
              alt="img1"
              className="block  w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <img
              src="/assets/img1.avif"
              alt="img1"
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <img
              src="/assets/img1.avif"
              alt="img1"
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <img
              src="/assets/img1.avif"
              alt="img1"
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <img
              src="/assets/img1.avif"
              alt="img1"
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <img
              src="/assets/img1.avif"
              alt="img1"
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              src="/assets/img1.avif"
              alt="img1"
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <img
              src="/assets/img1.avif"
              alt="img1"
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <img
              src="/assets/img1.avif"
              alt="img1"
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Swipers;
