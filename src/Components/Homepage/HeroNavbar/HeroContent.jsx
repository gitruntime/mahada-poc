import React from "react";
import { Poppins } from "next/font/google";
import HeroSearch from "./HeroSearch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeroContent = () => {
  return (
    <div
      className="
        relative w-full
        min-h-[520px] sm:min-h-[560px] lg:h-[600px]
        flex justify-center
        px-4
        mt-[40px] sm:mt-[50px]
        overflow-hidden
      "
    >
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[1000px] w-full pt-16 sm:pt-20">

        {/* Heading */}
        <h1
          className={`${poppins.className}
            text-[30px] sm:text-[36px] md:text-[44px] lg:text-[48px]
            font-bold text-white
            mb-4 sm:mb-5
            tracking-tight leading-tight`}
        >
          Find Your Perfect Home in Maharashtra
        </h1>

        {/* Subheading */}
        <div
          className={`${poppins.className}
            flex flex-col md:flex-row
            items-center justify-center
            gap-1 md:gap-2
            text-[14px] sm:text-[15px] md:text-[17px]
            text-white
            mb-8 sm:mb-10`}
        >
          <span className="font-semibold">
            महाराष्ट्रातील आपले घर शोधा
          </span>
          <span className="hidden md:inline opacity-60">—</span>
          <span className="font-medium opacity-90">
            Official State Rental Housing Portal by Mhada
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">

          <button
            className={`${poppins.className}
              w-[150px] sm:w-[165px]
              h-[48px] sm:h-[54px]
              bg-[#D9D9D9]/80 hover:bg-white
              text-[#028541]
              text-[14px] sm:text-[16px]
              font-medium
              rounded-[12px]
              transition-all
              shadow-lg`}
          >
            Find a Property
          </button>

          <button
            className={`${poppins.className}
              w-[165px] sm:w-[183px]
              h-[48px] sm:h-[54px]
              bg-[#00873E] hover:bg-[#007034]
              text-white
              text-[14px] sm:text-[16px]
              font-medium
              rounded-[12px]
              transition-all
              border border-white/10
              shadow-lg`}
          >
            List Your Property
          </button>

        </div>

        {/* Search bar spacing (if you add HeroSearch later) */}
        {/* <div className="mt-10 w-full">
          <HeroSearch />
        </div> */}

      </div>
    </div>
  );
};

export default HeroContent;
