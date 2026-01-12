import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Montserrat, Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});



const Contentclerk2 = () => {
    return (
        <div>

            {/* HEADER */}
            <div className="max-w-[1540px]  mx-auto h-auto sm:h-[80px] px-4 sm:px-8 md:px-[100px] py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <p className={`text-[14px] font-semibold sm:text-[16px] text-white ${montserrat.className} mt-6`}>
                        Verification Officer Dashboard
                    </p>
                    <p className={`text-[14px] font-normal sm:text-[16px] text-white ${montserrat.className} mt-1`}>
                        Maharashtra State Rental Housing Portal – Verification Queue
                    </p>
                </div>

                {/* <div className="flex flex-wrap gap-3 w-full sm:w-auto">
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
                </div> */}
            </div>

            {/* STATS */}
            <div className="max-w-[1590px] mx-auto px-4 sm:px-8 md:px-[100px] py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        i: "Pending Registrations",
                        icon: "/icon1.png",

                        badgeText: "Applications for verification",
                        badgeBg: "bg-transparent",
                        badgeColor: "text-gray-300",
                        value: "1,248",
                        label: "Pending Registrations",
                    },
                    {
                        i: "Pending Property Listings",
                        icon: "/icon2.png",

                        badgeText: "Applications pending applicant response",
                        badgeBg: "bg-transparent",
                        badgeColor: "text-gray-300",
                        value: "312",
                        label: "Clarifications Awaiting Response",
                    },
                    {
                        i: "Active Rental Agreements",
                        icon: "/icon3.png",

                        badgeText: "Applications forwarded for approval",
                        badgeBg: "bg-transparent",
                        badgeColor: "text-gray-300",
                        value: "684",
                        label: "Verified & Forwarded",
                    },
                    {
                        i: "Open Grievances",
                        icon: "/icon4.png",

                        badgeText: "Requests pending beyond SLA",
                        badgeBg: "bg-transparent",
                        badgeColor: "text-gray-300",
                        value: "96",
                        label: "Overdue Verifications",
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
                                    <p
                                        className={`text-[30px] ${inter.className} font-semibold leading-none ${card.label === "Overdue Verifications" ? "text-[#FF777C]" : "text-white"
                                            }`}
                                    >
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

export default Contentclerk2
