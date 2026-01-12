import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const Clerkcopy = () => {
    return (
        <div
            className={`w-full max-w-[398px] h-auto bg-white rounded-2xl border border-[#E6E6E6] ${poppins.className} p-6 flex flex-col items-center justify-center gap-4`}
        >
            {/* Icon */}
            <Image src="/check_icon.png" width={64} height={64} alt="Approved Icon" />

            {/* Title */}
            <h2 className="text-[20px] font-semibold text-[#1C1C1C] text-center">
                Verification Completed & Sent for Approval
            </h2>

            {/* Remark */}
            <p className="text-[14px] text-[#1C1C1C] font-normal text-center">
            Remark : All submitted documents have been verified successfully.
            </p>

            <hr className="w-full border-t border-[#E6E6E6] my-2" />

            {/* Description */}
            <p className="text-[14px] text-[#6B6B6B] text-start">
              The tenant registration has been verified and forwarded to the competent approving authority for final review.
            </p>
            <p className="text-[14px] text-[#6B6B6B] text-start ">
               No further action is required from your end at this stage.
The applicant will be notified once the approval decision is completed.
            </p>

            {/* Button */}
            <Link href="/Admin/dashboard/clerk2">
                <div className="mt-4 w-full max-w-full bg-[#FF5C00] text-white text-[14px] px-3 font-normal py-3 rounded-xl hover:bg-[#e65500] transition-colors flex items-center justify-center">
                   Return to Verification Queue
                </div>
            </Link>

        </div>
    );
};

export default Clerkcopy;
