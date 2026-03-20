import Image from "next/image";

import temps from "@/app/assets/temps.png";
import économique from "@/app/assets/économique.png";
import besoins from "@/app/assets/besoins.png";

function ThirdSection() {
  const features = [
    {
      title: "Une solution économique",
      icon: économique,
      description:
        "La location d'un bus avec chauffeur est une solution économique, flexible et idéale pour les déplacements en groupe.",
    },
    {
      title: "Économisez votre temps !",
      icon: temps,
      description:
        "Sotracars France simplifie l'organisation en prenant en charge toute la logistique pour vos déplacements.",
    },
    {
      title: "On s'adapte à vos besoins",
      icon: besoins,
      description:
        "Une large flotte de véhicules adaptés à tous types de déplacements avec équipements modernes.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes spinBorder {
          0%   { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .spin-border-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent 55%, #5226ff 65%, #e060cb 75%, #5226ff 85%, transparent 95%);
          animation: spinBorder 4s linear infinite;
        }
      `}</style>

      <section className="w-full flex justify-center mt-20 px-4" id="AboutUs">
        <div className="max-w-5xl w-full text-center space-y-10">
          <h1 className="text-2xl md:text-4xl font-black text-white">
            Pourquoi louer un bus avec chauffeur ?
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-[2px] overflow-hidden"
              >
                {/* Spinning conic gradient */}
                <div className="spin-border-inner" />

                {/* Inner card */}
                <div className="relative bg-[#060010] rounded-2xl p-6 h-full flex flex-col items-center text-center gap-4 text-white transition-transform duration-300 group-hover:scale-[1.03]">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#5226ff] to-[#e060cb] shadow-lg shadow-purple-500/20">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={28}
                      height={28}
                    />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ThirdSection;
