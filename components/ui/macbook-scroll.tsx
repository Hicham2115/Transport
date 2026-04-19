"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import img1 from "@/app/assets/bournes-senruob-7npXwp8D_Kk-unsplash.jpg";
import img2 from "@/app/assets/manh-lai-van-xCe01R-lBio-unsplash.png";
import img3 from "@/app/assets/paul.jpg";
import img4 from "@/app/assets/paul2.jpg";
import img5 from "@/app/assets/Nextway_Transport_bus_202604191318.jpeg";
import Image from "next/image";

export default function MacbookScrollCards() {
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
    <div className="min-h-[200vh] flex flex-col items-center justify-center py-40">
      <h2 className="text-3xl font-bold text-center">
        Quelles sont les différentes catégories de bus ?
      </h2>

      <motion.div
        // style={{ rotateX: rotate, scale }}
        className="flex flex-wrap mt-10 justify-center gap-10 perspective-[1000px]"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-full sm:w-[45%] transition-transform duration-300 hover:-translate-y-2 lg:w-[40%] rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md shadow-xl"
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
      <div className="w-full transition-transform duration-300 hover:-translate-y-2 sm:w-[45%] lg:w-[40%] mt-10 rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md shadow-xl">
        {/* Image */}
        <div className="relative h-78 w-full">
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
