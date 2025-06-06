import React from "react";
import Image from "next/image";
import { Mountain, TreePine, Compass, Camera, MapPin } from "lucide-react";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-white text-black">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-12 lg:col-span-7 p-12 lg:p-16 flex flex-col justify-center border-r-4 border-black">
          <div className="max-w-3xl">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <Mountain className="h-8 w-8 text-orange-400" />
                <span className="text-xs font-black tracking-[0.3em] uppercase bg-black text-white px-4 py-2 transform -skew-x-12">
                  About Me
                </span>
              </div>

              <h2
                className={`text-[clamp(3rem,7vw,8rem)] font-black leading-[0.8] uppercase tracking-tight mb-8 ${lato.className}`}
              >
                Hi, I'm
                <br />
                <span className="text-orange-400">Nomorra</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="w-20 h-2 bg-black"></div>
                <p className="text-xl leading-relaxed font-light">
                  A passionate explorer documenting my journey through
                  America&apos;s most breathtaking national parks. What started
                  as weekend getaways has evolved into a deep love affair with
                  the wilderness.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-1 bg-orange-400"></div>
                <p className="text-lg leading-relaxed font-light">
                  Through this blog, I share the raw beauty, hidden gems, and
                  transformative experiences that these sacred places offer.
                  Join me as I chase sunrises, conquer trails, and discover the
                  stories that nature whispers to those who listen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Mountain size={20} className="text-orange-400" />
                    <span className="text-2xl font-black">25+</span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wide">
                    Parks Visited
                  </span>
                </div>

                <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <TreePine size={20} className="text-orange-400" />
                    <span className="text-2xl font-black">500+</span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wide">
                    Miles Hiked
                  </span>
                </div>

                <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Compass size={20} className="text-orange-400" />
                    <span className="text-2xl font-black">3+</span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wide">
                    Years Exploring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 bg-black text-white relative">
          <div className="relative h-96 lg:h-[60vh]">
            <Image
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Nomorra camping by a pristine lake"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="space-y-4">
                <div className="bg-white/90 text-black px-4 py-2 inline-block">
                  <span className="text-xs font-black uppercase tracking-wide">
                    Base Camp
                  </span>
                </div>
                <div className="bg-black/80 text-white px-4 py-2">
                  <span className="text-sm font-mono">
                    Backcountry camping in pristine wilderness
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 h-48 lg:h-[40vh]">
            <div className="relative overflow-hidden border-r-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Campfire at sunset"
                fill
                className="object-cover filter hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white text-black px-2 py-1 text-xs font-black uppercase">
                  Sunset
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1683009427513-28e163402d16?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mountain hiking trail"
                fill
                className="object-cover filter hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4">
                <span className="bg-orange-400 text-black px-2 py-1 text-xs font-black uppercase">
                  Trail
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 border-t-2 border-white">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Camera size={16} className="text-orange-400" />
                  <span className="text-xs font-black uppercase tracking-wide">
                    Latest Expedition
                  </span>
                </div>
                <div className="text-sm font-mono">Glacier National Park</div>
                <div className="text-xs text-gray-400 font-mono">
                  Montana, USA
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-orange-400" />
                  <span className="text-xs font-black uppercase tracking-wide">
                    Next Adventure
                  </span>
                </div>
                <div className="text-sm font-mono">Olympic Peninsula</div>
                <div className="text-xs text-gray-400 font-mono">
                  Washington, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8 border-t-4 border-orange-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-black text-orange-400">2024</div>
              <div className="text-xs font-mono uppercase tracking-wide">
                Year Started
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-orange-400">50K+</div>
              <div className="text-xs font-mono uppercase tracking-wide">
                Photos Taken
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-orange-400">12</div>
              <div className="text-xs font-mono uppercase tracking-wide">
                States Explored
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-orange-400">∞</div>
              <div className="text-xs font-mono uppercase tracking-wide">
                Adventures Ahead
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
