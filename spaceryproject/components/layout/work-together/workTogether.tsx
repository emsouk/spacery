"use client";

import Image from "next/image";
import Link from "next/link";
import { workimages } from "@/app/api/WorkApi";

export default function WorkTogether() {

  return (
    <section className="text-center py-16">
      {/* === Titre === */}
      <h3 className="text-5xl font-bold mb-12 text-white">
        Travaillons ensemble
      </h3>

      {/* === Grille des catégories === */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {workimages.map((cat) => (
  <div key={cat.alt} className="relative group rounded-lg overflow-hidden shadow-lg">
    <Image
      src={cat.src}
      width={400}
      height={500}
      alt={cat.alt}
      className="object-cover w-full h-[500px] transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
      <p className="text-white text-xl font-bold tracking-wide">{cat.alt}</p>
    </div>
  </div>
))}
      </div>

      {/* === Bouton CTA === */}
      <div className="mt-10">
        <Link
          href="../contact/contact.tsx"
          className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-red-500 hover:text-white transition"
        >
          CONTACTEZ NOUS
        </Link>
      </div>
    </section>
  );
}
