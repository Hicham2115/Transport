"use client";
import Hyperspeed from "@/components/Background/Hyperspeed";
import Hero from "@/components/MainSection/Hero";
import FirstSection from "@/components/MainSection/FirstSection";
import SecondSection from "@/components/MainSection/SecondSection";
import ThirdSection from "@/components/MainSection/ThirdSection";
import FaQ from "@/components/MainSection/FAQ";
import DemanderDevis from "@/components/MainSection/DemanderDevis";
import MacbookScroll from "@/components/ui/macbook-scroll";
import Destinations from "@/components/MainSection/Destinations";
import Services from "@/components/MainSection/Services";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";

function Page() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  // ✅ Scroll handler
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  // ✅ REAL + FAKE loading combined
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
      {/* ✅ Loader overlay */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#060010] transition-opacity duration-700 ${
          isReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Loading />
      </div>

      {/* ✅ Main content */}
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

        <FirstSection />
        <SecondSection />

        <div id="Services">
          <Services />
        </div>

        <div id="DemanderUnDevis">
          <DemanderDevis />
        </div>
        <div id="FAQ">
          <ThirdSection />
        </div>

        <FaQ />
        <div id="Autocars">
          <MacbookScroll />
        </div>

        <div id="Destinations">
          <Destinations />
        </div>
      </div>
    </>
  );
}

export default Page;
