"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo + description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/globe.svg" height={40} width={40} alt="logo Spacery" />
            <span className="text-2xl font-bold tracking-wide">SPACERY</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Explorez des destinations uniques et vivez l’expérience SPACERY.  
            Le design n’est pas une destination, c’est un chemin.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <nav className="flex flex-col gap-2 text-sm text-gray-300">
            <Link href="/connexion">Connexion</Link>
            <Link href="/">Destinations</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex gap-4">
            <Image src="/instagram.svg" height={24} width={24} alt="logo insta" />
            <Image src="/facebook.svg" height={24} width={24} alt="logo facebook" />
            <Image src="/tiktok.svg" height={24} width={24} alt="logo tiktok" />
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-700 text-center py-6 text-sm flex flex-col items-center gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition"
        >
          <ArrowUp className="w-4 h-4" /> Back to top
        </button>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Spacery. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
