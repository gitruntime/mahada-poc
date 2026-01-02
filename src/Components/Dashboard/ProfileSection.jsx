import React from "react";
import Image from "next/image";
import { Poppins, Inter } from "next/font/google";
import StepsCard from "./StepCard";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const ProfileSection = () => {
    return (
        /* MAIN OUTER CONTAINER */
        <div className="w-full h-auto  p-4 md:p-[40px] flex justify-center items-center bg-gray-50">

            {/* INNER ROUNDED CARD */}
            <div
                className="w-full max-w-[1360px] h-auto lg:h-[305px] flex flex-col lg:flex-row items-center lg:items-start justify-between
  px-6 py-10 md:px-[60px] md:py-[40px] border-2 border-[#EDEDED] rounded-[30px] bg-white shadow-[0px_20px_50px_0px_rgba(0,0,0,0.1)] gap-8 lg:gap-0"
            >


                {/* LEFT: IMAGE + NAME + EMAIL */}
                <div className="w-full lg:w-[30%] flex flex-col items-center lg:items-start">
                    <div className="relative">
                        {/* Profile Image Container */}
                        <div className="relative w-[104px] h-[104px] rounded-full overflow-hidden ">
                            <Image
                                src="/personprofile.png"
                                alt="Profile"
                                fill
                                sizes="104px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start mt-[24px] mb-3 gap-1 text-center lg:text-left">
                        <p className={`${poppins.className} text-[12px] text-[#00000099]`}>Name</p>
                        <h2 className={`text-[24px] leading-tight ${poppins.className} font-normal`}>
                            Arjun Chatterjee
                        </h2>
                        <p className={`text-[12px] ${poppins.className} text-orange-500`}>
                            Arjun@chaterjee.com
                        </p>
                    </div>

                    {/* EDIT & LOGOUT with space below */}
                    <div className="w-full lg:w-auto flex justify-center lg:justify-end items-start gap-[24px] mt-auto mb-6 lg:mb-0 pt-6 lg:pt-0 border-t lg:border-t-0">
                        <button className="flex border border-[#F97415] items-center bg-[#F974151A] rounded-full px-3 py-2 gap-2 text-[#F97316] text-[14px] cursor-pointer font-medium">
                            <Image src="/pencil.png" alt="edit" width={16} height={16} />
                            Edit
                        </button>
                        <button className="flex border border-[#D8232A] rounded-full px-3 py-2 bg-[#D8232A1A] items-center gap-2 text-red-500 text-[14px] cursor-pointer font-medium">
                            <Image src="/logout.png" alt="logout" width={16} height={16} />
                            Logout
                        </button>
                    </div>
                </div>


                {/* MIDDLE: PHONE + ADDRESS */}
                <div className="w-full lg:w-[25%] flex flex-col gap-[15px] text-center lg:text-left">
                    <div>
                        <p className={`text-[12px] ${poppins.className} text-[#00000099]`}>Phone Number</p>
                        <p className={`${inter.className} font-normal text-[18px] `}>
                            <span className="text-[#666666]">+91</span> 9898989898
                        </p>
                    </div>
                    <div>
                        <p className={`text-[12px] ${poppins.className} text-[#00000099]`}>Date of Birth</p>
                        <p className={`${inter.className} font-normal text-[18px]`}>
                            <span className="text-[#000000]">11/11/1987</span>
                        </p>
                    </div>

                    <div>
                        <p className={`text-[12px] ${poppins.className} text-gray-500`}>Home Address</p>
                        <p className={`${poppins.className} text-[18px] mt-2 font-normal leading-relaxed`}>
                            30160, Gusikowski Unions,<br />
                            Mumbai 400104,<br />
                            Maharashtra
                        </p>
                    </div>
                </div>

                {/* RIGHT: DOB + AADHAAR */}
                <div className="w-full lg:w-[20%] flex flex-col gap-[24px] text-center lg:text-left">
                    <div>
                        <p className={`${poppins.className} text-[12px] text-[#666666]`}>Aadhaar Card No</p>
                        <p className={`font-normal text-[18px] mt-2 ${poppins.className}`}>57370-1847</p>
                    </div>

                    <div>
                        <p className={`${poppins.className} text-[12px] text-[#666666]`}>Pan Card no.</p>
                        <p className={`font-normal text-[18px] mt-2 ${poppins.className}`}>HCUP12345</p>
                    </div>
                </div>
                {/* EDIT & LOGOUT */}
                <div>
                    <StepsCard />
                </div>


            </div>
        </div>
    );
};

export default ProfileSection;