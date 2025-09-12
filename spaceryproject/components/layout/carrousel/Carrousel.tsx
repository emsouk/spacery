"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { src: "un.svg", alt: "Destination 1" },
    { src: "deux.svg", alt: "Destination 2" },
    { src: "trois.svg", alt: "Destination 3" },
    { src: "un.svg", alt: "Destination 1" },
    { src: "deux.svg", alt: "Destination 2" },
    { src: "trois.svg", alt: "Destination 3" },
    { src: "un.svg", alt: "Destination 1" },
    { src: "deux.svg", alt: "Destination 2" },
];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl  py-2">
      <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="rounded-lg overflow-hidden"
            >
            {images.map((img, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                    <div mb-12
                        className={`transition-all duration-300 ${
                            activeIndex === index
                            ? "scale-110 border-4 border-red-500"
                            : "scale-90 opacity-60"
                        }`}
                        >
                        <Image src={img.src} alt={img.alt} width={200} height={400} className="object-cover rounded-lg" />
                    </div>
                </SwiperSlide>
                ))}
      </Swiper>
    </div>
  );
}