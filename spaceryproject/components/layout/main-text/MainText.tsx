export default function MainText() {
  return (
    <section className="relative w-full max-w-5xl mx-autopx-6 py-16">
      {/* Texte en haut à droite */}
      <div className="text-right mb-12">
        <p className="text-sm md:text-base leading-relaxed">
          Conçu pour les curieux, les flâneurs, les passionnés de formes et de cultures,{" "}
          <span className="font-bold">LE guide</span> dans un road trip esthétique, filtré par styles,
          médiums ou accessibilité.
        </p>
      </div>

      {/* Bloc central "Spacery" */}
      <div className="max-w-3xl">
        <h3 className="text-2xl font-extrabold mb-4">Spacery</h3>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          est une invitation à explorer le monde à travers les lieux qui donnent vie au design.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          Galeries d’art indépendantes, bâtiments aux architectures audacieuses, librairies inspirantes,
          cafés créatifs ou musées cachés : chaque lieu référencé raconte une histoire visuelle,
          une émotion spatiale, une vision du monde.
        </p>
      </div>

      {/* Slogan en bas */}
      <div className="mt-12 text-center">
        <h4 className="text-xl md:text-2xl font-extrabold text-green-400 mb-2">
          The map for creative minds.
        </h4>
        <p className="text-sm md:text-base">
          Le design n’est pas une destination. C’est un chemin.
        </p>
      </div>
    </section>
  );
}
