"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const ContentTenantLeft = () => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="w-[901px] h-auto">
            {/* IMAGE SECTION */}
            <div className="relative h-[384px] rounded-xl overflow-hidden">
                <Image
                    src="/roomimg.png"
                    alt="Property"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute top-4 left-4 right-4 flex justify-between items-end">
                    <div className={`flex w-full justify-between items-center ${poppins.className}`}>
                        <div className="flex gap-2">
                            <button className="bg-[#21C45D] text-white h-[36px] text-[14px] font-medium px-3 py-1 rounded-full flex items-center gap-2">
                                <Image src="/verified_logo.png" width={16} height={16} alt="" />
                                Verified
                            </button>
                            <button className="bg-[#1A4A99] text-white h-[36px] text-[14px] font-medium px-3 py-1 rounded-full">
                                Semi-Furnished
                            </button>
                        </div>

                        <div className="flex">
                            <Image src="/like.png" width={40} height={40} alt="" />
                            <Image src="/share.png" width={40} height={40} alt="" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-4 left-4 flex gap-2">
                    <button className="bg-[#1A4A99] text-white h-[36px] px-3 rounded-[10px] flex items-center gap-2">
                        <Image src="/camera.png" width={16} height={16} alt="" />
                        Virtual Tour
                    </button>
                    <button className="bg-[#1A4A99] text-white h-[36px] px-3 rounded-[10px] flex items-center gap-2">
                        <Image src="/eye.png" width={16} height={16} alt="" />
                        View All Photos
                    </button>
                </div>
            </div>

            {/* TITLE */}
            <div className="mt-5 mb-4">
                <h2 className={`text-[30px] font-bold text-[#0F1729] ${poppins.className}`}>
                    Modern 2BHK in Andheri West
                </h2>
                <div className="flex items-center gap-2 mt-2 text-[#6B7280]">
                    <Image src="/location.png" width={16} height={16} alt="" />
                    <span>Andheri West, Near DN Nagar Metro</span>
                </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid grid-cols-4 gap-4">
                {[
                    { label: "Type", value: "2BHK", icon: "/bed2.png" },
                    { label: "Floor", value: "5th of 12", icon: "/floor.png" },
                    { label: "Available", value: "1 Feb", icon: "/calendar1.png" },
                    { label: "Status", value: "Verified", icon: "/vl.png", green: true },
                ].map((item, i) => (
                    <div key={i} className="bg-[#F0EEEA] rounded-xl p-4 flex flex-col items-center gap-2">
                        <Image src={item.icon} width={28} height={28} alt="" />
                        <p className="text-[14px] text-[#6B7280]">{item.label}</p>
                        <p className={`text-[16px] font-semibold ${item.green ? "text-green-600" : "text-[#0F1729]"}`}>
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* TABS SECTION */}
            <div className={`p-6 bg-white rounded-lg shadow-md mt-6 ${poppins.className}`}>
                {/* Tabs */}
                <div className="flex bg-[#F0EEEA] p-1 rounded-2xl mb-4">
                    {["overview", "specifications", "amenities", "reviews"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full py-2 rounded-[8px] font-medium capitalize transition
                                ${activeTab === tab
                                    ? "bg-[#FBFAF9] text-gray-900"
                                    : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* TAB CONTENT */}
                {activeTab === "overview" && (
                    <>
                        <h2 className="text-xl font-bold mb-2">About this property</h2>
                        <p className="text-gray-600 mb-4">
                            Spacious 2BHK apartment with modern amenities, located near metro station.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "No Pets Allowed",
                                "Parking Available",
                                "Semi-Furnished",
                                "Immediate Move-in Ready",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <Image src="/check2.png" width={20} height={20} alt="" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {activeTab === "specifications" && (
                    <div className="w-full bg-[#FAFAFA] border   border-[#E5E7EB] shadow-sm rounded-xl p-6 space-y-6">

                        {/* Header */}
                        <h2 className="text-[24px] font-medium text-[#0F1729]">
                            Property Specifications
                        </h2>

                        {/* GRID */}
                        <div className="grid grid-cols-2 gap-6">

                            {/* Card Wrapper */}
                            {[
                                {
                                    title: "Area & Measurements",
                                    note: "Areas are declared by the landlord and subject to verification.",
                                    data: [
                                        ["Carpet Area", "650 sq. ft."],
                                        ["Built-up Area", "780 sq. ft."],
                                        ["Super Built-up Area", "920 sq. ft."],
                                        ["Unit Configuration", "2 BHK"],
                                        ["Bedrooms", "2"],
                                        ["Bathrooms", "2"],
                                        ["Balconies", "1"],
                                    ],
                                },
                                {
                                    title: "Floor & Building Details",
                                    data: [
                                        ["Floor Number", "5"],
                                        ["Total Floors in Building", "12"],
                                        ["Unit Facing", "West"],
                                        ["Building Type", "Residential Apartment"],
                                        ["Construction Type", "RCC Framed Structure"],
                                        ["Building Age", "5–7 years"],
                                    ],
                                },
                                {
                                    title: "Furnishing & Fixtures",
                                    data: [
                                        ["Furnishing Status", "Semi-Furnished"],
                                        ["Modular Kitchen", "Available"],
                                        ["Wardrobes", "Available"],
                                        ["Air Conditioning", "Installed (Living Room)"],
                                        ["Geyser", "Installed"],
                                    ],
                                },
                                {
                                    title: "Utilities & Services",
                                    data: [
                                        ["Water Supply", "24×7 Municipal"],
                                        ["Electricity Connection", "Single Phase"],
                                        ["Power Backup", "Available (Common Areas)"],
                                        ["Gas Connection", "Piped Gas"],
                                        ["Internet Provision", "Available"],
                                    ],
                                },
                                {
                                    title: "Parking & Common Facilities",
                                    data: [
                                        ["Parking Type", "Covered"],
                                        ["Parking Slots", "1"],
                                        ["Lift Availability", "Yes (2 Lifts)"],
                                        ["Common Area Maintenance", "Society Managed"],
                                    ],
                                },
                                {
                                    title: "Safety & Compliance",
                                    data: [
                                        ["Fire Safety Systems", "Installed"],
                                        ["CCTV Surveillance", "Common Areas"],
                                        ["Security Personnel", "24×7"],
                                        ["Emergency Exits", "Available"],
                                    ],
                                },
                                {
                                    title: "Legal & Verification Information",
                                    data: [
                                        ["Property Verification Status", "Verified"],
                                        ["Ownership Declaration", "Submitted"],
                                        ["Last Verification Date", "12 Jan 2025"],
                                        ["Verifying Authority", "MHADA – Mumbai District"],
                                        ["Listing Type", "Rental"],
                                    ],
                                },

                            ].map((section, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white   rounded-xl `}
                                >
                                    <h3 className="text-sm font-semibold text-gray-800 mb-3">
                                        {section.title}
                                    </h3>

                                    <div className="rounded-lg overflow-hidden border border-gray-200">
                                        {section.data.map(([label, value], i) => (
                                            <div
                                                key={i}
                                                className="grid grid-cols-2  border-gray-200"
                                            >
                                                <div className="bg-[#F3F4F6] px-4 py-3 text-[13px] text-gray-500">
                                                    {label}
                                                </div>
                                                <div className="px-4 py-3 text-[13px] text-gray-700">
                                                    {value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {section.note && (
                                        <p className="text-[11px] text-gray-400 mt-2">
                                            {section.note}
                                        </p>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                )}



                {activeTab === "amenities" && (
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                        <li>✔ Lift</li>
                        <li>✔ Power Backup</li>
                        <li>✔ CCTV Security</li>
                        <li>✔ Water Supply</li>
                    </ul>
                )}

                {activeTab === "reviews" && (
                    <div className="text-gray-600">
                        <p className="font-semibold">⭐ 4.5 / 5</p>
                        <p>Great location and well-maintained property.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentTenantLeft;
