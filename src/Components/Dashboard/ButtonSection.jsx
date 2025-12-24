import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ButtonSection = () => {
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
      {/* My Properties (Active) */}
      <button
        className={`
          w-full sm:w-[130px] h-[48px]
          px-[14px]
          border-2 border-[#FF6A00]
          rounded-[12px]
          text-[#FF6A00]
          text-[14px]
          font-medium
          ${poppins.className}
          flex items-center justify-center
        `}
      >
        My Properties
      </button>

      {/* Rented Properties (Inactive) */}
      <button
        className={`
          w-full sm:w-[160px] h-[48px]
          px-[14px]
          border-2 border-[#9E9E9E]
          rounded-[12px]
          text-[#9E9E9E]
          text-[14px]
          font-medium
          ${poppins.className}
          flex items-center justify-center
        `}
      >
        Rented Properties
      </button>
    </div>
  );
};

export default ButtonSection;
