import React from 'react'
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const TenantDash = () => {
  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto h-auto sm:h-[80px] px-4 sm:px-8 md:px-[100px] py-4 sm:py-0 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className={`text-[24px] sm:text-[30px] font-bold ${poppins.className}`}>
            Tenant Dashboard
          </h1>
          <p className={`text-[14px] sm:text-[16px] text-[#6B7280] ${poppins.className}`}>
            Track and manage your property applications
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[100px] py-6 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* CARD 1 */}
        <div className="w-full h-[134px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-center items-center shadow-sm">
          {/* Top Section: Icon + Badge */}
          <div className="relative w-full flex  justify-center">
            <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-full flex items-center justify-center">
              <img src="/clock.png" className="w-[20px] h-[20px]" alt="clock icon" />
            </div>
            
          </div>

          {/* Bottom Section: Number + Label */}
          <div className="mt-2 text-center">
            <p className={`text-[24px] font-bold ${poppins.className}`}>2</p>
            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>Pending</p>
          </div>
        </div>


        {/* CARD 2 */}
        <div className="w-full h-[134px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-center items-center shadow-sm">
          {/* Top Section: Icon + Badge */}
          <div className="relative w-full flex justify-center">
            <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-full flex items-center justify-center">
              <img src="/check_icon.png" className="w-[20px] h-[20px]" alt="clock icon" />
            </div>
            
          </div>

          {/* Bottom Section: Number + Label */}
          <div className="mt-2  text-center">
            <p className={`text-[24px] font-bold ${poppins.className}`}>1</p>
            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>Approved</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="w-full h-[134px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-center items-center shadow-sm">
          {/* Top Section: Icon + Badge */}
          <div className="relative w-full flex justify-center">
            <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-full flex items-center justify-center">
              <img src="/document2.png" className="w-[20px] h-[20px]" alt="clock icon" />
            </div>
            
          </div>

          {/* Bottom Section: Number + Label */}
          <div className="mt-2  text-center">
            <p className={`text-[24px] font-bold ${poppins.className}`}>0</p>
            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>Signed</p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="w-full h-[134px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-center items-center shadow-sm">
          {/* Top Section: Icon + Badge */}
          <div className="relative w-full flex justify-center">
            <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-full flex items-center justify-center">
              <img src="/total.png" className="w-[20px] h-[20px]" alt="clock icon" />
            </div>
            
          </div>

          {/* Bottom Section: Number + Label */}
          <div className="mt-2 text-center">
            <p className={`text-[24px] font-bold ${poppins.className}`}>3</p>
            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>Total</p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default TenantDash
