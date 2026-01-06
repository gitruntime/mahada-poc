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

            {/* HEADER */}
            <div className="max-w-[1440px] mx-auto h-auto sm:h-[80px] px-4 sm:px-8 md:px-[100px] py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-[24px] sm:text-[30px] font-bold">
                        Admin Dashboard
                    </h1>
                    <p className="text-[14px] sm:text-[16px] text-[#6B7280] mt-1">
                        Maharashtra State Rental Housing Portal - Control Center
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                    <Link href="#" className="h-[48px] px-5 border-2 border-[#F97415] rounded-[12px] text-[#F97415] text-[14px] font-medium flex items-center gap-2 shadow-md justify-center">
                        <Image src="/export.png" width={16} height={16} alt="export" />
                        Export Report
                    </Link>

                    <Link href="#" className="h-[48px] px-5 border-2 border-[#F97415] rounded-[12px] text-[#F97415] text-[14px] font-medium flex items-center gap-2 shadow-md justify-center">
                        <Image src="/filtericon.png" width={16} height={16} alt="filter" />
                        Filters
                    </Link>

                    <Link href="/admincrud" className="h-[48px] px-5 border-2 border-[#F97415] rounded-[12px] text-[#F97415] text-[14px] font-medium flex items-center gap-2 shadow-md justify-center">
                        Admin Actions
                    </Link>

                    <Link href="/" className="h-[48px] px-5 border-2 border-[#ff1313] rounded-[12px] text-[#dc0b0b] text-[14px] font-medium flex items-center gap-2 shadow-md justify-center">
                        Logout
                    </Link>
                </div>
            </div>

            {/* STATS */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[100px] py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        icon: "/1img.png",
                        iconBg: "bg-[#F974151A]",
                        badgeText: "View Request",
                        badgeBg: "bg-[#F9741533]",
                        badgeColor: "text-[#F97415]",
                        value: "52,847",
                        label: "Pending Registrations",
                    },
                    {
                        icon: "/adminimg2.png",
                        iconBg: "bg-[#21C45D1A]",
                        badgeText: "+5.2%",
                        badgeBg: "bg-[#21C45D1A]",
                        badgeColor: "text-[#21C45D]",
                        value: "28,392",
                        label: "Pending Property Listings",
                    },
                    {
                        icon: "/bluedoclogo.png",
                        iconBg: "bg-[#1A4A991A]",
                        badgeText: "+3.1%",
                        badgeBg: "bg-[#21C45D1A]",
                        badgeColor: "text-[#21C45D]",
                        value: "78,421",
                        label: "Active Agreements",
                    },
                    {
                        icon: "/gr.png",
                        iconBg: "bg-[#EF43431A]",
                        badgeText: "-12%",
                        badgeBg: "bg-[#EF4343]",
                        badgeColor: "text-white",
                        value: "1,247",
                        label: "Open Grievances",
                    },
                ].map((card, i) => (
                    <div key={i} className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-5 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className={`${card.iconBg} w-[40px] h-[40px] rounded-[10px] flex items-center justify-center`}>
                                <img src={card.icon} className="w-5 h-5" />
                            </div>
                            <div className={`px-3 py-0.5 ${card.badgeBg} text-[12px] font-bold ${card.badgeColor} rounded-full`}>
                                {card.badgeText}
                            </div>
                        </div>
                        <div>
                            <p className="text-[24px] font-bold">{card.value}</p>
                            <p className="text-[14px] text-[#6B7280]">{card.label}</p>
                        </div>
                    </div>
                ))}
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
                    <h3 className="flex items-center text-[24px] text-[#0F1729] font-bold gap-2 mb-4">
                        <Image src="/pizzaimg.png" width={20} height={20} alt="icon" />
                        By City
                    </h3>

                    {[["Mumbai", 18420, "40%"], ["Pune", 12540, "28%"], ["Nagpur", 6280, "20%"], ["Thane", 5890, "15%"], ["Nashik", 4820, "12%"], ["Others", 4897, "14%"]].map(([city, count, width], i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <div className="flex justify-between text-[14px]">
                                <span>{city}</span>
                                <span className="font-medium">{count.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width }} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Recent Activity */}
            <div className={`max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[100px] py-8`}>
                <div className={`p-6 bg-white rounded-lg shadow-md w-full flex flex-col gap-4`}>
                    <div className="flex items-center gap-2 mb-4">
                        <img className="w-6 h-6" src="/main.png" alt="icon" />
                        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    </div>

                    <div className="flex flex-col gap-3">

                        <div className="flex items-center gap-3 bg-green-100 rounded-md p-3">
                            <img className="w-6 h-6" src="/img11.png" alt="icon" />
                            <div className="flex flex-col">
                                <span className="text-gray-900 font-medium">Property #45892 verified in Mumbai</span>
                                <span className="text-gray-500 text-sm">2 min ago</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-red-100 rounded-md p-3">
                            <img className="w-6 h-6" src="/img22.png" alt="icon" />
                            <div className="flex flex-col">
                                <span className="text-gray-900 font-medium">Grievance #1289 escalated to district level</span>
                                <span className="text-gray-500 text-sm">15 min ago</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-orange-100 rounded-md p-3">
                            <img className="w-6 h-6" src="/img33.png" alt="icon" />
                            <div className="flex flex-col">
                                <span className="text-gray-900 font-medium">24 new agreements signed today</span>
                                <span className="text-gray-500 text-sm">1 hour ago</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-blue-100 rounded-md p-3">
                            <img className="w-6 h-6" src="/img44.png" alt="icon" />
                            <div className="flex flex-col">
                                <span className="text-gray-900 font-medium">156 new tenant registrations</span>
                                <span className="text-gray-500 text-sm">2 hours ago</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminOverview;
