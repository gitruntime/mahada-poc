import React from 'react'
import Image from 'next/image';
import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
import Link from 'next/link';
const Payment = () => {
    return (
        <div className="max-w-[900px] mt-[30px] mx-auto p-6 border border-[#0000001A] bg-[#FFFFFF] rounded-xl shadow-md space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between bg-white px-6 py-5 rounded-lg border border-[#E6E8EC]">
                {/* Left content */}
                <div>
                    <h3 className={`text-[14px] font-medium text-[#0A0A0A99] ${poppins.className}`}>
                        Final Stamp Duty Payable
                    </h3>
                    <p className={`text-[14px] text-[#0A0A0A66] ${poppins.className} mt-1`}>
                        (Calculated as per applicable Maharashtra stamp regulations)
                    </p>
                </div>

                {/* Right amount */}
                <div className="text-[32px] font-bold text-[#111827]">
                    ₹ 2,350
                </div>
            </div>

            {/* Legal Disclosure */}
            <div className="  p-5 rounded-lg relative ">
                {/* Header */}
                <Image src="/paymentimg.png" alt="Payment" width={862.6666870117188} height={594.7325439453125} className="mx-auto rounded-lg" />

            </div>


            {/* Next Button */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-6 w-full">

                {/* Cancel */}
                <Link
                    href="/stampduty"
                    className="px-6 py-2 bg-white border-2 border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition w-full sm:w-auto text-center"
                >
                    Cancel
                </Link>

                {/* Continue */}
                <Link
                    href="/paymentsucess"
                    className={`flex justify-center items-center gap-2 text-[14px] px-6 py-2.5 rounded-lg 
      bg-orange-500 text-white hover:bg-orange-600 hover:shadow-md hover:scale-[1.02]
      transition-all duration-300 ease-in-out ${poppins.className}`}
                >
                    Continue
                    <img
                        src="/righticon.png"
                        className="w-[16px] h-[16px] transition-transform duration-300 group-hover:translate-x-1"
                        alt=""
                    />
                </Link>

            </div>

        </div>
    );
}

export default Payment
