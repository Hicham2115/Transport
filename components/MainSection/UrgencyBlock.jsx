import Link from "next/link";
import { AlertTriangle, CalendarCheck, Phone } from "lucide-react";

function UrgencyBlock() {
  return (
    <section className="relative py-14 px-6 md:px-16 overflow-hidden text-white bg-[#060010]">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-[#5226ff]/40 bg-[#5226ff]/5 px-8 py-10 text-center overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(82,38,255,0.12),transparent_70%)] pointer-events-none" />

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#5226ff]/20 border border-[#5226ff]/30">
              <AlertTriangle className="w-7 h-7 text-[#a78bfa]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Label */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a78bfa] mb-3">
            Disponibilité limitée cette semaine
          </p>

          {/* Headline */}
          <h2
            className="text-2xl md:text-3xl font-serif text-white mb-4 leading-snug"
          >
            Notre flotte est fortement sollicitée en Île-de-France.
          </h2>

          {/* Body */}
          <p
            className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.05rem",
            }}
          >
            Vérifiez la disponibilité pour votre date avant qu'il soit trop
            tard. Les créneaux pour les événements et transferts groupes
            partent rapidement, surtout en période haute.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#DemanderUnDevis">
              <button className="inline-flex items-center gap-2 overflow-hidden rounded-none px-10 py-4 text-xs tracking-[0.25em] uppercase font-bold text-white bg-linear-to-r from-[#5226ff] to-[#e060cb] hover:opacity-90 transition-opacity duration-300 cursor-pointer shadow-[0_0_30px_rgba(82,38,255,0.3)]">
                <CalendarCheck className="w-4 h-4" />
                Vérifier la disponibilité & obtenir mon devis
              </button>
            </Link>
            <Link
              href="tel:+33628648016"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Ou appelez-nous directement</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UrgencyBlock;
