"use client";

import Image from "next/image";
import Link from "next/link";
import type { Lieu } from "@/lib/api";

export default function LieuView({ lieu }: { lieu: Lieu }) {
  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-gray-800 py-6 px-8 flex items-center justify-between gap-6">
        <div className="min-w-0">
          <Link
            href="/lieux"
            className="inline-block text-sm text-gray-300 hover:text-white transition-colors mb-3"
          >
            ← Retour aux lieux
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white truncate">
            {lieu.nom}
          </h1>
          <p className="text-gray-400 mt-2">
            {lieu.ville}, {lieu.pays} • {lieu.type?.nom_type}
          </p>
        </div>

        {lieu.site_web && (
          <a
            href={lieu.site_web}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-black text-center py-2 px-4 rounded hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            Site web →
          </a>
        )}
      </header>

      <main className="px-8 py-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
            {lieu.image_lieu ? (
              <Image
                src={lieu.image_lieu}
                alt={lieu.nom}
                fill
                unoptimized
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
            )}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <section className="text-white">
            <h2 className="text-2xl font-bold mb-4">Infos</h2>

            <div className="space-y-3 text-gray-200">
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-400">
                  Adresse
                </div>
                <div className="text-base">
                  {lieu.rue}, {lieu.code_postal} {lieu.ville}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    lieu.payant
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {lieu.payant ? "Payant" : "✓ Gratuit"}
                </span>

                {lieu.horaires && (
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                    🕐 {lieu.horaires}
                  </span>
                )}
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Description</h2>
            <p className="text-gray-200 leading-relaxed whitespace-pre-line">
              {lieu.description}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
