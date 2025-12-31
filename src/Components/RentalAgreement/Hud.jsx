import React from 'react';
import Image from 'next/image';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Hud = () => {
  return (
    <div className="w-full h-auto relative">
      {/* IMAGE SECTION */}
      <div className="relative h-[390px] overflow-hidden ">
        <Image
          src="/room22.png"
          alt="Property"
          fill
          className="object-cover"
          priority
        />

        {/* Top Badges and Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {/* Left Badges */}
          <div className="flex gap-2">
            <span className={`flex items-center h-[27px] gap-1 bg-[#21C45D] ${poppins.className} text-white text-[12px] font-bold px-3 rounded-full`}>
              <Image src="/verified_logo.png" alt="verified" width={14} height={14} />
              Verified
            </span>
            <span className={`flex items-center h-[27px] gap-1 bg-[#1A4A99] ${poppins.className} text-white text-[12px] font-bold px-3 rounded-full`}>
              Semi-Furnished
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex gap-2">
            <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
              <Image src="/like.png" width={40} height={40} alt="like" />
            </div>
            <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
              <Image src="/share.png" width={40} height={40} alt="share" />
            </div>
          </div>
        </div>



        {/* Property Info Overlay */}
        <div className="absolute bottom-7 left-4 right-4 ml-[30px] flex flex-col gap-2">
          {/* Title and Rating row */}
          <div className="flex items-center ">
            {/* Title */}
            <h1 className={`text-[30px] ${poppins.className} font-bold text-white`}>
              Modern 2BHK in Andheri West
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 bg-[#E7B00866] px-3 py-1 rounded-full text-sm">
              <Image src="/start_rating.png" alt="star" width={20} height={20} />
              <span className={`font-bold text-[16px] ${poppins.className} text-white`}>4.5</span>
              <span className={`font-normal text-[16px] ${poppins.className} text-[#DEDEDE]`}>(23)</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-[#D1D5DB] text-[16px]">
            <Image src="/location.png" alt="location" width={16} height={16} />
            Andheri West, Near DN Nagar Metro
          </div>
        </div>



        {/* Bottom Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="bg-[#1A4A99] text-white h-[36px] text-[14px] font-medium px-3 rounded-[10px] flex items-center gap-2 transition-transform duration-200 hover:bg-[#163973] hover:scale-105">
            <Image src="/camera.png" alt="virtual tour" width={16} height={16} />
            Virtual Tour
          </button>
          <button className="bg-[#1A4A99] text-white h-[36px] text-[14px] font-medium px-3 rounded-[10px] flex items-center gap-2 transition-transform duration-200 hover:bg-[#163973] hover:scale-105">
            <Image src="/eye.png" alt="view all photos" width={16} height={16} />
            View All Photos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hud;
