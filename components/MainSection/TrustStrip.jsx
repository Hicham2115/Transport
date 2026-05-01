"use client";
import { Marquee } from "@/components/ui/marquee";
import {
  Star,
  Bus,
  ShieldCheck,
  Clock,
  PlaneLanding,
  MessageSquare,
  Lock,
} from "lucide-react";

const items = [
  { Icon: Star, text: "+500 missions réalisées en Île-de-France" },
  { Icon: Bus, text: "Flotte de 3 à 70 passagers" },
  { Icon: ShieldCheck, text: "Entreprise agréée & assurée" },
  { Icon: Clock, text: "Disponible 24h/24 · 7j/7 · 365 jours/an" },
  { Icon: PlaneLanding, text: "Partenaire CDG · Orly · Le Bourget" },
  { Icon: MessageSquare, text: "Devis répondu en moins de 2 heures" },
  { Icon: Lock, text: "Tarification transparente · Aucun frais caché" },
];

function TrustStrip() {
  return (
    <div className="relative w-full bg-[#0a0014] border-y border-white/10 py-4 overflow-hidden">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-linear-to-r from-[#0a0014] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-linear-to-l from-[#0a0014] to-transparent" />

      <Marquee pauseOnHover className="[--duration:35s] [--gap:3rem]">
        {items.map(({ Icon, text }, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-6 text-sm font-medium text-white/80 whitespace-nowrap select-none"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#5226ff]/20 shrink-0">
              <Icon className="w-4 h-4 text-[#5226ff]" strokeWidth={2} />
            </div>
            <span>{text}</span>
            <span className="ml-6 text-white/20">|</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default TrustStrip;
