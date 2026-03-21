"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import img1 from "@/app/assets/bournes-senruob-7npXwp8D_Kk-unsplash.jpg";
import img2 from "@/app/assets/manh-lai-van-xCe01R-lBio-unsplash.jpg";
import img3 from "@/app/assets/paul-caruso-hrFRtbyKKpg-unsplash.jpg";
import img4 from "@/app/assets/paul-stewart-_tb6IoNv7u0-unsplash.jpg";
import img5 from "@/app/assets/thierry-biland-W0jw6ROdykI-unsplash.jpg";
import Image from "next/image";

export default function MacbookScrollCards() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0.1, 0.3], [-20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  const cards = [
    {
      title: "Vans de 6 à 8 places",
      desc: "Louer un van avec chauffeur en petits groupes pour vos déplacements vers les hôtels, les aéroports, les gares… Équipement : Audio, ceintures, climatisation, sièges amovibles, trousse de premiers soins, wifi… En cas d’équipement spécial merci de nous en avertir avant la réservation.",
      img: img1.src,
    },
    {
      title: "Minibus de 15 à 20 places",
      desc: "Plus grand que le van mais plus petit que le bus il est idéal pour les déplacements en ville. Il circule facilement et se faufile de partout grâce à sa petite taille. Il est conseillé pour vos trajets plus courts car l’espace de rangement est plus limité. Équipement : Lecteur DVD, GPS, climatisation, ceintures de sécurité, reposes pieds, trousse de premiers soins, wifi… En cas d’équipement spécial merci de nous en avertir avant la réservation.",
      img: img2.src,
    },
    {
      title: "20 à 35 passagers",
      desc: "Idéal pour les séminaires et voyages scolaires. Il est également souvent sollicité pour les mariages afin de transporter les familles en toute sécurité. Équipements : Ceintures, prises électriques, climatisation, sièges amovibles, accès PMR, GPS, climatisation, frigo, machine à café, trousse de premiers soins, wifi… En cas d’équipement spécial merci de nous en avertir avant la réservation.",
      img: img3.src,
    },
    {
      title: "35 à 50 passagers",
      desc: "Idéal pour la location bus avec chauffeur et pour les longs trajets, grâce à un intérieur spacieux et des soutes qui permettent de déposer de nombreux bagages. Pour les longs trajets, certains bus sont équipés de couchettes, sièges inclinables et de toilettes. Équipements : Ceintures, lecteur DVD, prises électriques, toilettes, GPS, climatisation, accès PMR, machine à café, frigo, grandes soutes à bagages, tablettes, trousse de premiers soins, wifi… En cas d’équipement spécial merci de nous en avertir avant la réservation.",
      img: img4.src,
    },
  ];

  return (
    <div
      ref={ref}
      className="min-h-[200vh] flex flex-col items-center justify-center py-40"
    >
      <h2 className="text-3xl font-bold text-center">
        Quelles sont les différentes catégories de bus ?
      </h2>

      <motion.div
        style={{ rotateX: rotate, scale }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-[1000px]"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md shadow-xl"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg">{card.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{card.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="w-[80%] mt-10 rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md shadow-xl">
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={img5.src}
            alt={"Bus de luxe"}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg">
            Autocars de 50 passagers et plus
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Idéals pour les très grands voyages ou les événements importants car
            ils permettent de rassembler un grand nombre de personnes dans un
            seul autocar. Équipement : Grande soute à bagages, réfrigérateur,
            toilettes, lecteur DVD, ceintures de sécurité, prises électriques,
            climatisation, sièges inclinables, accès PMR, GPS, trousse de
            premiers soins, wifi, tablettes… En cas d’équipement spécial merci
            de nous en avertir avant la réservation.
          </p>
        </div>
      </div>
    </div>
  );
}
