import Link from "next/link";
import SplitText from "@/components/ui/SplitText";
import {
  Building2,
  PartyPopper,
  Trophy,
  Crown,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    Icon: Building2,
    title: "Tour-Opérateurs & Agences",
    description:
      "Navettes groupes, circuits touristiques, transferts hôtels-aéroports",
    cta: "Demander un devis agence",
    href: "/#DemanderUnDevis",
  },
  {
    Icon: PartyPopper,
    title: "Événements & Séminaires",
    description: "Soirées d'entreprise, congrès, fashion week, mariages",
    cta: "Organiser mon événement",
    href: "/#DemanderUnDevis",
  },
  {
    Icon: Trophy,
    title: "Clubs Sportifs & Délégations",
    description: "Transport des équipes, matchs, tournois, stages",
    cta: "Devis transport sportif",
    href: "/#DemanderUnDevis",
  },
  {
    Icon: Crown,
    title: "Clients VIP & Particuliers",
    description:
      "Transferts aéroport, mise à disposition chauffeur, sorties prestige",
    cta: "Réserver un véhicule VIP",
    href: "/#DemanderUnDevis",
  },
  {
    Icon: GraduationCap,
    title: "Transport Scolaire & Universitaire",
    description: "Sorties pédagogiques, événements, voyages groupes",
    cta: "Obtenir un devis groupe",
    href: "/#DemanderUnDevis",
  },
];

function ServiceIntentSelector() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SplitText
            text="Quel est votre besoin de transport ?"
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
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#5226ff] to-[#e060cb] mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-5">
          {services.map((service, index) => {
            const { Icon } = service;
            return (
              <Link
                key={index}
                href={service.href}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              >
                <div className="group relative flex flex-col gap-5 p-6 rounded-2xl bg-[#0d0d1a] border border-white/10 hover:border-[#5226ff]/60 hover:shadow-[0_0_30px_rgba(82,38,255,0.25)] transition-all duration-300 h-full cursor-pointer">
                  {/* Icon badge */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-linear-to-br from-[#5226ff] to-[#7c4dff] shadow-[0_0_20px_rgba(82,38,255,0.4)]">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-base font-bold uppercase tracking-wider text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-1">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#5226ff] group-hover:gap-3 transition-all duration-300 uppercase tracking-wide">
                      En savoir plus
                      <svg
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom decorative line */}
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

export default ServiceIntentSelector;
