"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { src: "un.svg", alt: "Destination 1" },
  { src: "deux.svg", alt: "Destination 2" },
  { src: "trois.svg", alt: "Destination 3" },
  { src: "quatre.svg", alt: "Destination 1" },
  { src: "cinq.svg", alt: "Destination 3" },
  { src: "six.svg", alt: "Destination 2" },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto relative">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },     // mobile
          640: { slidesPerView: 2 },   // tablette
          1024: { slidesPerView: 3 },  // desktop
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="rounded-lg overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center py-6">
            <div
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? "scale-105 border-2 border-red-500 rounded-lg bg-white p-2 shadow-lg animate-glow"
                  : "scale-90 opacity-70"
              }`}
              style={{ width: 280, height: 380 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Boutons custom (côtés) */}
      <button className="custom-prev absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-red-500 text-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition z-20">
        ❮
      </button>
      <button className="custom-next absolute top-1/2 -right-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-red-500 text-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition z-20">
        ❯
      </button>
    </div>
  );
}
