import React, { useState } from 'react';
import { Poppins, Arimo } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const ReviewCardTenant = () => {
    const [accepted, setAccepted] = useState(false);
    const [paymentDone, setPaymentDone] = useState(false);

    const handlePayment = () => {
        // Open payment in new tab
        const paymentWindow = window.open(
            "https://payments-test.cashfree.com/forms/mhada-payment",
            "_blank"
        );

        // Check if user comes back to the tab
        const checkFocus = setInterval(() => {
            if (document.hasFocus()) {
                clearInterval(checkFocus);
                setPaymentDone(true); // mark payment done
            }
        }, 500);
    };


    return (
        <div className="relative mt-24 mb-3 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-0">
                    <h1
                        className={`text-[#0C1421] text-[20px] sm:text-[24px] font-semibold text-center sm:text-left ${poppins.className}`}
                    >
                        Tenant Registration
                    </h1>

                </div>

                {/* Header: Complete your KYC and Skip button */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                    <h2 className={`text-gray-500 text-lg sm:text-xl font-normal text-center sm:text-left ${poppins.className}`}>
                        Complete your Know Your Customer verification quickly and securely
                    </h2>

                </div>

                {/* KYC Verification Card */}
                <div className="w-full bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col gap-6">
                    <div className="flex flex-col items-center w-full">
                        <h3 className="text-gray-800 font-semibold text-lg mb-4">Tenant Profile Details</h3>
                        <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
                            <div
                                className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                                style={{ width: "100%" }}
                            ></div>
                        </div>
                        <div className="flex justify-between w-full">
                            {[
                                { icon: "/personalinfo_icon.png", label: "Personal Info" },
                                { icon: "/document_icon.png", label: "Documents" },
                                { icon: "/personalinfo_icon.png", label: "Profile Info" },
                                { icon: "/document_icon.png", label: "Bank Details" },
                                { icon: "/review_icon.png", label: "Review & Submit" },
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.inactive ? "bg-white" : ""}`}>
                                        <img src={step.icon} alt={step.label} className="w-5 h-5" />
                                    </div>
                                    <span
                                        className={`text-[12px] mt-1 ${poppins.className} ${step.inactive ? "text-gray-400" : "text-[#028541]"}`}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="w-full flex  flex-col gap-4">


                        {/* Cards Wrapper */}
                        <div className="flex flex-col gap-6 w-full max-w-[1200px] mx-auto">

                            {/* Top Row: Personal Info + Profile Info */}
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Personal Info Card */}
                                <div className="flex-1 min-w-[300px] h-[280px] rounded-[12px] bg-[#F7FBFF] border-2 border-gray-200 p-5">
                                    <h2 className={`${poppins.className} text-[16px] font-normal text-[#0A0A0A] mb-4`}>
                                        Personal Information
                                    </h2>
                                    <div className={`space-y-2 ${poppins.className} font-normal text-[14px] text-[#0A0A0A]`}>
                                        <div className="flex items-center"><span className="font-medium w-[120px]">Name:</span><span>Arjun Chatterjee</span></div>
                                        <div className="flex items-center"><span className="font-medium w-[120px]">Email:</span><span>arjunchatterjee@gmail.com</span></div>
                                        <div className="flex items-center"><span className="font-medium w-[120px]">Phone:</span><span>+91 98989 98989</span></div>
                                        <div className="flex items-center"><span className="font-medium w-[120px]">DOB:</span><span>05-04-1994</span></div>
                                        <div className="flex items-start"><span className="font-medium w-[120px]">Address:</span><span className="flex-1">123, Greenfield Apartments, MG Road, Ludhiana, Punjab - 141001</span></div>
                                    </div>
                                </div>

                                {/* Profile Info Card */}
                                <div className="flex-1 min-w-[300px] h-[280px] rounded-[12px] bg-[#F7FBFF] border-2 border-gray-200 p-5">
                                    <h2 className={`${poppins.className} text-[16px] font-normal text-[#0A0A0A] mb-4`}>
                                        Profile Information
                                    </h2>
                                    <div className={`space-y-2 ${poppins.className} font-normal text-[14px] text-[#0A0A0A]`}>
                                        <div className="flex"><span className="font-medium w-[140px]">Occupation:</span><span>Employee</span></div>
                                        <div className="flex"><span className="font-medium w-[140px]">Employer Name:</span><span>XYZ Company Ltd</span></div>
                                        <div className="flex"><span className="font-medium w-[140px]">Monthly Income Range:</span><span>10 Lacs to 12 Lacs per annum</span></div>
                                        <div className="flex"><span className="font-medium w-[140px]">Preferred City / Location:</span><span>Mumbai</span></div>
                                        <div className="flex"><span className="font-medium w-[140px]">Intended Duration of Stay:</span><span>2 Years</span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row: Documents + Bank Details + Documents */}
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Documents Uploaded 1 */}
                                <div className="flex-1 min-w-[220px] rounded-[12px] bg-[#F7FBFF] border-2 border-gray-200 p-5">
                                    <h2 className={`${poppins.className} text-[16px] font-semibold text-[#0A0A0A] mb-4`}>Documents Uploaded</h2>
                                    <ul className={`space-y-3 ${poppins.className} text-[14px]`}>
                                        {["Aadhar Card", "PAN Card", "Address Proof", "Bank Details"].map((doc, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <span className="w-5 h-5 flex items-center justify-center rounded-full text-white text-[12px]">
                                                    <Image src="/check_icon.png" width={16} height={16} alt={doc} />
                                                </span>
                                                <span className="text-[#0A0A0A]">{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bank Details + PCC */}
                                <div className="flex-1 min-w-[220px] rounded-[12px] bg-[#F7FBFF] border-2 border-gray-200 p-5">
                                    <h2 className={`${poppins.className} text-[16px] font-normal text-[#0A0A0A] mb-3`}>Bank Details</h2>
                                    <div className={`${poppins.className} font-normal text-[14px] text-[#0A0A0A] space-y-1`}>
                                        <div className="flex"><span className="font-medium w-[100px]">Bank Name:</span><span>Bank of Baroda</span></div>
                                        <div className="flex"><span className="font-medium w-[100px]">Account no.:</span><span>1234 1234 1234 1234</span></div>
                                        <div className="flex"><span className="font-medium w-[100px]">IFSC Name:</span><span>ASDF1234</span></div>
                                        <div className="flex"><span className="font-medium w-[100px]">Holder Name:</span><span>Arjun Chatterjee</span></div>
                                        <h2 className={`${poppins.className} text-[16px] font-normal text-[#0A0A0A] mt-2`}>PCC Details</h2>
                                        <div className="flex"><span className="font-medium w-[100px]">PCC no.:</span><span>1234 1234 1234 1234</span></div>
                                    </div>
                                </div>

                                {/* Documents Uploaded 2 */}
                                <div className="flex-1 min-w-[220px] rounded-[12px] bg-[#F7FBFF] border-2 border-gray-200 p-5">
                                    <h2 className={`${poppins.className} text-[16px] font-semibold text-[#0A0A0A] mb-4`}>Documents Uploaded</h2>
                                    <ul className={`space-y-3 ${poppins.className} text-[14px]`}>
                                        {["Aadhar Card", "PAN Card", "Address Proof", "Selfie Photo", "Bank Details",].map((doc, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <span className="w-5 h-5 flex items-center justify-center rounded-full text-white text-[12px]">
                                                    <Image src="/check_icon.png" width={16} height={16} alt={doc} />
                                                </span>
                                                <span className="text-[#0A0A0A]">{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={`w-full border text-[#717182] border-[#0000001A] h-[46px] flex  px-[30px] ${arimo.className} mx-auto py-2 rounded-[10px] text-center`}>
                            <h1>Please review all information carefully before submitting. Once submitted, changes cannot be made.</h1>
                        </div>

                        {/* Registration Fees Card */}
                        <div className="flex-1 min-w-[220px] rounded-[12px] bg-[#F7FBFF] border-2 border-gray-200 p-5">
                            <h2 className={`${poppins.className} text-[18px] font-normal text-[#0A0A0A] mb-2`}>
                                Registration Fees
                            </h2>

                            <p className={`${poppins.className} text-[13.5px] text-[#717182] leading-relaxed mb-4`}>
                                As per applicable government regulations, a one-time registration fee is required for
                                processing your tenant application. Registration fees are collected only for processing
                                and verification, and do not guarantee approval.
                            </p>



                            <label className="flex items-center h-[46px] rounded-[10px] mt-2 px-4 space-x-3 text-gray-800 text-sm cursor-pointer border-[0.5px] border-[#0000001A]">
                                <input
                                    type="checkbox"
                                    checked={accepted}
                                    onChange={() => setAccepted(!accepted)}
                                    className="appearance-none h-5 w-5 border bg-[#6B7280] border-gray-300 rounded checked:bg-[#F97415]"
                                />
                                <span className={`select-none text-[#717182] text-[14px] ${poppins.className}`}>
                                    Payment of the registration fee does not guarantee approval of the application.
                                </span>
                            </label>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 w-full max-w-[900px] mx-auto">
                            <Link
                                href="/Tenant/bankinfo"
                                className="px-6 py-2 bg-white border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-center"
                            >
                                Previous
                            </Link>
                            <div className="flex flex-col gap-4">
                                {!paymentDone ? (
                                    <button
                                        onClick={handlePayment}
                                        className="px-6 py-2 rounded-xl border-2 border-[#FF7A18] text-[#F97415] bg-orange-50 hover:bg-orange-100 transition"
                                        disabled={!accepted} // require checkbox
                                    >
                                        Pay registration fee
                                    </button>
                                ) : (
                                    <Link href="/Tenant/logindone">
                                        <button
                                            className="px-6 py-2 w-full rounded-xl border-2 border-green-600 text-white bg-green-600 hover:bg-green-700 transition"
                                        >
                                            Proceed
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ReviewCardTenant;
