import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { Poppins, Arimo } from "next/font/google";
import Link from "next/link";


const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "700"],
});
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const PaymenSucess = () => {
    return (
        <div className="w-full h-[500px] flex items-center justify-center bg-[#F9FAFB]">
            <div className="w-[760px] min-h-[420px] bg-white border border-[#E5E7EB] rounded-xl 
                    flex flex-col items-center justify-center text-center px-10 shadow-sm">

                {/* Success Icon */}
                <div className="mb-6">
                    <Image
                        src="/check_icon.png"
                        width={72}
                        height={72}
                        alt="success"
                    />
                </div>

                {/* Title */}
                <h2 className={`text-[16px] ${poppins.className} font-normal text-[#0A0A0A] mb-2`}>
                    Stamp Duty Paid Successfully
                </h2>

                {/* Description */}
                <p
                    className={`text-[14px] text-center ${poppins.className} 
  text-[#6B7280] mb-6 max-w-[520px] mx-auto`}
                >
                    Your stamp duty payment has been completed and the{" "}
                    <span className="font-bold text-[#717182] text-[16px]">
                        e-Stamp reference
                    </span>{" "}
                    has been generated. Agreement draft is sent to both the parties for E-sign.
                </p>

                {/* Reference Number */}
                <div className="flex items-center gap-3 mb-8">
                    <span className="text-[20px] font-normal text-[#717182] tracking-wide">
                        MH-ESTAMP-123456
                    </span>
                    <Image
                        src="/copy.png"
                        width={24}
                        height={24}
                        alt="copy"
                        className="cursor-pointer"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        className={`flex items-center gap-2 bg-[#6B7280] hover:bg-[#4B5563]
                     text-white text-[14px] font-semibold px-6 py-2.5 ${poppins.className} rounded-lg transition`}
                    >
                        <Image src="/download.png" width={24} height={24} alt="" />
                        Download Draft
                    </button>

                    <Link
                        href="/esign"
                        className={`flex items-center gap-2 ${poppins.className} bg-[#F97316] hover:bg-orange-600
                     text-white text-[14px] font-semibold px-4 py-2 rounded-lg transition`}
                    >
                        Proceed to Sign Agreement
                        <span className="text-lg">→</span>
                    </Link>
                </div>

            </div>
        </div>
    );

}

export default PaymenSucess
