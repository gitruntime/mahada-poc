import React from 'react';
import { Poppins } from "next/font/google";
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const PropertyInfo = () => {
    return (
        <div
            className={`w-full 
      border-2 border-[#D1D5DC] 
      rounded-[10px] 
      bg-[#F9FAFB] 
      px-4 sm:px-6 py-6 
      ${poppins.className}`}
        >
            {/* Header */}
            <h2 className="text-[18px] leading-[28px]  font-normal text-[#0F1729] mb-4">
                Property Info
            </h2>

            {/* Content */}
            <div className="flex flex-col gap-4 ml-[24px] text-[14px] leading-[20px] text-[#0F1729]">
                <p className={`${poppins.className} flex gap-1 text-[14px] font-bold`}>
                    <span className="font-normal">
                        Title:
                    </span>
                    Modern 2BHK in Andheri West
                </p>


                <p>
                    <span className={`text-[14px]  ${poppins.className} font-normal `}>Property Type:</span>{" "}
                      <span className={`font-bold text-[14px] ${poppins.className}`}> 2BHK</span>
                   
                </p>
                 <p>
                    <span className={`font-normal text-[14px] ${poppins.className}`}>Ownership Date :</span>{" "}
                    <span className={`font-bold text-[14px] ${poppins.className}`}>3 August, 2003</span>
                </p>


                <p>
                    <span className={`font-normal text-[14px]  ${poppins.className} `}>Address:</span>{" "}
                    <span className={`font-bold text-[14px] ${poppins.className}`}>Andheri West, Near DN Nagar Metro</span>
                </p>

               

               

               
            </div>
        </div >
    );
};

export default PropertyInfo;
