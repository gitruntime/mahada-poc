import React from 'react'
import Image from 'next/image'
import { Bell, MapPin } from 'lucide-react'
import { Poppins } from "next/font/google";
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from "next/router";
import PropertyMenu from "@/Components/Homepage/HeroNavbar/PropertyMenu.jsx";
import Rent from '@/Components/Homepage/HeroNavbar/Rent.jsx';

import Sell from '@/Components/Homepage/HeroNavbar/Sell.jsx';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const HeroNavbar = () => {
    const router = useRouter();
    const handleLogout = () => {
        sessionStorage.removeItem("isAuthenticated");
        router.push("/login");
    };

    return (
        <nav className="w-full h-[64px] px-[80px] flex items-center justify-between bg-[#2f2f2f]/30 text-white">

            <div className={`flex w-full h-[36px] items-center px-[20px] gap-2 ${poppins.className}`}>
                <h1 className="relative text-[24px] font-semibold">
                    Mhada <span className="text-orange-500">Estate</span>


                    <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-orange-500"></span>
                </h1>
            </div>




            <div className="hidden md:flex items-center gap-6 text-white/60">

                <div className="relative group">
                    {/* BUY BUTTON */}
                    <div
                        className={`flex items-center justify-center gap-1 
      w-[71px] h-[40px] rounded-[12px] px-[10px]
      cursor-pointer text-[16px] leading-[20px] font-medium
      hover:text-white hover:bg-white/10
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
                        className={`flex items-center justify-center gap-1 
      w-[71px] h-[40px] rounded-[12px] px-[10px]
      cursor-pointer text-[16px] leading-[20px] font-medium
      hover:text-white hover:bg-white/10
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

                    {/* HOVER  RENT MODAL */}
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
                    <div
                        className={`flex items-center justify-center gap-1 
      w-[71px] h-[40px] rounded-[12px] px-[10px]
      cursor-pointer text-[16px] leading-[20px] font-medium
      hover:text-white hover:bg-white/10
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
                    {/* SELL */}
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



                    </div>
                </div>

            </div>



            {/* Right: Actions */}
            <div className="flex items-center just gap-4 ml-[40px]">

                {/* Notification */}
                <div className="relative flex items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full border-[1px] bg-white/20">
                    <Bell size={18} className="text-white" />

                    <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-[2px] 
                            bg-red-500 text-white text-[12px] font-medium rounded-full 
                            flex items-center justify-center leading-none">
                        3
                    </span>
                </div>


                {/* Dashboard */}
                <Link href="/dashboard">
                    <button className="group flex items-center w-[116px] h-[32px] gap-[4px] bg-[#FF7A00] hover:bg-[#0ab432] pt-[2px] pr-[14px] pb-[2px] pl-[2px] rounded-full cursor-pointer text-white transition-all shadow-sm">

                        {/* Avatar & Badge */}
                        <div className="relative flex-shrink-0 w-[28px] h-[28px]">
                            <img
                                src="/personprofile.png"
                                alt="User"
                                className="w-full h-full rounded-full object-cover"
                            />

                            <div className="absolute -bottom-0.5 -right-0.5 bg-[#00873E] w-[12px] h-[12px] rounded-full border border-[#FF7A00] flex items-center justify-center">
                                <svg
                                    className="w-[7px] h-[7px] text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M9 12l2 2 4-4"
                                    />
                                </svg>
                            </div>
                        </div>

                        <span className={`text-[12px] font-light leading-none ${poppins.className}`}>
                            Dashboard
                        </span>
                    </button>
                </Link>

                {/* Location */}
                <div
                    className={`
                            flex items-center justify-center
                            w-[114px] h-[32px] 
                            pt-[6px] pr-[14px] pb-[6px] pl-[14px] 
                            gap-[4px] 
                            rounded-full border border-white  
                            bg-[#4A5C5A] 
                            cursor-pointer text-white
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
                <div
                    onClick={handleLogout}
                    className="
    flex items-center justify-center
    h-[32px]
    px-[14px]
    w-[100px]
    rounded-full
    border border-white
    bg-red-500/90
    text-white
    text-[12px]
    font-medium
    cursor-pointer
    hover:bg-red-600
    hover:border-red-500
    active:scale-95
    transition-all
    duration-200
    shadow-sm
  "
                >
                    Logout
                </div>


            </div>
        </nav>
    )
}

export default HeroNavbar
