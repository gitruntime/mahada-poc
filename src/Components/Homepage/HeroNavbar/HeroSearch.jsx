import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

import { Search, MapPin, SlidersHorizontal, ChevronDown } from "lucide-react";
const HeroSearch = () => {
    return (
        <div className="w-full flex justify-center px-4">
            <div className="w-full max-w-[1240px] bg-white rounded-[16px] px-4 py-3 flex items-center gap-3 shadow-md">

                {/* Search Input */}
                <div className="flex items-center w-[630px] gap-3 bg-[#F4F2EE]  rounded-[10px] px-4 h-[52px] flex-1">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search properties, localities..."
                        className="w-full outline-none text-[#6B7280] placeholder-[#6B7280]"
                    />
                </div>

                {/* Select City */}
                <div className="flex items-center justify-between gap-3 w-[175px] bg-[#F4F2EE]  rounded-[10px] px-4 h-[52px] min-w-[170px] cursor-pointer">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <span className="text-black">Select City</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                {/* Property Type */}
                <div className="flex items-center justify-between w-[169px] gap-3 bg-[#F4F2EE]  rounded-[10px] px-4 h-[52px] min-w-[180px] cursor-pointer">
                    <span className="text-black">Property Type</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                {/* Filters Button */}
                <button className="flex items-center justify-center gap-2 w-[90px] h-[48px] rounded-[10px] border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition">
                    <img src="/filtericon.png" alt="Filter" className="w-[16px] h-[16px]" />
                    <h1 className="font-medium text-[14px]">Filters</h1>
                </button>




                {/* Search Button */}
                <button className={` ${poppins.className} 
                flex items-center justify-center gap-2
                            w-[105px] h-[47px]
                            px-3 py-[15px]
                            rounded-[12px]
                            bg-orange-500 text-white
                            font-medium text-[16px] leading-[24px]
                            hover:bg-orange-600 transition`}

                >
                    <img
                        src="/searchicon.png"
                        alt="Search"
                        className="w-4 h-4"
                    />
                    <span className="text-center align-middle">
                        Search
                    </span>
                </button>


            </div>
        </div>
    );
}

export default HeroSearch
