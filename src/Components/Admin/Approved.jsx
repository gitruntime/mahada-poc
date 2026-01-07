import React from 'react';
import { Poppins } from 'next/font/google';
import { CheckCircle } from 'lucide-react'; // Using lucide-react for the check icon

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Approved = () => {
  return (
    <div className={`w-full lg:w-[398px] h-[355px] bg-white rounded-2xl border border-[#E6E6E6] ${poppins.className} p-6 flex flex-col items-center justify-center gap-4`}>
      
      {/* Icon */}
      <CheckCircle className="text-green-600 w-16 h-16" />

      {/* Title */}
      <h2 className="text-[20px] font-semibold text-[#1C1C1C]">Registration Approved</h2>

      {/* Remark */}
      <p className="text-[14px] text-[#1C1C1C] font-normal">
        Remark: All submitted documents are verified.
      </p>

      <hr className="w-full border-[#E6E6E6] my-2" />

      {/* Description */}
      <p className="text-[14px] text-[#6B6B6B] text-center">
        The tenant registration has been approved successfully.
      </p>
      <p className="text-[14px] text-[#6B6B6B] text-center">
        The tenant has been notified via SMS and email and has been provided with instructions to create login credentials and access the portal.
      </p>

      {/* Button */}
      <button className="mt-4 w-full bg-[#FF5C00] text-white text-[14px] font-medium py-3 rounded-xl hover:bg-[#e65500] transition">
        Return to Tenant Registration Queue
      </button>
    </div>
  );
};

export default Approved;
