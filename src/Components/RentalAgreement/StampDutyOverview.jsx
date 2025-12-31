import React, { useState } from 'react';
import { Poppins } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    style: ["normal", "italic"],
});
const StampDutyOverview = () => {
    const [confirmInfo, setConfirmInfo] = useState(false);
    const [confirmPayment, setConfirmPayment] = useState(false);

    const accepted = confirmInfo && confirmPayment;


    return (
        <div className="max-w-[900px] mt-[30px] mx-auto p-6 border border-[#0000001A] bg-[#FFFFFF] rounded-xl shadow-md space-y-4">
            {/* Header */}
            <h2 className={`text-[30px]  font-bold text-[#0F1729]  mx-6 ${poppins.className}`}>Stamp Duty Payment</h2>
            <p className="text-gray-700 mx-7 w-[730px] text-[18px]">Complete the stamp duty payment to proceed with the digital signing of the rental agreement.</p>
            {/* Agreement Summary */}
            <div className={`bg-[#F7FBFF] p-4 rounded-lg flex border-2 border-[#D1D5DC] relative  `}>
                <h3 className={`text-[18px] font-normal ${poppins.className} mb-2`}>
                    Agreement Summary
                </h3>
                <div className="w-[36px] h-[36px] bg-white border border-gray-300 rounded-lg flex items-center justify-center ml-auto">
                    <Image src="/downarrow.png" alt="Stamp Duty" width={20} height={20} className="mx-auto rounded-lg" />


                </div>
            </div>

            {/* Legal Disclosure */}
            <div className="bg-[#F7FBFF] h-[520px] p-5 rounded-lg border-2 border-[#D1D5DC] relative mx-auto space-y-2">
                {/* Header */}
                <h3 className={`text-[18px] font-normal ${poppins.className}`}>Stamp Duty Details</h3>
                <p className={`text-[14px] text-[#717182]`}>
                    The stamp duty amount has been calculated automatically based on the agreement details provided.
                </p>

                {/* Details */}
                <div className="space-y-2 mt-2">
                    <div className="flex items-start">
                        <span className={`${poppins.className} w-[260px] text-[#0A0A0A] text-[14px]`}>
                            Total Rent for 24 Months
                        </span>
                        <span className={`${poppins.className} text-[#0F1729] font-medium text-[14px]`}>
                            ₹8,40,000
                        </span>
                    </div>

                    <div className="flex items-start">
                        <span className={`${poppins.className} w-[260px] text-[#0A0A0A] text-[14px]`}>
                            Security Deposit
                        </span>
                        <span className={`${poppins.className} text-[#0F1729] font-medium text-[14px]`}>
                            ₹1,00,000
                        </span>
                    </div>

                    <div className="flex items-start">
                        <span className={`${poppins.className} w-[260px] text-[#0A0A0A] text-[14px]`}>
                            Gross Amount
                        </span>
                        <span className={`${poppins.className} text-[#0F1729]  text-[14px]`}>
                            ₹9,40,000
                        </span>
                    </div>

                    <div className="flex items-start">
                        <span className={`${poppins.className} w-[260px] text-[#0A0A0A] text-[14px]`}>
                            Apply Stamp Duty
                        </span>
                        <span className={`${poppins.className} text-[#0F1729] text-[14px]`}>
                            0.24%  <span className="text-[#0A0A0A66]">(Calculated as per applicable Maharashtra stamp regulations)</span>

                        </span>
                    </div>

                    <div className="flex items-start">
                        <span className={`${poppins.className} w-[260px] text-[#0A0A0A] text-[14px]`}>
                            Final Stamp Duty Payable
                        </span>
                        <span className={`${poppins.className} text-[#0A0A0A] font-semibold text-[14px]`}>
                            ₹2,350
                        </span>
                    </div>
                </div>



                {/* Checkboxes */}
                <div className="space-y-3 mt-4">
                    {/* Checkbox 1 */}
                    <label className="flex items-center gap-3 h-[46px] px-4 rounded-[10px] cursor-pointer border border-[#0000001A] bg-white">
                        <input
                            type="checkbox"
                            checked={confirmInfo}
                            onChange={() => setConfirmInfo(!confirmInfo)}
                            className="
                                            appearance-none 
                                            h-5 w-5 
                                            rounded 
                                            border border-gray-300 
                                            bg-white 
                                            checked:bg-[#F97415] 
                                            checked:border-[#F97415]
                                            transition-colors 
                                            cursor-pointer
                                        "
                        />
                        <span className={`text-[#717182] text-[13.5px] ${poppins.className}`}>
                            Stamp duty values shown are indicative and configurable, subject to final government rules and notifications.
                        </span>
                    </label>

                    {/* Checkbox 2 */}
                    <label className="flex items-center gap-3 h-[46px] px-4 rounded-[10px] cursor-pointer border border-[#0000001A] bg-white">
                        <input
                            type="checkbox"
                            checked={confirmPayment}
                            onChange={() => setConfirmPayment(!confirmPayment)}
                            className="
                                                    appearance-none 
                                                    h-5 w-5 
                                                    rounded 
                                                    border border-gray-300 
                                                    bg-white 
                                                    checked:bg-[#F97415] 
                                                    checked:border-[#F97415]
                                                    transition-colors 
                                                    cursor-pointer
                                                                "
                        />
                        <span className={`text-[#717182] text-[14px] ${poppins.className}`}>
                            I confirm that I will proceed to pay the applicable stamp duty amount for this agreement.
                        </span>
                    </label>
                </div>


                {/* Note */}
                <div className="h-[86px] mx-auto p-3 border-[0.67px] border-[#0000001A] rounded-lg bg-white">
                    <p
                        className={`
      ${poppins.className}
      text-[14px]
      font-normal
      italic
      leading-[20px]
      tracking-[0px]
      text-[#717182]
    `}
                    >
                        Upon successful payment, an electronic stamp reference number will be generated
                        and permanently linked to this rental agreement.

                        <span
                            className={`
        block
        mt-1
        ${poppins.className}
        text-[14px]
        font-medium
        italic
        leading-[20px]
        tracking-[0px]
        text-[#EF4444]
      `}
                        >
                            Once stamp duty is paid, the agreement cannot be modified.
                        </span>
                    </p>
                </div>

            </div>


            {/* Next Button */}
            <div className=" flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-6  w-full">
                <Link
                    href="/rentalagreement1"
                    className="px-6 py-2 bg-white border-2 border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition w-full sm:w-auto text-center"
                >
                    Previous
                </Link>
                <Link
                    href={accepted ? "/payment" : "#"}
                    className={`flex justify-center items-center gap-2 text-[14px] px-6 py-2.5 rounded-lg transition-all duration-300 ease-in-out
                    ${poppins.className} 
                    ${accepted
                            ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-md hover:scale-[1.02]'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'}`}
                >
                    Next
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

export default StampDutyOverview
