"use client";

import React from "react";
import Image from "next/image";
import { X, MapPin, Eye, Mountain } from "lucide-react";
import { Lato } from "next/font/google";
import { ModalProps } from "@/types";
import StarRating from "./ui/StarRating";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const DestinationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  destination,
}) => {
  if (!isOpen || !destination) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${lato.className}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        <div className="inline-block align-bottom bg-white border-4 border-black text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
          <div className="relative">
            <Image
              src={destination.image}
              alt={destination.name}
              width={1200}
              height={400}
              className="w-full h-80 sm:h-96 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />

            <button
              onClick={onClose}
              className="cursor-pointer absolute top-6 right-6 bg-black text-white border-2 border-white hover:bg-orange-400 hover:border-orange-400 hover:text-black p-3 transition-all duration-300"
            >
              <X size={24} />
            </button>

            <div className="absolute bottom-6 left-6">
              <span className="bg-white text-black px-4 py-2 text-xs font-black uppercase tracking-wide">
                {destination.difficulty}
              </span>
            </div>

            <div className="absolute bottom-6 right-6">
              <div className="bg-black/80 text-white px-4 py-2 text-xs font-mono flex items-center gap-2">
                <Eye size={14} />
                DETAILED VIEW
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-orange-400 flex items-center justify-center">
                  <Mountain size={16} className="text-black" />
                </div>
                <span className="text-xs font-black tracking-[0.2em] uppercase">
                  National Park
                </span>
              </div>

              <h2 className="text-[clamp(2rem,4vw,4rem)] font-black leading-[0.9] uppercase tracking-tight mb-6">
                {destination.name}
              </h2>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-orange-400" />
                  <span className="font-mono text-lg uppercase tracking-wide">
                    {destination.location}
                  </span>
                </div>
                <StarRating rating={destination.rating} />
              </div>

              <div className="w-20 h-1 bg-orange-400"></div>
            </header>

            <article className="space-y-8 mb-8">
              <div>
                <p className="text-xl leading-relaxed font-light text-gray-800">
                  {destination.fullDescription}
                </p>
              </div>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center">
                    <span className="text-xs font-black">01</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    What Makes This Special
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-orange-400 pl-4"
                    >
                      <p className="text-lg font-light leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center">
                    <span className="text-xs font-black">02</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    Planning Your Visit
                  </h3>
                </div>
                <div className="border-2 border-black p-6 bg-gray-50">
                  <p className="text-lg font-light leading-relaxed">
                    {destination.planningInfo}
                  </p>
                </div>
              </section>
            </article>

            <div className="flex flex-wrap gap-3 mb-8">
              {destination.features.map((feature, index) => (
                <span
                  key={index}
                  className="border-2 border-black px-4 py-2 text-sm font-black uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-200"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t-2 border-black">
              <div className="text-center">
                <div className="text-2xl font-black text-orange-400">
                  {destination.rating}
                </div>
                <div className="text-xs font-black uppercase tracking-wide">
                  Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-orange-400">
                  {destination.features.length}
                </div>
                <div className="text-xs font-black uppercase tracking-wide">
                  Features
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-orange-400">
                  {destination.highlights.length}
                </div>
                <div className="text-xs font-black uppercase tracking-wide">
                  Highlights
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-orange-400">∞</div>
                <div className="text-xs font-black uppercase tracking-wide">
                  Memories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
