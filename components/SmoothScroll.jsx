"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Lenis initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Only watch for actual dimension changes, not style/attribute updates
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
