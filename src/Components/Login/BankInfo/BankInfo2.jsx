import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const BankInfo2 = () => {
    const [formData, setFormData] = useState({
        bankName: "",
        accountNumber: "987654321098",
        ifscCode: "SBIN0000456",
        firstName: "Rahul",

    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };


    const [showPopup, setShowPopup] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();

        localStorage.setItem(
            "tenant_personal_info_draft",
            JSON.stringify(formData)
        );

        // Show popup instead of alert
        setShowPopup(true);

        // Hide popup after 3 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };


    const validate = () => {
        let tempErrors = {};

        // Bank Name
        if (!formData.bankName) {
            tempErrors.bankName = "Bank Name is required";
        }

        // Account Number
        if (!formData.accountNumber) {
            tempErrors.accountNumber = "Account Number is required";
        } else if (!/^\d{9,18}$/.test(formData.accountNumber)) {
            tempErrors.accountNumber = "Enter a valid account number";
        }

        // IFSC Code
        if (!formData.ifscCode) {
            tempErrors.ifscCode = "IFSC Code is required";
        } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.ifscCode)) {
            tempErrors.ifscCode = "Enter a valid IFSC code";
        }

        // Account Holder Name
        if (!formData.firstName) {
            tempErrors.firstName = "Account holder name is required";
        } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
            tempErrors.firstName = "Only alphabets are allowed";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };



    const handleNext = (e) => {
        e.preventDefault();
        if (validate()) {
            // Navigate to next step
            window.location.href = "/Tenant/review2";
        }
    };

    return (
        <div className="relative mt-10 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-0">
                    <h1
                        className={`text-[#0C1421] text-[20px] sm:text-[24px] font-semibold text-center sm:text-left ${poppins.className}`}
                    >
                        Tenant Registration
                    </h1>

                </div>


                {/* Header: Complete your KYC and Skip button */}
                <div className="flex  flex-col sm:flex-row  items-center gap-4 sm:gap-0">
                    <h2
                        className={`text-gray-500 text-[14px] sm:text-xl font-normal  sm:text-left ${poppins.className}`}
                    >
                        Complete your Know Your Customer verification quickly and securely
                    </h2>


                </div>
                <div className="w-full bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col gap-6">
                    <div className="flex flex-col items-center w-full">
                        <h3 className={`text-[#0A0A0A] ${poppins.className} font-normal text-lg mb-4`}>Tenant Bank Details</h3>
                        <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
                            <div
                                className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                                style={{ width: "56%" }}
                            ></div>
                        </div>
                        <div className="flex justify-between w-full">
                            {[
                                { icon: "/personalinfo_icon.png", label: "Personal Info" },
                                { icon: "/document_icon.png", label: "Documents" },
                                { icon: "/personalinfo_icon.png", label: "Profile Info" },
                                { icon: "/document_icon.png", label: "Bank Details" },
                               
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
                        <h4 className={`text-gray-900 font-normal text-md ${poppins.className}`}>Bank details</h4>

                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <div className="flex-1 flex flex-col">
                                <label
                                    htmlFor="bankName"
                                    className={`text-gray-900 text-sm mb-1 ${poppins.className}`}
                                >
                                    Bank Name
                                </label>

                                <select
                                    id="bankName"
                                    name="bankName"
                                    className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 ${poppins.className} ${errors.bankName ? "border-red-500" : ""
                                        }`}
                                    value={formData.bankName}
                                    onChange={handleChange}
                                >
                                    <option value="">Select your bank</option>
                                    <option value="State Bank of India">State Bank of India</option>
                                    <option value="Bank of Maharashtra">Bank of Maharashtra</option>
                                    <option value="HDFC Bank">HDFC Bank</option>
                                    <option value="ICICI Bank">ICICI Bank</option>
                                </select>

                                {errors.bankName && (
                                    <span className="text-red-500 text-xs">{errors.bankName}</span>
                                )}
                            </div>

                            <div className="flex-1 flex flex-col">
                                <label
                                    htmlFor="accountNumber"
                                    className={`text-gray-900 text-sm mb-1 ${poppins.className}`}
                                >
                                    Account Number
                                </label>
                                <input
                                    id="accountNumber"
                                    type="tel"
                                    placeholder="0000 00000 00000 00000"
                                    className={`w-full p-2 border rounded-lg bg-gray-50 ${poppins.className} ${errors.accountNumber ? "border-red-500" : "border-gray-300"
                                        }`}
                                    value={formData.accountNumber}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        if (value.length <= 18) {
                                            handleChange({
                                                target: { id: "accountNumber", value },
                                            });
                                        }
                                    }}
                                />
                                {errors.accountNumber && (
                                    <span className="text-red-500 text-xs">{errors.accountNumber}</span>
                                )}
                            </div>

                        </div>
                        <div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="ifscCode" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>IFSC Code *</label>
                                    <input
                                        id="ifscCode"
                                        type="text"
                                        placeholder="AAAA0BBBBBB"
                                        className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.ifscCode ? "border-red-500" : ""}`}
                                        value={formData.ifscCode}
                                        onChange={handleChange}
                                    />
                                    {errors.ifscCode && <span className="text-red-500 text-xs">{errors.ifscCode}</span>}
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <label htmlFor="firstName" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Name of the account dolder</label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter Name here"
                                        className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.firstName ? "border-red-500" : ""}`}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
                                </div>

                            </div>

                        </div>



                        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 w-full">
                            <Link href="/Tenant/profile"

                                className="px-6 py-2 w-full sm:w-auto  text-gray-500 border-2 border-gray-300 rounded-lg  text-center"
                            >
                                Previous
                            </Link>
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative">

                                {/* Save as draft */}
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className={`bg-[#6B7280] text-white ${poppins.className} cursor-pointer
                                    flex justify-center items-center
                                    gap-[15px]
                                    w-full sm:w-[118px] h-[34px]
                                    px-[12px] py-[7px]
                                    rounded-[8px]
                                    text-[14px] font-semibold leading-[20px]
                                    transition-colors duration-200
                                    hover:bg-[#4B5563]`}
                                >
                                    Save as draft
                                </button>

                                {/* Popup */}
                                {showPopup && (
                                    <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadeIn">
                                        Draft saved successfully!
                                    </div>
                                )}


                                {/* Next */}
                                <button
                                    type="submit"
                                    onClick={handleNext}
                                    className={`bg-orange-500 text-white ${poppins.className} cursor-pointer
                                    flex justify-center items-center gap-2
                                    w-full sm:w-[118px] h-[34px]
                                    px-[12px] py-[7px]
                                    rounded-[8px]
                                    text-[14px] font-semibold leading-[20px]
                                    transition-all duration-300
                                    hover:bg-orange-600 hover:shadow-md
                                    active:scale-[0.98]`}
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
};

export default BankInfo2;
