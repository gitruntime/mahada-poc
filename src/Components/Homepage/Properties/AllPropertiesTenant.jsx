"use client";

import React, { useState, useEffect } from "react";
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
    { id: 1, title: "Modern 2BHK in Andheri West", location: "Andheri West", district: "Mumbai", bhk: "2BHK", floor: "5th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 35000, deposit: 100000, rating: 4.5, reviews: 23, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "2BHK" },
    { id: 2, title: "Cozy 2BHK in Powai", location: "Powai", district: "Mumbai", bhk: "2BHK", floor: "7th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 38000, deposit: 110000, rating: 4.6, reviews: 19, availability: "Within 15 Days", image: "/room1.png", verified: true, bhkTag: "2BHK" },
    { id: 3, title: "Cozy 1BHK in Koregaon Park", location: "Koregaon Park", district: "Pune", bhk: "1BHK", floor: "2nd Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 18000, deposit: 50000, rating: 4.2, reviews: 15, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "1BHK" },
    { id: 4, title: "Spacious 3BHK in Baner", location: "Baner", district: "Pune", bhk: "3BHK", floor: "8th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 45000, deposit: 150000, rating: 4.8, reviews: 42, availability: "Immediate", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 5, title: "Modern 2BHK in Vashi", location: "Vashi", district: "Navi Mumbai", bhk: "2BHK", floor: "6th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 32000, deposit: 90000, rating: 4.4, reviews: 18, availability: "Within 15 Days", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 6, title: "Compact 1BHK in Kharadi", location: "Kharadi", district: "Pune", bhk: "1BHK", floor: "3rd Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 17000, deposit: 45000, rating: 4.1, reviews: 12, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 7, title: "Luxury 3BHK in Aundh", location: "Aundh", district: "Pune", bhk: "3BHK", floor: "9th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 48000, deposit: 160000, rating: 4.9, reviews: 38, availability: "Immediate", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 8, title: "Modern 2BHK in Thane West", location: "Thane West", district: "Mumbai", bhk: "2BHK", floor: "10th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 33000, deposit: 95000, rating: 4.3, reviews: 21, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 9, title: "Affordable 1BHK in Ulwe", location: "Ulwe", district: "Navi Mumbai", bhk: "1BHK", floor: "4th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 15000, deposit: 40000, rating: 4.0, reviews: 10, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 10, title: "Premium 3BHK in Wakad", location: "Wakad", district: "Pune", bhk: "3BHK", floor: "11th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 42000, deposit: 140000, rating: 4.7, reviews: 29, availability: "Within 15 Days", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 11, title: "Modern 2BHK in Kalyan", location: "Kalyan West", district: "Mumbai", bhk: "2BHK", floor: "5th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 28000, deposit: 80000, rating: 4.2, reviews: 16, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 12, title: "Peaceful 1BHK in Karve Nagar", location: "Karve Nagar", district: "Pune", bhk: "1BHK", floor: "1st Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 16000, deposit: 45000, rating: 4.1, reviews: 11, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 13, title: "Spacious 3BHK in Nashik Road", location: "Nashik Road", district: "Nashik", bhk: "3BHK", floor: "6th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 30000, deposit: 100000, rating: 4.5, reviews: 20, availability: "Within 15 Days", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 14, title: "Modern 2BHK in Chembur", location: "Chembur East", district: "Mumbai", bhk: "2BHK", floor: "6th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 34000, deposit: 95000, rating: 4.3, reviews: 18, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 15, title: "Affordable 1BHK in Dombivli", location: "Dombivli East", district: "Mumbai", bhk: "1BHK", floor: "3rd Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 14000, deposit: 40000, rating: 4.0, reviews: 9, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 16, title: "Luxury 3BHK in Worli", location: "Worli Sea Face", district: "Mumbai", bhk: "3BHK", floor: "15th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 85000, deposit: 300000, rating: 4.9, reviews: 55, availability: "Immediate", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 17, title: "Modern 2BHK in Hinjewadi", location: "Hinjewadi Phase 1", district: "Pune", bhk: "2BHK", floor: "7th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 30000, deposit: 90000, rating: 4.4, reviews: 22, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 18, title: "Compact 1BHK in Hadapsar", location: "Hadapsar", district: "Pune", bhk: "1BHK", floor: "2nd Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 16000, deposit: 45000, rating: 4.1, reviews: 13, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 19, title: "Premium 3BHK in Kothrud", location: "Kothrud", district: "Pune", bhk: "3BHK", floor: "10th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 40000, deposit: 140000, rating: 4.6, reviews: 27, availability: "Immediate", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 20, title: "Modern 2BHK in Panvel", location: "Panvel", district: "Navi Mumbai", bhk: "2BHK", floor: "5th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 25000, deposit: 75000, rating: 4.2, reviews: 15, availability: "Within 15 Days", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 21, title: "Affordable 1BHK in Taloja", location: "Taloja", district: "Navi Mumbai", bhk: "1BHK", floor: "4th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 13000, deposit: 35000, rating: 3.9, reviews: 8, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 22, title: "Spacious 3BHK in Nerul", location: "Nerul", district: "Navi Mumbai", bhk: "3BHK", floor: "9th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 38000, deposit: 130000, rating: 4.5, reviews: 24, availability: "Within 15 Days", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 23, title: "Modern 2BHK in Nagpur City", location: "Civil Lines", district: "Nagpur", bhk: "2BHK", floor: "6th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 22000, deposit: 70000, rating: 4.3, reviews: 17, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 24, title: "Compact 1BHK in Dharampeth", location: "Dharampeth", district: "Nagpur", bhk: "1BHK", floor: "2nd Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 12000, deposit: 30000, rating: 4.0, reviews: 11, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 25, title: "Spacious 3BHK in Wardha Road", location: "Wardha Road", district: "Nagpur", bhk: "3BHK", floor: "8th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 28000, deposit: 90000, rating: 4.4, reviews: 19, availability: "Within 15 Days", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 26, title: "Modern 2BHK in CIDCO", location: "CIDCO", district: "Aurangabad", bhk: "2BHK", floor: "5th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 20000, deposit: 65000, rating: 4.2, reviews: 14, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 27, title: "Affordable 1BHK in Osmanpura", location: "Osmanpura", district: "Aurangabad", bhk: "1BHK", floor: "2nd Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 11000, deposit: 30000, rating: 3.9, reviews: 7, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 28, title: "Spacious 3BHK in Shahupuri", location: "Shahupuri", district: "Kolhapur", bhk: "3BHK", floor: "6th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 26000, deposit: 85000, rating: 4.3, reviews: 16, availability: "Immediate", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 29, title: "Modern 2BHK in Rajarampuri", location: "Rajarampuri", district: "Kolhapur", bhk: "2BHK", floor: "4th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 21000, deposit: 65000, rating: 4.1, reviews: 12, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 30, title: "Compact 1BHK in Gangapur Road", location: "Gangapur Road", district: "Nashik", bhk: "1BHK", floor: "3rd Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 14000, deposit: 40000, rating: 4.0, reviews: 10, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 31, title: "Luxury 3BHK in College Road", location: "College Road", district: "Nashik", bhk: "3BHK", floor: "9th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 35000, deposit: 120000, rating: 4.6, reviews: 23, availability: "Within 15 Days", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 32, title: "Modern 2BHK in Borivali West", location: "Borivali West", district: "Mumbai", bhk: "2BHK", floor: "8th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 36000, deposit: 100000, rating: 4.4, reviews: 21, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 33, title: "Affordable 1BHK in Mira Road", location: "Mira Road East", district: "Mumbai", bhk: "1BHK", floor: "5th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 16000, deposit: 45000, rating: 4.1, reviews: 14, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 34, title: "Luxury 3BHK in Malad West", location: "Malad West", district: "Mumbai", bhk: "3BHK", floor: "12th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 52000, deposit: 180000, rating: 4.8, reviews: 34, availability: "Within 15 Days", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 35, title: "Modern 2BHK in Ghatkopar", location: "Ghatkopar East", district: "Mumbai", bhk: "2BHK", floor: "7th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 34000, deposit: 95000, rating: 4.3, reviews: 20, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 36, title: "Compact 1BHK in Bhosari", location: "Bhosari", district: "Pune", bhk: "1BHK", floor: "2nd Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 13000, deposit: 35000, rating: 3.8, reviews: 9, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 37, title: "Premium 3BHK in Pimpri", location: "Pimpri", district: "Pune", bhk: "3BHK", floor: "10th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 37000, deposit: 125000, rating: 4.5, reviews: 26, availability: "Within 15 Days", image: "/room3.png", verified: true, bhkTag: "3BHK" },
    { id: 38, title: "Modern 2BHK in Sion", location: "Sion East", district: "Mumbai", bhk: "2BHK", floor: "6th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 32000, deposit: 90000, rating: 4.2, reviews: 18, availability: "Immediate", image: "/room2.png", verified: true, bhkTag: "2BHK" },
    { id: 39, title: "Affordable 1BHK in Vile Parle", location: "Vile Parle West", district: "Mumbai", bhk: "1BHK", floor: "3rd Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 15000, deposit: 40000, rating: 4.0, reviews: 11, availability: "Immediate", image: "/room1.png", verified: true, bhkTag: "1BHK" },
    { id: 40, title: "Luxury 3BHK in Chembur West", location: "Chembur West", district: "Mumbai", bhk: "3BHK", floor: "12th Floor", amenities: ["Wi-Fi", "Parking", "Gym"], price: 50000, deposit: 170000, rating: 4.7, reviews: 32, availability: "Within 15 Days", image: "/room3.png", verified: true, bhkTag: "3BHK" }
];



/* ================= HERO SEARCH ================= */
const HeroSearch = ({ setFilteredProperties, setCurrentPage }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [city, setCity] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

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
        setCurrentPage(1);
        setShowSuggestions(false);
    };

    const handleClear = () => {
        setSearchQuery("");
        setCity("");
        setPropertyType("");
        setFilteredProperties(properties);
        setCurrentPage(1);
    };

    return (
        <div className="w-full flex justify-center px-4 mt-6 relative z-20">
            <div className="w-full max-w-[1340px] border border-[#E5E7EB] bg-white rounded-xl p-4 lg:p-6 flex flex-col lg:flex-row gap-3 shadow-lg">
                {/* SEARCH INPUT */}
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

                {/* CLEAR BUTTON */}
                <button
                    onClick={handleClear}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 rounded-lg h-[52px] font-semibold"
                >
                    Clear
                </button>

                {/* SEARCH BUTTON */}
                <button
                    onClick={() => handleSearch()}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-lg h-[52px] font-semibold"
                >
                    Search
                </button>
            </div>
        </div>
    );
};


/* ================= PROPERTY CARD ================= */
const PropertyCard = ({ property }) => {
    return (
        <div className="w-full max-w-[440px] h-[430px] border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col">
            {/* IMAGE */}
            <div className="relative w-full h-[192px]">
                <Image
                    src={property.image}
                    alt="Property"
                    fill
                    className="object-cover"
                />
                {property.verified && (
                    <div className="absolute top-3 left-3 flex items-center bg-green-600 rounded-full px-2 h-6">
                        <img src="/verified_logo.png" className="w-3 h-3" />
                        <span className="ml-1 text-white text-[12px] font-bold">
                            Verified
                        </span>
                    </div>
                )}
                <div className="absolute top-3 right-3 bg-blue-800 text-white text-[12px] font-bold px-3 py-1 rounded-full">
                    {property.bhkTag}
                </div>
                <div className="absolute bottom-0 left-0 w-full flex items-center gap-1 px-3 py-1 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <img src="/start_rating.png" className="w-4 h-4" />
                    <span>{property.rating}</span>
                    <span className="text-white/80">({property.reviews} reviews)</span>
                </div>
            </div>

            {/* CONTENT */}
            <div className={`flex flex-col justify-between flex-1 p-5 ${poppins.className}`}>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
                    <p className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <img src="/location.png" className="w-4 h-4" />
                        {property.location}
                    </p>
                    <div className="flex gap-6 text-gray-500 text-sm mt-3">
                        <div className="flex gap-2">
                            <img src="/bed.png" className="w-4 h-4" />
                            {property.bhk}
                        </div>
                        <div className="flex gap-2">
                            <img src="/scale.png" className="w-4 h-4" />
                            {property.floor}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 mb-2">
                        {property.amenities.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1 border border-gray-200 rounded-full text-xs font-semibold"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                    <div>
                        <p className="text-orange-500 text-lg font-bold">
                            ₹{property.price}
                            <span className="text-gray-500 font-normal text-sm"> /month</span>
                        </p>
                        <p className="text-gray-500 text-xs">Deposit: ₹{property.deposit}</p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

/* ================= PAGINATION ================= */

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-end gap-2 p-3 mt-10">
            {/* Prev Button */}
            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className={`w-[28px] h-[28px] flex items-center justify-center rounded-full  transition
          ${currentPage === 1
                        ? "opacity-40 pointer-events-none"
                        : "hover:bg-gray-100"
                    }`}
            >
                <div className="w-6 h-6 flex items-center justify-center rounded-full ">
                    <Image src="/leftarrow.png" width={6} height={10} alt="Prev" />
                </div>
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-[28px] h-[28px] flex items-center justify-center rounded-full text-sm font-medium transition leading-none
            ${currentPage === page
                            ? "border-2 border-orange-500 text-orange-500"
                            : "text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className={`w-[28px] h-[28px] flex items-center justify-center rounded-full  transition
          ${currentPage === totalPages
                        ? "opacity-40 pointer-events-none"
                        : "hover:bg-gray-100"
                    }`}
            >
                <div className="w-6 h-6 flex items-center justify-center ">
                    <Image src="/rightarrow.png" width={6} height={10} alt="Next" />
                </div>
            </button>
        </div>
    );
};



/* ================= MAIN PAGE ================= */
const ITEMS_PER_PAGE = 12;

const AllPropertiesTenant = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProperties, setFilteredProperties] = useState(properties);

    const [price, setPrice] = useState(100000);
    const [district, setDistrict] = useState("");
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [availability, setAvailability] = useState("");

    const districts = [...new Set(properties.map(p => p.district))];
    const locations = [...new Set(properties.map(p => p.location))];
    const propertyTypes = [...new Set(properties.map(p => p.bhk))];
    const availabilities = [...new Set(properties.map(p => p.availability))];

    const applyFilters = () => {
        let filtered = properties;
        if (district) filtered = filtered.filter(p => p.district.toLowerCase() === district.toLowerCase());
        if (location) filtered = filtered.filter(p => p.location.toLowerCase() === location.toLowerCase());
        if (propertyType) filtered = filtered.filter(p => p.bhk.toLowerCase() === propertyType.toLowerCase());
        if (availability) filtered = filtered.filter(p => p.availability.toLowerCase() === availability.toLowerCase());
        filtered = filtered.filter(p => p.price <= price);
        setFilteredProperties(filtered);
        setCurrentPage(1);
    };

    useEffect(() => { applyFilters(); }, [price, district, location, propertyType, availability]);

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProperties = filteredProperties.slice(start, start + ITEMS_PER_PAGE);

    return (
        <div>
            <HeroSearch setFilteredProperties={setFilteredProperties} setCurrentPage={setCurrentPage} />

            {/* Heading */}
            <div className="max-w-[1380px] mt-8 mx-auto px-6 mb-6">
                <h1 className="text-2xl md:text-3xl font-semibold">
                    Properties for rent in <span className="text-green-700">Andheri</span>
                </h1>
                <p className="text-gray-500 mt-1">{filteredProperties.length} properties found</p>
            </div>

            {/* Layout */}
            <div className="max-w-[1400px] mx-auto  px-6 flex gap-8 items-start">
                {/* STICKY FILTER */}
                <div className="w-[280px]  shrink-0 sticky top-24 rounded-xl border border-[#D1D5DC] bg-[#F7FBFF] p-5">
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <h3 className="text-lg font-semibold">Filter</h3>
                        <Image src="/filterblackicon.png" width={21} height={16} alt="Filter Icon" />
                    </div>



                    <select value={district} onChange={(e) => setDistrict(e.target.value)} className="w-full mb-3 p-2 border rounded-md text-sm">
                        <option value="">Select District</option>
                        {districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>

                    <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full mb-3 p-2 border rounded-md text-sm">
                        <option value="">Select Location</option>
                        {locations.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>

                    <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="w-full mb-3 p-2 border rounded-md text-sm">
                        <option value="">Property Type</option>
                        {propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>

                    <select value={availability} onChange={(e) => setAvailability(e.target.value)} className="w-full mb-3 p-2 border rounded-md text-sm">
                        <option value="">Availability</option>
                        {availabilities.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>

                    <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Price ≤ ₹{price}</p>
                        <input type="range" min="10000" max="100000" step="1000" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full accent-green-700" />
                    </div>
                </div>

                {/* PROPERTY GRID */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {currentProperties.length ? (
                        currentProperties.map(p => <PropertyCard key={p.id} property={p} />)
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No properties found</p>
                    )}
                </div>
            </div>

            <Pagination totalItems={filteredProperties.length} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} setCurrentPage={setCurrentPage} />

           
        </div>
    );
};

export default AllPropertiesTenant;
