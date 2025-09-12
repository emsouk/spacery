"use client"; // ⚠️ obligatoire pour les composants interactifs dans /app

import Link from "next/link";
import Image from"next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <img src="../ alt="Logo" className="h-8 w-8 mr-2" /> */}
        <Image src="/globe.svg" height={40} width={40}  alt="logo Spacery"/>
        <span className="text-xl font-bold text-gray-800">Spacery</span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-8 text-gray-800 font-medium">
        <Link href="/">A propos de nous</Link>
        <Link href="/destinations">Destinations</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Bouton Contact */}
      <div>
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition">
          Connexion
        </button>
      </div>
    </header>
  );
}
