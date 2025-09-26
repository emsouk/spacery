"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getArt } from "@/app/api/ArtApi"; // ⚡ branché sur Unsplash

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [artworks, setArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const data = await getArt("architecture", 30); // ✅ récupère 30 photos
    //     console.log("Données récupérées:", data); // ✅ vérifier les données
    //     setArtworks(data);
    //   } catch {
    //     setError("Erreur lors du chargement");
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchData();
  }, []); // [] pour n'exécuter qu'une fois au montage

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
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={artworks.length > 5} // ✅ loop seulement si assez de slides
          centeredSlides={true}
          autoplay={{ delay: 2000 }}
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
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="rounded-lg overflow-hidden"
        >
          {artworks.map((art, index) => (
            <SwiperSlide key={art.id || index} className="flex justify-center py-6">
              {/* Texte optionnel */}
              <p className="text-center text-sm mb-2">
                {art.alt_description || "Sans description"}
              </p>

              <div
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "scale-105 border-2 border-black rounded-lg bg-white p-2 shadow-lg animate-glow"
                    : "scale-90 opacity-70"
                }`}
                style={{ width: 280, height: 380 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={art.urls.full || "/fallback.png"} // ✅ Unsplash direct URL
                    alt={art.alt_description || "Unsplash photo"}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* === Boutons custom === */}
        <button className="custom-prev absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-red-500 text-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition z-20">
          ❮
        </button>
        <button className="custom-next absolute top-1/2 -right-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-red-500 text-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition z-20">
          ❯
        </button>
      </div>
    </div>
  );
}
