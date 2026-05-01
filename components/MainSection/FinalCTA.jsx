import Link from "next/link";
import { Phone } from "lucide-react";

function FinalCTA() {
  return (
    <section className="relative py-28 px-6 md:px-16 overflow-hidden text-white bg-[#060010]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(82,38,255,0.18),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(224,96,203,0.08),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a78bfa] mb-6">
          Nextway Transport — Île-de-France
        </p>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-white mb-6"
        >
          Prêt à Organiser Votre Transport avec Nextway ?
        </h2>

        {/* Subtitle */}
        <p
          className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.15rem",
          }}
        >
          Rejoignez les centaines d'agences, tour-opérateurs et entreprises qui
          nous font confiance pour leurs déplacements en Île-de-France.
        </p>

        {/* Main CTA */}
        <Link href="/#DemanderUnDevis">
          <button className="relative inline-flex h-16 active:scale-95 transition overflow-hidden cursor-pointer rounded-lg p-[1px] w-full sm:w-auto focus:outline-none mb-6">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-12 text-sm font-bold text-white backdrop-blur-3xl gap-2 tracking-[0.2em] uppercase">
              Obtenir mon devis gratuit maintenant
            </span>
          </button>
        </Link>

        {/* Reassurance line */}
        <p className="text-xs text-white/30 mb-8 tracking-wide">
          Gratuit · Sans engagement · Réponse sous 2 heures · Annulation sans frais sous 48h
        </p>

        {/* Phone alternative */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm text-white/40">Préférez-vous nous appeler ?</span>
          <Link
            href="tel:+33628648016"
            className="flex items-center gap-2 text-[#a78bfa] hover:text-white transition-colors duration-300 font-semibold"
          >
            <Phone className="w-4 h-4" />
            +33 6 28 64 80 16
          </Link>
          <span className="text-xs text-white/25 mt-1">
            Disponible du lundi au samedi, 8h–20h
          </span>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
