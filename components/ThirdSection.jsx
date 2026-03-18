import Image from "next/image";
import busIcon from "@/app/assets/busIcon.png";
import clientIcon from "@/app/assets/clientIcon.png";
import priceIcon from "@/app/assets/priceIcon.png";
import BorderGlow from "@/components/BorderGlow";

import temps  from "@/app/assets/temps.png";
import économique from "@/app/assets/économique.png";
import besoins from "@/app/assets/besoins.png";

function ThirdSection() {
  const features = [
    {
      title: "Une solution économique",
      icon: temps.src,
      description:
        "La location d’un bus avec chauffeur est une solution économique, flexible et idéale pour les déplacements en groupe. Elle offre un excellent rapport qualité/prix, adaptée aux événements professionnels et privés. Grâce à un large réseau de partenaires, vous bénéficiez des meilleurs tarifs et d’un service rapide, disponible partout en France et en Europe.",
    },
    {
      title: "Économisez votre temps !",
      icon: économique.src,
      description:
        "Organiser un voyage en groupe peut être complexe et demande beaucoup de préparation. Sotracars France simplifie cette tâche en prenant en charge toute la logistique grâce à son service de location de bus avec chauffeur, garantissant sécurité, confort et professionnalisme pour tous types de déplacements.",
    },
    {
      title: "On s’adapte à vos besoins",
      icon: besoins.src,
      description:
        "La location d’autocar avec chauffeur convient à tous types de déplacements (voyages de groupe, événements, séminaires, transferts). Elle simplifie l’organisation grâce à une grande flexibilité selon votre destination, vos horaires et vos besoins. Avec une large flotte de véhicules (différentes tailles et équipements comme Wi-Fi, prises, toilettes, etc.), vous trouvez toujours un bus adapté.",
    },
  ];

  return (
    <section className="w-full flex justify-center mt-20 px-4" id="AboutUs">
      <div className="max-w-6xl w-full text-center space-y-10">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-black text-white">
          Pourquoi louer un bus avec chauffeur ?
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <BorderGlow
              key={i}
              edgeSensitivity={40}
              glowRadius={30}
              glowIntensity={3}
              borderRadius={20}
              colors={["#5226ff", "#a855f7", "#e060cb"]}
              className="transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-[#060010] rounded-[20px] p-6 h-full flex flex-col items-center text-center gap-4 text-white">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#5226ff] to-[#e060cb] group-hover:scale-110 transition">
                  <Image src={item.icon} alt="" width={28} height={28} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold">{item.title}</h3>

                {/* Text */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
