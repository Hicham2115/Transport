import React from "react";
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import { color } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";
import Link from "next/link";
import { PhoneIncoming } from "lucide-react";
import checkIcon from "@/app/assets/check.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="text-center py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 space-y-6 mt-8 max-w-5xl mx-auto">
      {/* EYEBROW */}
      <div className="animate-fade-in-up animate-fade-in-up-delay-1 mb-4">
        <span className="px-3 py-1 rounded-full sm:px-4 sm:py-1.5 bg-white/10 border border-white/20 text-[10px] sm:text-xs font-semibold sm:tracking-widest tracking-wide text-white/80 uppercase">
          Opérateur officiel Île-de-France · Paris CDG Orly · Le Bourget
        </span>
      </div>

      {/* TITRE PRINCIPAL */}
      <TextType
        text={["Transport Premium Avec Chauffeur , Paris & île de France"]}
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
        Autocars, Minibus & Berlines de Prestige pour Tour-Opérateurs, Agences
        de Voyage et Groupes VIP De 3 à 70 passagers Disponible 24h/24 · 7j/7
      </p>

      {/* APPEL À L’ACTION PRINCIPAL + LIEN SECONDAIRE */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 items-center animate-fade-in-up animate-fade-in-up-delay-3 mb-2">
        <div className="flex flex-col sm:flex-row gap-3 sm:px-4 w-full sm:w-auto">
          <Link
            href="/#DemanderUnDevis"
            className="w-full sm:w-auto px-3 py-2 text-xs sm:px-3 sm:py-2 sm:text-base rounded-sm text-white font-semibold cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            OBTENIR MON DEVIS GRATUIT EN 24H
          </Link>
          <Link
            href="tel:+33628648016"
            className="w-full flex justify-center gap-3 sm:justify-start sm:w-auto px-3 py-2 text-xs sm:px-3 sm:py-2 sm:text-base rounded-sm text-white font-semibold cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            <PhoneIncoming />
            Appel Direct : +33 6 28 64 80 16
          </Link>
        </div>
      </div>

      {/* MENTION SOUS-BOUTON */}
      <div className="text-[9px] sm:text-xs flex flex-nowrap gap-2 sm:gap-4 justify-center items-center text-white/80 animate-fade-in-up animate-fade-in-up-delay-4 mt-4">
        <div>
          {/* <Image
              src={checkIcon}
              alt="Check"
              className="inline-block mr-2"
              width="15"
              height="15"
            /> */}
          Réponse sous 2h garantie
        </div>
        <div>
          {/* <Image
              src={checkIcon}
              alt="Check"
              className="inline-block mr-2"
              width="15"
              height="15"
            /> */}
          Devis 100% gratuit & sans engagement
        </div>
        <div>
          {/* <Image
            src={checkIcon}
            alt="Check"
            className="inline-block mr-2"
            width="15"
            height="15"
          /> */}
          Chauffeurs certifiés VTC
        </div>
      </div>
    </div>
  );
}

export default Hero;
