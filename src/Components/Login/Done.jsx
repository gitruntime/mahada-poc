import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { Poppins, Arimo } from "next/font/google";
import Link from "next/link";


const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


const Done = () => {
  return (
  <div className="w-full h-[500px] flex items-center justify-center">
    <div className="w-[672px] h-[253px] border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center px-6">
      
      {/* Icon */}
      <div className=" rounded-full  flex items-center justify-center mb-4">
       <Image src="/check_icon.png" height={64} width={64}/>
      </div>

      {/* Title */}
      <h2 className={`text-[16px] font-normal  ${arimo.className} text-[#0A0A0A] mb-1`}>
        KYC Application Submitted Successfully!
      </h2>

      {/* Subtitle */}
      <p className={`text-[13px] ${arimo.className} text-[#717182] mb-5`}>
        Your application is under review. You'll receive an update within 2–3 business days.
      </p>

      {/* Button */}
      <Link  href="/" className={`bg-[#F97415] ${poppins.className} hover:bg-orange-600 text-white text-[14px] font-semibold  px-6 py-2 rounded-md transition`}>
        Go to Homepage
      </Link>
    </div>
  </div>
);

};

export default Done;
