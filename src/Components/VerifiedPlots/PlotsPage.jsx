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
        <div className="pt-[40px] bg-[#F3F3F3] pb-10">


            {/* 🔹 Header Wrapper */}
            <div className="max-w-[1380px] mt-[30px] mx-auto px-[40px]">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h1
                            className={`text-[32px] ${poppins.className} font-semibold text-gray-900 flex items-center gap-2`}
                        >
                            Verified Plots for scale in
                            <span className="text-[#028541] cursor-pointer"> Mumbai</span>
                        </h1>

                        <p className={`text-gray-500 ${poppins.className} text-[16px] mt-1`}>
                            40 properties found
                        </p>
                    </div>

                    <button
                        className={`flex items-center gap-1 text-gray-900 ${poppins.className}`}
                    >
                        <span className="text-[14px] font-medium">View All</span>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* 🔹 Property Cards Section */}
            <div className="max-w-[1380px] mx-auto px-[40px]">
                <div className="flex flex-nowrap gap-6 overflow-x-auto">

                    {properties.map((property, index) => (
                        <div
                            key={`${property.id}-${index}`}
                            className={`
          w-[440px] h-[430px] border border-t-0 border-[#E5E7EB]
          bg-white rounded-[12px]
          shadow-[0px_4px_20px_-2px_rgba(229,231,235,0.8)]
          overflow-hidden
          flex flex-col
          ${poppins.className}
        `}
                        >
                            {/* Image Section */}
                            <div className="relative w-full h-[192px] flex-shrink-0">
                                <Image
                                    src={property.image}
                                    alt="Property"
                                    fill
                                    sizes="440px"
                                    className="object-cover"
                                />

                                {/* Verified Badge */}
                                {property.verified && (
                                    <div className="absolute top-3 left-3 flex items-center bg-[#028541] rounded-full px-2 h-[22px]">
                                        <img src="/verified_logo.png" alt="" className="w-3 h-3" />
                                        <span className="ml-1 text-white text-[12px] font-bold">
                                            Verified
                                        </span>
                                    </div>
                                )}

                                {/* BHK Tag */}
                                <div className="absolute top-3 right-3 bg-[#1E3A8A] text-white text-[12px] font-bold px-3 py-1 rounded-full">
                                    {property.bhkTag}
                                </div>

                                {/* Rating */}
                                <div
                                    className="
              absolute bottom-0 left-0 w-full
              flex items-center gap-1
              px-3 py-1
              text-white text-[14px]
              bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]
            "
                                >
                                    <img src="/start_rating.png" alt="" className="w-4 h-4" />
                                    <span>{property.rating}</span>
                                    <span className="text-white/80">
                                        ({property.reviews} reviews)
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-between flex-1 p-5">
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-900 leading-[28px] tracking-[-0.45px]">
                                        {property.title}
                                    </h3>

                                    <p className="flex items-center gap-2 text-gray-500 text-[14px] mt-1">
                                        <img src="/location.png" alt="" className="w-4 h-4" />
                                        {property.location}
                                    </p>

                                    <div className="flex items-center gap-6 text-[#6B7280] text-[14px] mt-3">
                                        <div className="flex items-center gap-2">
                                            <img src="/bed.png" alt="" className="w-4 h-4" />
                                            {property.bhk}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="/scale.png" alt="" className="w-4 h-4" />
                                            {property.floor}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {property.amenities.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 border rounded-full font-bold text-[12px] text-gray-700"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between mt-3">
                                    <div>
                                        <p className="text-[#F97316] text-[20px] font-bold">
                                            {property.price}
                                            <span className="text-gray-500 text-[14px] font-medium">
                                                {" "}
                                               
                                            </span>
                                        </p>
                                       
                                    </div>

                                    <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-[14px] font-medium px-5 py-3 rounded-[12px] shadow-lg">
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
