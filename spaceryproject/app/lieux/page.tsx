'use client';

import { useEffect, useState } from 'react';
import { lieuxService, Lieu } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export default function LieuxPage() {
  const [lieux, setLieux] = useState<Lieu[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
useEffect(() => {
  const fetchLieux = async () => {
    try {
      const data = await lieuxService.getAll();

      console.log('DATA LIEUX 👉', data); // ✅ ici tu vois tout le tableau

      setLieux(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  fetchLieux();
}, []);



  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Chargement des lieux...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">Erreur : {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 py-6 px-8">
        <h1 className="text-5xl font-bold text-white mb-4">
          Architecture Brutaliste
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          Découvrez notre sélection de {lieux.length} lieux emblématiques du
          mouvement brutaliste à travers le monde. Des bâtiments en béton brut
          qui ont marqué l’histoire de l’architecture moderne.
        </p>
      </header>

      {/* Grid de lieux */}
      <div className="mx-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lieux.map((lieu) => {

	            return (
	              <article
	                key={lieu.id}
	                className="group bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full flex flex-col"
	              >
	                {/* Image placeholder */}
	                <div className="relative h-64 overflow-hidden">
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

                  {/* Overlay sombre */}
                  <div className="absolute inset-0 bg-black opacity-40"></div>

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <span className="inline-block px-3 py-1 text-black text-xs font-bold uppercase tracking-wider rounded">
                      {lieu.type.nom_type}
                    </span>
                  </div>
	                </div>

	                {/* Contenu */}
	                <div className="p-6 flex flex-col flex-1">
	                  <h2 className="text-2xl font-bold text-black mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2 min-h-[4rem]">
	                    {lieu.nom}
	                  </h2>

	                  <div className="text-gray-600 mb-2 text-sm font-medium line-clamp-1">
	                    {lieu.ville}, {lieu.pays}
	                  </div>

	                  <p className="text-gray-500 text-sm mb-4 line-clamp-1">
	                    {lieu.rue}, {lieu.code_postal}
	                  </p>

	                  <p className="text-gray-700 text-sm mb-4 line-clamp-3 min-h-[3.75rem]">
	                    {lieu.description}
	                  </p>

	                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        lieu.payant
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {lieu.payant ? ' Payant' : '✓ Gratuit'}
                    </span>

                    {lieu.horaires && (
                      <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                        🕐 {lieu.horaires}
                      </span>
                    )}
                  </div>

	                  {/* Boutons */}
	                  <div className="flex gap-2 pt-4 border-t border-gray-200 mt-auto">
	                    {lieu.site_web && (
	                      <a
	                        href={lieu.site_web}
	                        target="_blank"
	                        rel="noopener noreferrer"
	                        className="flex-1 bg-black text-white text-center py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm font-medium"
	                      >
	                        Site web →
	                      </a>
	                    )}

	                    <Link
	                      href={`/lieux/${lieu.id}`}
	                      className="flex-1 border-2 border-black text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-colors text-sm font-medium text-center"
	                    >
	                      Détails
	                    </Link>
	                  </div>
	                </div>
	              </article>
	            );
	          })}
        </div>
      </div>

      {/* Footer stats */}
      <div className="border-t border-gray-800 py-8 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              {lieux.length}
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              Lieux référencés
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              {new Set(lieux.map((l) => l.pays)).size}
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              Pays représentés
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              {lieux.filter((l) => !l.payant).length}
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              Lieux gratuits
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
