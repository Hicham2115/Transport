import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import img1 from "@/app/assets/andrea-de-santis-ThkX-EuBxdA-unsplash.jpg";
import img2 from "@/app/assets/Nextway_Transport_bus_202604191319.jpeg";
import img3 from "@/app/assets/3 (1).png";
import stars from "@/app/assets/rating.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function DemanderDevis() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-14 mt-16 items-start  py-16 rounded-2xl relative overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex-1 text-start">
        <h1 className="font-black text-4xl uppercase">
          PRÊT À ORGANISER VOTRE TRANSPORT ?
        </h1>

        <p className="text-sm mt-4 text-gray-300">
          Indiquez-nous votre itinéraire, votre date et la taille de votre
          groupe.
          <br /> Nous vous enverrons un devis précis et clair sous 2 heures. Un
          coordinateur dédié prendra en charge votre dossier.
          <br />
          Sans obligation de votre part, nous vous proposons un processus fluide
          et professionnel.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* TEXT BLOCK */}
          <div className="md:w-1/2">
            <p className="text-sm text-gray-300">
              Nous accompagnons chaque jour des entreprises, des agences de
              voyage et des organisateurs d'événements dans la réussite de leurs
              déplacements. Le tarif d'une location dépend de vos exigences
              (durée, capacité, équipements).
              <br />
              <br />
              N'hésitez pas à nous détailler votre projet. Nous analyserons
              toutes les options pour vous proposer la solution de transport la
              plus adaptée et au meilleur rapport qualité-prix.
              <br />
              Vous serez toujours accompagné par un vrai spécialiste du
              transport, un humain, et non un robot.
            </p>

            <div className="mt-4">
              <Link href="/#DemanderUnDevis">
                <Button className="group relative overflow-hidden rounded-none px-10 py-5 text-xs tracking-[0.25em] uppercase font-semibold text-white bg-gradient-to-r from-[#5226ff] to-[#e060cb] transition-colors duration-500 cursor-pointer">
                  Envoyer ma demande
                </Button>
              </Link>
            </div>
            <div className="mt-10 rounded-2xl border border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md shadow-xl p-6 max-w-2xl mx-auto">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://i.pravatar.cc/40?img=12"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Sophie L.
                    </p>
                    <p className="text-white/40 text-xs">
                      Directrice RH • Il y a 5 jours
                    </p>
                  </div>

                  <div className="flex ml-auto">
                    <img
                      src={stars.src}
                      alt="Stars"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Body */}
              <p className="text-white/70 text-sm leading-relaxed">
                "Organiser le transport pour notre séminaire d'entreprise annuel
                est un enjeu critique. Next Way s'est révélé être le partenaire
                idéal dans notre région. Leur équipe a su proposer une flotte de
                4 véhicules parfaitement adaptés, avec une organisation fluide
                et sans stress. Les véhicules étaient sur place à l'heure, et
                nos collaborateurs ont voyagé dans un confort optimal, ce qui a
                grandement contribué à la réussite de notre événement."
              </p>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 w-full md:w-1/2 sm:h-120">
            {/* Tall left image */}
            <div className="relative w-full min-h-60 aspect-4/3 sm:aspect-auto sm:min-h-0 sm:h-full sm:row-span-2 group overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={img2}
                alt="Bus image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Top right */}
            <div className="relative w-full min-h-50 aspect-4/3 sm:aspect-auto sm:min-h-0 sm:h-full group overflow-hidden rounded-2xl shadow-md">
              <Image
                src={img1}
                alt="Bus image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Bottom right */}
            <div className="relative w-full min-h-50 aspect-4/3 sm:aspect-auto sm:min-h-0 sm:h-full group overflow-hidden rounded-2xl shadow-md">
              <Image
                src={img3}
                alt="Bus image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemanderDevis;
