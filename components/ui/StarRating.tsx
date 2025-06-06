import React from "react";
import { Star } from "lucide-react";
import { Lato } from "next/font/google";
import { StarRatingProps } from "@/types";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={`flex items-center gap-1 ${lato.className}`}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < fullStars
              ? "fill-amber-400 text-amber-400"
              : index === fullStars && hasHalfStar
              ? "fill-amber-200 text-amber-400"
              : "text-gray-300"
          } transition-all duration-200`}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-700">{rating}</span>
    </div>
  );
};

export default StarRating;
