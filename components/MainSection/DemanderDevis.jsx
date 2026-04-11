import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import img1 from "@/app/assets/Gemini_Generated_Image_yflkgyflkgyflkgy.png";
import img2 from "@/app/assets/jeswin-thomas-iIGovKRty8g-unsplash.jpg";
import img3 from "@/app/assets/3 (1).png";
import stars from "@/app/assets/rating.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function DemanderDevis() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-14 mt-16 items-start">
      {/* LEFT SIDE */}
      <div className="flex-1 text-start">
        <h1 className="font-black text-4xl">DEMANDER UN DEVIS</h1>

        <p className="text-sm mt-4 text-gray-300">
          Vous souhaitez réserver une location d’autocar avec chauffeur pour un
          déplacement professionnel ou touristique ? <br />
          Vous voulez savoir combien coûte un transport en autocar ? Pour cela,
          il vous faut adresser une demande de devis location bus à notre
          équipe. <br />
          Chez Next Way Transport, spécialiste dans la location de bus avec
          chauffeur, toutes les demandes sont aussi importantes les unes que les
          autres. <br />
          Ainsi, nous nous engageons à vous répondre dans les plus brefs délais.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* TEXT BLOCK */}
          <div className="md:w-1/2">
            <p className="text-sm text-gray-300">
              Sachez que le prix d’une location de bus avec chauffeur dépend de
              nombreux critères qui concernent le voyage/déplacement en
              question. <br />
              Aucun trajet ne se ressemble. Il faut être précis sur les lieux,
              horaires, durée, nombre de passagers et équipements souhaités.{" "}
              <br />
              Toutes ces informations permettent d’établir un devis adapté.{" "}
              <br />
              Nous vous proposons toujours le meilleur rapport qualité dans le
              domaine de la location de bus.
              <br />
              <br />
              N’hésitez pas à nous faire part de vos besoins de transport.{" "}
              <br /> Nous nous ferons un plaisir d’étudier votre cas et
              l’analyser sous tous les angles. Ainsi, nous pourrons vous
              proposer une solution sur mesure, celle qui est la mieux adaptée
              pour vous.
            </p>

            <div className="mt-4">
              <Link href="/contact-us">
                <Button className="group relative overflow-hidden rounded-none px-10 py-5 text-xs tracking-[0.25em] uppercase font-semibold text-white bg-gradient-to-r from-[#5226ff] to-[#e060cb] transition-colors duration-500 cursor-pointer">
                  Demander Un Devis
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
                      David J. Karem
                    </p>
                    <p className="text-white/40 text-xs">
                      Businessmen • 5 days ago
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
                Organiser un événement familial n’est pas toujours simple,
                surtout en ce qui concerne les déplacements et la coordination
                des invités. Next Way Transport s’est révélé être le prestataire
                le mieux placé en termes de coût, tout en offrant un service
                fiable et professionnel. Leur équipe a su proposer une solution
                adaptée à nos besoins, avec une organisation fluide et sans
                stress. Grâce à leur accompagnement, le transport s’est déroulé
                parfaitement, ce qui a grandement contribué à la réussite de
                notre événement.
              </p>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[480px] md:w-1/2 w-full">
            {/* Tall left image */}
            <div className="row-span-2 relative w-full h-full group overflow-hidden rounded-2xl shadow-xl">
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
            <div className="relative w-full h-full group overflow-hidden rounded-2xl shadow-md">
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
            <div className="relative w-full h-full group overflow-hidden rounded-2xl shadow-md">
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
