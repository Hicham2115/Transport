import React from "react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="text-center py-20 px-4 md:px-8 lg:px-16 space-y-6 -mt-4">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up text-white">
        Location De Bus, Minibus
        <span className="block mt-6">
          Et Autocar Avec{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Chauffeur
          </span>
        </span>
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.1rem",
        }}
        className="text-lg md:text-xl  text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
      >
        DEMO NAME : votre intermédiaire spécialisé dans la mise en relation pour
        la location de bus avec chauffeur
      </p>
      <div
        className="flex flex-col sm:flex-row justify-center gap-4 items-center animate-fade-in-up mb-6"
        // style={{ animationDelay: "0.4s" }}
      >
        {/* <Link to="contact-us"> */}
        <button
          className="px-6 py-4 rounded-2xl text-white font-semibold cursor-pointer
bg-white/10 backdrop-blur-md border border-white/20
shadow-lg hover:bg-white/20 transition-all duration-300"
        >
          {/* <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" /> */}
          <span>CALCULER MON DEVIS</span>
          {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> */}
        </button>
        {/* <Button variant="outline">Button</Button> */}
        {/* </Link>{" "} */}
        {/* <Link to="devlopment"> */}

        <button
          className="px-6 py-4 rounded-2xl text-white font-semibold cursor-pointer
bg-white/10 backdrop-blur-md border border-white/20
shadow-lg hover:bg-white/20 transition-all duration-300"
        >
          ÊTRE RAPPELÉ TOUT DE SUITE
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Hero;
