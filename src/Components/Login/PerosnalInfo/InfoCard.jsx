import React from "react";
import { Poppins, Arimo } from 'next/font/google';
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

import Link from "next/link";


const InfoCard = () => {
    return (
        <div className="absolute top-[100px] left-[144px] w-[1152px] h-[769px] opacity-100 gap-6 flex flex-col">
            {/* Header: Complete your KYC and Skip button */}
            <div className="flex justify-between w-[1152px] gap-[] h-[48px] px-[40px] items-center">
                <h2 className={`text-[#717182] ${poppins.className} text-[24px] font-normal`}>
                    Complete your Know Your Customer verification quickly and securely
                </h2>
                <Link href="/" className={`w-[full] h-[48px] px-[14px] py-[11px] text-center 
                 flex align-center border-2 border-orange-500 
                 hover: rounded-[12px] text-[14px] text-orange-500 font-medium 
                  hover:bg-orange-500 hover:text-white hover:shadow-md
                   transition-all duration-300 ${poppins.className}`}>
                    Skip for now

                </Link>
            </div>

            {/* KYC Verification Card */}
            <div className="w-[950px] h-[auto] mx-auto rounded-[14px] px-3 border border-gray-300 flex flex-col pt-[20px] pb-[20px] px-0 gap-6">

                {/* Progress Bar & Title */}
                <div className="w-[894px] mx-auto flex flex-col items-center justify-center">
                    <h3 className="text-center text-gray-800 font-semibold text-lg mb-6">
                        KYC Verification
                    </h3>

                    {/* Progress Bar */}
                    <div className="w-full flex flex-col items-center">
                        {/* Progress Bar */}
                        <div className="w-full relative h-2 mb-6">
                            {/* Background Line */}
                            <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-full -translate-y-1/2"></div>
                            {/* Filled Line */}
                            <div
                                className="absolute top-1/2 left-0 h-2 bg-orange-500 rounded-full -translate-y-1/2"
                                style={{ width: '33.33%' }}
                            ></div>
                        </div>

                        {/* Steps */}
                        <div className="flex -mt-[20px] justify-between w-full">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                    <img src="/personalinfo_icon.png" alt="Personal Info" className="w-[20px] h-[20px]" />
                                </div>
                                <span className={`text-[12px] font-normal ${poppins.className} text-[#030213]`} >Personal Info</span>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10  rounded-full flex items-center justify-center">
                                    <img src="/document_icon.png" alt="Documents" className="w-[20px] h-[20px]" />
                                </div>
                                <span className={`text-[12px] font-normal ${poppins.className} text-[#717182]`}>Documents</span>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10  rounded-full flex items-center justify-center">
                                    <img src="/review_icon.png" alt="Review & Submit" className="w-[20px] h-[20px]" />
                                </div>
                                <span className={`text-[12px] font-normal ${poppins.className} text-[#717182]`}>Review & Submit</span>
                            </div>
                        </div>
                    </div>

                </div>



                {/* Personal Info Section */}
                <div className="w-[894px] h-auto mx-auto gap-4 flex flex-col">
                    <h4 className={`text-[#0A0A0A] ${poppins.className} font-normal text-md`}>
                        Personal Information
                    </h4>

                    {/* Name Fields */}
                    <div className="flex flex-col gap-1 w-full">
                        <div className="flex gap-4">
                            <div className="flex-1 flex flex-col">
                                <label htmlFor="firstName" className={`text-[#0A0A0A] ${poppins.className} text-[14px] mb-1`}>
                                    First Name *
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                    className={`flex-1 p-2 border border-[#D4D7E3] rounded-[12px] bg-[#F7FBFF] placeholder:text-[#A1A6B3] placeholder:text-[14px] placeholder:font-normal ${poppins.className}`}
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <label htmlFor="lastname" className={`text-[#0A0A0A] ${poppins.className} text-[14px] mb-1`}>
                                    Last Name *
                                </label>
                                <input
                                    id="lastname"
                                    type="text"
                                    placeholder="Enter your last name"
                                    className={`flex-1 p-2 border border-[#D4D7E3] rounded-[12px] bg-[#F7FBFF] placeholder:text-[#A1A6B3] placeholder:text-[14px] placeholder:font-normal ${poppins.className}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-4">
                            <div className="flex-1 flex flex-col">
                                <label htmlFor="email" className={`text-[#0A0A0A] ${poppins.className} text-[14px] mb-1`}>
                                    Email Address *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`flex-1 p-2 border border-[#D4D7E3] rounded-[12px] bg-[#F7FBFF] placeholder:text-[#A1A6B3] placeholder:text-[14px] placeholder:font-normal ${poppins.className}`}
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <label htmlFor="number" className={`text-[#0A0A0A] ${poppins.className} text-[14px] mb-1`}>
                                    Phone Number *
                                </label>
                                <input
                                    id="number"
                                    type="text"
                                    placeholder="Enter 10-digit mobile number"
                                    className={`flex-1 p-2 border border-[#D4D7E3] rounded-[12px] bg-[#F7FBFF] placeholder:text-[#A1A6B3] placeholder:text-[14px] placeholder:font-normal ${poppins.className}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Date of Birth */}
                    <div className="flex-1 flex flex-col">
                        <label htmlFor="DOB" className={`text-[#0A0A0A] ${poppins.className} text-[14px] mb-1`}>
                            Date of Birth *
                        </label>
                        <input
                            id="dob"
                            type="text"
                            placeholder="DD/MM/YYYY"
                            className={`flex-1 p-2 border border-[#D4D7E3] rounded-[12px] bg-[#F7FBFF] placeholder:text-[#A1A6B3] placeholder:text-[14px] placeholder:font-normal ${poppins.className}`}
                        />
                    </div>

                    {/* Address */}
                    <div className="flex-1 flex flex-col">
                        <label htmlFor="address" className={`text-[#0A0A0A] ${poppins.className} text-[14px] mb-1`}>
                            Address *
                        </label>
                        <textarea
                            placeholder="Enter your complete address"
                            className={`flex-1 p-2 border border-[#D4D7E3] rounded-[12px] bg-[#F7FBFF] placeholder:text-[#A1A6B3] placeholder:text-[14px] placeholder:font-normal ${poppins.className}`}
                        />
                    </div>

                    {/* City, State, PIN */}
                    <div className="flex gap-4 w-full">
                        <div className="flex-1 flex flex-col">
                            <label htmlFor="city" className={`text-[#0A0A0A] ${poppins.className} text-[14px] mb-1`}>
                                City *
                            </label>
                            <input
                                id="city"
                                type="text"
                                placeholder="City"
                                className={`flex-1 p-2 border border-[#D4D7E3] rounded-[12px] bg-[#F7FBFF] placeholder:text-[#A1A6B3] placeholder:text-[14px] placeholder:font-normal ${poppins.className}`}
                            />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <label htmlFor="state" className={`text-[#0A0A0A] ${poppins.className} text-[14px] mb-1`}>
                                State *
                            </label>
                            <select
                                id="state"
                                className={`flex-1 p-2 border border-[#D4D7E3] rounded-[12px] bg-[#F7FBFF] placeholder:text-[#A1A6B3] placeholder:text-[14px] placeholder:font-normal ${poppins.className}`}
                            >
                                <option>Select State</option>
                            </select>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <label htmlFor="pin" className={`text-[#0A0A0A] ${poppins.className} text-[14px] mb-1`}>
                                PIN Code *
                            </label>
                            <input
                                id="pin"
                                type="text"
                                placeholder="6-digit PIN"
                                className={`flex-1 p-2 border border-[#D4D7E3] rounded-[12px] bg-[#F7FBFF] placeholder:text-[#A1A6B3] placeholder:text-[14px] placeholder:font-normal ${poppins.className}`}
                            />
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-6">
            <Link
              href="/login"
              className="px-6 py-2 bg-white border-2 border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition w-full sm:w-auto text-center"
            >
              Previous
            </Link>
            <div className="flex justify-end w-full">
              <Link href="/document_info"
                className={`bg-orange-500 text-white ${poppins.className} 
            flex justify-center items-center gap-2 text-[14px] 
            px-6 py-2.5 rounded-lg 
            cursor-pointer 
            transition-all duration-300 ease-in-out
            hover:bg-orange-600 hover:shadow-md hover:scale-[1.02]
            active:scale-[0.98]`}
              >
                Next
                <img
                  src="/righticon.png"
                  className="w-[16px] h-[16px] transition-transform duration-300 group-hover:translate-x-1"
                  alt=""
                />
              </Link>
            </div>
          </div>
                </div>

            </div>
        </div>
    );
};

export default InfoCard;
