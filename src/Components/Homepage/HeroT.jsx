"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // <-- import router
import HeroNavbarT from "./HeroNavbar/HeroNavbarT";
import HeroContent from "./HeroNavbar/HeroContent";
import { Search } from "lucide-react";

// Example properties array (you already have 40)
const properties = [
  { id: 1, title: "Modern 2BHK in Andheri West", location: "Andheri West", bhk: "2BHK", image: "/room1.png" },
  { id: 2, title: "Cozy 2BHK in Powai", location: "Powai", bhk: "2BHK", image: "/room1.png" },
  { id: 3, title: "Cozy 1BHK in Koregaon Park", location: "Koregaon Park", bhk: "1BHK", image: "/room2.png" },
  // ... add remaining 37 properties
];

const Hero = () => {
  const router = useRouter(); // <-- initialize router
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const suggestions = properties
    .filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 6);

  const handleSearch = (query = searchQuery) => {
    const filtered = properties.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase());
      const matchCity = city === "" || p.location.toLowerCase().includes(city.toLowerCase());
      const matchType = propertyType === "" || p.bhk.toLowerCase() === propertyType.toLowerCase();
      return matchSearch && matchCity && matchType;
    });

    setFilteredProperties(filtered);
    setShowSuggestions(false);

    // Redirect to allpropertyTenant page
    router.push(`/Tenant/allpropertyTenant?search=${encodeURIComponent(query)}`);
  };

  const handleClear = () => {
    setSearchQuery("");
    setCity("");
    setPropertyType("");
    setFilteredProperties(properties);
  };

  return (
    <section className="relative w-full h-[700px] overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Mhada.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        <HeroNavbarT />
        <HeroContent />

        {/* Search Bar */}
        <div className="w-full flex justify-center text-black px-4 -mt-42 relative z-20">
          <div className="w-full max-w-[1340px] bg-white border rounded-xl p-4 lg:p-6 flex flex-col lg:flex-row gap-3 shadow-lg relative">
            {/* Search Input */}
            <div className="relative w-full lg:flex-1">
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 h-[52px]">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search properties, localities..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>

              {/* Suggestions */}
              {showSuggestions && searchQuery && (
                <div className="absolute top-[58px] left-0 w-full bg-white shadow-lg rounded-lg z-50">
                  {suggestions.length > 0 ? (
                    suggestions.map((item) => (
                      <div
                        key={item.id}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSearchQuery(item.title);
                          handleSearch(item.title); // Redirects on suggestion click
                        }}
                      >
                        <p className="font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.location}</p>
                      </div>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-gray-500">No results</p>
                  )}
                </div>
              )}
            </div>

            {/* Clear Button */}
            <button
              onClick={handleClear}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 rounded-lg h-[52px] font-semibold"
            >
              Clear
            </button>

            {/* Search Button */}
            <button
              onClick={() => handleSearch()}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-lg h-[52px] font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
