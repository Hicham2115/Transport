"use client";
import Lottie from "lottie-react";
import animationData from "@/public/animations/Moving Bus.json";

export default function Loading() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">

      {/* Ambient glow blobs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(80,40,255,0.18) 0%, transparent 70%)",
          top: "10%",
          left: "20%",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(180,100,255,0.15) 0%, transparent 70%)",
          bottom: "10%",
          right: "15%",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(240,0,160,0.1) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,100,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(80,40,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main card */}
      <div
        className="relative z-10 flex flex-col items-center px-10 py-12 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(180,100,255,0.2)",
          backdropFilter: "blur(20px)",
          minWidth: 340,
        }}
      >
        {/* Top label */}
        <span
          className="text-xs font-bold uppercase tracking-widest mb-8 px-4 py-1.5 rounded-full"
          style={{
            background: "rgba(180,100,255,0.12)",
            border: "1px solid rgba(180,100,255,0.25)",
            color: "#b464ff",
            letterSpacing: "0.18em",
          }}
        >
          En route
        </span>

        {/* Lottie animation */}
        <div className="w-72 drop-shadow-2xl">
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Text */}
        <h2
          className="mt-6 text-2xl font-black tracking-tight text-white text-center"
        >
          Chargement en cours
        </h2>
        <p
          className="mt-2 text-sm text-center"
          style={{ color: "rgba(255,255,255,0.4)", maxWidth: 240 }}
        >
          Votre trajet est en préparation...
        </p>

        {/* Animated progress bar */}
        <div
          className="mt-8 w-full rounded-full overflow-hidden"
          style={{ height: 3, background: "rgba(255,255,255,0.08)" }}
        >
          <div
            className="h-full rounded-full loading-bar"
            style={{
              background: "linear-gradient(90deg, #5028ff, #b464ff, #f000a0)",
            }}
          />
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full loading-dot"
              style={{
                background: "#b464ff",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .loading-bar {
          width: 40%;
          animation: slide 1.8s ease-in-out infinite;
        }
        .loading-dot {
          animation: pulse-dot 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}