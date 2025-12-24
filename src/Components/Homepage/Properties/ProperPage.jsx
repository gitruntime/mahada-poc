import React from "react";
import PropertyCard from "./PropertyCard";
import { Poppins } from "next/font/google";
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const PropertyPage = () => {
  return (
    <div className="mt-[60px]">

      {/* Header Wrapper */}
      <div className="max-w-[1380px] mx-auto px-[40px]">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6">

          {/* Left Section */}
          <div>
            <h1
              className={`text-[32px] ${poppins.className} font-semibold text-gray-900 flex items-center gap-2`}
            >
              Properties for rent in
              <span className="text-[#028541] flex items-center gap-1 cursor-pointer">
                Andheri
                <svg
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </h1>

            <p className={`text-gray-500 ${poppins.className} text-[16px] mt-1`}>
              40 properties found
            </p>
          </div>

          {/* Right Section */}
          <div className="w-[105px] h-[40px] flex items-center">
            <button
              className={`flex items-center gap-1 text-gray-900 ${poppins.className}`}
            >
              <span className="text-[14px] font-medium ">
                View All
              </span>

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Property Cards */}
      <div className="max-w-[1380px] mb-[30px] mx-auto px-[40px]">
  <PropertyCard />
</div>


    </div>
  );
};

export default PropertyPage;
