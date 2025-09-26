"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icônes hamburger

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>fjqhgqejs</>
    // <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
    //   {/* Logo */}
    //   <div className="flex items-center gap-2">
    //      <Link href="/"><Image src="/globe.svg" height={40} width={40} alt="logo Spacery"  /></Link>
    //     <Link href="/"><span className="text-xl font-bold text-gray-800">Spacery</span></Link>
    //   </div>

    //   {/* Navigation desktop */}
    //   <nav className="hidden md:flex gap-8 text-gray-800 font-jakarta">
    //     <Link href="/about">A propos de nous</Link>
    //     <Link href="/destinations">Destinations</Link>
    //     <Link href="/contact">Contact</Link>
    //   </nav>

    //   {/* Bouton Contact */}
    //   <div className="hidden md:block">
    //     <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-700 transition">
    //       Connexion
    //     </button>
    //   </div>

    //   {/* Bouton hamburger (mobile) */}
    //   <button
    //     className="md:hidden"
    //     onClick={() => setIsOpen(!isOpen)}
    //     aria-label="Toggle menu"
    //   >
    //     {isOpen ? <X size={28} /> : <Menu size={28} />}
    //   </button>

    //   {/* Menu mobile */}
    //   {isOpen && (
    //     <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 z-50">
    //       <Link href="/about" onClick={() => setIsOpen(false)}>A propos de nous</Link>
    //       <Link href="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link>
    //       <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
    //       <button
    //         className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-700 transition"
    //         onClick={() => setIsOpen(false)}
    //       >
    //         Connexion
    //       </button>
    //     </div>
    //   )}
    // </header>
  );
}
