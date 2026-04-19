import Lottie from "lottie-react";
import animationData from "@/public/animations/Bus Transport.json";
import Image from "next/image";
import img1 from "@/app/assets/Nextway Transport Reality.png";

function Services() {
  return (
    <section
      className="relative py-20 px-6 md:px-16 -mt-20 overflow-hidden text-white!"
      id="Services"
    >
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Block */}
        <div className="flex flex-col justify-center gap-6">
          <h2
            className="text-4xl md:text-5xl font-serif leading-tight "
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            UN COORDINATEUR
            <br />
            <em className="italic text-xl md:text-5xl whitespace-nowrap">
              DE TRANSPORT SPÉCIALISÉ
            </em>
          </h2>
          <div className="w-12 h-[2px] bg-[#5028ff]" />
          <h1 className="text-2xl md:text-4xl font-serif leading-tight ">
            Notre approche
          </h1>
          <p
            className=" leading-relaxed max-w-lg text-sm md:text-base"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Next Way Transport a été fondé pour résoudre un problème majeur :
            organiser le transport de groupes en France est souvent complexe,
            chronophage et plein d'incertitudes.
            <br /> <br />
            Nous avons créé un modèle plus fluide. Nous opérons en tant que
            coordinateur de transport dédié. Nous ne sommes pas une simple
            plateforme. Notre équipe de spécialistes recherche, vérifie et gère
            les autocaristes pour vous, et reste impliquée depuis la première
            demande jusqu'au dépôt final.
          </p>
        </div>

        <div className="flex h-[400px] md:h-[500px] lg:h-[600px] relative">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto grid gap-9 items-center">
        <h1 className="text-2xl md:text-4xl font-serif leading-tight ">
          Conformité et Sécurité
        </h1>
        <p className=" leading-relaxed text-base w-max-lg -mt-4 text-gray-300">
          Dans le strict respect de la législation française et européenne, Next
          Way Transport veille à collaborer avec des prestataires en totale
          règle. Nous garantissons le suivi des normes : limitations du temps de
          conduite, périodes de repos obligatoires et exigences absolues en
          matière d'assurances.
        </p>
        <br />
        <div className="flex gap-6 flex-wrap">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif leading-tight ">
              Nos exigences de qualité
            </h1>
            <p className=" leading-relaxed w-max-lg text-sm italic mt-2 mb-2 text-gray-400">
              Nous sélectionnons nos partenaires selon des critères stricts afin
              de vous garantir :
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
              <li>Des véhicules régulièrement inspectés</li>
              <li>Des chauffeurs professionnels et briefés</li>
              <li>Une ponctualité exemplaire</li>
              <li>Le respect absolu de la législation</li>
              <li>Un confort optimal pour vos passagers</li>
            </ul>
          </div>

          <div className="relative w-full sm:w-[550px] min-h-56 h-[260px] sm:h-[320px] md:h-[220px] lg:h-[300px]">
            <Image
              src={img1}
              alt="Service Image"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 550px, 550px"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
