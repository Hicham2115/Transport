
import Lottie from "lottie-react";
import animationData from "@/public/animations/Bus Transport.json";
import Image from "next/image";
import img1 from "@/app/assets/juan-encalada-6mcVaoGNz1w-unsplash.jpg";

function Services() {
  return (
    <section className="relative py-20 px-6 md:px-16 -mt-20 overflow-hidden text-white!" id="Services">
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Block */}
        <div className="flex flex-col justify-center gap-6">
          <h2
            className="text-5xl md:text-6xl font-serif leading-tight "
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            VOTRE CONFORT
            <br />
            <em className="italic text-5xl whitespace-nowrap">
              ET VOTRE SATISFACTION
            </em>
          </h2>
          <div className="w-12 h-[2px] bg-[#5028ff]" />
          <h1 className="text-2xl md:text-4xl font-serif leading-tight ">
            Présentation
          </h1>
          <p
            className=" leading-relaxed text-base max-w-lg"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            Fort de son expérience dans le transport, SO.TRA.CARS met tout en
            œuvre pour obtenir la confiance de ses clients. <br /> Nos
            conseillers sont formés pour vous aider à planifier votre trajet et
            à trouver la bonne offre pour réaliser au mieux votre projet.
            Découvrez nos services de location de bus pour séminaire
            d’entreprise, de location de bus pour mariage, de location de bus
            pour aller station de ski, de location de bus pour sorties
            scolaires, location de bus à Paris 1 ou encore location de bus à
            Paris 2.
          </p>

          <br />
        </div>

        <div className="flex h-[400px] md:h-[500px] lg:h-[600px] relative">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-serif leading-tight ">
        Législation
      </h1>
      <p className=" leading-relaxed text-base w-max-lg">
        Dans le respect des réglementations françaises et européenne
        SO.TRA.CARS, location de bus avec chauffeur à Paris, veille à employer
        des partenaires rigoureux, notamment dans le cadre du temps de conduite
        continu, du temps de conduite journalier, des temps de pause etc…
      </p>
      <br />
      <div className="flex gap-6">
        <div>
          {" "}
          <h1 className="text-2xl md:text-3xl font-serif leading-tight ">
            Qualité de nos partenaires
          </h1>
          <p className=" leading-relaxed w-max-lg text-sm italic mt-2 mb-2">
            Nous collaborons avec des autocaristes professionnels selon des
            critères stricts.
          </p>
          <ul className="list-disc pl-6">
            <li>L’accueil client</li>
            <li>Le confort</li>
            <li>La sécurité</li>
            <li>La ponctualité</li>
            <li>Le matériel</li>
          </ul>
        </div>

        <div className="relative w-[550px] h-[400px] md:h-[200px] lg:h-[300px]">
          <Image
            src={img1}
            alt="Service Image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
