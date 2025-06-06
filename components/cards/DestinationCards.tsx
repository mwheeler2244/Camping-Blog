import React from "react";
import Image from "next/image";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { Lato } from "next/font/google";
import { DestinationCardProps } from "@/types";
import StarRating from "../ui/StarRating";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const FeaturedDestination: React.FC<DestinationCardProps> = ({
  destination,
  onClick,
}) => {
  return (
    <article
      className={`group relative bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${lato.className}`}
      onClick={() => onClick(destination)}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          width={400}
          height={320}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-sm font-medium bg-white/90 backdrop-blur-sm text-gray-800">
            {destination.difficulty}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:translate-x-1 transition-transform duration-200">
          {destination.name}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {destination.description}
        </p>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-2 text-green-700" />
          <span className="text-sm font-medium">{destination.location}</span>
        </div>

        <div className="mb-4">
          <StarRating rating={destination.rating} />
        </div>

        <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-green-800 text-green-100 border border-green-700">
          Featured
        </span>
      </div>
    </article>
  );
};

export const CompactDestination: React.FC<DestinationCardProps> = ({
  destination,
  onClick,
}) => {
  return (
    <article
      className={`group flex bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 ${lato.className}`}
      onClick={() => onClick(destination)}
    >
      <div className="relative w-24 flex-shrink-0 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          width={96}
          height={96}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="flex-1 p-3">
        <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:translate-x-1 transition-transform duration-200">
          {destination.name}
        </h4>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <MapPin size={12} className="mr-1 text-green-700" />
            <span className="text-xs">{destination.location}</span>
          </div>
          <span className="text-xs px-2 py-1 bg-green-800 text-green-100">
            {destination.difficulty}
          </span>
        </div>
      </div>
    </article>
  );
};

export const RegularDestination: React.FC<DestinationCardProps> = ({
  destination,
  onClick,
}) => {
  return (
    <article
      className={`bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${lato.className}`}
      onClick={() => onClick(destination)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          width={400}
          height={192}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800">
            {destination.difficulty}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:translate-x-1 transition-transform duration-200">
          {destination.name}
        </h4>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <MapPin size={14} className="mr-1 text-green-700" />
            <span className="text-sm">{destination.location}</span>
          </div>
          <StarRating rating={destination.rating} />
        </div>
      </div>
    </article>
  );
};
