import React from 'react';
import { Poppins } from 'next/font/google';
import HeroSearch from './HeroSearch';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const HeroContent = () => {
  return (
    <div className="relative w-full h-[600px] flex mt-[50px] justify-center px-4 overflow-hidden">

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[1000px] mt-20">

        {/* Main Heading */}
        <h1
          className={`${poppins.className} text-[48px]   font-bold text-white mb-5 tracking-tight leading-[1.15]`}
        >
          Find Your Perfect Home in Maharashtra
        </h1>

        {/* Subheading */}
        <div
          className={`${poppins.className} flex flex-col md:flex-row items-center justify-center gap-2 text-[17px] md:text-lg text-white mb-10`}
        >
          <span className="font-semibold">
            महाराष्ट्रातील आपले घर शोधा
          </span>
          <span className="hidden md:inline opacity-60">—</span>
          <span className="font-medium opacity-90">
            Official State Rental Housing Portal by Mhada
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5">

          <button
            className={`${poppins.className} w-[165px] h-[54px] bg-[#D9D9D9]/80 hover:bg-white text-[#028541] text-[16px] font-medium rounded-[12px] transition-all shadow-lg`}
          >
            Find a Property
          </button>

          <button
            className={`${poppins.className} w-[183px] h-[54px] bg-[#00873E] hover:bg-[#007034] text-white text-[16px] font-medium rounded-[12px] transition-all border border-white/10 shadow-lg`}
          >
            List Your Property
          </button>
          

        </div>
        
        
      </div>
      
    </div>
  );
};

export default HeroContent;
