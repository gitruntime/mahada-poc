import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Approved = ({ tenantId, onApprove }) => {
  return (
    <div
      className={`w-full max-w-[398px] h-auto bg-white rounded-2xl border border-[#E6E6E6] ${poppins.className} p-6 flex flex-col items-center justify-center gap-4`}
    >
      {/* Icon */}
      <Image src="/check_icon.png" width={64} height={64} alt="Approved Icon" />

      {/* Title */}
      <h2 className="text-[20px] font-semibold text-[#1C1C1C] text-center">
        Registration Approved
      </h2>

      {/* Remark */}
      <p className="text-[14px] text-[#1C1C1C] font-normal text-center">
        Remark: All submitted documents are verified.
      </p>

      <hr className="w-full border-t border-[#E6E6E6] my-2" />

      {/* Description */}
      <p className="text-[14px] text-[#6B6B6B] text-center">
        The tenant registration has been approved successfully.
      </p>
      <p className="text-[14px] text-[#6B6B6B] text-center">
        The tenant has been notified via SMS and email and has been provided with instructions to create login credentials and access the portal.
      </p>

      {/* Button */}
      <Link href="/Admin/TenantReg">
        <div
          onClick={() => onApprove(tenantId)}
          className="mt-4 w-full max-w-full bg-[#FF5C00] text-white text-[14px] px-3 font-normal py-3 rounded-xl hover:bg-[#e65500] transition-colors flex items-center justify-center cursor-pointer"
        >
          Return to Tenant Registration Queue
        </div>
      </Link>
    </div>
  );
};

export default Approved;
