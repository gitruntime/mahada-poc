import React from "react";
import Image from "next/image";
import { Pencil, LogOut } from "lucide-react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


const ProfileSection = () => {
    return (
        /* MAIN OUTER CONTAINER */
        <div className="w-[full] h-[346px] p-[40px] flex justify-center items-center">

            {/* INNER ROUNDED CARD */}
            <div className="w-[1360px] h-[266px] flex items-center justify-between
        px-[60px] py-[30px] border-2 border-[#EDEDED] rounded-[30px] bg-white shadow-[0px_20px_50px_0px_rgba(0,0,0,0.1)]">

                {/* LEFT: IMAGE + NAME + EMAIL */}
                <div className="w-[300px]  items-center gap-4">
                    <div className="relative flex items-center">
                        {/* Profile Image */}
                        <div className="relative w-[104px] h-[104px] rounded-full overflow-hidden">
                            <Image
                                src="/personprofile.png"
                                alt="Profile"
                                fill
                                sizes="104px"
                                className="object-cover"
                            />
                        </div>

                        {/* Verified Badge */}
                        <div className="absolute left-[120px] top-[100px] -translate-y-1/2
                  flex items-center gap-1 px-3 h-[28px]
                  bg-[#028541] rounded-full">
                            <img
                                src="/verified_logo.png"
                                alt="verified"
                                className="w-3 h-3"
                            />
                            <span className="text-white text-[12px] font-semibold">
                                Verified
                            </span>
                        </div>
                    </div>



                    {/* Text + Badge */}
                    <div className="flex ml-[10px] mt-[24px] flex-col gap-2">


                        <div>
                            <p className={` ${poppins.className} text-[12px] text-[#00000099]`}>Name</p>
                            <h2 className={`text-[24px] mt-[3px] mb-[3px]  ${poppins.className} font-normal`}>Arjun Chatterjee</h2>
                            <p className={`text-[12px] ${poppins.className}  text-orange-500`}>Arjun@chaterjee.com</p>
                        </div>
                    </div>
                </div>

                {/* MIDDLE: PHONE + ADDRESS */}
                <div className="w-[300px] h-[191px] flex flex-col gap-[24px]">
                    <div>
                        <p className={`text-[12px] ${poppins.className} text-[#00000099]`}>Phone Number</p>
                        <p className={`${inter.className} font-normal text-[18px] leading-[100%] tracking-[0%] mt-[18px]`}>
                            <span className="text-[#666666]">+91</span> 9898989898
                        </p>
                    </div>

                    <div>
                        <p className={`text-[12px] ${poppins.className} text-gray-500`}>Home Address</p>
                        <p className={`${poppins.className} text-[18px] mt-[13px]  font-normal`}>
                            30160, Gusikowski Unions,<br />
                            Mumbai 400104,<br />
                            Maharashtra
                        </p>
                    </div>
                </div>

                {/* RIGHT: DOB + AADHAAR */}
                <div className="w-[300px]  h-[191px]   flex flex-col gap-[24px]">
                    <div>
                        <p className={` ${poppins.className} text-[12px] text-[#666666]`}>Date of Birth</p>
                        <p className={`font-normal text-[18px]   ${poppins.className}`}>11/11/1987</p>
                    </div>

                    <div className="top-[100px]">
                        <p className={` ${poppins.className} text-[12px] text-[#666666]`}>Aadhaar Card No</p>
                        <p className={`font-normal text-[18px] py-[15px]   ${poppins.className}`}>57370-1847</p>
                    </div>
                </div>

                {/* EDIT & LOGOUT */}
                <div className="w-[142px] h-[191px] flex  items-start gap-[16px] pt-[10px]">
                    <button className="flex items-center gap- text-[14px] font-medium text-[#000000]">
                        <Image src="/pencil.png" width={20} height={20} /> <span className={`${inter.className} text-[12px] flex justify-center`}>Edit</span>
                    </button>

                    <button className="flex items-center gap-2 text-[14px] font-medium text-red-500">
                        <Image src="/logout.png" width={20} height={20} /> <span className={`${inter.className} text-[12px] flex justify-center`}>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
