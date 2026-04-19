import { Card, CardContent } from "@/components/ui/card";
import busIcon from "@/app/assets/busIcon.png";
import clientIcon from "@/app/assets/clientIcon.png";
import priceIcon from "@/app/assets/priceIcon.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import img1 from "@/app/assets/Bus_driving_through_202604191309.jpeg";
import img2 from "@/app/assets/Nextway_Transport_bus_202604191310.jpeg";
import img3 from "@/app/assets/Nextway_Transport_bus_202604191314.jpeg";
import img4 from "@/app/assets/Luxury_bus_driving_202604191306.jpeg";

function Destinations() {
  const cards = [
    {
      icon: img1.src,
      title: "ESPAGNE",
      description:
        "Barcelone, Madrid, Séville et les régions environnantes. Trajets transfrontaliers gérés avec toute la documentation requise.",
    },
    {
      icon: img2.src,
      title: "ALLEMAGNE",
      description:
        "Berlin, Munich, Francfort, Cologne. Notre réseau s'étend au-delà des frontières pour tous vos projets internationaux.",
    },
    {
      icon: img3.src,
      title: "BELGIQUE",
      description:
        "Belgique (Bruxelles, Anvers, Bruges). Nous confirmons la disponibilité et les modalités de votre itinéraire spécifique.",
    },
    {
      icon: img4.src,
      title: "FRANCE",
      description:
        "Paris et l'Île-de-France, Lyon, Marseille, Bordeaux et toutes les grandes liaisons régionales. Trajets locaux et nationaux.",
    },
  ];

  return (
    <div className="flex h-full w-full justify-center mt-10" id="AboutUs">
      <div className="p-8 text-center space-y-6 md:space-y-8 pb-20">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight ">
          Où Nous Intervenons
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-full h-40 sm:h-48 md:h-120">
                <Image
                  src={card.icon}
                  alt="Bus de luxe"
                  fill
                  className="object-cover "
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">{card.description}</p>

                {/* <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex items-center justify-center gap-1 group text-sm font-semibold hover:text-[#8c64ff] transition-colors duration-300 cursor-pointer mt-4">
                      <span>EN SAVOIR PLUS</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        ▶
                      </span>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="text-white border border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md shadow-xl w-[95vw] max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Scrollable Content</DialogTitle>
                      <DialogDescription>
                        This is a dialog with scrollable content.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                      {Array.from({ length: 10 }).map((_, index) => (
                        <p key={index} className="mb-4 leading-normal">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
