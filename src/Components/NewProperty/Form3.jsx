import React from 'react'
import { Poppins, Arimo } from 'next/font/google';
import Link from 'next/link';
import BlankNavbar from '@/Components/BlankNavbar';
import Image from 'next/image';
import PropertyInfo from './PropertyInfo';
import PropImage from './PropImage';
import PropDoc from './PropDoc';
import { useEffect, useState } from 'react';


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const arimo = Arimo({
    subsets: ['latin'],
    weight: ['400', '700'],
});


const Form3 = () => {
    const [accepted, setAccepted] = useState(false);
    const [images, setImages] = useState([]);
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
        const storedDocs = JSON.parse(localStorage.getItem('uploadedDocs')) || [];

        setImages(storedImages);
        setDocs(storedDocs);
    }, []);

    return (
        <div>
            <BlankNavbar />
            <div className={`px-4 sm:px-8 lg:px-20 mt-6 ${poppins.className}`}>
                <Link
                    href="/dashboard"
                    className={`text-[16px] font-medium leading-[100%] text-black cursor-pointer ${poppins.className}`}
                    style={{ fontStyle: 'medium', letterSpacing: '0%' }}
                >
                    Go Back
                </Link>
            </div>
            <div className={`flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-10 ${poppins.className}`}>
                <div className="w-full max-w-[900px] bg-white border border-gray-200 rounded-xl shadow-md space-y-6">
                    {/* Header */}
                    <div className="text-left  sm:px-4 mb-6  pt-[20px] ml-[20px] sm:mb-10 space-y-2">
                        <h1 className="text-[24px] sm:text-[30px] font-bold text-[#0F1729]">
                            Upload Images and Documents
                        </h1>
                        <p className={`text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#717182] ${arimo.className}`}>
                            Please upload clear, colored scans or photos of your documents. All documents are required.
                        </p>
                    </div>

                    {/* Property Info */}
                    <div className="w-full">
                        <PropertyInfo />
                    </div>

                    <div className={`w-full  
      border-2 border-[#D1D5DC] 
      rounded-[10px] 
      bg-[#F9FAFB] 
      px-4 sm:px-6 py-6 
      ${poppins.className}`}>
                        <PropImage images={images} />
                    </div>
                    <div className="w-full">
                        <PropDoc docs={docs} />
                    </div>

                    <div className="flex-1 min-w-[220px] rounded-[12px]   bg-[#F7FBFF] border-2 border-gray-200 p-5">
                        <h2 className={`${poppins.className} text-[18px] font-normal text-[#0A0A0A] mb-2`}>
                            Property Verification and Listing fees
                        </h2>

                        <p className={`${poppins.className} text-[13.5px]  text-[#717182] leading-relaxed mb-4`}>
                            As per applicable government regulations, a one-time registration fee is required for processing your tenant application. Registration fees are collected only for processing and verification, and do not guarantee approval.
                        </p>

                        <div className={`${poppins.className} text-[14px] text-[#0A0A0A] space-y-2 mb-4`}>
                            <div className="flex items-center gap-2">
                                <span className="text-[#717182] w-[120px]">Payment Type</span>
                                <span className="font-medium">One-time</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[#717182] w-[120px]">Refundable</span>
                                <span className="font-medium">No</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[#717182] w-[120px]">Registration Fee</span>
                                <span className="font-semibold text-[16px]">₹ 299</span>
                            </div>
                        </div>
                        <div className="mx-auto w-full  border border-[#0000001A] rounded-[10px] p-4 flex flex-col  ">
                            <p className={`${poppins.className} text-[13.5px] text-[#717182] leading-relaxed mb-2 `}>
                                Payment of the listing fee does not guarantee approval or tenant allocation.
                            </p>
                            <p className={`${poppins.className} text-[13.5px] text-[#717182] leading-relaxed `}>
                                Final activation of the listing is subject to verification and approval by the competent authority as per applicable government regulations.
                            </p>
                        </div>




                        <label className="flex items-center h-[46px] rounded-[10px] mt-2 px-4 space-x-3 text-gray-800 text-sm cursor-pointer border-[0.5px] border-[#0000001A]">
                            <input
                                type="checkbox"
                                checked={accepted}
                                onChange={() => setAccepted(!accepted)}
                                className="appearance-none h-5 w-5 border bg-[#6B7280] border-gray-300 rounded checked:bg-[#F97415]"
                            />
                            <span className={`select-none text-[#717182] text-[13.5px] ${poppins.className}`}>
                                I confirm that the property details provided by me are accurate and that I agree to pay the applicable listing fee for processing and verification purposes.
                            </span>
                        </label>
                    </div>


                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-[20px] mx-5 sm:gap-0 mt-6">
                        <Link
                            href="/newpropform2"
                            className="w-full sm:w-auto px-6 py-2 text-center bg-white border-2 border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition"
                        >
                            Previous
                        </Link>

                        <Link
                            href="/Landlord/paymentgateway2"
                            className={`w-full sm:w-auto bg-orange-500 text-white ${poppins.className} 
          flex justify-center items-center gap-2 px-6 py-2.5 rounded-lg
          cursor-pointer transition-all duration-300 ease-in-out
          hover:bg-orange-600 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]`}
                        >
                            Next
                            <img
                                src="/righticon.png"
                                alt="Next Icon"
                                className="w-4 h-4 ml-1 transition-transform duration-300 hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form3
