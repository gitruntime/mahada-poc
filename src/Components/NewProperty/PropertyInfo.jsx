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
                    2BHK
                </p>

                <p>
                    <span className={`font-normal text-[14px]  ${poppins.className}`}>Property Status:</span>{" "}
                    Open for rent
                </p>

                <p>
                    <span className={`font-normal text-[14px]  ${poppins.className} `}>Address:</span>{" "}
                    <span className={`font-bold text-[14px] ${poppins.className}`}>Andheri West, Near DN Nagar Metro</span>
                </p>

                <p>
                    <span className={`font-normal text-[14px] ${poppins.className}`}>Monthly rent:</span>{" "}
                    <span className={`font-bold text-[14px] ${poppins.className}`}>₹ 35,000 / month</span>
                </p>

                <p>
                    <span className={`font-normal text-[14px] ${poppins.className}`}>Security Deposit:</span>{" "}
                    <span className={`font-bold text-[14px] ${poppins.className}`}> ₹ 1,00,000/</span>
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2">
                    <p>
                        <span className={`font-normal text-[14px] ${poppins.className}`}>Additional Description:</span>{" "}
                    </p>
                    <div className="flex items-center gap-[6px] px-[10px] h-[22px] border border-[#E5E7EB] rounded-full bg-white">
                        <Image
                            src="/wifi.png"   
                            alt="WiFi"
                            width={12} height={12}                        />
                        <span className="font-poppins font-bold text-[12px] leading-[16px] text-[#0F1729]">
                            Wi-Fi
                        </span>
                    </div>
                    <div className="flex items-center gap-[6px] px-[10px] h-[22px] border border-[#E5E7EB] rounded-full bg-white">
                        <Image
                            src="/parking.png"   
                            alt="Parking"
                            width={12} height={12}                        />
                        <span className="font-poppins font-bold text-[12px] leading-[16px] text-[#0F1729]">
                            Parking
                        </span>
                    </div>
                     <div className="flex items-center gap-[6px] px-[10px] h-[22px] border border-[#E5E7EB] rounded-full bg-white">
                       
                        <span className="font-poppins font-bold text-[12px] leading-[16px] text-[#0F1729]">
                            Gym
                        </span>
                    </div>
                    <div className="flex items-center gap-[6px] px-[10px] h-[22px] border border-[#E5E7EB] rounded-full bg-white">
                        <Image
                            src="/security.png"   
                            alt="Security"
                            width={12} height={12}                        />
                        <span className="font-poppins font-bold text-[12px] leading-[16px] text-[#0F1729]">
                            Security
                        </span>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default PropertyInfo;
