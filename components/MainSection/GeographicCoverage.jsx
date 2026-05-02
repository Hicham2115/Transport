import Link from "next/link";
import SplitText from "@/components/ui/SplitText";
import { Plane, TrainFront, MapPin, Route } from "lucide-react";

const zones = [
  {
    Icon: Plane,
    label: "Aéroports desservis",
    items: [
      "Paris-Charles de Gaulle (CDG)",
      "Paris-Orly (ORY)",
      "Le Bourget (LBG)",
      "Beauvais-Tillé (BVA)",
    ],
  },
  {
    Icon: TrainFront,
    label: "Gares principales",
    items: [
      "Gare du Nord",
      "Gare de Lyon",
      "Montparnasse",
      "Saint-Lazare",
      "Gare de l'Est",
    ],
  },
  {
    Icon: MapPin,
    label: "Destinations phares",
    items: [
      "Paris intra-muros",
      "Versailles",
      "Marne-la-Vallée",
      "Saint-Denis",
      "Roissy-en-France",
      "Évry",
      "Pontoise",
      "Melun",
      "Meaux",
    ],
  },
  {
    Icon: Route,
    label: "Longue distance (sur demande)",
    items: ["Lyon", "Bordeaux", "Tours", "Le Mans", "Reims", "Lille"],
  },
];

const chipColors = [
  "bg-[#5226ff]/15 border-[#5226ff]/30 text-[#a78bfa]",
  "bg-[#7c4dff]/15 border-[#7c4dff]/30 text-[#c4b5fd]",
  "bg-[#e060cb]/10 border-[#e060cb]/25 text-[#f0abde]",
  "bg-white/5 border-white/15 text-gray-400",
];

function CoverageBoard() {
  return (
    <div className="rounded-2xl bg-[#0d0d1a] border border-white/10 p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
        <div className="relative flex items-center justify-center w-3 h-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5226ff] opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5226ff]" />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
          Zone d'intervention principale · Île-de-France
        </span>
      </div>

      {/* Categories — 2-col grid on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {zones.map(({ Icon, label, items }, i) => (
          <div key={i} className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center rounded-md bg-[#5226ff]/20">
                <Icon className="w-3.5 h-3.5 text-[#7c4dff]" strokeWidth={2} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                {label}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pl-8">
              {items.map((item, j) => (
                <span
                  key={j}
                  className={`px-3 py-1 rounded-full border text-xs font-medium whitespace-nowrap ${chipColors[i]}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-widest uppercase text-white/85">
            Île-de-France & grande distance sur demande
          </span>
        </div>
        <Link href="/#DemanderUnDevis">
          <button className="overflow-hidden rounded-none px-4 py-2 sm:px-8 sm:py-4 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-white bg-linear-to-r from-[#5226ff] to-[#e060cb] hover:opacity-90 transition-opacity duration-300 cursor-pointer whitespace-nowrap">
            Obtenir un devis pour mon trajet
          </button>
        </Link>
      </div>
    </div>
  );
}

function GeographicCoverage() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SplitText
            text="Notre Zone de Couverture Paris & Île-de-France"
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
            className="mt-5 text-gray-200 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            Nous opérons dans l'ensemble de la région Île-de-France et au-delà.
            Aéroports, gares, hôtels, salles événementielles, stades : nous
            connaissons chaque route.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#5226ff] to-[#e060cb] mx-auto mt-6" />
        </div>

        <CoverageBoard />
      </div>

      <div className="max-w-6xl mx-auto mt-16 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-white/10" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">
          PARIS & ÎLE-DE-FRANCE
        </span>
        <div className="flex-1 h-[1px] bg-white/10" />
      </div>
    </section>
  );
}

export default GeographicCoverage;
