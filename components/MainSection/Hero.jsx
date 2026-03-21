import React from "react";
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import { color } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";

function Hero() {
  return (
    <div className="text-center py-20 px-4 md:px-8 lg:px-16 space-y-6 -mt-4">
      <TextType
        text={["Location De Bus, Minibus Et Autocar Avec Chauffeur"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        deletingSpeed={50}
        cursorBlinkDuration={0.5}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up text-white"
        loop={false}
      />

      {/* Subheading */}
      {/* <ShinyText
        text="      DEMO NAME : votre intermédiaire spécialisé dans la mise en relation pour
        la location de bus avec chauffeur"
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      /> */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.1rem",
        }}
        className="text-md md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
      >
        DEMO NAME : votre intermédiaire spécialisé dans la mise en relation pour
        la location de bus avec chauffeur
      </p>
      <div
        className="flex flex-col sm:flex-row justify-center gap-4 items-center animate-fade-in-up mb-6"
        // style={{ animationDelay: "0.4s" }}
      >
        {/* <Link to="contact-us"> */}
        <div className="flex flex-col sm:flex-row gap-4 sm:px-4">
          <button
            className="w-full sm:w-auto px-4 py-2 sm:px-3 sm:py-2 text-sm sm:text-base rounded-lg text-white font-semibold cursor-pointer
    bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap
    shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            DEMANDER UN DEVIS
          </button>

          <button
            className="w-full sm:w-auto px-4 py-2 sm:px-3 sm:py-2 text-sm sm:text-base rounded-lg text-white font-semibold cursor-pointer
    bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap
    shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            VIEW OUR SERVICES
          </button>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Hero;
