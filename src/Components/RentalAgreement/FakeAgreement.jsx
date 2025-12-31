
import React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

const FakeAgreement = () => {
  return (
    <div className="w-[360px] bg-[#F7F7F7] rounded-[20px] p-4 shadow-sm">
      {/* Inner Card */}
      <div className="bg-white rounded-[16px] p-3">
        {/* Document Preview */}
        <div className="border border-gray-200 rounded-[12px] p-2">
          <Image
            src="/agreement2.png"
            alt="Rental Agreement"
            width={322}
            height={421}
            className="mx-auto rounded-[8px]"
          />
        </div>
      </div>

      {/* Button */}
      <button className="mt-4 w-full h-[52px] bg-[#6B7280] hover:bg-[#4B5563] transition text-white rounded-[14px] flex items-center justify-center gap-2 text-[16px] font-medium">
        <Eye className="w-5 h-5" />
        View Agreement
      </button>
    </div>
  );
};

export default FakeAgreement;
