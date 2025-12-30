import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { Search } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeroSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const cities = ["Mumbai", "Navi-Mumbai", "Thane", "Pune", "Nagpur", "Nashik"];
  const propertyTypes = ["Apartment", "Villa", "Studio", "Office"];

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
    console.log("City:", city);
    console.log("Property Type:", propertyType);
    alert(`Searching for "${searchQuery}" in "${city}" (${propertyType})`);
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-[1340px] bg-white rounded-[16px] px-4 py-4 flex flex-col lg:flex-row gap-3 shadow-md z-30">

        {/* Search Input */}
        <div className="flex items-center gap-3 bg-[#F4F2EE] rounded-[10px] px-4 h-[52px] w-full lg:flex-1">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties, localities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-[#6B7280] placeholder-[#6B7280]"
          />
        </div>

        {/* City + Property Type */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-[#F4F2EE] rounded-[10px] px-4 h-[52px] w-full sm:w-[175px] cursor-pointer text-gray-700"
          >
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="bg-[#F4F2EE] rounded-[10px] px-4 h-[52px] w-full sm:w-[180px] cursor-pointer text-gray-700"
          >
            <option value="">Property Type</option>
            {propertyTypes.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full sm:w-auto">
  <button
    className="flex items-center justify-center gap-2 h-[48px] w-full sm:w-[90px] rounded-[10px] border-2 border-orange-500 text-orange-500 
               hover:bg-orange-50 hover:scale-105 hover:shadow-md transition transform duration-200"
  >
    <img src="/filtericon.png" alt="Filter" className="w-4 h-4" />
    <span className="text-sm font-medium">Filters</span>
  </button>

  <button
    onClick={handleSearch}
    className={`${poppins.className} flex items-center justify-center gap-2 h-[48px] w-full sm:w-[105px] rounded-[12px] bg-orange-500 text-white font-medium text-[15px] 
               hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition transform duration-200`}
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
