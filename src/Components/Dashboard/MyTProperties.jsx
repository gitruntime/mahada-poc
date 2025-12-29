import React, { useState } from 'react';
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MyTProperties = () => {
  // Sample dynamic data (you can fetch this from an API)
  const [properties, setProperties] = useState([
    {
      id: 1,
      status: 'Pending',
      statusColor: '#FBBF24', // yellow
      title: 'Modern 2BHK in Andheri West',
      location: 'Andheri West, Near DN Nagar Metro',
      price: 35000,
      appliedDate: '1/8/2024',
      message: 'I am a software engineer looking for a peaceful place. I am a non-smoker and maintain cleanliness.',
      image: '/tenantimg.png', // Replace with actual path
      approved: false,
      sign: false,
    },
    {
      id: 2,
      status: 'Approved',
      statusColor: '#34D399', // green
      title: 'Modern 2BHK in Andheri West',
      location: 'Andheri West, Near DN Nagar Metro',
      price: 35000,
      appliedDate: '1/5/2024',
      message: 'Working professional, will be living with my husband. We have stable income and references.',
      image: '/tenantimg.png',
      approved: true,
      sign: true,
    },
    {
      id: 3,
      status: 'Pending',
      statusColor: '#FBBF24',
      title: 'Spacious 3BHK in Baner',
      location: 'Baner, Near Symbiosis College',
      price: 45000,
      appliedDate: '1/9/2024',
      message: 'Family of 4 looking for a spacious apartment. Currently renting nearby.',
      image: '/tenantimg.png',
      approved: false,
      sign: false,
    },
  ]);

  return (
    <div className="bg-white flex flex-col gap-6"> {/* Added gap-6 for spacing between cards */}
  {properties.map((property) => (
    <div
      key={property.id}
      className="flex w-full border border-gray-200 rounded-2xl overflow-hidden font-sans shadow-sm flex-none" 
      // Added flex-none to prevent stretching
    >
      {/* Left: Property Image */}
      <div className="w-[220px] shrink-0">
        <img
          src={property.image}
          alt={property.title}
          className="w-[220px] h-[220px] object-cover"
        />
      </div>

      {/* Right: Content Section */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        <div className="flex justify-between items-start">
          {/* Main Details */}
          <div className="space-y-1">
            {/* Status Badge */}
            <div className="flex items-center gap-1.5 bg-[#FFF9E6] border border-[#FDE68A] text-[#222] px-3 py-0.5 rounded-full w-fit mb-2">
              <img src="/clockblackicon.png" alt="" className="w-4 h-4" />
              <span className={`text-[12px] ${poppins.className} font-bold`} style={{ color: property.statusColor }}>{property.status}</span>
            </div>

            <h3 className={`text-[20px] ${poppins.className} font-bold text-[#0F1729]`}>
              {property.title}
            </h3>

            <div className="flex items-center gap-1 text-gray-500">
              <img src="/location.png" alt="" className="w-4 h-4 opacity-60" />
              <span className={`text-[14px] ${poppins.className} text-[#6B7280]`}>{property.location}</span>
            </div>

            <div className="flex items-center gap-5 pt-1">
              <span className={`text-[#F97415] font-semibold ${poppins.className} text-[16px]`}>
                ₹{property.price}/month
              </span>
              <div className="flex items-center gap-1.5 text-gray-500">
                <img src="/calender.png" alt="" className="w-4 h-4 opacity-50" />
                <span className={`text-[14px] font-normal ${poppins.className}`}>Applied: {property.appliedDate}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col items-end ${poppins.className} gap-5`}>
            <button className="border-2 border-[#F97415] text-[#F97415] text-[14px] font-medium py-2 px-2 rounded-xl hover:bg-orange-50 transition-colors">
              View Property
            </button>
            <button className={`flex ${poppins.className} items-center gap-2 text-[#0F172A] font-medium text-[14px]`}>
              <img src="/message.png" alt="" className="w-[20px] h-[16px]" />
              Message
            </button>
            {property.sign && (
              <button
                className="border-2 flex items-center gap-2 border-[#F97415] text-white bg-[#F97415] text-[14px] font-medium py-2 px-3 rounded-xl hover:bg-orange-50 hover:text-[#F97415] transition-colors"
                style={{ boxShadow: '0px 2px 4px -2px #0000001A, 0px 4px 6px -1px #0000001A' }}
              >
                Sign Agreement
                <Image src="/righticon.png" width={20} height={16} alt="arrow icon" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom Message Box */}
        <div className="mt-2 bg-[#F0EEEA]/60 p-3 px-4 rounded-[12px]">
          <p className={`text-[#64748B] font-normal text-[14px] ${poppins.className}`}>
            <span className="font-medium text-[#64748B]">Your message: </span>
            {property.message}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default MyTProperties;
