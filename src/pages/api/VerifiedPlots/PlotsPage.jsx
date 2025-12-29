import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const properties = [
    {
        id: 1,
        title: "Sea-facing 2BHK in Worli",
        location: "Worli Sea Face",
        bhk: "2BHK",
        floor: "5th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Security"],
        price: "₹3.5CR",
        deposit: 100000,
        rating: 4.5,
        reviews: 23,
        image: "/plot1.jpg",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 2,
        title: "Premium 1BHK in Viman Nagar",
        location: "Viman Nagar, Near Airport",
        bhk: "1BHK",
        floor: "2nd Floor",
        amenities: ["Wi-Fi", "Security", "Garden", "Water Supply 24x7"],
        price: "₹1.26 CR",
        deposit: 50000,
        rating: 4.2,
        reviews: 15,
        image: "/plot2.jpg",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 3,
        title: "Budget Studio in Goregaon",
        location: "Goregaon West, Near Station",
        bhk: "3BHK",
        floor: "8th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"],
        price: "₹80 lacs",
        deposit: 150000,
        rating: 4.8,
        reviews: 42,
        image: "/plot3.jpg",
        verified: true,
        bhkTag: "3BHK",
    },
];

const PlotsPage = () => {
   return (
    <div className="pt-8 sm:pt-10 bg-[#F3F3F3] pb-10">

      {/* Header */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-[40px] mt-6">
        <div className="flex items-start justify-between mb-6 sm:mb-8">
          <div>
            <h1
              className={`${poppins.className}
                text-[22px] sm:text-[26px] lg:text-[32px]
                font-semibold text-gray-900`}
            >
              Verified Plots for sale in
              <span className="text-[#028541] cursor-pointer"> Mumbai</span>
            </h1>

            <p className={`${poppins.className} text-gray-500 text-[14px] sm:text-[16px] mt-1`}>
              40 properties found
            </p>
          </div>

          <button className={`hidden sm:flex items-center gap-1 text-gray-900 ${poppins.className}`}>
            <span className="text-[14px] font-medium">View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-[40px]">
        <div
          className="
            flex gap-4 sm:gap-6
            overflow-x-auto
            snap-x snap-mandatory
            pb-4
          "
        >
          {properties.map((property, index) => (
            <div
              key={`${property.id}-${index}`}
              className={`
                snap-start
                w-[280px] sm:w-[340px] lg:w-[440px]
                min-w-[280px] sm:min-w-[340px] lg:min-w-[440px]
                h-auto
                bg-white rounded-[12px]
                border border-[#E5E7EB]
                shadow-[0px_4px_20px_-2px_rgba(229,231,235,0.8)]
                flex flex-col
                ${poppins.className}
              `}
            >
              {/* Image */}
              <div className="relative w-full h-[170px] sm:h-[190px]">
                <Image
                  src={property.image}
                  alt="Property"
                  fill
                  className="object-cover"
                />

                {property.verified && (
                  <div className="absolute top-3 left-3 flex items-center bg-[#028541] rounded-full px-2 h-[22px]">
                    <img src="/verified_logo.png" className="w-3 h-3" />
                    <span className="ml-1 text-white text-[12px] font-bold">
                      Verified
                    </span>
                  </div>
                )}

                <div className="absolute top-3 right-3 bg-[#1E3A8A] text-white text-[12px] font-bold px-3 py-1 rounded-full">
                  {property.bhkTag}
                </div>

                <div className="absolute bottom-0 left-0 w-full px-3 py-1 text-white text-[13px]
                                bg-gradient-to-t from-black/80 to-transparent flex items-center gap-1">
                  <img src="/start_rating.png" className="w-4 h-4" />
                  {property.rating}
                  <span className="opacity-80">({property.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-[16px] sm:text-[18px] font-bold">
                    {property.title}
                  </h3>

                  <p className="flex items-center gap-2 text-gray-500 text-[13px] mt-1">
                    <img src="/location.png" className="w-4 h-4" />
                    {property.location}
                  </p>

                  <div className="flex gap-4 text-gray-500 text-[13px] mt-3">
                    <span className="flex items-center gap-2">
                      <img src="/bed.png" className="w-4 h-4" />
                      {property.bhk}
                    </span>
                    <span className="flex items-center gap-2">
                      <img src="/scale.png" className="w-4 h-4" />
                      {property.floor}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {property.amenities.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 border rounded-full text-[11px] font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t flex items-center justify-between">
                  <p className="text-orange-500 font-bold text-[18px]">
                    {property.price}
                  </p>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-[13px]
                                     px-4 py-2 rounded-[10px]">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );

};

export default PlotsPage;
