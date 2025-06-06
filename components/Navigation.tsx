"use client";

import React from "react";
import {
  Mountain,
  Menu,
  X,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { NavigationProps } from "@/types";

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

const Navigation: React.FC<NavigationProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-4 border-white p-2 mr-4">
              <Mountain size={20} className="text-white" />
            </div>
            <div className="text-white">
              <div className="text-xl font-black uppercase tracking-tight">
                Nomorra
              </div>
              <div className="text-xs font-mono uppercase tracking-widest opacity-80">
                Blogs
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <a
              href="#blogs"
              onClick={(e) => handleSmoothScroll(e, "blogs")}
              className="text-white font-black text-sm uppercase tracking-[0.2em] hover:text-orange-400 transition-colors duration-300 relative group"
            >
              Stories
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="text-white font-black text-sm uppercase tracking-[0.2em] hover:text-orange-400 transition-colors duration-300 relative group"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="text-white font-black text-sm uppercase tracking-[0.2em] hover:text-orange-400 transition-colors duration-300 relative group"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3 border-2 border-white/30 px-4 py-2">
              <a
                href="https://facebook.com/campexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com/campexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://instagram.com/campexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com/@campexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="cursor-pointer border-2 border-white p-3 text-white hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className={`fixed inset-0 z-50 overflow-y-auto ${
            isMobileMenuOpen ? "" : "pointer-events-none"
          }`}
        >
          <div
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ease-out ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={`fixed top-0 right-0 h-full bg-black border-l-4 border-orange-400 w-3/4 shadow-2xl transform transition-all duration-300 ease-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full w-full">
              <div className="flex items-center justify-between px-6 py-6 border-b-2 border-orange-400">
                <div className="flex items-center">
                  <Mountain className="h-8 w-8 text-orange-400 mr-3" />
                  <span className="text-xl font-black text-white uppercase tracking-tight">
                    Nomorra
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer text-white hover:text-orange-400 p-2 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 px-6 py-8">
                <nav className="space-y-1">
                  {[
                    { name: "Stories", href: "#blogs" },
                    { name: "About", href: "#about" },
                    { name: "Contact", href: "#contact" },
                  ].map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href.substring(1));
                        setIsMobileMenuOpen(false);
                      }}
                      className="group flex items-center px-4 py-4 text-lg font-black text-white uppercase tracking-wide hover:text-orange-400 transition-all duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="transform group-hover:translate-x-2 transition-transform duration-200">
                        {item.name}
                      </span>
                      <ArrowRight
                        size={18}
                        className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      />
                    </a>
                  ))}
                </nav>

                <div className="mt-12 pt-8 border-t-2 border-orange-400">
                  <h3 className="text-sm font-black text-orange-400 uppercase tracking-wider mb-6 px-4">
                    Follow The Journey
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        icon: Facebook,
                        name: "Facebook",
                        url: "https://facebook.com/campexplorer",
                      },
                      {
                        icon: Twitter,
                        name: "Twitter",
                        url: "https://twitter.com/campexplorer",
                      },
                      {
                        icon: Instagram,
                        name: "Instagram",
                        url: "https://instagram.com/campexplorer",
                      },
                      {
                        icon: Youtube,
                        name: "YouTube",
                        url: "https://youtube.com/@campexplorer",
                      },
                    ].map(({ icon: Icon, name, url }, index) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 text-white hover:text-orange-400 transition-all duration-200 group"
                        aria-label={name}
                        style={{ animationDelay: `${(index + 3) * 100}ms` }}
                      >
                        <Icon
                          size={20}
                          className="mr-3 group-hover:scale-110 transition-transform duration-200"
                        />
                        <span className="text-sm font-medium">{name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t-2 border-orange-400">
                <p className="text-xs text-gray-400 text-center font-mono">
                  Exploring wilderness since 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
