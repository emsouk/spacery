"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./AnimatedSubmit.css";

export default function Contact() {
  const btnRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const circle = circleRef.current;
    const text = textRef.current;

    const tl = gsap.timeline({ paused: true });
    tl.to(circle, { scale: 25, duration: 0.5, ease: "power2.out" }, 0)
      .to(text, { color: "#000", duration: 0.3, ease: "power2.out" }, 0); // texte noir sur fond jaune

    const play = () => tl.play();
    const reverse = () => tl.reverse();

    btn.addEventListener("mouseenter", play);
    btn.addEventListener("mouseleave", reverse);

    return () => {
      btn.removeEventListener("mouseenter", play);
      btn.removeEventListener("mouseleave", reverse);
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row bg-base-100 rounded-2xl shadow-xl max-w-6xl mx-auto mt-16 overflow-hidden">
      {/* --- FORMULAIRE --- */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Contactez notre équipe</h2>
        <p className="text-base-content/70 mb-8">
          Une question ? Besoin d’informations ? Envoyez-nous un message et notre équipe vous répondra sous 24h.
        </p>

        <form className="form-control space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Prénom</span>
              </label>
              <input type="text" placeholder="Votre prénom" className="input input-bordered w-full" />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Nom</span>
              </label>
              <input type="text" placeholder="Votre nom" className="input input-bordered w-full" />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="votre@email.com" className="input input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              rows={4}
              placeholder="Votre message..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* --- BOUTON ANIMÉ --- */}
          <button
            ref={btnRef}
            type="submit"
            className="btn-spacery relative overflow-hidden font-semibold tracking-wide px-8 py-3 rounded-full border border-neutral text-neutral bg-transparent"
          >
            <span
              ref={circleRef}
              className="absolute left-1/2 top-1/2 h-8 w-8 rounded-full bg-[#e3f748] -translate-x-1/2 -translate-y-1/2 scale-0"
            ></span>
            <span ref={textRef} className="relative z-10 uppercase">
              Envoyer
            </span>
          </button>
        </form>
      </div>

      {/* --- IMAGE --- */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src="/contact.svg"
          alt="Visuel artistique"
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-neutral bg-opacity-70 text-neutral-content p-6">
          <p className="text-lg font-semibold">
            “Spacery: to connect people with the places that inspire them.”
          </p>
          <p className="text-sm mt-2 opacity-80">Émilie Derian — Fondatrice de Spacery</p>
        </div>
      </div>
    </section>
  );
}
