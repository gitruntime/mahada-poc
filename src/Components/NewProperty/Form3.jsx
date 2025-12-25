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


                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-[20px] mx-5 sm:gap-0 mt-6">
                        <Link
                            href="/newpropform2"
                            className="w-full sm:w-auto px-6 py-2 text-center bg-white border-2 border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition"
                        >
                            Previous
                        </Link>

                        <Link
                            href="/done"
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
