"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { Search } from "lucide-react";
import Image from "next/image";
import Footer from "@/Components/Layout/Footer";

/* ================= FONT ================= */
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

/* ================= PROPERTY DATA ================= */
const properties = [
    {
        id: 1,
        title: "Modern 2BHK in Andheri West",
        location: "Andheri West, Mumbai",
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
        title: "Cozy 2BHK in Powai",
        location: "Powai, Mumbai",
        bhk: "2BHK",
        floor: "7th Floor",
        amenities: ["Wi-Fi", "Parking", "Lift", "Security"],
        price: 38000,
        deposit: 110000,
        rating: 4.6,
        reviews: 19,
        image: "/room1.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 3,
        title: "Cozy 1BHK in Koregaon Park",
        location: "Koregaon Park, Pune",
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
        location: "Baner, Pune",
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
        title: "Modern 2BHK in Vashi",
        location: "Vashi, Navi Mumbai",
        bhk: "2BHK",
        floor: "6th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Security"],
        price: 32000,
        deposit: 90000,
        rating: 4.4,
        reviews: 18,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 6,
        title: "Compact 1BHK in Kharadi",
        location: "Kharadi, Pune",
        bhk: "1BHK",
        floor: "3rd Floor",
        amenities: ["Wi-Fi", "Security", "Lift"],
        price: 17000,
        deposit: 45000,
        rating: 4.1,
        reviews: 12,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 7,
        title: "Luxury 3BHK in Aundh",
        location: "Aundh, Pune",
        bhk: "3BHK",
        floor: "9th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"],
        price: 48000,
        deposit: 160000,
        rating: 4.9,
        reviews: 38,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 8,
        title: "Modern 2BHK in Thane West",
        location: "Thane West, Mumbai",
        bhk: "2BHK",
        floor: "10th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Security"],
        price: 33000,
        deposit: 95000,
        rating: 4.3,
        reviews: 21,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 9,
        title: "Affordable 1BHK in Ulwe",
        location: "Ulwe, Navi Mumbai",
        bhk: "1BHK",
        floor: "4th Floor",
        amenities: ["Wi-Fi", "Security", "Parking"],
        price: 15000,
        deposit: 40000,
        rating: 4.0,
        reviews: 10,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 10,
        title: "Premium 3BHK in Wakad",
        location: "Wakad, Pune",
        bhk: "3BHK",
        floor: "11th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"],
        price: 42000,
        deposit: 140000,
        rating: 4.7,
        reviews: 29,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 11,
        title: "Modern 2BHK in Kalyan",
        location: "Kalyan West, Mumbai",
        bhk: "2BHK",
        floor: "5th Floor",
        amenities: ["Wi-Fi", "Parking", "Security"],
        price: 28000,
        deposit: 80000,
        rating: 4.2,
        reviews: 16,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 12,
        title: "Peaceful 1BHK in Karve Nagar",
        location: "Karve Nagar, Pune",
        bhk: "1BHK",
        floor: "1st Floor",
        amenities: ["Wi-Fi", "Security", "Water Supply 24x7"],
        price: 16000,
        deposit: 45000,
        rating: 4.1,
        reviews: 11,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 13,
        title: "Spacious 3BHK in Nashik Road",
        location: "Nashik Road, Nashik",
        bhk: "3BHK",
        floor: "6th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym"],
        price: 30000,
        deposit: 100000,
        rating: 4.5,
        reviews: 20,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 14,
        title: "Modern 2BHK in Chembur",
        location: "Chembur East, Mumbai",
        bhk: "2BHK",
        floor: "6th Floor",
        amenities: ["Wi-Fi", "Parking", "Security"],
        price: 34000,
        deposit: 95000,
        rating: 4.3,
        reviews: 18,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 15,
        title: "Affordable 1BHK in Dombivli",
        location: "Dombivli East, Mumbai",
        bhk: "1BHK",
        floor: "3rd Floor",
        amenities: ["Wi-Fi", "Security"],
        price: 14000,
        deposit: 40000,
        rating: 4.0,
        reviews: 9,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 16,
        title: "Luxury 3BHK in Worli",
        location: "Worli Sea Face, Mumbai",
        bhk: "3BHK",
        floor: "15th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"],
        price: 85000,
        deposit: 300000,
        rating: 4.9,
        reviews: 55,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 17,
        title: "Modern 2BHK in Hinjewadi",
        location: "Hinjewadi Phase 1, Pune",
        bhk: "2BHK",
        floor: "7th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym"],
        price: 30000,
        deposit: 90000,
        rating: 4.4,
        reviews: 22,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 18,
        title: "Compact 1BHK in Hadapsar",
        location: "Hadapsar, Pune",
        bhk: "1BHK",
        floor: "2nd Floor",
        amenities: ["Wi-Fi", "Security"],
        price: 16000,
        deposit: 45000,
        rating: 4.1,
        reviews: 13,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 19,
        title: "Premium 3BHK in Kothrud",
        location: "Kothrud, Pune",
        bhk: "3BHK",
        floor: "10th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym"],
        price: 40000,
        deposit: 140000,
        rating: 4.6,
        reviews: 27,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 20,
        title: "Modern 2BHK in Panvel",
        location: "Panvel, Navi Mumbai",
        bhk: "2BHK",
        floor: "5th Floor",
        amenities: ["Wi-Fi", "Parking", "Security"],
        price: 25000,
        deposit: 75000,
        rating: 4.2,
        reviews: 15,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 21,
        title: "Affordable 1BHK in Taloja",
        location: "Taloja, Navi Mumbai",
        bhk: "1BHK",
        floor: "4th Floor",
        amenities: ["Wi-Fi", "Security"],
        price: 13000,
        deposit: 35000,
        rating: 3.9,
        reviews: 8,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 22,
        title: "Spacious 3BHK in Nerul",
        location: "Nerul, Navi Mumbai",
        bhk: "3BHK",
        floor: "9th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym"],
        price: 38000,
        deposit: 130000,
        rating: 4.5,
        reviews: 24,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 23,
        title: "Modern 2BHK in Nagpur City",
        location: "Civil Lines, Nagpur",
        bhk: "2BHK",
        floor: "6th Floor",
        amenities: ["Wi-Fi", "Parking", "Security"],
        price: 22000,
        deposit: 70000,
        rating: 4.3,
        reviews: 17,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 24,
        title: "Compact 1BHK in Dharampeth",
        location: "Dharampeth, Nagpur",
        bhk: "1BHK",
        floor: "2nd Floor",
        amenities: ["Wi-Fi", "Security"],
        price: 12000,
        deposit: 30000,
        rating: 4.0,
        reviews: 11,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 25,
        title: "Spacious 3BHK in Wardha Road",
        location: "Wardha Road, Nagpur",
        bhk: "3BHK",
        floor: "8th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym"],
        price: 28000,
        deposit: 90000,
        rating: 4.4,
        reviews: 19,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 26,
        title: "Modern 2BHK in CIDCO",
        location: "CIDCO, Aurangabad",
        bhk: "2BHK",
        floor: "5th Floor",
        amenities: ["Wi-Fi", "Parking"],
        price: 20000,
        deposit: 65000,
        rating: 4.2,
        reviews: 14,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 27,
        title: "Affordable 1BHK in Osmanpura",
        location: "Osmanpura, Aurangabad",
        bhk: "1BHK",
        floor: "2nd Floor",
        amenities: ["Wi-Fi", "Security"],
        price: 11000,
        deposit: 30000,
        rating: 3.9,
        reviews: 7,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 28,
        title: "Spacious 3BHK in Shahupuri",
        location: "Shahupuri, Kolhapur",
        bhk: "3BHK",
        floor: "6th Floor",
        amenities: ["Wi-Fi", "Parking"],
        price: 26000,
        deposit: 85000,
        rating: 4.3,
        reviews: 16,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 29,
        title: "Modern 2BHK in Rajarampuri",
        location: "Rajarampuri, Kolhapur",
        bhk: "2BHK",
        floor: "4th Floor",
        amenities: ["Wi-Fi", "Parking"],
        price: 21000,
        deposit: 65000,
        rating: 4.1,
        reviews: 12,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 30,
        title: "Compact 1BHK in Gangapur Road",
        location: "Gangapur Road, Nashik",
        bhk: "1BHK",
        floor: "3rd Floor",
        amenities: ["Wi-Fi", "Security"],
        price: 14000,
        deposit: 40000,
        rating: 4.0,
        reviews: 10,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 31,
        title: "Luxury 3BHK in College Road",
        location: "College Road, Nashik",
        bhk: "3BHK",
        floor: "9th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym"],
        price: 35000,
        deposit: 120000,
        rating: 4.6,
        reviews: 23,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 32,
        title: "Modern 2BHK in Borivali West",
        location: "Borivali West, Mumbai",
        bhk: "2BHK",
        floor: "8th Floor",
        amenities: ["Wi-Fi", "Parking", "Security"],
        price: 36000,
        deposit: 100000,
        rating: 4.4,
        reviews: 21,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 33,
        title: "Affordable 1BHK in Mira Road",
        location: "Mira Road East, Mumbai",
        bhk: "1BHK",
        floor: "5th Floor",
        amenities: ["Wi-Fi", "Security"],
        price: 16000,
        deposit: 45000,
        rating: 4.1,
        reviews: 14,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 34,
        title: "Luxury 3BHK in Malad West",
        location: "Malad West, Mumbai",
        bhk: "3BHK",
        floor: "12th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym"],
        price: 52000,
        deposit: 180000,
        rating: 4.8,
        reviews: 34,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 35,
        title: "Modern 2BHK in Ghatkopar",
        location: "Ghatkopar East, Mumbai",
        bhk: "2BHK",
        floor: "7th Floor",
        amenities: ["Wi-Fi", "Parking"],
        price: 34000,
        deposit: 95000,
        rating: 4.3,
        reviews: 20,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 36,
        title: "Compact 1BHK in Bhosari",
        location: "Bhosari, Pune",
        bhk: "1BHK",
        floor: "2nd Floor",
        amenities: ["Wi-Fi", "Security"],
        price: 13000,
        deposit: 35000,
        rating: 3.8,
        reviews: 9,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 37,
        title: "Premium 3BHK in Pimpri",
        location: "Pimpri, Pune",
        bhk: "3BHK",
        floor: "10th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym"],
        price: 37000,
        deposit: 125000,
        rating: 4.5,
        reviews: 26,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },
    {
        id: 38,
        title: "Modern 2BHK in Vile Parle",
        location: "Vile Parle East, Mumbai",
        bhk: "2BHK",
        floor: "6th Floor",
        amenities: ["Wi-Fi", "Parking", "Security"],
        price: 39000,
        deposit: 110000,
        rating: 4.6,
        reviews: 28,
        image: "/room2.png",
        verified: true,
        bhkTag: "2BHK",
    },
    {
        id: 39,
        title: "Affordable 1BHK in Ambernath",
        location: "Ambernath East, Mumbai",
        bhk: "1BHK",
        floor: "4th Floor",
        amenities: ["Wi-Fi", "Security"],
        price: 12000,
        deposit: 30000,
        rating: 3.9,
        reviews: 8,
        image: "/room1.png",
        verified: true,
        bhkTag: "1BHK",
    },
    {
        id: 40,
        title: "Luxury 3BHK in Bandra West",
        location: "Bandra West, Mumbai",
        bhk: "3BHK",
        floor: "14th Floor",
        amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"],
        price: 78000,
        deposit: 280000,
        rating: 4.9,
        reviews: 48,
        image: "/room3.png",
        verified: true,
        bhkTag: "3BHK",
    },

];
/* ================= HERO SEARCH ================= */
const HeroSearch = ({ setFilteredProperties, setCurrentPage }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [city, setCity] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const cities = ["Mumbai", "Navi Mumbai", "Thane", "Pune", "Nagpur", "Nashik"];
    const propertyTypes = ["1BHK", "2BHK", "3BHK"];

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

            const matchCity =
                city === "" || p.location.toLowerCase().includes(city.toLowerCase());

            const matchType =
                propertyType === "" ||
                p.bhk.toLowerCase() === propertyType.toLowerCase();

            return matchSearch && matchCity && matchType;
        });

        setFilteredProperties(filtered);
        setCurrentPage(1); // ✅ RESET PAGE
        setShowSuggestions(false);
    };

    return (
        <div className="w-full bor flex justify-center px-4 mt-6 relative">
            <div className="w-[1340px] border border-[#E5E7EB] bg-white rounded-[16px] px-4 py-4 flex flex-col lg:flex-row gap-3 shadow-md z-30">

                {/* SEARCH INPUT */}
                <div className="relative w-full lg:flex-1">
                    <div className="flex items-center gap-3 bg-[#F4F2EE] rounded-[10px] px-4 h-[52px]">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search properties, localities..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setShowSuggestions(true);
                            }}
                            className="w-full bg-transparent outline-none"
                        />
                    </div>

                    {/* AUTOCOMPLETE */}
                    {showSuggestions && searchQuery && (
                        <div className="absolute top-[58px] w-full bg-white shadow-lg rounded-lg z-50">
                            {suggestions.length ? (
                                suggestions.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            setSearchQuery(item.title);
                                            handleSearch(item.title);
                                        }}
                                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
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

                {/* CITY */}
                <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-[#F4F2EE] rounded-[10px] px-4 h-[52px]"
                >
                    <option value="">Select City</option>
                    {cities.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>

                {/* BHK */}
                <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="bg-[#F4F2EE] rounded-[10px] px-4 h-[52px]"
                >
                    <option value="">Property Type</option>
                    {propertyTypes.map((p) => (
                        <option key={p}>{p}</option>
                    ))}
                </select>

                {/* SEARCH BUTTON */}
                <button
                    onClick={() => handleSearch()}
                    className="bg-orange-500 text-white px-6 rounded-[12px]"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

/* ================= PROPERTY CARD ================= */
const PropertyCard = ({ property }) => (
    <div className="w-[440px] h-[430px] bg-white rounded-[12px] shadow overflow-hidden">
        <div className="relative h-[192px]">
            <Image src={property.image} alt={property.title} fill className="object-cover" />
        </div>

        <div className={`p-5 flex flex-col justify-between ${poppins.className}`}>
            <div>
                <h3 className="font-bold">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
                <p className="text-orange-500 font-bold">₹{property.price}/month</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                    View Details
                </button>
            </div>
        </div>
    </div>
);

/* ================= PAGINATION ================= */
const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center gap-2 mt-10">
            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-4 py-2 border rounded disabled:opacity-40"
            >
                Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`px-4 py-2 border rounded ${p === currentPage ? "bg-orange-500 text-white" : ""
                        }`}
                >
                    {p}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-4 py-2 border rounded disabled:opacity-40"
            >
                Next
            </button>
        </div>
    );
};

/* ================= MAIN PAGE ================= */
const ITEMS_PER_PAGE = 12;

const AllPropertiesTenant = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProperties, setFilteredProperties] = useState(properties);

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProperties = filteredProperties.slice(
        start,
        start + ITEMS_PER_PAGE
    );

    return (
        <div>
            <HeroSearch
                setFilteredProperties={setFilteredProperties}
                setCurrentPage={setCurrentPage}
            />

            <div className="max-w-[1380px] mt-[30px] mx-auto px-[40px] flex items-center justify-between mb-6">
                <div>
                    <h1 className={`text-[32px] ${poppins.className} font-semibold text-gray-900`}>
                        Properties for rent in <span className="text-[#028541]">Andheri</span>
                    </h1>
                    <p className={`text-gray-500 ${poppins.className} text-[16px] mt-1`}>
                        {properties.length} properties found
                    </p>
                </div>

            </div>

            <div className="max-w-[1400px] mx-auto px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {currentProperties.length ? (
                    currentProperties.map((p) => (
                        <PropertyCard key={p.id} property={p} />
                    ))
                ) : (
                    <p>No properties found</p>
                )}
            </div>

            <Pagination
                totalItems={filteredProperties.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <Footer />
        </div>
    );
};

export default AllPropertiesTenant;
