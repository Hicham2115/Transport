import {
  Building2,
  FileText,
  ShieldCheck,
  BadgeCheck,
  CreditCard,
  ScrollText,
} from "lucide-react";

const items = [
  {
    Icon: Building2,
    label: "Société",
    value: "Nextway Transport — SIRET : [à compléter]",
  },
  {
    Icon: FileText,
    label: "Autorisation de transport",
    value:
      "Licence de transport intérieur n°[à compléter] · Autorisation délivrée par la Préfecture compétente",
  },
  {
    Icon: ShieldCheck,
    label: "Assurance Responsabilité Civile Professionnelle",
    value:
      "Garantie passagers incluse · [Compagnie d'assurance] · Couverture par sinistre confirmée",
  },
  {
    Icon: BadgeCheck,
    label: "Chauffeurs certifiés",
    value:
      "Titulaires de la carte professionnelle VTC délivrée par le Ministère des Transports",
  },
  {
    Icon: CreditCard,
    label: "Paiement sécurisé",
    value: "Virement bancaire · Carte bancaire · Chèque entreprise",
  },
  {
    Icon: ScrollText,
    label: "Conditions Générales de Vente",
    value: "Disponibles sur demande auprès de notre équipe",
  },
];

function LegalReassurance() {
  return (
    <section className="relative py-12 px-6 md:px-16 overflow-hidden text-white bg-[#060010]">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-8 py-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6 text-center">
            Une Entreprise Sérieuse & Réglementée
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(({ Icon, label, value }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center rounded-md bg-white/5">
                  <Icon className="w-3.5 h-3.5 text-white/30" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/25">
                    {label}
                  </span>
                  <span className="text-xs text-white/40 leading-relaxed">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalReassurance;
