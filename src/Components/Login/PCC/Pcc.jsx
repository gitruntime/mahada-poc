import React from 'react'
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import PdfUploader from '@/Components/PdfUploader';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
const Pcc = () => {
    const [formData, setFormData] = useState({
        pccNumber: "",
    });
    const [isPccUploaded, setIsPccUploaded] = useState(false);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};

        if (!formData.pccNumber) {
            tempErrors.pccNumber = "PCC Number is required";
        } else if (!/^\d{12,15}$/.test(formData.pccNumber)) {
            tempErrors.pccNumber = "Enter a valid PCC number";
        }
        if (!isPccUploaded) {
            tempErrors.pccFile = "PCC document upload is mandatory";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };



    const handleNext = (e) => {
        e.preventDefault();
        if (validate()) {
            window.location.href = "/review2"; // ✅ move to next step
        }
    };

    return (
        <div className="relative mt-10 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-6">

                {/* Header: Complete your KYC and Skip button */}
                <div className="flex  flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0">
                    <h2
                        className={`text-gray-500 text-[14px] sm:text-xl font-normal  sm:text-left ${poppins.className}`}
                    >
                        Complete your Know Your Customer verification quickly and securely
                    </h2>


                </div>
                <div className="w-full bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col gap-6">
                    <div className="flex flex-col items-center w-full">
                        <h3 className="text-gray-800 font-semibold text-lg mb-4">KYC Verification</h3>
                        <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
                            <div
                                className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                                style={{ width: "70.33%" }}
                            ></div>
                        </div>
                        <div className="flex justify-between w-full">
                            {[
                                { icon: "/personalinfo_icon.png", label: "Personal Info" },
                                { icon: "/document_icon.png", label: "Documents" },
                                { icon: "/document_icon.png", label: "Bank Details", },
                                { icon: "/document_icon.png", label: "Police verification", inactive: true },
                                { icon: "/review_icon.png", label: "Review & Submit", inactive: true },
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
                    <form className="w-full flex flex-col gap-4">
                        <h4 className={`text-gray-900 font-normal text-md ${poppins.className}`}>Police Verification details</h4>

                        <div className="flex flex-col sm:flex-row gap-4 w-full">


                            <div className="flex-1 flex flex-col">
                                <label
                                    htmlFor="pccNumber"
                                    className={`text-gray-900 text-sm mb-1 ${poppins.className}`}
                                >
                                    PCC Number
                                </label>
                                <input
                                    id="pccNumber"
                                    type="tel"
                                    placeholder="0000 0000 0000 0000 00000"
                                    className={`w-full p-2 border rounded-lg bg-gray-50 ${poppins.className} ${errors.pccNumber ? "border-red-500" : "border-gray-300"
                                        }`}
                                    value={formData.pccNumber}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        if (value.length <= 15) {
                                            handleChange({
                                                target: { id: "pccNumber", value },
                                            });
                                        }
                                    }}
                                />

                                {errors.pccNumber && (
                                    <span className="text-red-500 text-xs">{errors.pccNumber}</span>
                                )}
                            </div>

                        </div>
                        <div>
                            <PdfUploader onUploadSuccess={setIsPccUploaded} />
                            {errors.pccFile && (
                                <span className="text-red-500 text-xs">{errors.pccFile}</span>
                            )}
                        </div>


                        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 w-full">
                            <Link href="/bankinfo"

                                className="px-6 py-2 w-full sm:w-auto  text-gray-500 border-2 border-gray-300 rounded-lg  text-center"
                            >
                                Previous
                            </Link>
                            <button
                                type="submit"
                                
                                onClick={handleNext}
                                className={`bg-orange-500 text-white ${poppins.className} flex justify-center items-center gap-2 px-6 py-2.5 rounded-lg w-full sm:w-auto transition-all duration-300 hover:bg-orange-600 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]`}
                            >
                                Next
                                <img
                                    src="/righticon.png"
                                    className="w-4 h-4 transition-transform duration-300"
                                    alt=""
                                />
                            </button>
                        </div>
                    </form>


                </div>


            </div>
        </div>
    );
}

export default Pcc
