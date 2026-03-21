"use client";
import Hyperspeed from "@/components/Background/Hyperspeed";
import Hero from "@/components/MainSection/Hero";
import FirstSection from "@/components/MainSection/FirstSection";
import SecondSection from "@/components/MainSection/SecondSection";
import img11 from "@/app/assets/SliderImgs/Frame-17-2.png";
import img12 from "@/app/assets/SliderImgs/Frame-18-2.png";
import img13 from "@/app/assets/SliderImgs/Frame-19-2.png";
import img14 from "@/app/assets/SliderImgs/Frame-20-2.png";
import img15 from "@/app/assets/SliderImgs/Frame-21-2.png";
import img16 from "@/app/assets/SliderImgs/Frame-22-2.png";
import LogoLoop from "@/components/ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import ThirdSection from "@/components/MainSection/ThirdSection";
import FaQ from "@/components/MainSection/FAQ";
import DemanderDevis from "@/components/MainSection/DemanderDevis";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import MacbookScroll from "@/components/ui/macbook-scroll";
import Destinations from "@/components/MainSection/Destinations";
import Services from "@/components/MainSection/Services";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function page() {
  const techLogos = [
    { src: img11.src, title: "React" },
    { src: img12.src, title: "TypeScript" },
    { src: img13.src, title: "Tailwind CSS" },
    { src: img14.src, title: "Tailwind CSS" },
    { src: img15.src, title: "Tailwind CSS" },
    { src: img16.src, title: "Tailwind CSS" },
  ];

  function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
      const hash = window.location.hash;

      if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [pathname]);

    return null;
  }

  return (
    <div>
      <ScrollToTop />

      <div style={{ position: "relative", width: "100%", minHeight: "300px" }}>
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
      {/* <div
        style={{
          height: "200px",
          position: "relative",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          fadeOut
          useCustomRender={false}
        />
      </div> */}
      <FirstSection />
      <SecondSection />
      <div id="Services">
        <Services />
      </div>
      <div id="DemanderUnDevis">
        <DemanderDevis />
      </div>
      <ThirdSection />
      <FaQ />
      {/* <SmoothCursor /> */}
      <div id="Autocars">
        <MacbookScroll />
      </div>
      <div id="Destinations">
        <Destinations />
      </div>
    </div>
  );
}

export default page;
