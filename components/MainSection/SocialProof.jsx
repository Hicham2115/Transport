"use client";
import { useState } from "react";
import Link from "next/link";
import SplitText from "@/components/ui/SplitText";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const testimonials = [
  {
    initials: "MC",
    name: "Marie-Claire D.",
    role: "Directrice Produit",
    company: "Agence Voyages Horizon",
    service: "Tour Touristique",
    rating: 5,
    text: "Nextway gère l'intégralité de nos transferts pour nos groupes touristiques à Paris. Ponctualité, professionnalisme et flotte irréprochable. Un partenaire indispensable pour notre agence.",
  },
  {
    initials: "TB",
    name: "Thomas B.",
    role: "Responsable Événements",
    company: "Groupe Éclipse",
    service: "Séminaire",
    rating: 5,
    text: "Pour notre séminaire de 60 personnes à Versailles, Nextway a coordonné tout le transport sans la moindre faille. Réactivité exemplaire et chauffeurs au top. Un partenaire de confiance.",
  },
  {
    initials: "PL",
    name: "Pierre L.",
    role: "Directeur Sportif",
    company: "Club Sportif Paris Est",
    service: "Transport Sportif",
    rating: 5,
    text: "Nos joueurs sont transportés avec professionnalisme à chaque déplacement. Chauffeurs ponctuels, véhicules impeccables. Nextway comprend les contraintes du sport de haut niveau.",
  },
  {
    initials: "SB",
    name: "Sophie B.",
    role: "Chef de Projet Événementiel",
    company: "Prestige Events Paris",
    service: "Événement Corporate",
    rating: 5,
    text: "Organisation d'un gala pour 120 convives avec transferts VIP depuis CDG. Tout s'est déroulé à la perfection. Les berlines étaient impeccables et les chauffeurs discrets et professionnels.",
  },
  {
    initials: "AR",
    name: "Ahmed R.",
    role: "Tour Manager",
    company: "Mediterranean Tours",
    service: "Circuits Touristiques",
    rating: 5,
    text: "Nous faisons appel à Nextway pour tous nos circuits en Île-de-France. Flotte variée, facturation pro avec TVA, et un interlocuteur dédié. Exactement ce dont nous avions besoin.",
  },
  {
    initials: "CL",
    name: "Claire L.",
    role: "Directrice Générale",
    company: "Hôtel Le Marais Palace",
    service: "Transferts Aéroport",
    rating: 5,
    text: "Nextway assure les transferts aéroport de nos clients VIP depuis 2 ans. Fiabilité absolue, suivi GPS en temps réel et chauffeurs bilingues. Nos clients adorent le service.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#5226ff] text-[#5226ff]" />
      ))}
    </div>
  );
}

function SocialProof() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SplitText
            text="Ce Que Disent Nos Clients"
            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight"
            delay={40}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />
          <p
            className="mt-5 text-gray-400 max-w-xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            Note moyenne{" "}
            <span className="text-[#a78bfa] font-semibold">4.9/5</span> sur
            Google
          </p>
          <div className="w-16 h-[2px] bg-linear-to-r from-[#5226ff] to-[#e060cb] mx-auto mt-6" />
        </div>

        {/* Cards — desktop: 3 visible, mobile: 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {visible.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-[#0d0d1a] border border-white/10 hover:border-[#5226ff]/30 transition-all duration-300"
            >
              {/* Stars */}
              <Stars count={t.rating} />

              {/* Quote */}
              <p
                className="text-gray-300 leading-relaxed flex-1 italic"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.05rem",
                }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#5226ff] to-[#e060cb] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">
                    {t.initials}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{t.name}</span>
                  <span className="text-xs text-gray-500">
                    {t.role} · {t.company}
                  </span>
                </div>
                <span className="ml-auto text-[10px] uppercase tracking-wider text-[#5226ff] font-semibold border border-[#5226ff]/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#5226ff]/50 hover:bg-[#5226ff]/10 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-white/60" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "w-6 bg-[#5226ff]" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#5226ff]/50 hover:bg-[#5226ff]/10 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <Link
            href="https://maps.google.com"
            target="_blank"
            className="flex items-center gap-2 text-sm text-[#a78bfa] hover:text-white transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Voir tous nos avis Google
          </Link> */}
          <span className="text-white/20 hidden sm:block">·</span>
          <Link href="/#DemanderUnDevis">
            <button className="overflow-hidden rounded-none px-8 py-3 text-xs tracking-[0.25em] uppercase font-semibold text-white bg-linear-to-r from-[#5226ff] to-[#e060cb] hover:opacity-90 transition-opacity duration-300 cursor-pointer">
              Rejoindre nos clients satisfaits
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
}

export default SocialProof;
