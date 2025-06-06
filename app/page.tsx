"use client";

import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Star,
  Mountain,
  MapPin,
  ArrowRight,
  Eye,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Mail,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Lato } from "next/font/google";

// Import data and types
import { destinations } from "@/data/destinations";
import { Destination } from "@/types";

// Import components
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import StarRating from "@/components/ui/StarRating";

// Dynamic imports for heavy components
const DestinationModal = dynamic(
  () => import("@/components/DestinationModal"),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-96 w-full"></div>
    ),
  }
);

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const handleSmoothScroll = (e: React.MouseEvent, sectionId: string): void => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const NationalParksBlog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Memoize filtered destinations for performance
  const filteredDestinations = useMemo(() => {
    if (!searchQuery) return destinations;

    const query = searchQuery.toLowerCase();
    return destinations.filter(
      (destination) =>
        destination.name.toLowerCase().includes(query) ||
        destination.location.toLowerCase().includes(query) ||
        destination.features.some((feature) =>
          feature.toLowerCase().includes(query)
        )
    );
  }, [searchQuery]);

  const handleDestinationClick = (destination: Destination): void => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedDestination(null);
  };

  const handleFooterLinkClick = (linkName: string): void => {
    toast.info(`Navigating to ${linkName}...`);
  };

  const scrollLeft = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`min-h-screen bg-black ${lato.className}`}>
      <HeroSection
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <AboutSection />

      {/* Main Blog Content */}
      <main className="relative bg-black min-h-screen">
        <div className="max-w-none px-0 py-0">
          <header id="blogs" className="relative py-24">
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                     45deg,
                     transparent,
                     transparent 10px,
                     white 10px,
                     white 11px
                   )`,
                }}
              />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-12 gap-8 items-end">
                <div className="col-span-12 md:col-span-8">
                  <div className="mb-6">
                    <span className="bg-white text-black px-6 py-2 text-sm font-black tracking-[0.3em] uppercase transform -skew-x-12 inline-block">
                      Latest Stories
                    </span>
                  </div>

                  <h2 className="text-[clamp(3rem,7vw,8rem)] font-black leading-[0.8] text-white uppercase tracking-tight mb-8">
                    {searchQuery ? (
                      <>
                        Search
                        <br />
                        <span className="text-orange-400">Results</span>
                      </>
                    ) : (
                      <>
                        Adven
                        <br />
                        <span className="text-orange-400">tures</span>
                      </>
                    )}
                  </h2>
                </div>

                <div className="col-span-12 md:col-span-4 md:text-right">
                  <div className="space-y-4">
                    <p className="text-white text-lg font-light leading-relaxed">
                      Discover breathtaking landscapes and unforgettable
                      experiences from America&apos;s wilderness.
                    </p>
                    <div className="flex md:justify-end gap-4 text-xs text-gray-500 font-mono">
                      <span className="bg-gray-900 px-3 py-1">
                        {destinations.length} STORIES
                      </span>
                      <span className="bg-gray-900 px-3 py-1">
                        WEEKLY UPDATES
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {filteredDestinations.length > 0 ? (
            <div>
              {/* Featured Destination */}
              <section className="relative">
                <div className="grid grid-cols-12 min-h-screen">
                  <div className="col-span-12 lg:col-span-5 bg-white text-black p-12 flex flex-col justify-center">
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-orange-400 flex items-center justify-center">
                          <Star size={16} className="text-black fill-black" />
                        </div>
                        <span className="text-xs font-black tracking-[0.2em] uppercase">
                          Featured Story
                        </span>
                      </div>

                      <h3 className="text-[clamp(2rem,4vw,4rem)] font-black leading-[0.9] uppercase tracking-tight">
                        {filteredDestinations[0].name}
                      </h3>

                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-orange-400" />
                          <span className="font-mono text-sm uppercase tracking-wide">
                            {filteredDestinations[0].location}
                          </span>
                        </div>
                        <StarRating rating={filteredDestinations[0].rating} />
                      </div>

                      <div className="space-y-4">
                        <div className="w-16 h-1 bg-black"></div>
                        <p className="text-lg leading-relaxed font-light">
                          {filteredDestinations[0].description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {filteredDestinations[0].features
                          .slice(0, 3)
                          .map((feature, index) => (
                            <span
                              key={index}
                              className="border-2 border-black px-4 py-1 text-xs font-black uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-200"
                            >
                              {feature}
                            </span>
                          ))}
                      </div>

                      <button
                        onClick={() =>
                          handleDestinationClick(filteredDestinations[0])
                        }
                        className="cursor-pointer group bg-black text-white px-8 py-4 hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105 font-black uppercase tracking-wide text-sm"
                      >
                        <span className="flex items-center gap-4">
                          Read Full Story
                          <ArrowRight
                            size={18}
                            className="group-hover:translate-x-2 transition-transform duration-300"
                          />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-7 relative overflow-hidden">
                    <div
                      className="absolute inset-0 hover:scale-105 transition-transform duration-700 cursor-pointer"
                      onClick={() =>
                        handleDestinationClick(filteredDestinations[0])
                      }
                    >
                      <Image
                        src={filteredDestinations[0].image}
                        alt={filteredDestinations[0].name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute top-8 right-8">
                      <span className="bg-white text-black px-4 py-2 text-xs font-black uppercase">
                        {filteredDestinations[0].difficulty}
                      </span>
                    </div>

                    <div className="absolute bottom-8 left-8">
                      <div className="bg-black/80 text-white px-4 py-2 text-xs font-mono flex items-center gap-2">
                        <Eye size={14} />
                        2.4K VIEWS
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Destinations */}
              {filteredDestinations.length > 1 && (
                <section id="latest" className="bg-white text-black">
                  <div className="p-4 sm:p-8 lg:p-12">
                    <div className="max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                      <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-end border-b-2 border-black pb-6 sm:pb-8">
                        <div className="col-span-12 md:col-span-8">
                          <h3 className="text-[clamp(3rem,7vw,8rem)] font-black leading-[0.8] uppercase tracking-tight">
                            My Journey
                          </h3>
                        </div>
                        <div className="col-span-12 md:col-span-4 md:text-right mt-4 md:mt-0">
                          <p className="text-base sm:text-lg font-light">
                            Stories that changed me forever through the
                            wilderness.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-24">
                      {filteredDestinations
                        .slice(1)
                        .map((destination, index) => (
                          <article
                            key={destination.id}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center ${
                              index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                            }`}
                          >
                            <div
                              className={`lg:col-span-6 space-y-4 sm:space-y-6 order-2 lg:order-1 ${
                                index % 2 === 0
                                  ? ""
                                  : "lg:col-start-7 lg:order-2"
                              }`}
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center font-black text-lg sm:text-xl flex-shrink-0">
                                  {String(index + 2).padStart(2, "0")}
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin
                                    size={16}
                                    className="text-orange-400"
                                  />
                                  <span className="font-mono text-xs sm:text-sm uppercase tracking-wide">
                                    {destination.location}
                                  </span>
                                </div>
                              </div>

                              <h4 className="text-[clamp(1.5rem,3vw,3rem)] font-black leading-[0.9] uppercase tracking-tight">
                                {destination.name}
                              </h4>

                              <div className="space-y-3 sm:space-y-4">
                                <div className="w-8 sm:w-12 h-1 bg-orange-400"></div>
                                <p className="text-base sm:text-lg leading-relaxed font-light">
                                  {destination.description}
                                </p>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {destination.features
                                  .slice(0, 4)
                                  .map((feature, featureIndex) => (
                                    <span
                                      key={featureIndex}
                                      className="border border-black px-2 sm:px-3 py-1 text-xs font-mono uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-200"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                              </div>

                              <button
                                onClick={() =>
                                  handleDestinationClick(destination)
                                }
                                className="cursor-pointer group border-2 border-black px-4 sm:px-6 py-2 sm:py-3 hover:bg-black hover:text-white transition-all duration-300 font-black uppercase tracking-wide text-xs sm:text-sm w-full sm:w-auto"
                              >
                                <span className="flex items-center justify-center sm:justify-start gap-3">
                                  Read Story
                                  <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-2 transition-transform duration-300"
                                  />
                                </span>
                              </button>
                            </div>

                            <div
                              className={`lg:col-span-6 order-1 lg:order-2 ${
                                index % 2 === 0
                                  ? ""
                                  : "lg:col-start-1 lg:row-start-1 lg:order-1"
                              }`}
                            >
                              <div
                                className="relative group cursor-pointer"
                                onClick={() =>
                                  handleDestinationClick(destination)
                                }
                              >
                                <div className="overflow-hidden">
                                  <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                    loading="lazy"
                                  />
                                </div>

                                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                                  <span className="bg-white/90 text-black px-2 sm:px-3 py-1 text-xs font-black uppercase">
                                    {destination.difficulty}
                                  </span>
                                </div>

                                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                                  <div className="bg-black/80 text-white px-2 sm:px-3 py-1 text-xs font-mono flex items-center gap-1">
                                    <Star
                                      size={12}
                                      className="text-orange-400 fill-orange-400"
                                    />
                                    {destination.rating}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
          ) : (
            <div className="bg-white text-black min-h-screen flex items-center justify-center p-12">
              <div className="text-center max-w-lg">
                <div className="w-24 h-24 bg-black text-white flex items-center justify-center mx-auto mb-8">
                  <Mountain className="h-12 w-12" />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tight mb-6">
                  No Stories Found
                </h3>
                <p className="text-lg font-light leading-relaxed mb-8">
                  We couldn&apos;t find any stories matching your search. Try
                  exploring different keywords.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="cursor-pointer border-2 border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 font-black uppercase tracking-wide text-sm"
                >
                  <span className="flex items-center gap-3">
                    View All Stories
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Instagram Section */}
      <section
        id="instagram"
        className="bg-black text-white border-t-4 border-orange-400"
      >
        <div className="py-16 border-b-2 border-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-8 items-end">
              <div className="col-span-12 md:col-span-8">
                <div className="mb-6">
                  <span className="bg-orange-400 text-black px-6 py-2 text-sm font-black tracking-[0.3em] uppercase transform -skew-x-12 inline-block">
                    Visual Stories
                  </span>
                </div>
                <h2 className="text-[clamp(3rem,7vw,8rem)] font-black leading-[0.8] uppercase tracking-tight">
                  Trail
                  <br />
                  <span className="text-orange-400">Moments</span>
                </h2>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <p className="text-white text-lg font-light leading-relaxed mb-4">
                  Raw captures from the wilderness that tell stories words
                  cannot.
                </p>
                <div className="flex md:justify-end gap-4 text-xs text-gray-400 font-mono">
                  <span className="bg-gray-900 px-3 py-1">DAILY UPDATES</span>
                  <span className="bg-gray-900 px-3 py-1">@NOMORRA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-12">
          <button
            onClick={scrollLeft}
            className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black border-2 border-white hover:bg-orange-400 hover:border-orange-400 hover:text-black p-4 transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollRight}
            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black border-2 border-white hover:bg-orange-400 hover:border-orange-400 hover:text-black p-4 transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="overflow-x-auto scrollbar-hide"
            ref={scrollContainerRef}
          >
            <div className="flex w-max gap-4 px-8">
              {[
                {
                  id: 1,
                  image:
                    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
                  alt: "Campfire at sunset",
                },
                {
                  id: 2,
                  image:
                    "https://images.unsplash.com/photo-1478827387698-1527781a4887?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
                  alt: "Mountain hiking trail",
                },
                {
                  id: 3,
                  image:
                    "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
                  alt: "Tent camping by lake",
                },
                {
                  id: 4,
                  image:
                    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
                  alt: "Forest hiking group",
                },
                {
                  id: 5,
                  image:
                    "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Night camping under stars",
                },
                {
                  id: 6,
                  image:
                    "https://plus.unsplash.com/premium_photo-1673301216672-b30751907be9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Mountain landscape view",
                },
                {
                  id: 7,
                  image:
                    "https://images.unsplash.com/photo-1593484443971-9281a60e3cd7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Campfire cooking",
                },
                {
                  id: 8,
                  image:
                    "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Riverside camping",
                },
                {
                  id: 9,
                  image:
                    "https://plus.unsplash.com/premium_photo-1675438854144-ade5c8be1101?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Hiking boots on trail",
                },
                {
                  id: 10,
                  image:
                    "https://images.unsplash.com/photo-1563256919-c093646a6a0e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Wilderness panorama",
                },
              ].map((post) => (
                <div
                  key={post.id}
                  className="relative w-80 h-80 flex-shrink-0 group cursor-pointer overflow-hidden border-4 border-white hover:border-orange-400 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-black/80 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                      <Instagram size={20} />
                      <span className="text-xs font-black uppercase tracking-wide">
                        View Post
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black px-2 py-1 text-xs font-black">
                      {String(post.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-orange-400" id="contact">
        <div className="py-20 border-b-2 border-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="grid grid-cols-12 gap-8 items-end">
                <div className="col-span-12 md:col-span-8">
                  <div className="mb-6">
                    <span className="bg-white text-black px-6 py-2 text-sm font-black tracking-[0.3em] uppercase transform -skew-x-12 inline-block">
                      Connect
                    </span>
                  </div>
                  <h2 className="text-[clamp(2rem,7vw,8rem)] font-black leading-[0.8] text-white uppercase tracking-tight">
                    Join The
                    <br />
                    <span className="text-orange-400">Journey</span>
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-4 md:text-right">
                  <p className="text-white text-lg font-light leading-relaxed">
                    Ready to explore America&apos;s wilderness together?
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center mb-8">
                  <Mountain className="h-12 w-12 text-orange-400 mr-4" />
                  <span className="text-3xl font-black text-white uppercase tracking-tight">
                    Nomorra
                  </span>
                </div>
                <div className="space-y-6">
                  <div className="w-16 h-1 bg-orange-400"></div>
                  <p className="text-white text-lg font-light leading-relaxed">
                    Documenting authentic wilderness experiences across
                    America&apos;s most treasured landscapes. Every trail tells
                    a story.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="border-2 border-white p-4 hover:bg-white hover:text-black transition-colors duration-300">
                    <div className="text-2xl font-black text-orange-400">
                      25+
                    </div>
                    <div className="text-xs font-black uppercase tracking-wide">
                      Parks
                    </div>
                  </div>
                  <div className="border-2 border-white p-4 hover:bg-white hover:text-black transition-colors duration-300">
                    <div className="text-2xl font-black text-orange-400">
                      500+
                    </div>
                    <div className="text-xs font-black uppercase tracking-wide">
                      Miles
                    </div>
                  </div>
                  <div className="border-2 border-white p-4 hover:bg-white hover:text-black transition-colors duration-300">
                    <div className="text-2xl font-black text-orange-400">
                      3+
                    </div>
                    <div className="text-xs font-black uppercase tracking-wide">
                      Years
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black text-white mb-8 uppercase tracking-[0.3em] border-b border-orange-400 pb-2">
                  Explore
                </h3>
                <ul className="space-y-4">
                  {[
                    { name: "Featured Parks", href: "#blogs" },
                    { name: "Latest Stories", href: "#latest" },
                    { name: "Photo Galleries", href: "#instagram" },
                    { name: "About Me", href: "#about" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        onClick={(e) =>
                          handleSmoothScroll(e, link.href.substring(1))
                        }
                        href={link.href}
                        className="text-white hover:text-orange-400 transition-colors duration-200 font-mono text-sm cursor-pointer block border-l-2 border-transparent hover:border-orange-400 pl-4 hover:pl-6 transition-all duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-black text-white mb-8 uppercase tracking-[0.3em] border-b border-orange-400 pb-2">
                  Connect
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-white">
                    <Mail size={16} className="text-orange-400" />
                    <span className="font-mono text-sm">hello@nomorra.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <MapPin size={16} className="text-orange-400" />
                    <span className="font-mono text-sm">Colorado, USA</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: "Instagram",
                      url: "https://instagram.com/nomorra_explores",
                      icon: Instagram,
                    },
                    {
                      name: "YouTube",
                      url: "https://youtube.com/@nomorra",
                      icon: Youtube,
                    },
                    {
                      name: "Twitter",
                      url: "https://twitter.com/nomorra",
                      icon: Twitter,
                    },
                    {
                      name: "Facebook",
                      url: "https://facebook.com/nomorra",
                      icon: Facebook,
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors duration-200 font-mono text-sm border-l-2 border-transparent hover:border-orange-400 pl-4 hover:pl-6 transition-all duration-200"
                    >
                      <social.icon size={16} />
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0 font-mono">
                © 2025 NOMORRA — ALL RIGHTS RESERVED
              </div>
              <div className="flex gap-8">
                {["Privacy", "Terms", "Standards"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleFooterLinkClick(link);
                    }}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm font-mono cursor-pointer uppercase tracking-wide"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <DestinationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        destination={selectedDestination}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default NationalParksBlog;
