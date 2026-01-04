import React from "react";
import Image from "next/image";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ProfileCard = () => {
  return (
    <div className={`${poppins.className} w-full bg-gray-50 flex justify-center p-8`}>
      {/* OUTER CARD */}
      <div className="w-full max-w-[1360px] bg-white rounded-[24px] border border-[#EDEDED] shadow-[0px_20px_50px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row items-center px-[40px] py-[32px] gap-[40px]">

        {/* LEFT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-[28px] w-full lg:w-[45%]">


          {/* PROFILE IMAGE WITH THICK GREEN BORDER */}
          <div className="flex flex-col items-center relative">
            <div className="w-[280px] h-[280px] rounded-full border-8 border-[#028541] flex items-center justify-center shadow-md">

              {/* WHITE RING (LESS GAP) */}
              <div className="w-[260px] h-[260px] rounded-full border-6 border-white flex items-center justify-center bg-white">

                {/* IMAGE */}
                <div className="w-[245px] h-[245px] rounded-full overflow-hidden relative">
                  <Image
                    src="/personprofile.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </div>


            {/* Verified Badge */}
            <div className="absolute border-2  border-white rounded-2xl bottom-[18px]">
              <div className={`flex items-center gap-1 px-3 py-[4px] bg-[#028541] text-white text-[12px] font-bold rounded-full ${poppins.className} shadow`}>
                <Image src="/whiteverified.png" height={12} width={12} />
                Verified
              </div>
            </div>
          </div>

          {/* NAME + EMAIL */}
          <div className="text-center lg:text-left mt-4 lg:mt-0">
            <p className="text-[12px] text-[#00000099]">Name</p>
            <h2 className="text-[22px] font-medium">Arjun Chatterjee</h2>
            <p className="text-[13px] text-[#F97316] mt-1">Arjun@chatterjee.com</p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-6 mt-6 justify-center lg:justify-start">
              <button className="flex border border-[#F97415] items-center bg-[#F974151A] rounded-full px-3 py-2 gap-2 text-[#F97316] text-[14px] cursor-pointer font-medium">
                <Image src="/pencil.png" alt="edit" width={16} height={16} />
                Edit
              </button>
              <button className="flex border border-[#D8232A] rounded-full px-3 py-2 bg-[#D8232A1A] items-center gap-2 text-red-500 text-[14px] cursor-pointer font-medium">
                <Image src="/logout.png" alt="logout" width={16} height={16} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT LIGHT PANEL */}
        <div className="flex-1 bg-[#F8FBFF] rounded-[16px] px-[32px] py-[24px] grid grid-cols-2 gap-y-6 gap-x-12 mt-8 lg:mt-0">

          <div>
            <p className="text-[12px] text-[#00000099]">Phone Number</p>
            <p className={`${inter.className} text-[16px]`}>+91 9898989898</p>
          </div>

          <div>
            <p className="text-[12px] text-[#00000099]">Aadhaar Card No</p>
            <p className={`${inter.className} text-[16px]`}>1234 1234 5730-1847</p>
          </div>

          <div>
            <p className="text-[12px] text-[#00000099]">Date of Birth</p>
            <p className={`${inter.className} text-[16px]`}>11/11/1987</p>
          </div>

          <div>
            <p className="text-[12px] text-[#00000099]">Pan Card no.</p>
            <p className={`${inter.className} text-[16px]`}>HCUP12345</p>
          </div>

          <div className="col-span-2">
            <p className="text-[12px] text-[#00000099]">Home Address</p>
            <p className={`${poppins.className} text-[16px] leading-relaxed mt-1`}>
              30160, Gusikowski Unions,<br />
              Mumbai 400104, Maharashtra
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;
