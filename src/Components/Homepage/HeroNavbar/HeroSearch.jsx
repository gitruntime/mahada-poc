import React from "react";
import { Poppins } from "next/font/google";
import { Search, MapPin, ChevronDown } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeroSearch = () => {
  return (
    <div className="w-full  flex justify-center px-4">
      <div
        className="
          w-full max-w-[1240px]
          bg-white rounded-[16px]
          px-4 py-4
          flex flex-col lg:flex-row
          gap-3
          shadow-md
        "
      >

        {/* Search Input */}
        <div className="flex items-center gap-3 bg-[#F4F2EE] rounded-[10px] px-4 h-[auto] w-full lg:flex-1">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties, localities..."
            className="w-full bg-transparent outline-none text-[#6B7280] placeholder-[#6B7280]"
          />
        </div>

        {/* City + Property Type */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

          {/* Select City */}
          <div className="flex items-center justify-between gap-3 bg-[#F4F2EE] rounded-[10px] px-4 h-[52px] w-full sm:w-[175px] cursor-pointer">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-black text-sm">Select City</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>

          {/* Property Type */}
          <div className="flex items-center justify-between gap-3 bg-[#F4F2EE] rounded-[10px] px-4 h-[52px] w-full sm:w-[180px] cursor-pointer">
            <span className="text-black text-sm">Property Type</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full sm:w-auto">

          {/* Filters */}
          <button className="flex items-center justify-center gap-2 h-[48px] w-full sm:w-[90px]
                             rounded-[10px] border-2 border-orange-500
                             text-orange-500 hover:bg-orange-50 transition">
            <img src="/filtericon.png" alt="Filter" className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
          </button>

          {/* Search */}
          <button
            className={`${poppins.className}
              flex items-center justify-center gap-2
              h-[48px] w-full sm:w-[105px]
              rounded-[12px]
              bg-orange-500 text-white
              font-medium text-[15px]
              hover:bg-orange-600 transition`}
          >
            <img src="/searchicon.png" alt="Search" className="w-4 h-4" />
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSearch;
