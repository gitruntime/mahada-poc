import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PropertyCard = ({ property }) => {
  return (
    <div
      className={`w-[440px] h-[430px] border border-t-0 border-[#E5E7EB]
        bg-white rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(229,231,235,0.8)]
        overflow-hidden flex flex-col ${poppins.className}`}
    >
      {/* Image Section */}
      <div className="relative w-full h-[192px] flex-shrink-0">
        <Image src={property.image} alt="Property" fill sizes="440px" className="object-cover" />
        
        {/* Verified Badge */}
        {property.verified && (
          <div className="absolute top-3 w-[80px] h-6 flex items-center bg-[#028541] rounded-full px-2">
            <img src="/verified_logo.png" alt="" className="w-3 h-3 ml-1" />
            <span className="ml-1 text-white text-[12px] font-bold">Verified</span>
          </div>
        )}

        {/* BHK Tag */}
        <div className="absolute w-[55px] h-6 top-3 right-3 bg-[#1E3A8A] text-white text-[12px] font-bold flex items-center justify-center rounded-full">
          {property.bhkTag}
        </div>

      
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <h3 className="text-[18px] font-bold text-gray-900 leading-[28px] tracking-[-0.45px]">
            {property.title}
          </h3>

          <p className="flex items-center gap-2 text-gray-500 text-[14px] mt-1">
            <img src="/location.png" alt="" className="w-4 h-4" />
            {property.location}
          </p>

          <div className="flex items-center gap-6 text-[#6B7280] text-[14px] mt-3">
            <div className="flex items-center gap-2">
              <img src="/bed.png" alt="" className="w-4 h-4" />
              {property.bhk}
            </div>
            <div className="flex items-center gap-2">
              <img src="/scale.png" alt="" className="w-4 h-4" />
              {property.floor}
            </div>
          </div>

          
        </div>
<div className="pt-4 border-t border-[#E5E7EB] mt-3">
  <Link
    href="/propertydetails"
    className="
      block
      w-full
      bg-orange-500
      hover:bg-orange-600
      transition
      text-white
      text-[14px]
      font-medium
      px-5
      py-3
      rounded-[12px]
      shadow-lg
      text-center
    "
  >
    View Details
  </Link>
</div>

      </div>
    </div>
  );
};

export default PropertyCard;
