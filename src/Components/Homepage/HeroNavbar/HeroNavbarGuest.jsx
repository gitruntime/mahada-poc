"use client";

import { useState } from "react"
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
import CityDropdownDiv from './CityDropdownDiv';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const HeroNavbar = () => {
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("LRD-123456789");
// Function to decide the href based on input
  const getHref = () => {
    if (inputValue === "LRD-123456789") return "/trackapppage";
    if (inputValue === "TNT-123456789") return "/trackapppage2";
    return "#"; // fallback
  };
    const router = useRouter();
    const handleLogin = () => {
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
                <div className={`w-[200px] ${poppins.className} font-medium text-[16px]`}>
                    <h1
                        className="cursor-pointer"
                        onClick={() => setShowPopup(true)}
                    >
                        Track your application
                    </h1>

                    {showPopup && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                            <div className="bg-white w-[470px]  h-[231px]  px-8 py-6 shadow-2xl text-black relative">

                                {/* Close button */}
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="absolute top-4 right-4 w-[24px] h-[24px] flex items-center justify-center rounded-full bg-black text-white"
                                >
                                    ✕
                                </button>

                                {/* Title */}
                                <h2 className={`text-[20px] font-semibold mt-[20px] ${poppins.className} mb-[50px]`}>
                                    Track your application
                                </h2>

                                {/* Label */}
                                <label className={`block ${poppins.className} text-[14px] font-medium mb-2`}>
                                    Enter your reference ID / Email ID
                                </label>

                                {/* Input + Button */}
                                <div className="flex items-center rounded-[12px] border border-[#D4D7E3] focus-within:border-orange-400 focus-within:ring-1/2 focus-within:ring-orange-400">
  <input
    type="text"
    placeholder="Type here"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    className="flex-1 h-[44px] px-4 bg-transparent outline-none"
  />

  <button
    onClick={() => {
      if (inputValue === "LRD-123456789") {
        router.push("/trackapppage");
      } else if (inputValue === "TNT-123456789") {
        router.push("/trackapppage2");
      } else {
        alert("No ID found");
      }
    }}
    className="h-[44px] flex items-center px-6 rounded-[12px] bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
  >
    Next →
  </button>
</div>



                            </div>
                        </div>

                    )}
                </div>

            </div>



            {/* Right: Actions */}
            <div className="flex items-center just gap-4 ml-[40px]">

                {/* Notification */}
                <div className="relative flex flex-col items-center justify-center cursor-pointer w-[32px] h-[32px] rounded-full border-[1px] bg-white/20"
                    onClick={() => setShowNotifications(!showNotifications)}>
                    <Bell size={18} className="text-white" />

                    <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-[2px] 
            bg-red-500 text-white text-[12px] font-medium rounded-full 
            flex items-center justify-center leading-none">
                        3
                    </span>

                    {/* Notification dropdown */}
                    {showNotifications && (
                        <div className="absolute top-[40px] right-3 w-80 bg-white shadow-xl rounded-lg p-3 z-50">
                            <p className="text-gray-700 font-semibold text-sm mb-3">Notifications</p>
                            <div className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
                                <div className="flex items-start py-3 px-2 hover:bg-gray-50 rounded-md cursor-pointer">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 text-sm font-medium">Application Update</p>
                                        <p className="text-gray-600 text-xs">Your Application has submitted successfully.</p>
                                        <span className="text-gray-400 text-[10px]">5 min ago</span>
                                    </div>
                                </div>

                                <div className="flex items-start py-3 px-2 hover:bg-gray-50 rounded-md cursor-pointer">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 text-sm font-medium">Document Verification Update</p>
                                        <p className="text-gray-600 text-xs">Document has been verified successfully.</p>
                                        <span className="text-gray-400 text-[10px]">10 min ago</span>
                                    </div>
                                </div>

                                <div className="flex items-start py-3 px-2 hover:bg-gray-50 rounded-md cursor-pointer">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <p className="text-gray-800 text-sm font-medium">Alert</p>
                                        <p className="text-gray-600 text-xs">Complete your profile.</p>
                                        <span className="text-gray-400 text-[10px]">30 min ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )}
                </div>



                <div
                    onClick={handleLogin}
                    className="
    flex items-center justify-center
    h-[32px]
    px-[14px]
    w-[60px]
    rounded-full
   
    bg-[#F97415]
    text-white
    text-[12px]
    font-medium
    cursor-pointer
   
    active:scale-95
    transition-all
    duration-200
    shadow-sm
  "
                >
                    Login
                </div>

                {/* Location */}
                {/* <div
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
                   
                    <MapPin size={16} strokeWidth={2} className="flex-shrink-0" />

                    <span className={`${poppins.className} text-[12px] font-[400] leading-none`}>
                        Mumbai
                    </span>

                    <ChevronDown size={16} strokeWidth={2} className="flex-shrink-0" />
                </div> */}
                <CityDropdownDiv />






            </div>
            <Image src="/moreicon.png" width={24} height={24} className='ml-3' />

        </nav>
    )
}

export default HeroNavbar
