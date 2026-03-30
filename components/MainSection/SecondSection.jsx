import { Card, CardContent } from "@/components/ui/card";
import busIcon from "@/app/assets/busIcon.png";
import clientIcon from "@/app/assets/clientIcon.png";
import priceIcon from "@/app/assets/priceIcon.png";
import Image from "next/image";
import SplitText from "@/components/ui/SplitText";

function SecondSection() {
  const cards = [
    {
      icon: busIcon.src,
      iconBg: "bg-gradient-to-br from-[#8c64ff] to-[#5226ff]",
      title: "TRANSPORT",
      description:
        "Spécialiste de la location de bus et minibus avec chauffeur depuis de nombreuses années, SO.TRA.CARS vous garantit un service irréprochable.",
    },
    {
      icon: clientIcon.src,
      iconBg: "bg-gradient-to-br from-[#8c64ff] to-[#5226ff]",
      title: "SERVICE CLIENT",
      description:
        "Notre service client est à votre écoute 7j/7 pour répondre à vos demandes de location de car.",
    },
    {
      icon: priceIcon.src,
      iconBg: "bg-gradient-to-br from-[#8c64ff] to-[#5226ff]",
      title: "PRIX ATTRACTIFS",
      description:
        "De nombreux partenaires à travers la France SO.TRA.CARS vous propose les meilleurs prix selon votre trajet.",
    },
  ];

  return (
    <>
      <div className="flex h-full w-full justify-center mt-10" id="AboutUs">
        <div className="p-8 text-center space-y-6 md:space-y-8 pb-20">
          <h1 className="text-2xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-[#5226ff] via-[#a855f7] to-[#e060cb] bg-clip-text text-transparent">
            Pourquoi choisir
          </h1>

          <h1 className="text-xl md:text-3xl font-black tracking-tight -mt-4 text-white">
            DEMO Name
          </h1>
          <SplitText
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
            text="SO.TRA.CARS est votre partenaire de confiance pour la location de bus
          et minibus avec chauffeur. Nous proposons des solutions de transport
          fiables, adaptées à tous types de déplacements, avec un service
          rapide, des prix compétitifs et un accompagnement personnalisé."
            className="text-sm md:text-lg max-w-3xl mx-auto text-gray-300 -mt-4 px-4"
            delay={15}
            duration={0.3}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          {/* <p className="text-xl md:text-lg max-w-3xl mx-auto text-gray-300 -mt-4 px-4">
          SO.TRA.CARS est votre partenaire de confiance pour la location de bus
          et minibus avec chauffeur. Nous proposons des solutions de transport
          fiables, adaptées à tous types de déplacements, avec un service
          rapide, des prix compétitifs et un accompagnement personnalisé.
        </p> */}

          <div className="flex flex-col sm:flex-row animate-fade-in-up  justify-center gap-8 flex-wrap max-w-6xl">
            {cards.map((card, i) => (
              <Card
                key={i}
                className="w-full sm:w-[30%] text-start bg-transparent transition-all border border-[#8c64ff] duration-500 hover:shadow-[-1px_2px_14px_5px_rgba(140,100,255,0.75)] hover:scale-101 hover:-translate-y-2 group cursor-pointer text-white [border-radius:16px_24px_16px_4px]"
              >
                <CardContent className="flex flex-col gap-4 p-5">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shadow-md transition-transform duration-500  group-hover:scale-110`}
                  >
                    <Image
                      src={card.icon}
                      alt="bus-img"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      placeholder="blur"
                      blurDataURL={card.icon}
                      priority={i === 0}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h1 className="font-black text-lg text-white transition-colors duration-300">
                      {card.title}
                    </h1>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Explore link */}
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#8c64ff] group-hover:text-white transition-colors duration-300 cursor-pointer mt-1">
                    <span>EN SAVOIR PLUS</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ▶
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
