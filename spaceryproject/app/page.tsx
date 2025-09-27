"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/layout/carrousel/Carrousel";
import CityName from "@/components/layout/city-name/CityName";
import MainText from "@/components/layout/main-text/MainText";
import Map from "@/components/layout/map/map";
import WorkTogether from "@/components/layout/work-together/workTogether";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      {/* 1. Hero Section */}
      <section className="text-center py-10">
        <p className="max-w-2xl font-jakarta  mx-auto text-gray-600 mb-6">We didn’t create Spacery to list spaces.</p>
          <h1 className="text-6xl font-bold ">SPACERY</h1>
        <p className="text-xl font-jakarta mb-6">EXPLORE • FILTER • FEEL</p>
        <p className="max-w-2xl font-jakarta  mx-auto text-gray-600">
          We created it to connect the curious with the hidden beauty of design.
        </p>

          

      </section>
      {/* 2. Carousel / Galerie */}
      <section className="relative flex justify-center items-center ">
        {/* Carousel Section */}
          <Carousel />
      </section>

      {/* 3. Cloud de villes */}
      <section className="text-center py-12 bg-gradient-to-r bg-black">
        <CityName />
      </section>

      {/* 4. Texte d’introduction */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <MainText />
      </section>

      {/* 5. Carte du monde */}
      <section className="relative py-16 bg-black">
        <Map />
      </section>

      {/* 6. Travaillons ensemble */}
      <section className="py-20 text-center bg-gradient-to-b from-black text-white">
       <WorkTogether />
      </section>
    </main>
  );
}
