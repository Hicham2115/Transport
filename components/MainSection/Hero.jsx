import React from "react";
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import { color } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";
import Link from "next/link";

function Hero() {
  return (
    <div className="text-center py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 space-y-6 mt-8 max-w-5xl mx-auto">
      {/* EYEBROW */}
      <div className="animate-fade-in-up animate-fade-in-up-delay-1 mb-4">
        <span className="px-3 py-1 rounded-full sm:px-4 sm:py-1.5 bg-white/10 border border-white/20 text-[5px] sm:text-xs font-semibold sm:tracking-widest tracking-wide text-white/80 uppercase">
          Paris · France · Europe — Location B2B d'Autocars & Minibus
        </span>
      </div>

      {/* TITRE PRINCIPAL */}
      <TextType
        text={["Location d’autocars et minibus avec chauffeurs professionnels"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        deletingSpeed={50}
        cursorBlinkDuration={0.5}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight animate-fade-in-up text-white leading-tight max-w-3xl mx-auto"
        loop={false}
      />

      {/* SOUS-TITRE */}
      <p
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-fade-in-up-delay-2 px-2"
      >
        Next Way Transport organise le transport de groupes pour les
        entreprises, les agences et les organisateurs d’événements. Une seule
        demande. Un coordinateur dédié. Un devis confirmé sous 24 heures.
      </p>

      {/* APPEL À L’ACTION PRINCIPAL + LIEN SECONDAIRE */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 items-center animate-fade-in-up animate-fade-in-up-delay-3 mb-2">
        <div className="flex flex-col sm:flex-row gap-3 sm:px-4 w-full sm:w-auto">
          <Link
            href="/#DemanderUnDevis"
            className="w-full sm:w-auto px-5 py-3 sm:px-3 sm:py-2 text-sm sm:text-base rounded-sm text-white font-semibold cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            Demandez votre devis gratuit
          </Link>
          <Link
            href="/#Services"
            className="w-full sm:w-auto px-5 py-3 sm:px-3 sm:py-2 text-sm sm:text-base rounded-sm text-white font-semibold cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            Voir nos services →
          </Link>
        </div>
      </div>

      {/* MENTION SOUS-BOUTON */}
      <p className="text-xs text-white/50 animate-fade-in-up animate-fade-in-up-delay-4 mt-4">
        Sans engagement. Pas de spam. Juste un devis rapide et précis.
      </p>
    </div>
  );
}

export default Hero;
