import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ButtonSection = ({ activeTab, setActiveTab }) => {
  return (
    <div
      className="
        w-full max-w-[1440px]
        mx-auto
        h-auto
        px-4 sm:px-8 md:px-[150px]
        py-6 sm:py-[40px]
        flex flex-col sm:flex-row
        items-start sm:items-center
        gap-[10px]
      "
    >
      {/* Landlord Dashboard Button */}
      <button
        onClick={() => setActiveTab('landlord')}
        className={`
          w-full sm:w-[130px] h-[48px]
          px-[14px]
          border-2 rounded-[12px]
          text-[14px] font-medium
          ${poppins.className}
          flex items-center justify-center
          cursor-pointer
          transition-all duration-300
          ${activeTab === 'landlord' 
            ? 'border-[#FF6A00] text-[#FF6A00]' 
            : 'border-[#9E9E9E] text-[#9E9E9E] hover:border-[#FF6A00] hover:text-[#FF6A00]'
          }
        `}
      >
        Landlord Dashboard
      </button>

      {/* Tenant Dashboard Button */}
      <button
        onClick={() => setActiveTab('tenant')}
        className={`
          w-full sm:w-[160px] h-[48px]
          px-[14px]
          border-2 rounded-[12px]
          text-[14px] font-medium
          ${poppins.className}
          flex items-center justify-center
          cursor-pointer
          transition-all duration-300
          ${activeTab === 'tenant' 
            ? 'border-[#FF6A00] text-[#FF6A00]' 
            : 'border-[#9E9E9E] text-[#9E9E9E] hover:border-[#FF6A00] hover:text-[#FF6A00]'
          }
        `}
      >
        Tenant Dashboard
      </button>
    </div>
  );
};

export default ButtonSection;
