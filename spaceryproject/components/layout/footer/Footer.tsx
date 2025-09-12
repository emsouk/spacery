"use client";

import Link from "next/link";
import Image from"next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
          <Image src="/globe.svg" height={40} width={40}  alt="logo Spacery"/>
            <span className="text-xl font-semibold">Spacery</span>
          </div>
          <p className="text-sm leading-relaxed">
            Explorez des destinations uniques et vivez l’expérience SPACERY.  
            Votre voyage commence ici.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/">About us</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/connexion">Connexion</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex gap-4">
            <Image src="/instagram.svg" height={20} width={20}  alt="logo insta"/>
            <Image src="/facebook.svg" height={35} width={35}  alt="logo facebook"/>
            <Image src="/tiktok.svg" height={25} width={25}  alt="logo tiktok"/>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} Spacery. Tous droits réservés.
      </div>
    </footer>
  );
}
