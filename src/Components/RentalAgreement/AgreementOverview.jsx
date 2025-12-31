import React, { useState } from 'react';
import { Poppins } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const AgreementOverview = () => {
    const [accepted, setAccepted] = useState(false);

    return (
        <div className="max-w-[900px] mt-[30px] mx-auto p-6 border border-[#0000001A] bg-white rounded-xl shadow-md space-y-6">
            {/* Header */}
            <h2 className={`text-[30px]  font-bold text-[#0F1729]  mx-6 ${poppins.className}`}>Rental Agreement Overview</h2>

            {/* Agreement Summary */}
            <div className="bg-[#F7FBFF] p-5 rounded-lg border-2 border-[#D1D5DC] relative mx-auto">
                <h3 className={`text-lg font-medium ${poppins.className} mb-4`}>Agreement Summary</h3>

                <button className=" w-[70px] h-[28px] rounded-[16px] flex absolute top-5 right-5 px-3 py-1 bg-orange-500 text-white  text-sm hover:bg-orange-600">
                    <Image src="/whitepen.png" alt="Edit" width={20} height={20} />
                    Edit
                </button>

                <div className="space-y-2 text-gray-800">
                    {[
                        { label: "Property address", value: "453434, 4545, Mumbai, Maharashtra" },
                        { label: "Rent amount", value: "₹ 35,000 / month" },
                        { label: "Deposit", value: "₹ 1,00,000" },
                        { label: "Tenure", value: "2 years" },
                        { label: "Start date", value: "1st January, 2026" },
                        { label: "Agreement ID", value: "MHADA123456789" },
                    ].map((item) => (
                        <div key={item.label} className="flex gap-4 ">
                            <span className={`text-gray-600 ${poppins.className}`}>{item.label}:</span>
                            <span className={`text-gray-800 ${poppins.className}`}>{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Legal Disclosure */}
            <div className="bg-[#F7FBFF]  h-[334px] p-5 rounded-lg border-2 border-[#D1D5DC] relative mx-auto">
                <h3 className={`text-[18px] font-normal ${poppins.className}`}>Legal Disclosure</h3>
                <div className={`mt-3 space-y-4 h-[200px] overflow-y-auto font-medium ${poppins.className} pr-2`}>
                    <p className="text-[#0A0A0A99] text-[14px]">
                        This rental agreement is a legally binding electronic document generated in accordance with applicable laws of India...
                    </p>
                    <p className="text-[#0A0A0A99] text-[14px]">
                        By proceeding, you confirm that the information provided by you is accurate...
                    </p>
                    <p className="text-[#0A0A0A99] text-[14px]">
                        Once digitally signed, this agreement shall be treated as a valid and enforceable contract.
                    </p>
                </div>

                {/* Checkbox */}
                <label className="flex items-center h-[46px] rounded-[10px] mx-auto mt-2 px-4 space-x-3 text-gray-800 text-sm cursor-pointer border-[0.5px] border-[#0000001A]">
                    <input
                        type="checkbox"
                        checked={accepted}
                        onChange={() => setAccepted(!accepted)}
                        className="appearance-none h-5 w-5 border bg-[#6B7280] border-gray-300 rounded checked:bg-[#F97415]"
                    />
                    <span className={`select-none text-[#717182] text-[14px] ${poppins.className}`}>
                        I have read and understood the agreement terms
                    </span>
                </label>
            </div>

            {/* Next Button */}
            <div className="flex justify-end w-full">
                <Link
                    href={accepted ? "/stampduty" : "#"}
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
};

export default AgreementOverview;
