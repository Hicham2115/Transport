import Link from "next/link";
import SplitText from "@/components/ui/SplitText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MessageSquare } from "lucide-react";

const faqs = [
  {
    q: "Quels types de véhicules proposez-vous ?",
    a: "Notre flotte comprend des berlines de prestige (Mercedes Classe E/S), des vans VIP (Mercedes Classe V), des minibus (9 à 19 places) et des autocars grand tourisme (jusqu'à 70 places). Tous les véhicules sont récents, climatisés et entretenus régulièrement.",
  },
  {
    q: "Quelle est votre zone d'intervention ?",
    a: "Nous intervenons principalement en Île-de-France (Paris et les 8 départements) et desservons tous les aéroports parisiens (CDG, Orly, Le Bourget) et les grandes gares. Nous pouvons également effectuer des missions longue distance sur l'ensemble du territoire français sur demande.",
  },
  {
    q: "Dans quel délai recevrai-je mon devis ?",
    a: "Nous nous engageons à répondre à toute demande de devis dans les 2 heures ouvrées suivant votre demande. Pour les demandes urgentes, appelez-nous directement au +33 6 28 64 80 16.",
  },
  {
    q: "Puis-je obtenir une facturation professionnelle pour mon agence ?",
    a: "Absolument. Nous proposons des factures conformes avec TVA applicable, et pouvons établir un contrat-cadre pour les partenaires réguliers. Contactez notre équipe commerciale pour les modalités.",
  },
  {
    q: "Vos chauffeurs parlent-ils des langues étrangères ?",
    a: "Oui. Nous disposons de chauffeurs bilingues français/anglais. D'autres langues peuvent être disponibles selon les disponibilités : n'hésitez pas à nous le préciser lors de votre demande.",
  },
  {
    q: "Que se passe-t-il en cas de retard de vol ou de train ?",
    a: "Nos chauffeurs suivent en temps réel l'état de votre vol ou de votre train. En cas de retard, le chauffeur ajuste automatiquement son horaire d'arrivée sans frais supplémentaires.",
  },
  {
    q: "Est-il possible de réserver plusieurs véhicules pour un même événement ?",
    a: "Oui. Nous sommes spécialisés dans la coordination multi-véhicules pour les événements de grande envergure. Nos chargés de compte peuvent gérer l'intégralité de votre logistique transport.",
  },
  {
    q: "Comment fonctionne le paiement ?",
    a: "Nous acceptons le virement bancaire, la carte bancaire et le chèque entreprise. Pour les partenaires réguliers, une facturation mensuelle peut être mise en place.",
  },
];

function FAQ() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SplitText
            text="Questions Fréquentes"
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
            Tout ce que vous devez savoir avant de nous confier votre transport
          </p>
          <div className="w-16 h-[2px] bg-linear-to-r from-[#5226ff] to-[#e060cb] mx-auto mt-6" />
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-white/10 bg-[#0d0d1a] px-6 data-[state=open]:border-[#5226ff]/40 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-white/90 text-sm py-5 hover:text-white hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent
                className="pb-5 leading-relaxed text-gray-400"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1rem",
                }}
              >
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <span className="text-white/40">
            Vous avez une question spécifique ?
          </span>
          <Link
            href="/#DemanderUnDevis"
            className="flex items-center gap-2 text-[#a78bfa] hover:text-white transition-colors duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            Posez-nous votre question
          </Link>
          <span className="text-white/20 hidden sm:block">·</span>
          <Link
            href="tel:+33628648016"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            +33 6 28 64 80 16
          </Link>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="max-w-4xl mx-auto mt-16 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-white/10" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">
          NEXTWAY TRANSPORT
        </span>
        <div className="flex-1 h-[1px] bg-white/10" />
      </div>
    </section>
  );
}

export default FAQ;
