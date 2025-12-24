import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

// Array of property details
const properties = [
    {
        id: 1,
        title: "Modern 2BHK in Andheri West",
        location: "Andheri West, Near DN Nagar Metro",
        bhk: "2BHK",
        floor: "5th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Security"],
        price: 35000,
        deposit: 100000,
        rating: 4.5,
        reviews: 23,
        image: "/room1.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 2,
        title: "Cozy 1BHK in Koregaon Park",
        location: "Koregaon Park, Lane 7",
        bhk: "1BHK",
        floor: "2nd Floor",
        amenities: ["Wi-Fi", "Security", "Garden", "Water Supply 24x7"],
        price: 18000,
        deposit: 50000,
        rating: 4.2,
        reviews: 15,
        image: "/room2.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 3,
        title: "Spacious 3BHK in Baner",
        location: "Baner, Near Symbiosis College",
        bhk: "3BHK",
        floor: "8th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"],
        price: 45000,
        deposit: 150000,
        rating: 4.8,
        reviews: 42,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 1,
        title: "Modern 2BHK in Andheri West",
        location: "Andheri West, Near DN Nagar Metro",
        bhk: "2BHK",
        floor: "5th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Security"],
        price: 35000,
        deposit: 100000,
        rating: 4.5,
        reviews: 23,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 2,
        title: "Cozy 1BHK in Koregaon Park",
        location: "Koregaon Park, Lane 7",
        bhk: "1BHK",
        floor: "2nd Floor",
        amenities: ["Wi-Fi", "Security", "Garden", "Water Supply 24x7"],
        price: 18000,
        deposit: 50000,
        rating: 4.2,
        reviews: 15,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 3,
        title: "Spacious 3BHK in Baner",
        location: "Baner, Near Symbiosis College",
        bhk: "3BHK",
        floor: "8th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"],
        price: 45000,
        deposit: 150000,
        rating: 4.8,
        reviews: 42,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
];


const PropertyCard = ({ property }) => {
    return (
        <div
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
                    <div className="absolute top-3 w-[80px] h-[22px] flex items-center bg-[#028541] rounded-full px-2 h-6">
                        <img src="/verified_logo.png" alt="" className="w-3 h-3 ml-1" />
                        <span className="ml-1 text-white text-[12px] font-bold">Verified</span>
                    </div>
                )}

                {/* BHK Tag */}
                <div className={`absolute w-[55px] h-[22px] top-3 right-3 bg-[#1E3A8A] text-white text-[12px] font-bold px-3 py-1 rounded-full`}>
                    {property.bhkTag}
                </div>

                {/* Rating */}
                <div className={`
                        absolute bottom-0 left-0 w-full
                        flex items-center gap-1 text-white text-[14px] font-medium
                        px-3 py-1
                        rounded-t-lg
                        bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]
                    `}>
                    <img src="/start_rating.png" alt="" className="w-4 h-4" />
                    <h1 className="text-[14px] text-white">{property.rating}</h1>
                    <span className="text-white/80">({property.reviews} reviews)</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                    {/* Title */}
                    <h3 className="text-[18px] font-bold text-gray-900 leading-[28px] tracking-[-0.45px]">
                        {property.title}
                    </h3>

                    {/* Location */}
                    <p className="flex items-center gap-2 text-gray-500 text-[14px] mt-1">
                        <img src="/location.png" alt="" className="w-4 h-4" />
                        {property.location}
                    </p>

                    {/* Info */}
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

                    {/* Amenities */}
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
                            ₹{property.price}
                            <span className="text-gray-500 text-[14px] font-medium"> /month</span>
                        </p>
                        <p className="text-gray-500 text-[13px]">Deposit: ₹{property.deposit}</p>
                    </div>

                    <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-[14px] font-medium px-5 py-3 rounded-[12px] shadow-lg">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

const PropertyList = () => {
    return (
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100  ">
            {properties.map((property) => (
                <div key={property.id} className="snap-start flex-shrink-0">
                    <PropertyCard property={property} />
                </div>
            ))}
        </div>
    );
};

export default PropertyList;
