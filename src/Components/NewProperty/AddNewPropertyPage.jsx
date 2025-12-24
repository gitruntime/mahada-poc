import React from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import Link from 'next/link';
import BlankNavbar from '../BlankNavbar';


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const inputBaseClass = `
    w-full sm:max-w-[415.33px]
    h-[36px]
    px-[12px] py-[4px]
    rounded-[12px]
    border border-[#D4D7E3]
    bg-[#F7FBFF]
    text-[14px]
    text-[#717182]
    focus:outline-none
    `;

const AddNewPropertyPage = () => {

    return (
        <div className="w-full h-auto mb-[30px] bg-[#F9FAFB]">

            {/* NAVBAR */}
            <BlankNavbar/>

            {/* GO BACK */}
            <div className={`px-[20px] sm:px-[40px] lg:px-[80px] mt-6 ${poppins.className}`}>
                <Link href="/dashboard" className={`text-[16px] font-medium ${poppins.className} text-black cursor-pointer`}>
                    Go Back
                </Link>
            </div>

            {/* MAIN CARD */}
            <section className="
                    w-full max-w-[896px]
                    mx-auto mt-6
                    rounded-[14px]
                    border border-[#0000001A]
                    bg-white
                    px-[20px] sm:px-[40px]
                    py-[30px]
                ">

                {/* HEADER */}
                <div className="w-full mb-6">
                    <span className={`text-[#0F1729] ${poppins.className} font-bold text-[24px] sm:text-[30px]`}>
                        Add Property
                    </span>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className={`w-full sm:w-[73px] h-[48px] border-2 border-[#FF6A00] rounded-[12px]
                            text-[#FF6A00] text-[14px] font-medium ${poppins.className}`}>
                        Rental
                    </button>

                    <button className={`w-full sm:w-[59px] h-[48px] border-2 border-[#9E9E9E] rounded-[12px]
                            text-[#9E9E9E] text-[14px] font-medium ${poppins.className}`}>
                        Sale
                    </button>
                </div>

                {/* FORM */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">

                    {/* Title */}
                    <div>
                        <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Type property title here"
                            className={inputBaseClass}
                        />
                    </div>

                    {/* Property Type */}
                    <div className="flex flex-col">
                        <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            Property Type
                        </label>

                        <div className="relative">
                            <select className={`${inputBaseClass} appearance-none pr-10`}>
                                <option>Select property type</option>
                            </select>

                            <svg
                                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0A0A0A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>

                </div>

                {/* Rent + Deposit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">

                    <div>
                        <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            Expected Monthly Rent
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className={inputBaseClass}
                        />
                    </div>

                    <div>
                        <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            Security Deposit
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className={inputBaseClass}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                        Additional Description
                    </label>
                    <input className="w-full  rounded-xl border border-[#D5DEEF] bg-[#F8FBFF]  h-[36px]" />
                </div>

                {/* Address */}
                <div className="mb-6">
                    <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                        Address *
                    </label>
                    <input placeholder='Enter your complete address' className="w-full rounded-xl border flex justify-center place-items-start border-[#D5DEEF] bg-[#F8FBFF] px-2 h-[64px]" />
                </div>

                {/* City / State / PIN */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                    {/* City */}
                    <div className="flex flex-col">
                        <label className={`text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            City *
                        </label>
                        <input className={inputBaseClass} placeholder="City" />
                    </div>

                    {/* State */}
                    <div className="flex flex-col">
                        <label className={`text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            State *
                        </label>

                        <div className="relative">
                            <select
                                className={`${inputBaseClass} appearance-none pr-10`}
                            >
                                <option>Select State</option>
                            </select>

                            {/* Custom dropdown icon */}
                            <svg
                                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0A0A0A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>


                    {/* PIN */}
                    <div className="flex flex-col">
                        <label className={`text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            PIN Code *
                        </label>
                        <input
                            className={`
        ${inputBaseClass}
        placeholder:text-[#717182]
        placeholder:font-[400]
        placeholder:text-[14px]
        placeholder:leading-[100%]
        placeholder:tracking-[0px]
        placeholder:font-poppins
    `}
                            placeholder="6-digit PIN"
                        />                    </div>

                </div>


                {/* NEXT BUTTON */}
                <div className="flex justify-end w-full">
                    <Link href="/newpropform2"
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


            </section>



        </div>
    )
}

export default AddNewPropertyPage
