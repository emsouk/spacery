"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="flex flex-col md:flex-row max-w-5xl mx-auto my-20 rounded-3xl overflow-hidden shadow-2xl bg-white">
      
      {/* --- FORMULAIRE --- */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "signup"}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-extrabold mb-2 text-neutral">
              {isLogin ? "Connexion" : "Inscription"}
            </h2>
            <p className="text-base-content/70 mb-8">
              {isLogin
                ? "Ravi de vous revoir ! Connectez-vous pour explorer vos destinations."
                : "Rejoignez la communauté Spacery et découvrez l’art autrement."}
            </p>

            <form className="form-control space-y-5">
              {!isLogin && (
                <div>
                  <label className="label">
                    <span className="label-text">Nom complet</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="input input-bordered w-full"
                  />
                </div>
              )}

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Mot de passe</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="label">
                    <span className="label-text">Confirmer le mot de passe</span>
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full"
                  />
                </div>
              )}

              {/* --- BOUTON --- */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-full px-8 py-3 font-semibold tracking-wide border border-neutral bg-transparent text-neutral hover:bg-[#e3f748] hover:text-black transition-all"
              >
                {isLogin ? "Se connecter" : "S’inscrire"}
              </motion.button>

              {/* --- SWITCH --- */}
              <p className="text-sm text-center mt-4 text-base-content/70">
                {isLogin ? (
                  <>
                    Pas encore de compte ?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-red-500 hover:underline font-medium"
                    >
                      S’inscrire
                    </button>
                  </>
                ) : (
                  <>
                    Déjà membre ?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-red-500 hover:underline font-medium"
                    >
                      Se connecter
                    </button>
                  </>
                )}
              </p>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- IMAGE DYNAMIQUE --- */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src={isLogin ? "/musees.svg" : "/restaurant.svg"}
          alt="Illustration artistique"
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-neutral bg-opacity-70 text-neutral-content p-6 backdrop-blur-sm">
          <p className="text-lg font-semibold">
            {isLogin
              ? "“Chaque connexion rapproche les esprits créatifs.”"
              : "“Chaque inscription ouvre une nouvelle porte vers la créativité.”"}
          </p>
          <p className="text-sm mt-2 opacity-80">Spacery — Connecter les âmes créatives</p>
        </div>
      </div>
    </section>
  );
}
