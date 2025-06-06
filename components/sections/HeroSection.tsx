import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import Navigation from "../Navigation";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

interface HeroSectionProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const scrollToNextSection = (): void => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden h-screen mb-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1563903260263-065d1c592e6b?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mountain landscape"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90" />

      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center text-center text-white px-8">
          <h1
            className={`text-[clamp(4rem,14vw,12rem)] font-black leading-[0.75] uppercase tracking-tight mb-6 mt-20 ${lato.className}`}
          >
            <span className="text-orange-400">No</span>morra
          </h1>

          <p
            className={`text-[clamp(0.75rem,2vw,1rem)] tracking-[0.2em] uppercase text-white/90 mb-12 ${lato.className}`}
          >
            My Blog Through America&apos;s best national parks
          </p>
        </div>

        <div className="flex flex-col items-center pb-12 text-white">
          <div className="w-px h-20 bg-white/40 mb-6"></div>
          <button
            onClick={scrollToNextSection}
            className="cursor-pointer flex flex-col items-center group transition-all duration-300 hover:scale-110"
            aria-label="Scroll to explore"
          >
            <div className="w-8 h-8 border-2 border-white/60 flex items-center justify-center mb-3 group-hover:border-orange-400 transition-colors duration-300">
              <div className="w-2 h-2 bg-white/70 group-hover:bg-orange-400 transition-colors duration-300"></div>
            </div>
            <span
              className={`text-xs font-black tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity ${lato.className}`}
            >
              Begin Journey
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
