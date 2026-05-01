import Link from "next/link";
import SplitText from "@/components/ui/SplitText";
import {
  ClipboardList,
  FileSearch,
  CheckCircle,
  Phone,
  Timer,
} from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: ClipboardList,
    title: "Remplissez le formulaire",
    subtitle: "2 minutes",
    description:
      "Dites-nous votre destination, la date, le nombre de passagers et le type de véhicule souhaité.",
  },
  {
    number: "02",
    Icon: FileSearch,
    title: "Nous préparons votre devis",
    subtitle: "< 2 heures en jours ouvrés",
    description:
      "Un de nos chargés de compte étudie votre demande et prépare une proposition personnalisée.",
  },
  {
    number: "03",
    Icon: CheckCircle,
    title: "Confirmez & réservez",
    subtitle: "En ligne ou par téléphone",
    description:
      "Acceptez le devis en ligne ou par téléphone. Votre mission est confirmée par email.",
  },
];

function SpeedCommitment() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden text-white ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#5226ff] to-[#7c4dff] shadow-[0_0_40px_rgba(82,38,255,0.5)]">
              <Timer className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
          </div>

          <SplitText
            text="Votre Devis en Moins de 2 Heures Garanti"
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
            className="mt-5 text-gray-300 max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            Nous savons que votre temps est précieux. Envoyez votre demande
            maintenant, recevez un devis détaillé avant la fin de la journée.
          </p>
          <div className="w-16 h-[2px] bg-linear-to-r from-[#5226ff] to-[#e060cb] mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative mb-12">
          {steps.map(({ number, Icon, title, subtitle, description }, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center px-6"
            >
              {/* Arrow connector (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-10 right-0 translate-x-1/2 z-10 items-center">
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path
                      d="M0 8 H24 M20 2 L28 8 L20 14"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Step number + icon */}
              <div className="relative mb-5">
                <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-[#0d0d1a] border border-white/10 shadow-[0_0_20px_rgba(82,38,255,0.1)]">
                  <Icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5226ff]">
                  Étape {number}
                </span>
                <h3 className="text-base font-bold uppercase tracking-wide text-white">
                  {title}
                </h3>
                <span
                  className="text-xs text-[#a78bfa] font-medium"
                  style={{ fontFamily: "monospace" }}
                >
                  {subtitle}
                </span>
                <p
                  className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1rem",
                  }}
                >
                  {description}
                </p>
              </div>

              {/* Mobile down arrow */}
              {i < steps.length - 1 && (
                <div className="md:hidden mt-6 mb-2 text-[#5226ff]/40">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee badge */}
        <div className="mx-auto max-w-2xl mb-10 p-5 rounded-xl border border-[#5226ff]/30 bg-[#5226ff]/5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] mb-1">
            Engagement Nextway
          </p>
          <p
            className="text-gray-300 leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1rem",
            }}
          >
            Si vous ne recevez pas votre devis en 2h ouvrées, nous vous offrons
            une remise de{" "}
            <span className="text-[#a78bfa] font-semibold">10%</span> sur votre
            prochaine prestation.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#DemanderUnDevis">
            <button className="overflow-hidden rounded-none px-10 py-4 text-xs tracking-[0.25em] uppercase font-bold text-white bg-linear-to-r from-[#5226ff] to-[#e060cb] hover:opacity-90 transition-opacity duration-300 cursor-pointer shadow-[0_0_30px_rgba(82,38,255,0.3)]">
              Démarrer ma demande de devis — Gratuit
            </button>
          </Link>
          <Link
            href="tel:+33628648016"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>Besoin d'une réponse immédiate ? Appelez-nous</span>
          </Link>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="max-w-6xl mx-auto mt-16 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-white/10" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">
          NEXTWAY TRANSPORT
        </span>
        <div className="flex-1 h-[1px] bg-white/10" />
      </div>
    </section>
  );
}

export default SpeedCommitment;
