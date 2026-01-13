import React from "react";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Profilestrack2 = () => {
  return (
    <div className={`${poppins.className} w-full bg-gray-50 flex p-8`}>
      {/* OUTER CARD */}
      <div className="w-full bg-white rounded-[24px] border   gap-6 border-[#EDEDED] shadow-[0px_20px_50px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-stretch px-[40px] py-[40px]">

        {/* LEFT SECTION - Changed w-[45%] to w-fit and added pr-12 for a controlled gap */}
        <div className="flex flex-col justify-center w-full lg:w-fit lg:pr-12 ">
          <div className="text-center lg:text-left whitespace-nowrap">
            <p className="text-[12px] text-[#00000099]">Name</p>
            <h2 className="text-[22px] font-medium">Arjun Chatterjee</h2>

            <p className="text-[14px] mt-1 font-medium">
              <span className="text-[#6B7280]">Tenant ID :</span>{" "}
              <span className="text-[#F97316]">TNT-123456789</span>
            </p>
          </div>
        </div>

        {/* RIGHT LIGHT PANEL - flex-1 will now take up all remaining space immediately after the left section */}
        <div className="flex-1 bg-[#F8FBFF] p-3 rounded-[16px] py-[24px] mt-8 lg:mt-0">

          {/* GRID */}
          <div className="grid grid-cols-3 gap-y-1 gap-x-1">
            {/* Phone */}
            <div>
              <p className="text-[12px] text-[#00000099]">Phone Number</p>
              <p className={`${inter.className} text-[16px]`}>+91 XXXXX XX989</p>
            </div>

            {/* DOB */}
            <div>
              <p className="text-[12px] text-[#00000099]">Date of Birth</p>
              <p className={`${inter.className} text-[16px]`}>11/11/1987</p>
            </div>

            {/* Address */}
            <div>
              <p className="text-[12px] text-[#00000099]">Home Address</p>
              <p className="text-[16px] leading-relaxed mt-1">
                XXXXXXXXXXXXXXXXXXXXXXXX<br />
                Mumbai 400104, Maharashtra
              </p>
            </div>

            
          </div>
          <div className="flex gap-[50px] ">
            {/* Aadhaar */}
            <div>
              <p className="text-[12px] text-[#00000099]">Aadhaar Card No</p>
              <p className={`${inter.className} text-[16px]`}>
                XXXX-XXXX-XXXX-1847
              </p>
            </div>

            {/* PAN */}
            <div>
              <p className="text-[12px] text-[#00000099]">Pan Card no.</p>
              <p className={`${inter.className} text-[16px]`}>HCXXXXXX69</p>
            </div>

          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Profilestrack2;
