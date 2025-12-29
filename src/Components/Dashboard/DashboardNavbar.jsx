import React from 'react'
import Image from 'next/image'
import { Bell, MapPin } from 'lucide-react'
import { Poppins } from "next/font/google";
import { ChevronDown } from 'lucide-react';
import PropertyMenu from "@/Components/Homepage/HeroNavbar/PropertyMenu.jsx";
import Rent from '@/Components/Homepage/HeroNavbar/Rent.jsx';

import Sell from '@/Components/Homepage/HeroNavbar/Sell.jsx';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const DashboardNavbar = () => {
    return (
        <nav className="w-full h-[64px] shadow-[0px_3px_14.4px_0px_rgba(0,0,0,0.25)]  px-[80px] flex items-center justify-between bg-white text-white">

            {/* Left: Logo */}
            <div className={`flex w-full h-[36px] items-center px-[20px] gap-2 ${poppins.className}`}>
                <h1 className="relative text-[24px] text-black font-semibold">
                    Mhada <span className="text-orange-500">Estate</span>

                    {/* underline */}
                    <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-orange-500"></span>
                </h1>
            </div>



            {/* Center: Menu */}
            <div className="hidden md:flex items-center gap-6 text-white/60">

                <div className="relative group">
                    {/* BUY BUTTON */}
                    <div
                        className={`flex text-[#00000099] items-center justify-center gap-1 
      w-[71px] h-[40px] rounded-[12px] px-[10px]
      cursor-pointer text-[16px] leading-[20px] font-medium
      hover:text-[#F97415] hover:bg-gray-100
      ${poppins.className}`}
                    >
                        <span>Buy</span>
                        <svg
                            className="w-3 h-3 mt-[1px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* HOVER MODAL */}
                    <div
                       className="
    absolute left-1/2 -translate-x-1/2 top-[40px]
    w-[1025px]
    bg-white
    rounded-[12px]
    shadow-xl
    opacity-0 
    pointer-events-none
    group-hover:opacity-100 
    group-hover:visible
    group-hover:pointer-events-auto
    transition-all duration-200
    z-50
">
                        <PropertyMenu className="w-full h-full" />
                    </div>
                </div>



                <div className="relative group">
                    {/* RENT BUTTON */}
                    <div
                         className={`flex text-[#00000099] items-center justify-center gap-1 
      w-[71px] h-[40px] rounded-[12px] px-[10px]
      cursor-pointer text-[16px] leading-[20px] font-medium
      hover:text-[#F97415] hover:bg-gray-100
      ${poppins.className}`}
                    >
                        <span>Rent</span>
                        <svg
                            className="w-3 h-3 mt-[1px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* HOVER MODAL */}
                   <div
                        className="
                                absolute left-1/2 -translate-x-1/2 top-[40px]
                                w-[900px]
                                bg-white
                                rounded-[12px]
                                shadow-xl
                                opacity-0 
                                pointer-events-none
                                group-hover:opacity-100 
                                group-hover:visible
                                group-hover:pointer-events-auto
                                transition-all duration-200
                                z-50
                            ">
                        <Rent className="w-full h-full" />



                    </div>
                </div>

                <div className="relative group">
                    {/* SELL BUTTON */}
                    <div
                         className={`flex text-[#00000099] items-center justify-center gap-1 
      w-[71px] h-[40px] rounded-[12px] px-[10px]
      cursor-pointer text-[16px] leading-[20px] font-medium
      hover:text-[#F97415] hover:bg-gray-100
      ${poppins.className}`}
                    >
                        <span>Sell</span>
                        <svg
                            className="w-3 h-3 mt-[1px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* HOVER MODAL */}
                    <div
                         className="
    absolute left-1/2 -translate-x-1/2 top-[40px]
    w-[600px]
    bg-white
    rounded-[12px]
    shadow-xl
    opacity-0 
    pointer-events-none
    group-hover:opacity-100 
    group-hover:visible
    group-hover:pointer-events-auto
    transition-all duration-200
    z-50
">
                        <Sell className="w-full h-full" />
                        <div className="flex mt-[10px] ml-[24px] flex-col sm:flex-row items-center gap-5">



                            <button
                                className={`${poppins.className}  cursor-pointer w-[183px] h-[54px] bg-[#00873E] hover:bg-[#007034] text-white text-[16px] font-medium rounded-[12px] transition-all border border-white/10 shadow-lg`}
                            >
                                List Your Property
                            </button>


                        </div>
                    </div>
                </div>

            </div>



            {/* Right: Actions */}
            <div className="flex items-center just gap-4 ml-[40px]">

                {/* Notification */}
                <div className="relative flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full border-[1px] border-[#818181] bg-white/20">
                    <Bell size={18} className="text-[#818181]" />

                    <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-[2px] 
                            bg-red-500 text-white text-[12px] font-medium rounded-full 
                            flex items-center justify-center leading-none">
                        3
                    </span>
                </div>


                {/* Dashboard */}
                <button className="group flex items-center w-[116px] h-[32px] gap-[4px] bg-[#FF7A00] hover:bg-[#E66E00] pt-[2px] pr-[14px] pb-[2px] pl-[2px] rounded-full text-white transition-all shadow-sm">
                    {/* Avatar & Badge Container */}
                    <div className="relative flex-shrink-0 w-[28px] h-[28px]">
                        <img
                            src="/personprofile.png"
                            alt="User"
                            className="w-full h-full rounded-full object-cover"
                        />
                        {/* Status Badge */}
                        <div className="absolute -bottom-0.5 -right-0.5 bg-[#00873E] w-[12px] h-[12px] rounded-full border border-[#FF7A00] flex items-center justify-center">
                            <svg
                                className="w-[7px] h-[7px] text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                    </div>

                    {/* Label */}
                    <span className={`text-[12px] font-light leading-none cursor-pointer  ${poppins.className} `}>
                        Dashboard
                    </span>
                </button>

                {/* Location */}
                <div
                    className={`
                            flex items-center justify-center
                            w-[114px] h-[32px] 
                            pt-[6px] pr-[14px] pb-[6px] pl-[14px] 
                            gap-[4px] 
                            rounded-full border border-[#818181]  
                            
                            cursor-pointer text-[#818181]
                        `}
                >
                    {/* Left Icon */}
                    <MapPin size={16} strokeWidth={2} className="flex-shrink-0" />

                    {/* Text - Added font-[600] to force weight if semibold is failing */}
                    <span className={`${poppins.className} text-[12px] font-[400] leading-none`}>
                        Mumbai
                    </span>

                    {/* Right Chevron Icon from image */}
                    <ChevronDown size={16} strokeWidth={2} className="flex-shrink-0" />
                </div>

            </div>
        </nav>
    )
}

export default DashboardNavbar
