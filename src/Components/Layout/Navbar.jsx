import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-3 sm:px-6 lg:px-10 h-[64px] sm:h-[72px] lg:h-[80px]">

        {/* Logo */}
        <div className="flex items-center min-w-0">
          <Image
            src="/mahada_logo.png"
            alt="Mahada Logo"
            width={520}
            height={60}
            className="w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px] h-auto object-contain"
            priority
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">

          {/* Font + Language */}
          <div className="flex items-center gap-2 sm:gap-3 scale-[0.9] sm:scale-100">

            {/* Font size */}
            <div className="flex items-center gap-[3px]">
              <button className="w-[22px] h-[22px] border border-[#212529] rounded-md text-[10px]">
                A-
              </button>
              <button className="w-[30px] h-[22px] bg-[#198754] rounded-md text-[10px] text-white">
                A
              </button>
              <button className="w-[22px] h-[22px] border border-[#212529] rounded-md text-[10px]">
                A+
              </button>
            </div>

            {/* Language switch */}
            <div className="flex items-center h-[34px] sm:h-[38px] border border-gray-300 rounded-full bg-white p-[3px]">
              <div className="px-3 py-[2px] bg-[#028541] rounded-full text-[11px] sm:text-[12px] text-white font-semibold">
                English
              </div>
              <div className="px-3 text-[11px] sm:text-[12px] font-semibold text-[#212529]">
                मराठी
              </div>
            </div>

          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/seal_img.png"
              alt="Seal"
              width={60}
              height={60}
              className="w-[36px] sm:w-[44px] lg:w-[52px] h-auto"
            />
            <Image
              src="/Emblem_of_India 1.png"
              alt="Ashok Emblem"
              width={38}
              height={60}
              className="w-[26px] sm:w-[30px] lg:w-[34px] h-auto"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
