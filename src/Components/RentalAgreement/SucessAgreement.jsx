import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SuccessAgreement = () => {
  return (
    <div className={`w-full bg-[#F9FAFB] flex mt-10 justify-center ${poppins.className}`}>
      <div className="w-full max-w-[760px] bg-white rounded-[16px] border border-gray-200 px-6 sm:px-10 py-8 shadow-sm">

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <Image src="/check_icon.png" width={64} height={64} alt="success" />
        </div>

        {/* Title */}
        <h2 className="text-[18px] font-semibold text-gray-900 text-center mb-1">
          Agreement Signed Successfully
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] text-[#717182] text-center mb-1">
          You have successfully signed the rental agreement.
        </p>

        <p className="text-[14px] font-medium text-center mb-6 text-gray-800">
          Police Verification will be initiated after both the parties sign the agreement
        </p>

        {/* Details Box */}
        <div className="bg-[#F7FBFF] border-2 border-[#D1D5DC] rounded-[12px] p-4 mb-6 space-y-3">

          {/* Row */}
          {[
            { label: "Agreement ID", value: "MHADA123456789", copy: true },
            { label: "Date & Time of Signature", value: "1st January, 2026, 13.40 IST" },
            { label: "E-Sign Reference Number", value: "MH-123456789", copy: true },
          ].map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-[260px_1fr] items-center gap-2 bg-[#E5F2FF] rounded-[10px] px-4 py-3"
            >
              <span className="text-[16px] text-[#0A0A0A99] font-medium">
                {item.label}
              </span>

              <div className="flex items-center justify-between sm:justify-end gap-2">
                <span className="text-[16px] font-medium text-gray-900">
                  {item.value}
                </span>
                {item.copy && (
                  <Image
                    src="/copy.png"
                    width={18}
                    height={18}
                    alt="copy"
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-[10px] text-[14px] font-medium hover:bg-gray-50">
            <Image src="/blackdownload.png" width={18} height={18} alt="download" />
            Download Signed Agreement
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-[#6B7280] text-white rounded-[10px] text-[14px] font-semibold hover:bg-[#4B5563]">
            <Image src="/eye.png" width={18} height={18} alt="view" />
            View Agreement Details
          </button>
        </div>

        {/* Primary CTA */}
       <Link
  href="/dashboard"
  onClick={() => {
    localStorage.setItem("agreementSuccess", "true")
  }}
  className="w-full h-[48px] bg-[#F97316] hover:bg-orange-600 text-white rounded-[12px]
  flex items-center justify-center gap-2 text-[15px] font-semibold"
>
  Go to Dashboard
  <span className="text-lg">→</span>
</Link>

      </div>
      
    </div>
  );
};

export default SuccessAgreement;
