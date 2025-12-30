import React from 'react';
import { Poppins, Arimo } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const ReviewCard = () => {
    return (
        <div className="relative mt-24 mb-3 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-6">

                {/* Header: Complete your KYC and Skip button */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                    <h2 className={`text-gray-500 text-lg sm:text-xl font-normal text-center sm:text-left ${poppins.className}`}>
                        Complete your Know Your Customer verification quickly and securely
                    </h2>
                    <Link
                        href="/"
                        className={`px-4 py-2 text-center border-2 border-orange-500 rounded-lg text-orange-500 font-medium hover:bg-orange-500 hover:text-white hover:shadow-md transition-all duration-300 ${poppins.className}`}
                    >
                        Skip for now
                    </Link>
                </div>

                {/* KYC Verification Card */}
                <div className="w-full bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col gap-6">

                    {/* Progress Bar & Title */}
                    <div className="flex flex-col items-center w-full">
                        <h3 className="text-gray-800 font-semibold text-lg mb-4">KYC Verification</h3>

                        {/* Progress Bar */}
                        <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
                            <div
                                className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                                style={{ width: "95.33%" }}
                            ></div>
                        </div>

                        {/* Steps */}
                        <div className="flex justify-between w-full">
                            {[
                                { icon: "/personalinfo_icon.png", label: "Personal Info" },
                                { icon: "/document_icon.png", label: "Documents", inactive: false },
                                { icon: "/review_icon.png", label: "Review & Submit", inactive: true },
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.inactive ? "bg-gray-100" : ""}`}>
                                        <img src={step.icon} alt={step.label} className="w-5 h-5" />
                                    </div>
                                    <span
                                        className={`text-[12px] mt-1 ${poppins.className} ${step.inactive ? "text-gray-400" : "text-[#028541]"
                                            }`}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Review Section */}
                    <div className="w-full flex flex-col gap-4">
                        <h4 className={`text-gray-900 font-normal text-md ${poppins.className}`}>
                            Review Your Information
                        </h4>

                        {/* Cards Wrapper */}
                        <div className="flex flex-col md:flex-row  gap-6 w-full max-w-[900px] mx-auto">

                            {/* Personal Info Card */}
                            <div className="flex-1 rounded-[12px] bg-[#F7FBFF] border-2 border-gray-200 p-5">
                                <h2 className={` ${poppins.className} text-[16px] font-normal text-[#0A0A0A] mb-4`}>
                                    Personal Information
                                </h2>

                                <div className={`space-y-3 ${poppins.className} font-normal text-[14px] ml-[20px] text-[#0A0A0A]`}>
                                    <div className="flex gap-2">
                                        <span className="font-medium w-[70px]">Name:</span>
                                        <span>Arjun Chatterjee</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <span className="font-medium w-[70px]">Email:</span>
                                        <span>arjunchatterjee@gmail.com</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <span className="font-medium w-[70px]">Phone:</span>
                                        <span>9896261612</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <span className="font-medium w-[70px]">DOB:</span>
                                        <span>2003-05-04</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <span className="font-medium w-[70px]">Address:</span>
                                        <span className="flex-1">
                                            123, Greenfield Apartments, MG Road, Ludhiana, Punjab - 141001
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Documents Card */}
                            <div className="flex-1 rounded-[12px] bg-[#F7FBFF] border-2 border-gray-200 p-5">
                                <h2 className={`text-[16px] ${poppins.className} font-semibold text-[#0A0A0A] mb-4`}>
                                    Documents Uploaded
                                </h2>

                               <ul className={`space-y-4 ${poppins.className} text-[14px] text-[#0A0A0A]`}>
  {["Aadhar Card", "PAN Card", "Address Proof", "Selfie Photo"].map(
    (doc, index) => {
      const icon =
        doc === "Selfie Photo" ? "/pending2.png" : "/check_icon.png";

      return (
        <li key={index} className="flex items-center gap-3">
          <span className="w-5 h-5 flex items-center justify-center rounded-full text-white text-[12px]">
            <Image src={icon} width={16} height={16} alt={doc} />
          </span>
          <span>{doc}</span>
        </li>
      );
    }
  )}
</ul>

                            </div>
                        </div>
                        <div className={`w-full border text-[#717182] border-[#0000001A] h-[46px] flex  px-[30px] ${arimo.className} mx-auto py-2 rounded-[10px] text-center`}>
                            <h1>Please review all information carefully before submitting. Once submitted, changes cannot be made.</h1>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 w-full max-w-[900px] mx-auto">
                            <Link
                                href="/document_info"
                                className="px-6 py-2 bg-white border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-center"
                            >
                                Previous
                            </Link>

                            <Link
                                href="/logindone"
                                className={`bg-orange-500 text-white ${poppins.className}
        flex justify-center items-center gap-2 px-6 py-2.5 rounded-lg
        transition-all duration-300 hover:bg-orange-600 hover:shadow-md
        hover:scale-[1.02] active:scale-[0.98]`}
                            >
                                Next
                                <img src="/righticon.png" className="w-4 h-4" alt="Next" />
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
