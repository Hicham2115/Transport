import Lottie from "lottie-react";
import animationData from "@/public/animations/Moving Bus.json";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}