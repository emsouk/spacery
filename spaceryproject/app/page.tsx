"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/layout/carrousel/Carrousel";
import CityName from "@/components/layout/city-name/CityName";
import MainText from "@/components/layout/main-text/MainText";
import Map from "@/components/layout/map/map";

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
      <section className="relative py-16 bg-gray-100">
        <Map />
      </section>

      {/* 6. Travaillons ensemble */}
      <section className="py-20 text-center bg-gradient-to-b from-black to-red-900 text-white">
        <h3 className="text-3xl font-bold mb-12">Travaillons ensemble</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white text-black rounded-lg overflow-hidden">
            <Image src="/musee.jpg" width={300} height={200} alt="Musées" />
            <p className="py-3 font-semibold">MUSÉES</p>
          </div>
          <div className="bg-white text-black rounded-lg overflow-hidden">
            <Image src="/bar.jpg" width={300} height={200} alt="Bars" />
            <p className="py-3 font-semibold">BAR / RESTAURANT</p>
          </div>
          <div className="bg-white text-black rounded-lg overflow-hidden">
            <Image src="/agence.jpg" width={300} height={200} alt="Agences" />
            <p className="py-3 font-semibold">AGENCES</p>
          </div>
          <div className="bg-white text-black rounded-lg overflow-hidden">
            <Image src="/librairie.jpg" width={300} height={200} alt="Librairies" />
            <p className="py-3 font-semibold">LIBRAIRIES</p>
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </main>
  );
}
