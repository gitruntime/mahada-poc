import React from 'react'
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import Footer from '@/Components/Layout/Footer';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
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
        id: 33,
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
];



const PropertyCard = ({ property }) => {
    return (
        <div
            className={`
                w-[440px] h-[430px] border border-t-0 border-[#E5E7EB]
                bg-white rounded-[12px]
                shadow-[0px_4px_20px_-2px_rgba(229,231,235,0.8)]
                overflow-hidden flex flex-col
            `}
        >
            {/* Image */}
            <div className="relative w-full h-[192px]">
                <Image
                    src={property?.image}
                    alt="Property"
                    fill
                    className="object-cover"
                />

                {property?.verified && (
                    <div className="absolute top-3 left-3 flex items-center bg-[#028541] rounded-full px-2 h-6">
                        <img src="/verified_logo.png" className="w-3 h-3" />
                        <span className="ml-1 text-white text-[12px] font-bold">
                            Verified
                        </span>
                    </div>
                )}

                <div className="absolute top-3 right-3 bg-[#1E3A8A] text-white text-[12px] font-bold px-3 py-1 rounded-full">
                    {property?.bhkTag}
                </div>

                <div className="absolute bottom-0 left-0 w-full flex items-center gap-1 px-3 py-1 text-white bg-[linear-gradient(0deg,rgba(0,0,0,0.8),transparent)]">
                    <img src="/start_rating.png" className="w-4 h-4" />
                    <span>{property?.rating}</span>
                    <span className="text-white/80">
                        ({property?.reviews} reviews)
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={`flex flex-col ${poppins.className} justify-between flex-1 p-5`}>
                <div>
                    <h3 className="text-[18px] font-bold text-gray-900">
                        {property?.title}
                    </h3>

                    <p className="flex items-center gap-2 text-gray-500 text-[14px] mt-1">
                        <img src="/location.png" className="w-4 h-4" />
                        {property?.location}
                    </p>

                    <div className="flex gap-6 text-gray-500 text-[14px] mt-3">
                        <div className="flex gap-2">
                            <img src="/bed.png" className="w-4 h-4" />
                            {property?.bhk}
                        </div>
                        <div className="flex gap-2">
                            <img src="/scale.png" className="w-4 h-4" />
                            {property?.floor}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4 mb-[10px]">
                        {property?.amenities.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1 border border-[#E5E7EB] rounded-full text-[12px] font-bold"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] flex justify-between items-center">
                    <div>
                        <p className="text-[#F97316] text-[20px] font-bold">
                            ₹{property?.price}
                            <span className={`text-gray-500 font-normal text-[14px]`}>
                                {" "} /month
                            </span>
                        </p>
                        <p className="text-gray-500 text-[13px]">
                            Deposit: ₹{property?.deposit}
                        </p>
                    </div>

                    <Link href="/propertydetailsguest" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-[12px]">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ITEMS_PER_PAGE = 12;

const AllPropertiesGuest = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const currentProperties = properties.slice(startIndex, endIndex);

    return (
        <div className="w-full overflow-x-hidden">
            <div className="w-full max-w-[1440px] h-[64px] flex items-center px-[100px] py-[20px] border-b border-gray-300">
                <nav className={`flex items-center gap-2 text-[16px]  ${poppins.className}`}>
                    <span className="text-gray-400 font-medium"> <Link href="/">Home</Link></span>
                    <span className="text-gray-400 font-medium" >{`>`} Properties</span>
                    <span className="text-black font-semibold">{`>`} Andheri</span>

                </nav>
            </div>
            {/* Header */}
            <div className="max-w-[1380px] mx-auto pt-6 px-4 sm:px-6 lg:px-0">
                <h1
                    className={`text-[32px] ${poppins.className} font-semibold text-gray-900 flex items-center gap-2`}
                >
                    Properties for rent in
                    <span className="text-[#028541] flex items-center gap-1 cursor-pointer">
                        Andheri
                        <svg
                            className="w-4 h-4 mt-[2px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </span>
                </h1>
                <p className="text-gray-500 mt-1">
                    {properties.length} properties found
                </p>
            </div>

            {/* Property Grid */}
            <div className="max-w-[1400px] mx-auto pb-10 mt-[40px] px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {currentProperties.map((property) => (
                        <PropertyCard
                            key={`${property.id}-${property.title}`}
                            property={property}
                        />
                    ))}
                </div>

                {/* Numbered Pagination */}
                <div className="flex justify-end items-center gap-3 mt-12">
                    {/* Previous Arrow */}
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="w-[28px] h-[28px] flex items-center justify-center rounded-full 
                   bg-[#D3D3D3] disabled:opacity-40 text-lg leading-none"
                    >
                        <Image src="/leftarrow.png" alt="Previous" width={6} height={10} />
                    </button>

                    {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-[28px] h-[28px] flex items-center justify-center rounded-full 
                            text-sm font-medium transition leading-none
                    ${currentPage === page
                                        ? "border-2 border-orange-500 text-orange-500"
                                        : "text-gray-800 hover:bg-gray-100"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                    {/* Next Arrow */}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="w-[28px] h-[28px] flex items-center justify-center rounded-full 
                   bg-[#D3D3D3] disabled:opacity-40 text-lg leading-none"
                    >
                        <Image src="/rightarrow.png" alt="Previous" width={6} height={10} />
                    </button>
                </div>


            </div>
            <Footer />
        </div>
    );
};



export default AllPropertiesGuest
