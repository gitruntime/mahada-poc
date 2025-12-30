import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});



const PropertyRight = () => {
  return (
    <div className="w-[435px] bg-white rounded-[12px] border border-[#E5E7EB] p-6 shadow-sm">

      {/* Price */}
      <div className="text-center">
        <h2 className={`text-[30px] font-bold text-[#F97415] ${poppins.className}`}>
          ₹35,000
          <span className={`text-[16px] font-normal text-gray-500 ml-1 ${poppins.className}`}>
            /month
          </span>
        </h2>

        <p className={`text-[14px] font-normal text-gray-500 mt-1 ${poppins.className}`}>
          Security Deposit: ₹100,000
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 mt-6">
        <button className={`w-full bg-[#F97415] text-white cursor-pointer py-3 rounded-xl text-[16px] font-medium flex items-center justify-center ${poppins.className} gap-2 hover:bg-green-600 transition`}>
          <Image src="/doc.png" alt="Document Icon" width={20} height={20} /> Apply Now
        </button>

        <button className={`w-full border-2 border-orange-500 text-orange-500 cursor-pointer py-3 rounded-xl font-semibold flex items-center justify-center ${poppins.className} gap-2 hover:bg-orange-50 transition`}>
           <Image src="/she.png" alt="shedule Icon" width={20} height={20} />  Schedule Tour
        </button>

        <button className={`w-full text-gray-800 text-[14px] cursor-pointer ${poppins.className} py-2 flex items-center justify-center gap-2 font-medium`}>
           <Image src="/callicon.png" alt="Call Icon" width={20} height={20} /> Contact Landlord
        </button>
      </div>

      {/* Divider */}
      <hr className="my-6 text-[#E5E7EB]" />

      {/* Listed By */}
      <div>
        <p className={`text-[14px] font-normal text-[#6B7280] mb-3 ${poppins.className}`}>Listed by</p>

        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-[#1A4A9933]  flex items-center justify-center font-bold text-[#1A4A99]`}>
            P
          </div>

          <div>
            <p className={`font-medium text-[16px] ${poppins.className}`}>Priya Sharma</p>
            <p className={`text-[14px] text-[#21C45D] flex items-center gap-1  ${poppins.className}`}>
                <Image src="/sheild.png" alt=" Icon" width={13} height={10} /> Verified Landlord
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PropertyRight;
