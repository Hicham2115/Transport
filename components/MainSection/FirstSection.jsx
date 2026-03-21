import Image from "next/image";
import img10 from "@/app/assets/bus1.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import SplitText from "@/components/ui/SplitText";

function FirstSection() {
  return (
    <section className="relative py-20 px-6 md:px-16 mt-20 overflow-hidden text-white!">
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Block */}
        <div className="flex flex-col justify-center gap-6">
          <SplitText
            text="Un devis Simple "
            className="text-5xl md:text-6xl font-serif leading-tight "
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
            showCallback
          />
          <SplitText
            text="et Rapide"
            className="text-3xl md:text-4xl font-serif leading-tight "
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
            showCallback
          />
          {/* <h2
            className="text-5xl md:text-6xl font-serif leading-tight "
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Un devis
            <br />
            <em className="italic ">Simple et Rapide</em>
          </h2> */}
          <div className="w-12 h-[2px] bg-[#5028ff]" />
          <SplitText
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
            text="Parce que nous considérons toutes vos demandes comme importantes,
  nous nous engageons à vous répondre en moins de 24H. Notre équipe de
  spécialistes met à votre disposition toute son expertise : Des
  régulateurs et des coordinateurs. Réserver un bus avec chauffeur est
  une solution idéale pour faciliter les déplacements de groupes lors
  d’événements professionnels ou de sorties diverses."
            className="leading-relaxed text-base max-w-lg"
            delay={15}
            duration={0.3}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
          />
          {/* <p
            className=" leading-relaxed text-base max-w-lg"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            Parce que nous considérons toutes vos demandes comme importantes,
            nous nous engageons à vous répondre en moins de 24H. Notre équipe de
            spécialistes met à votre disposition toute son expertise : Des
            régulateurs et des coordinateurs. Réserver un bus avec chauffeur est
            une solution idéale pour faciliter les déplacements de groupes lors
            d’événements professionnels ou de sorties diverses.
          </p> */}
          <SplitText
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
            text="Grâce à son réseau composé de partenaires à travers la France,
            SOTRACARS France est spécialisé dans la location de bus et minibus
            avec chauffeur que ce soit pour des séminaires d’entreprises, des
            agences évènementielles, établissements scolaires et autres…"
            className="leading-relaxed text-base max-w-lg"
            delay={15}
            duration={0.3}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
          />
          {/* <p
            className=" leading-relaxed text-base max-w-lg"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            Grâce à son réseau composé de partenaires à travers la France,
            SOTRACARS France est spécialisé dans la location de bus et minibus
            avec chauffeur que ce soit pour des séminaires d’entreprises, des
            agences évènementielles, établissements scolaires et autres…
          </p> */}

          <div className="mt-4">
            <Link href="/">
              {" "}
              <Button className="group relative overflow-hidden rounded-none px-10 py-5 text-xs tracking-[0.25em] uppercase font-semibold text-white bg-gradient-to-r from-[#5226ff] to-[#e060cb] transition-colors duration-500 cursor-pointer">
                Discover Collection
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex h-[400px] md:h-[500px] lg:h-[600px] relative">
          <div className="group overflow-hidden rounded-2xl shadow-md ">
            <Image
              src={img10}
              alt="Artisan Bag"
              fill
              className="object-cover group-hover:scale-101 rounded-lg transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F0E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-blue-100" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-white">
          FRANCE ET EUROPE
        </span>
        <div className="flex-1 h-[1px] bg-blue-100" />
      </div>
    </section>
  );
}

export default FirstSection;
