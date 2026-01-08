import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const RightSection = ({ onApprove, onReject, remark, setRemark }) => {
  const isRemarkEmpty = !remark || remark.trim() === "";

  return (
    <div className={`w-full lg:w-[398px] bg-white rounded-2xl border border-[#E6E6E6] ${poppins.className} p-6 flex flex-col`}>
      
      <h2 className="text-[20px] font-bold text-[#171717] mb-4">
        File Noting
      </h2>

      <label className="text-[12px] text-[#737373] mb-2">
        Mandatory Remarks <span className="text-red-500">*</span>
      </label>

      <textarea
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        placeholder="Reason for approval or rejection (mandatory)"
        className="w-full h-[140px] bg-[#F5F5F5] rounded-xl px-4 py-3 text-[14px] text-[#404040] mb-4 resize-none focus:outline-none placeholder-[#7A7A7A]"
      />

      {/* Approve Button */}
      <button
        disabled={isRemarkEmpty}
        onClick={onApprove}
        className={`w-full h-[52px] rounded-xl flex items-center justify-center gap-3 mb-2 text-[14px] font-normal transition-colors duration-200
          ${isRemarkEmpty
            ? "bg-gray-300 text-white cursor-not-allowed"
            : "bg-[#6B7280] text-white hover:bg-[#4B5563]"
          }`}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <Image src="/checkwhite.png" width={16} height={16} alt="Approve" />
        </div>
        Approve Registration
      </button>

      {/* Reject Button */}
      <button
        disabled={isRemarkEmpty}
        onClick={onReject}
        className={`w-full h-[52px] rounded-xl flex items-center justify-center gap-3 mb-4 text-[14px] font-normal transition-colors duration-200
          ${isRemarkEmpty
            ? "border-2 border-gray-300 text-gray-300 cursor-not-allowed"
            : "border-2 border-[#6F7785] text-[#6F7785] hover:bg-[#6F7785] hover:text-white"
          }`}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <Image src="/cancelwhite.png" width={16} height={16} alt="Reject" />
        </div>
        Reject Registration
      </button>

      <div className="pt-4 border-t border-[#E6E6E6] text-[13px] text-[#737373]">
        All actions will be recorded for audit purposes.
      </div>
    </div>
  );
};

export default RightSection;
