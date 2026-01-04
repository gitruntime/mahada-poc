import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const PropertyRight = () => {
  return (
    <div className="w-[full] bg-white rounded-[12px] border border-[#E5E7EB] p-6 shadow-sm">

      {/* Property ID */}
      <p className={`flex items-center text-[14px] font-normal text-[#6B7280] mb-1 ${poppins.className} 
                w-[283px] h-[32px] gap-[10px] rounded-full px-[20px] py-[4px]`}
        style={{ backgroundColor: "#E7B00833", opacity: 1 }}>
        Property ID <span className="text-[#F97415] font-semibold">MHADA-PROP-002154</span>
      </p>


      {/* Property Title & Verified Badge */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className={`text-[22px] font-bold text-[#0F1729] ${poppins.className}`}>
          2 BHK Residential Flat
        </h2>
        <span className={`flex items-center h-[27px] gap-1 bg-[#21C45D] ${poppins.className} text-white text-[12px] font-bold px-3 py-1.5 rounded-full`}>
          <Image src="/verified_logo.png" alt="verified" width={14} height={14} />
          Verified
        </span>
        <div className="cursor-pointer ml-[100px] transition-transform duration-200 hover:scale-110 ">
          <Image src="/share.png" width={40} height={40} alt="share" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-4">
        {/* Rent Property */}
        <Link href="/rent" className="flex-1 flex items-center cursor-pointer justify-center gap-2 bg-[#F97415] text-white py-2 rounded-xl font-medium text-[16px] 
                     hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-200">
          <img src="/personlogo.png" alt="Rent" className="w-5 h-5" />
          Rent Property
        </Link>

        {/* Sell Property */}
        <button className="flex-1 flex items-center cursor-pointer justify-center gap-2 border-2 border-[#F97415] text-[#F97415] py-2 rounded-xl font-medium text-[16px] 
                     hover:bg-orange-50 hover:scale-105 hover:shadow-lg transition-all duration-200">
          <img src="/selllogo.png" alt="Sell" className="w-5 h-5" />
          Sell Property
        </button>

        {/* Manage Property */}
        <button className="flex-1 flex items-center cursor-pointer justify-center gap-2 border border-gray-300 text-gray-800 py-2 rounded-xl font-medium text-[16px] 
                     hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-200">
          <img src="/managelogo.png" alt="Manage" className="w-5 h-5" />
          Manage Property
        </button>
      </div>


      {/* Location / Map */}
      <div className="mb-2  p-3 border border-[#E5E7EB] rounded-[12px] ">
        <div className="flex mb-3 justify-between items-center">
          <p className={`flex items-center gap-2 text-[14px] text-gray-500 ${poppins.className}`}>
            <Image src="/location.png" width={16} height={16} alt="Location" />
            Andheri West, Near DN Nagar Metro
          </p>

          <p className={`flex items-center cursor-pointer gap-2 text-[14px] text-orange-500 ${poppins.className}`}>
            <Image src="/viewgoogle.png" width={20} height={20} alt="Google Maps" />
            View on Google Maps
          </p>
        </div>



        <div className="w-full h-[150px] rounded-xl overflow-hidden border border-[#E5E7EB]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.487134702415!2d72.8303!3d19.1189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7f0b8e3c4d3%3A0xa1234567890abcdef!2sAndheri%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Type", value: "2BHK", icon: "/bed2.png" },
          { label: "Floor", value: "5th of 12", icon: "/floor.png" },
          { label: "Listing", value: "Inactive", icon: "/calendar1.png" },
          { label: "Status", value: "Verified", green: true, icon: "/vl.png" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#F0EEEA] rounded-xl p-4 flex flex-col items-center gap-2"
          >
            {item.icon && (
              <Image
                src={item.icon}
                width={28}
                height={28}
                alt={item.label}
                className="object-contain"
              />
            )}
            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
              {item.label}
            </p>
            <p
              className={`mt-1 text-[16px] font-semibold ${item.green ? "text-green-600" : "text-[#0F1729]"
                }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PropertyRight;
