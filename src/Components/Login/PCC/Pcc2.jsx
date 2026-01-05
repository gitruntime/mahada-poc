import React, { useState, useEffect } from 'react';
import { Poppins } from "next/font/google";
import Link from "next/link";
import PdfUploader from '@/Components/PdfUploader';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const Pcc2 = () => {
    const [formData, setFormData] = useState({
        pccNumber: "",
    });
    const [isPccUploaded, setIsPccUploaded] = useState(false);
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    // ✅ Load draft from localStorage on mount
    useEffect(() => {
        const savedDraft = localStorage.getItem("tenant_personal_info_draft");
        if (savedDraft) {
            const parsedDraft = JSON.parse(savedDraft);
            setFormData(parsedDraft);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem("tenant_personal_info_draft", JSON.stringify(formData));

        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
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
            window.location.href = "/Tenant/sucessagreement";
        }
    };

    return (
        <div className="relative mt-10 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-6">
                <div className="w-full bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-0">
                        <h1 className={`text-[#0C1421] text-[30px] sm:text-[24px] font-bold text-center sm:text-left ${poppins.className}`}>
                            Police Verification details
                        </h1>
                    </div>

                    <form className="w-full flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <div className="flex-1 flex flex-col">
                                <label htmlFor="pccNumber" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>
                                    PCC Number
                                </label>
                                <input
                                    id="pccNumber"
                                    type="tel"
                                    placeholder="0000 0000 0000 0000 00000"
                                    className={`w-full p-2 border rounded-lg bg-gray-50 ${poppins.className} ${errors.pccNumber ? "border-red-500" : "border-gray-300"}`}
                                    value={formData.pccNumber}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        if (value.length <= 15) {
                                            handleChange({ target: { id: "pccNumber", value } });
                                        }
                                    }}
                                />
                                {errors.pccNumber && (
                                    <span className="text-red-500 text-xs">{errors.pccNumber}</span>
                                )}
                            </div>
                        </div>

                        <div className="w-full mx-auto mt-6 border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 text-center">Verify through PCC</h3>
                            <Link
                                href="https://pcs.mahaonline.gov.in/Forms/Home.aspx"
                                target="_blank"
                                className="mt-4 w-full flex items-center justify-center gap-3 border border-blue-600 text-blue-950 rounded-lg font-medium transition-all duration-300 ease-in-out hover:bg-blue-950 hover:text-white hover:shadow-lg hover:-translate-y-[2px] active:translate-y-0"
                            >
                                <img src="/pcc.png" alt="Police Clearance Certificate" className="h-[40px] w-auto transition-transform duration-300 group-hover:scale-110" />
                                <span className="transition-all duration-300">
                                    Verify via Police Clearance Services Maharashtra Police
                                </span>
                            </Link>
                            <p className={`mt-3 text-[14px] text-gray-600 ${poppins.className} text-center`}>
                                Dont have a account ? Upload PCC Certificate Manually below
                            </p>
                        </div>

                        <div>
                            <PdfUploader onUploadSuccess={setIsPccUploaded} />
                            {errors.pccFile && (
                                <span className="text-red-500 text-xs">{errors.pccFile}</span>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 w-full">
                            <Link href="/esignotp" className="px-6 py-2 w-full sm:w-auto text-gray-500 border-2 border-gray-300 rounded-lg text-center">
                                Previous
                            </Link>
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className={`bg-[#6B7280] text-white ${poppins.className} cursor-pointer flex justify-center items-center gap-[15px] w-full sm:w-[118px] h-[34px] px-[12px] py-[7px] rounded-[8px] text-[14px] font-semibold leading-[20px] transition-colors duration-200 hover:bg-[#4B5563]`}
                                >
                                    Save as draft
                                </button>

                                {showPopup && (
                                    <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadeIn">
                                        Draft saved successfully!
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    onClick={handleNext}
                                    className={`bg-orange-500 text-white ${poppins.className} cursor-pointer flex justify-center items-center gap-2 w-full sm:w-[118px] h-[34px] px-[12px] py-[7px] rounded-[8px] text-[14px] font-semibold leading-[20px] transition-all duration-300 hover:bg-orange-600 hover:shadow-md active:scale-[0.98]`}
                                >
                                    Next
                                    <img src="/righticon.png" className="w-4 h-4" alt="" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Pcc2;
