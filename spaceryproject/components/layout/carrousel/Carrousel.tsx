"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { lieuxService } from "@/lib/api/services/lieux"; 
import type { Lieu } from "@/lib/api/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./carrousel.css";



export default function Carousel() {
  const [artworks, setArtworks] = useState<Lieu[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); 
  const swiperRef = useRef<SwiperCore | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await lieuxService.getAll();
        setArtworks(data);
      } catch {
        setError("Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleAutoplay = () => {
    if (!swiperRef.current || !swiperRef.current.autoplay) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full">
      {/* === Fond dégradé blanc -> noir === */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-black z-0"></div>

      {/* Gestion des erreurs */}
      {!loading && error && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <p className="text-red-500 bg-white bg-opacity-80 p-4 rounded shadow">
            {error}
          </p>
        </div>
      )}

      {/* Ellipse décorative */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-0">
        <Image
          src="/ellipse.svg"
          alt="ellipse décorative"
          width={600}
          height={300}
          className="opacity-70 blur-3xl"
        />
      </div>

      {/* === Carrousel === */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={artworks?.length > 5}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }} // ✅ récupère l’instance
          className="rounded-lg overflow-hidden"
        >
          {artworks?.map((art, index) => (
            <SwiperSlide
              key={art.id}
              className="flex justify-center py-6"
              style={{ width: 280, height: 380 }}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={art.image_lieu || "/fallback.png"}
                  alt={art.nom || "Lieu"}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* === Boutons custom navigation === */}
        <button className="custom-prev absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-red-500 text-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition z-20">
          ❮
        </button>
        <button className="custom-next absolute top-1/2 -right-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-red-500 text-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition z-20">
          ❯
        </button>

      </div>

        {/* === Bouton Pause/Play === */}
        <button
          onClick={toggleAutoplay}
          className="absolute my-3  left-1/2 transform -translate-x-1/2 px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:scale-105 transition z-20"
        >
          {isPlaying ? "❚❚ Pause" : "▶ Play"}
        </button>
    </div>
  );
}
