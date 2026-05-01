"use client";
import Hyperspeed from "@/components/Background/Hyperspeed";
import Hero from "@/components/MainSection/Hero";
import TrustStrip from "@/components/MainSection/TrustStrip";
import ServiceIntentSelector from "@/components/MainSection/ServiceIntentSelector";
import HomeQuoteForm from "@/components/MainSection/HomeQuoteForm";
import SpeedCommitment from "@/components/MainSection/SpeedCommitment";
import GeographicCoverage from "@/components/MainSection/GeographicCoverage";
import SocialProof from "@/components/MainSection/SocialProof";
import PremiumServices from "@/components/MainSection/PremiumServices";
import UrgencyBlock from "@/components/MainSection/UrgencyBlock";
import FaQ from "@/components/MainSection/FAQ";
import LegalReassurance from "@/components/MainSection/LegalReassurance";
import FinalCTA from "@/components/MainSection/FinalCTA";
import FirstSection from "@/components/MainSection/FirstSection";
import SecondSection from "@/components/MainSection/SecondSection";
import ThirdSection from "@/components/MainSection/ThirdSection";
import Services from "@/components/MainSection/Services";
import MacbookScroll from "@/components/ui/macbook-scroll";
import Destinations from "@/components/MainSection/Destinations";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, variants = fadeUp, className = "" }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Page() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href*="#DemanderUnDevis"]');
      if (!link) return;
      const el = document.getElementById("DemanderUnDevis");
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const minDelay = new Promise((res) => setTimeout(res, 1200)); // fake delay

    const pageLoaded = new Promise((res) => {
      if (document.readyState === "complete") {
        res();
      } else {
        window.addEventListener("load", res, { once: true });
      }
    });

    Promise.all([minDelay, pageLoaded]).then(() => {
      setIsReady(true);
    });
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#060010] transition-opacity duration-700 ${
          isReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Loading />
      </div>

      <div className={`${!isReady ? "pointer-events-none" : ""}`}>
        <div className="relative w-full h-screen overflow-hidden">
          <Hyperspeed
            effectOptions={{
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [12, 80],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 526344,
                islandColor: 657930,
                background: 0,
                shoulderLines: 1250072,
                brokenLines: 1250072,
                leftCars: [14177983, 6770850, 12732332],
                rightCars: [242627, 941733, 3294549],
                sticks: 242627,
              },
            }}
          />
          <Hero />
        </div>

        {/* [02] Trust Strip */}
        <Reveal>
          <TrustStrip />
        </Reveal>

        {/* [03] Service Intent Selector */}
        <Reveal>
          <ServiceIntentSelector />
        </Reveal>

        {/* [04] Formulaire de Devis */}
        <Reveal>
          <HomeQuoteForm />
        </Reveal>

        {/* [05] Engagement de Réactivité */}
        <Reveal>
          <SpeedCommitment />
        </Reveal>

        {/* [06] Couverture Géographique */}
        <Reveal>
          <GeographicCoverage />
        </Reveal>

        {/* [07] Preuve Sociale */}
        <Reveal variants={zoomIn}>
          <SocialProof />
        </Reveal>

        {/* [08] Services Premium Inclus */}
        <Reveal>
          <PremiumServices />
        </Reveal>

        {/* Existing site sections */}
        <Reveal variants={fadeLeft}>
          <FirstSection />
        </Reveal>
        {/* <SecondSection /> */}
        {/* <ThirdSection /> */}
        <div id="Services">{/* <Services /> */}</div>
        <Reveal variants={zoomIn}>
          <div id="Autocars">
            <MacbookScroll />
          </div>
        </Reveal>
        <Reveal>
          <div id="Destinations">
            <Destinations />
          </div>
        </Reveal>

        {/* [10] Urgence */}
        {/* <UrgencyBlock /> */}

        {/* [11] FAQ */}
        <Reveal>
          <div id="FAQ">
            <FaQ />
          </div>
        </Reveal>

        {/* [12] Réassurance Légale */}
        {/* <LegalReassurance /> */}

        {/* [13] CTA Final */}
        <Reveal>
          <FinalCTA />
        </Reveal>
      </div>
    </>
  );
}

export default Page;
