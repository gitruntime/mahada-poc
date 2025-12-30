import React, { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const CityDropdownDiv = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  return (
    <div className="relative">
      <div
        className={`
          flex items-center justify-center
          w-[114px] h-[32px]
          pt-[6px] pr-[14px] pb-[6px] pl-[14px]
          gap-[4px]
          rounded-full border border-white
          bg-[#4A5C5A]
          cursor-pointer text-white
        `}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {/* Left Icon */}
        <MapPin size={16} strokeWidth={2} className="flex-shrink-0" />

        {/* Text */}
        <span className={`${poppins.className} text-[12px] font-[400] leading-none`}>
          {selectedCity}
        </span>

        {/* Right Chevron Icon */}
        <ChevronDown size={16} strokeWidth={2} className="flex-shrink-0" />
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className={`absolute top-[36px] left-0 w-[114px] bg-white text-black ${poppins.className} rounded-md shadow-lg z-50`}>
          {["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"].map((city) => (
            <div
              key={city}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer text-[12px]"
              onClick={() => {
                setSelectedCity(city);
                setShowDropdown(false);
              }}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityDropdownDiv;
