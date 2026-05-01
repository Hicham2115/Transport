import Link from "next/link";
import SplitText from "@/components/ui/SplitText";
import {
  ShieldCheck,
  BadgeCheck,
  Wrench,
  Receipt,
  Wind,
  Navigation,
  FileText,
  Accessibility,
} from "lucide-react";

const inclusions = [
  {
    Icon: ShieldCheck,
    title: "Assurance passagers complète",
    description:
      "Tous nos véhicules sont assurés en responsabilité civile professionnelle. Vos clients sont protégés à bord.",
  },
  {
    Icon: BadgeCheck,
    title: "Chauffeurs certifiés VTC/Transport",
    description:
      "Tous nos conducteurs sont titulaires de la carte professionnelle, certifiés, formés et régulièrement contrôlés.",
  },
  {
    Icon: Wrench,
    title: "Flotte entretenue & contrôlée",
    description:
      "Révisions régulières, contrôle technique à jour, équipements de sécurité vérifiés sur chaque véhicule.",
  },
  {
    Icon: Receipt,
    title: "Facturation professionnelle & TVA",
    description:
      "Factures conformes pour vos besoins comptables et ceux de vos clients professionnels.",
  },
  {
    Icon: Wind,
    title: "Confort climatisé garanti",
    description:
      "Tous nos véhicules sont équipés de la climatisation. WiFi disponible sur demande.",
  },
  {
    Icon: Navigation,
    title: "Suivi GPS en temps réel",
    description:
      "Géolocalisation de chaque mission. Votre client n'attend jamais dans l'incertitude.",
  },
  {
    Icon: FileText,
    title: "Contrat de prestation disponible",
    description:
      "Pour les agences et tour-opérateurs : signature d'un contrat-cadre possible.",
  },
  {
    Icon: Accessibility,
    title: "Accessibilité PMR disponible",
    description:
      "Véhicules adaptés aux personnes à mobilité réduite sur certains modèles, sur demande.",
  },
];

function PremiumServices() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SplitText
            text="Pourquoi Choisir un Transporteur Professionnel Agréé ?"
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
            className="mt-5 text-gray-400 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            En Île-de-France, toute entreprise de transport de personnes est
            soumise à des obligations strictes. Nextway Transport les respecte
            toutes — pour votre sécurité et celle de vos clients.
          </p>
          <div className="w-16 h-[2px] bg-linear-to-r from-[#5226ff] to-[#e060cb] mx-auto mt-6" />
        </div>

        {/* Grid of inclusions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10">
          {inclusions.map(({ Icon, title, description }, i) => (
            <div
              key={i}
              className="group flex gap-4 p-6 bg-[#0d0d1a] hover:bg-white/[0.03] transition-colors duration-300"
            >
              {/* Icon */}
              <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-linear-to-br from-[#5226ff] to-[#7c4dff] shadow-[0_0_16px_rgba(82,38,255,0.3)]">
                <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  {title}
                </h3>
                <p
                  className="text-gray-400 leading-relaxed"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1rem",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Vous êtes une agence ou un tour-opérateur ?
          </p>
          <Link href="/#DemanderUnDevis">
            <button className="overflow-hidden rounded-none px-10 py-4 text-xs tracking-[0.25em] uppercase font-semibold text-white bg-linear-to-r from-[#5226ff] to-[#e060cb] hover:opacity-90 transition-opacity duration-300 cursor-pointer">
              Demandez notre dossier partenaire
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom decorative line */}
      {/* <div className="max-w-6xl mx-auto mt-16 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-white/10" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">
          NEXTWAY TRANSPORT
        </span>
        <div className="flex-1 h-[1px] bg-white/10" />
      </div> */}
    </section>
  );
}

export default PremiumServices;
