import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LandlordDash = () => {
  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto h-auto sm:h-[80px] px-4 sm:px-8 md:px-[100px] py-4 sm:py-0 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className={`text-[24px] sm:text-[30px] font-bold ${poppins.className}`}>
            Landlord Dashboard
          </h1>
          <p className={`text-[14px] sm:text-[16px] text-[#6B7280] ${poppins.className}`}>
            Manage your properties and tenant applications
          </p>
        </div>

        <button className="h-[48px] px-[20px] bg-[#F97415] rounded-[12px] text-white text-[14px] font-medium flex items-center gap-2 shadow-md w-full sm:w-auto justify-center">
          <Image src="/plsu.png" width={16} height={16} alt="plus" />
          Add New Property
        </button>
      </div>

      {/* STATS */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[100px] py-6 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* CARD 1 */}
        <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-[10px] flex items-center justify-center">
              <img src="/1img.png" className="w-5 h-5" />
            </div>
            <div className="px-2 py-0.5 text-[12px] font-bold text-green-600 border border-green-200 rounded-full">
              +1
            </div>
          </div>

          <div>
            <p className={`text-[24px] font-bold ${poppins.className}`}>5</p>
            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
              Total Properties
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-[10px] flex items-center justify-center">
              <img src="/2img.png" className="w-5 h-5" />
            </div>
            <div className="px-2 py-0.5 text-[12px] font-bold text-green-600 border border-green-200 rounded-full">
              80%
            </div>
          </div>

          <div>
            <p className={`text-[24px] font-bold ${poppins.className}`}>3</p>
            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
              Active Listings
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-[10px] flex items-center justify-center">
              <img src="/3img.png" className="w-5 h-5" />
            </div>
            <div className="px-2 py-0.5 text-[12px] font-bold text-green-600 border border-green-200 rounded-full">
              +3
            </div>
          </div>

          <div>
            <p className={`text-[24px] font-bold ${poppins.className}`}>8</p>
            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
              Pending Applications
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-[10px] flex items-center justify-center">
              <img src="/4img.png" className="w-5 h-5" />
            </div>
            <div className="px-2 py-0.5 text-[12px] font-bold text-green-600 border border-green-200 rounded-full">
              12%
            </div>
          </div>

          <div>
            <p className={`text-[24px] font-bold ${poppins.className}`}>₹1.2L</p>
            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
              Monthly Review
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandlordDash;
