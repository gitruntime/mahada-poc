import React from 'react';
import { Poppins } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const AdminOverview = () => {
    return (
        <div className={`bg-gray-50 min-h-screen ${poppins.className}`}>
            <div className="max-w-[1440px] mx-auto px-6 py-8">
                {/* Heading */}
                <h2 className={`text-[20px] font-semibold ${poppins.className} text-[#1B0914] mb-1`}>
                    Approval Queues
                </h2>
                <p className={`text-[16px] ${poppins.className} text-[#6B7280] mb-6`}>
                    View and manage applications awaiting action across different approval stages
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Tenant Registration */}
                    <div className="bg-[#FCF0E4] rounded-[20px] p-5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className={`font-medium ${poppins.className} text-[16px] text-[#1C1C1C]`}>
                                    Tenant Registration Requests
                                </h3>
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            </div>

                            <div className="flex justify-between mb-1">
                                <span className={`${poppins.className} text-[12px] text-[#4A5565]`}>
                                    Pending:
                                </span>
                                <span className={`${poppins.className} font-bold text-[14px] text-[#101828]`}>
                                    2,145
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className={`${poppins.className} text-[12px] text-[#4A5565]`}>
                                    Oldest request:
                                </span>
                                <span className="text-[14px] font-normal text-[#364153]">
                                    6 days
                                </span>
                            </div>
                        </div>

                        <Link href="/Admin/TenantReg">
                            <p className="mt-4 w-full cursor-pointer py-2 text-sm font-medium text-[#F97415] bg-white rounded-full border border-[#E2E2E2] text-center block">
                                View Requests
                            </p>
                        </Link>

                    </div>

                    {/* Landlord Registration */}
                    <div className="bg-[#ECF5E7] rounded-[20px] p-5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className={`font-medium ${poppins.className} text-[16px] text-[#1C1C1C]`}>
                                    Landlord Registration Requests
                                </h3>
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            </div>

                            <div className="flex justify-between mb-1">
                                <span className={`${poppins.className} text-[12px] text-[#4A5565]`}>
                                    Pending:
                                </span>
                                <span className={`${poppins.className} font-bold text-[14px] text-[#101828]`}>
                                    1,317
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className={`${poppins.className} text-[12px] text-[#4A5565]`}>
                                    Oldest request:
                                </span>
                                <span className="text-[14px] font-normal text-[#364153]">
                                    9 days
                                </span>
                            </div>
                        </div>

                        <button className="mt-4 w-full cursor-pointer py-2 text-sm font-medium text-green-600 bg-white rounded-full border border-[#E2E2E2]">
                            View Requests
                        </button>
                    </div>

                    {/* Property Listing */}
                    <div className="bg-[#EBF0FE] rounded-[20px] p-5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className={`font-medium ${poppins.className} text-[16px] text-[#1C1C1C]`}>
                                    Property Listing Requests
                                </h3>
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            </div>

                            <div className="flex justify-between mb-1">
                                <span className={`${poppins.className} text-[12px] text-[#4A5565]`}>
                                    Pending:
                                </span>
                                <span className={`${poppins.className} font-bold text-[14px] text-[#101828]`}>
                                    1,284
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className={`${poppins.className} text-[12px] text-[#4A5565]`}>
                                    Oldest request:
                                </span>
                                <span className="text-[14px] font-normal text-[#364153]">
                                    11 days
                                </span>
                            </div>
                        </div>

                        <button className="mt-4 cursor-pointer w-full py-2 text-sm font-medium text-blue-600 bg-white rounded-full border border-[#E2E2E2]">
                            View Listings
                        </button>
                    </div>

                    {/* Property Sale */}
                    <div className="bg-[#ECF5F4] rounded-[20px] p-5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className={`font-medium ${poppins.className} text-[16px] text-[#1C1C1C]`}>
                                    Property Sale Requests
                                </h3>
                                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            </div>

                            <div className="flex justify-between mb-1">
                                <span className={`${poppins.className} text-[12px] text-[#4A5565]`}>
                                    Pending:
                                </span>
                                <span className={`${poppins.className} font-bold text-[14px] text-[#101828]`}>
                                    92
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className={`${poppins.className} text-[12px] text-[#4A5565]`}>
                                    Oldest request:
                                </span>
                                <span className="text-[14px] font-normal text-[#364153]">
                                    14 days
                                </span>
                            </div>
                        </div>

                        <button className="mt-4 w-full cursor-pointer py-2 text-sm font-medium text-teal-600 bg-white rounded-full border border-[#E2E2E2]">
                            View Sale Requests
                        </button>
                    </div>

                </div>

            </div>


            {/* MAP + CITY */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[100px] py-8 flex flex-col md:flex-row gap-6">

                {/* Map */}
                <div className="bg-white shadow-md rounded-[12px] border border-gray-200 px-6 pt-6 pb-12 flex flex-col gap-6 w-full md:w-[726px]">
                    <h3 className="flex items-center gap-2 text-[20px] font-bold mb-4">
                        <Image src="/orangelocation.png" width={20} height={20} alt="Location Icon" />
                        Property Distribution Map
                    </h3>

                    <div className="relative w-full aspect-[726/320]">
                        <Image
                            src="/map2.png"
                            alt="map"
                            fill
                            className="rounded-xl object-cover"
                        />
                        <div className="absolute w-[90%] md:w-[211px] h-[62px] bottom-4 left-4 bg-white shadow-lg rounded-xl p-3 flex flex-col items-start">
                            <span className="text-[#6B7280] text-[12px]">Live property distribution</span>
                            <span className="text-[14px] text-[#0F1729] font-bold">52,847 properties tracked</span>
                        </div>
                    </div>
                </div>

                {/* City Stats */}
                <div className="bg-white shadow-md rounded-[12px] border border-gray-200 px-6 pt-6 pb-12 flex flex-col gap-6 w-full md:w-[440px]">
                    <div className=' flex justify-between'>
                        <h3 className="flex  items-center text-[24px] text-[#0F1729] font-bold gap-2 mb-4">
                            <Image src="/pizzaimg.png" width={20} height={20} alt="icon" />
                            By City
                        </h3>
                        <div className="flex items-center  cursor-pointer">
                            <span className="text-[#FF6A00] font-semibold text-[16px]">
                                View All
                            </span>

                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#FF6A00]"
                            >
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                    </div>


                    {[["Mumbai", 18420, "40%"], ["Pune", 12540, "28%"], ["Nagpur", 6280, "20%"], ["Thane", 5890, "15%"], ["Nashik", 4820, "12%"], ["Others", 4897, "14%"]].map(([city, count, width], i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <div className="flex justify-between text-[14px]">
                                <span>{city}</span>
                                <span className="font-medium">{count.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="h-2 rounded-full"
                                    style={{
                                        width,
                                        background: "linear-gradient(90deg, rgba(249, 116, 21, 0.31) 0%, #FF6A00 100%)",
                                    }}
                                />

                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="flex flex-col lg:flex-row mx-3 gap-6">
                {/* LEFT CARD */}
                <div className="w-full lg:max-w-[720px] bg-white rounded-xl border border-gray-200 px-6 py-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className={`text-[20px] font-semibold ${poppins.className} text-[#1B0914]`}>
                            System &amp; Approval Activity Log
                        </h2>
                        <span className="text-[13px] text-orange-500 font-medium cursor-pointer">
                            View All →
                        </span>
                    </div>

                    <div className="flex flex-col divide-y divide-gray-100">
                        <div className="flex justify-between items-center py-3">
                            <p className={`text-[14px] ${poppins.className} text-[#364153]`}>
                                Property ID #45892 verified in Mumbai – Verified by Officer MH-VO-021
                            </p>
                            <span className={`text-[12px] ${poppins.className} text-[#6A7282] whitespace-nowrap`}>
                                10 minutes ago
                            </span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                            <p className={`text-[14px] ${poppins.className} text-[#364153]`}>
                                Grievance ID #1289 escalated to District Level
                            </p>
                            <span className={`text-[12px] ${poppins.className} text-[#6A7282] whitespace-nowrap`}>
                                22 minutes ago
                            </span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                            <p className={`text-[14px] ${poppins.className} text-[#364153]`}>
                                24 new rental agreements digitally signed
                            </p>
                            <span className={`text-[12px] ${poppins.className} text-[#6A7282] whitespace-nowrap`}>
                                Last 1 hour
                            </span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                            <p className={`text-[14px] ${poppins.className} text-[#364153]`}>
                                156 new tenant registrations received
                            </p>
                            <span className={`text-[12px] ${poppins.className} text-[#6A7282] whitespace-nowrap`}>
                                Last 2 hours
                            </span>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="w-full lg:max-w-[720px] bg-white rounded-xl border border-gray-200 px-6 py-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-[20px] font-semibold text-gray-900">
                            SLA &amp; Exception Alerts
                        </h2>
                        <span className="text-[13px] text-orange-500 font-medium cursor-pointer">
                            View All →
                        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 border border-red-100">
                            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-red-500 text-red-500 text-[12px] font-bold">
                                !
                            </div>
                            <p className="text-[14px] text-red-600">
                                214 registrations pending beyond SLA (7 days)
                            </p>
                        </div>

                        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-yellow-50 border border-yellow-100">
                            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-600 text-[12px] font-bold">
                                !
                            </div>
                            <p className="text-[14px] text-yellow-700">
                                38 property listings awaiting clarification from landlords
                            </p>
                        </div>

                        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-yellow-50 border border-yellow-100">
                            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-600 text-[12px] font-bold">
                                !
                            </div>
                            <p className="text-[14px] text-yellow-700">
                                12 approvals pending senior authority confirmation
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AdminOverview;
