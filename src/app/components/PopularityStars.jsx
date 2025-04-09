import React from "react";
import { calculatePopularity } from "../../utils/popularityCalculator";

const PopularityStars = ({ score }) => {
  const starCount = calculatePopularity(score);

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < Math.floor(starCount)) {
      return (
        <svg key={index} viewBox="0 0 51 48" width={20} height={20}>
          <path
            fill="#f7d6a7"
            d="M25.5,1.7l5.8,17.8h18.7l-15.1,11l5.8,17.8l-15.1-11l-15.1,11l5.8-17.8L1.1,19.5h18.7L25.5,1.7z"
          />
        </svg>
      );
    } else if (index < starCount) {
      return (
        <svg key={index} viewBox="0 0 51 48" width={20} height={20}>
          <defs>
            <mask id="star-mask-left">
              <rect width="25.5" height="48" fill="white" />
            </mask>
            <mask id="star-mask-right">
              <rect x="25.5" width="25.5" height="48" fill="white" />
            </mask>
          </defs>
          <path
            mask="url(#star-mask-left)"
            fill="#f7d6a7"
            d="M25.5,1.7l5.8,17.8h18.7l-15.1,11l5.8,17.8l-15.1-11l-15.1,11l5.8-17.8L1.1,19.5h18.7L25.5,1.7z"
          />
          <path
            mask="url(#star-mask-right)"
            fill="#d9d9d9"
            d="M25.5,1.7l5.8,17.8h18.7l-15.1,11l5.8,17.8l-15.1-11l-15.1,11l5.8-17.8L1.1,19.5h18.7L25.5,1.7z"
          />
        </svg>
      );
    } else {
      return (
        <svg key={index} viewBox="0 0 51 48" width={20} height={20}>
          <path
            fill="#d9d9d9"
            d="M25.5,1.7l5.8,17.8h18.7l-15.1,11l5.8,17.8l-15.1-11l-15.1,11l5.8-17.8L1.1,19.5h18.7L25.5,1.7z"
          />
        </svg>
      );
    }
  });

  return (
    <div className="inline-flex">
      {stars}{" "}
      <span className="avenir-book text-[14px] ml-2">{starCount}/5</span>
    </div>
  );
};

export default PopularityStars;
