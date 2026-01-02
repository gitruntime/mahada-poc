import React from "react";
import Link from "next/link";
const EsignVerify = () => {
  return (
    <div className="w-[896px] h-[391.33px] bg-white rounded-[14px] border border-gray-200 p-[16px]">
      {/* Header */}
      <h2 className="text-[22px] font-semibold text-gray-900 mb-2">
        Verify Your Identity to Sign (E-sign)
      </h2>
      <p className="text-[14px] text-gray-600 mb-6">
        To digitally sign this agreement, Aadhaar-based OTP verification is required.
      </p>

      {/* Inner Box */}
      <div className="bg-[#F8FBFF] border border-gray-200 rounded-[10px] p-6">
        {/* Aadhaar Input */}
        <label className="block text-[14px] text-gray-700 mb-2">
          Aadhaar number
        </label>
       <input
  disabled
  type="text"
  placeholder="XXXX XXXX XXXX 1234"
  className="w-[320px] h-[44px] px-4 rounded-[8px] border border-gray-300 bg-gray-100 text-gray-400 text-[14px] focus:outline-none focus:ring-1 focus:ring-orange-500"
/>


        {/* Consent */}
        <div className="mt-6 flex items-center gap-3 bg-white border border-gray-200 rounded-[8px] px-4 py-3">
          <input
            type="checkbox"
            className="w-4 h-4 accent-orange-500"
          />
          <span className="text-[14px] text-gray-700">
            I consent to Aadhaar-based eSign as per IT Act, 2000
          </span>
        </div>
      </div>

      {/* Footer Button */}
      <div className="flex justify-end mt-6">
        <Link href="/esignotp" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-[14px] font-medium px-5 py-2.5 rounded-[10px]">
          Send OTP
          <span className="text-[16px]">→</span>
        </Link>
      </div>
    </div>
  );
};

export default EsignVerify;
