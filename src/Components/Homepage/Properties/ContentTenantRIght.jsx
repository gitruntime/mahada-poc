import React from "react";
import Image from "next/image";
const ContentTenantRight = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-[#E5E7EB] rounded-lg shadow-md p-6 space-y-4">
      {/* Price and Deposit */}
      <div className="items-center flex flex-col justify-center">
        <p className="text-2xl font-bold text-orange-500">₹35,000<span className="text-sm font-normal text-gray-500">/month</span></p>
        <p className="text-sm text-gray-500 mt-1">Security Deposit: ₹100,000</p>
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2">
          <Image src="/doc.png" width={16} height={16} alt="Doc" />
          Enquire Now
        </button>

        <button className="w-full border border-orange-500 text-orange-500 py-2 px-4 rounded-lg font-semibold hover:bg-orange-50 transition flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Schedule Tour
        </button>

        <button className="w-full text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
          <Image src="/phone.png" width={16} height={16} alt="Phone" />
          Contact Landlord
        </button>
      </div>

      {/* Listed By */}
      <div className="border-t pt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
          P
        </div>
        <div>
          <p className="text-gray-500 text-sm">Listed by</p>
          <p className="font-medium text-gray-800">Priya Sharma</p>
          <p className="text-green-500 text-sm">Verified Landlord</p>
        </div>
      </div>

    </div>
  );
};

export default ContentTenantRight;
