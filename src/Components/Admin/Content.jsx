import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const Content = () => {
    return (
        <div>

            {/* HEADER */}
            <div className="max-w-[1540px] mx-auto h-auto sm:h-[80px] px-4 sm:px-8 md:px-[100px] py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <p className={`text-[14px] font-semibold sm:text-[16px] text-white ${montserrat.className} mt-1`}>
                        Maharashtra State Rental Housing Portal – Control Center
                    </p>
                </div>
            </div>

            {/* STATS */}
            <div className="max-w-[1590px] mx-auto px-4 sm:px-8 md:px-[100px] py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        i: "Pending Registrations",
                        icon: "/icon1.png",
                        badgeText: "Tenants: 2,145 | Landlords: 1,317",
                        badgeBg: "bg-transparent",
                        badgeColor: "text-gray-300",
                        value: "3,462",
                        label: "Pending Registrations",
                    },
                    {
                        i: "Pending Property Listings",
                        icon: "/icon2.png",
                        badgeText: "Submitted and awaiting verification",
                        badgeBg: "bg-transparent",
                        badgeColor: "text-gray-300",
                        value: "1,284",
                        label: "Pending Property Listings",
                    },
                    {
                        i: "Active Rental Agreements",
                        icon: "/icon3.png",
                        badgeText: "Digitally signed and currently valid",
                        badgeBg: "bg-transparent",
                        badgeColor: "text-gray-300",
                        value: "78,421",
                        label: "Active Rental Agreements",
                    },
                    {
                        i: "Open Grievances",
                        icon: "/icon4.png",
                        badgeText: "Escalated: 186",
                        badgeBg: "bg-transparent",
                        badgeColor: "text-gray-300",
                        value: "1,247",
                        label: "Open Grievances",
                    },
                ]
                    .map((card, i) => (
                        <div
                            key={i}
                            className="w-[320px] h-[173px] rounded-[14px] bg-white/5 backdrop-blur-[93.4px] p-5 flex flex-col justify-between relative overflow-hidden group"
                        >
                            {/* Top title */}
                            <p className={`text-[14px] font-semibold ${montserrat.className} text-[#FFFFFF]`}>
                                {card.label}
                            </p>

                            {/* Bottom section */}
                            <div className="flex items-end justify-between mt-3">
                                {/* Left content */}
                                <div className="flex flex-col justify-end transition-transform duration-600 transform group-hover:-translate-y-11">
                                    <p className={`text-[30px] ${montserrat.className} font-semibold leading-none text-white`}>
                                        {card.value}
                                    </p>
                                    <p className={`text-[12px] font-semibold ${montserrat.className} text-[#FFFFFF99] mt-1`}>
                                        {card.badgeText}
                                    </p>
                                </div>

                                {/* Icon */}
                                <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center ${card.iconBg}`}>
                                    <img src={card.icon} alt="" className="w-[40px] h-[40px]" />
                                </div>
                            </div>

                            {/* Button - slides in from bottom */}
                            <button
                                className={`absolute cursor-pointer left-5 bottom-5 w-[119px] h-[34px] bg-[#6B7280] text-white px-[14px] py-[8px] rounded-[10px] text-[12px] leading-[16px] font-semibold ${poppins.className} transition-all duration-300 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#F97415]`}
                            >
                                View Requests
                            </button>

                        </div>
                    ))}
            </div>

        </div>
    )
}

export default Content
