import React, { useState } from 'react';
import { Poppins, Arimo } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const TenantProfileinfo = () => {
   const [formData, setFormData] = useState({
        occupation: "Software Developer",
        employerName: "Rahul Yadav",
        incomeRange: "50001-100000",
        preferredCity: "Mumbai",
        durationOfStay: "12 Months",
    });
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
    const [showPopup, setShowPopup] = useState(false);

    
    const handleNext = (e) => {
        e.preventDefault();
        if (validate()) {
            // Navigate to next step
            window.location.href = "/Tenant/bankinfo";
        }
    };
    const handlePrev = (e) => {
        e.preventDefault();

        window.location.href = "/Tenant/document_info";

    };

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validate = () => {
    let tempErrors = {};

    // Only check fields in this step
    if (!formData.occupation) tempErrors.occupation = "Occupation is required";
    if (!formData.employerName) tempErrors.employerName = "Employer Name is required";
    if (!formData.incomeRange) tempErrors.incomeRange = "Income Range is required";
    if (!formData.preferredCity) tempErrors.preferredCity = "Preferred City is required";
    if (!formData.durationOfStay) tempErrors.durationOfStay = "Duration of stay is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
};


    return (
        <div>
            <div className="relative mt-24 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
                <div className="w-full max-w-5xl flex flex-col gap-2">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-0">
                        <h1 className={`text-[#0C1421] text-[20px] sm:text-[24px] font-semibold text-center sm:text-left ${poppins.className}`}>
                            Tenant Registration
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                        <h2 className={`text-gray-500 text-lg sm:text-xl font-normal text-center sm:text-left ${poppins.className}`}>
                            Complete your Know Your Customer verification quickly and securely
                        </h2>
                    </div>

                    {/* KYC Card */}
                    <div className="w-full bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col gap-6">
                        {/* Progress */}
                        <div className="flex flex-col items-center w-full">
                            <h4 className={`text-gray-900 font-normal mb-[20px] text-md ${poppins.className}`}>
                                Tenant Identity Verification
                            </h4>

                            <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
                                <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full" style={{ width: "38%" }}></div>
                            </div>

                            <div className="flex justify-between w-full">
                                {[
                                    { icon: "/personalinfo_icon.png", label: "Personal Info" },
                                    { icon: "/document_icon.png", label: "Documents" },
                                    { icon: "/personalinfo_icon.png", label: "Profile Info", inactive: true },
                                    { icon: "/document_icon.png", label: "Bank Details", inactive: true },
                                  
                                    { icon: "/review_icon.png", label: "Review & Submit", inactive: true },
                                ].map((step, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.inactive ? "bg-gray-100" : ""}`}>
                                            <img src={step.icon} alt={step.label} className="w-5 h-5" />
                                        </div>
                                        <span className={`text-[12px] mt-1 ${poppins.className} ${step.inactive ? "text-gray-400" : "text-black"}`}>
                                            {step.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Employment & Stay Details Form */}
                        <div className="flex flex-col gap-4 w-full mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Occupation */}
                                <div className="flex flex-col">
                                    <label htmlFor="occupation" className={`text-gray-700 text-sm mb-1 ${poppins.className}`}>Occupation</label>
                                    <input
                                        id="occupation"
                                        type="text"
                                        placeholder="Type here"
                                        className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.occupation ? "border-red-500" : ""}`}
                                        value={formData.occupation}
                                        onChange={handleChange}
                                    />
                                    {errors.occupation && <span className="text-red-500 text-xs">{errors.occupation}</span>}
                                </div>

                                {/* Employer Name */}
                                <div className="flex flex-col">
                                    <label htmlFor="employerName" className={`text-gray-700 text-sm mb-1 ${poppins.className}`}>Employer Name</label>
                                    <input
                                        id="employerName"
                                        type="text"
                                        placeholder="Type here"
                                        className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.employerName ? "border-red-500" : ""}`}
                                        value={formData.employerName}
                                        onChange={handleChange}
                                    />
                                    {errors.employerName && <span className="text-red-500 text-xs">{errors.employerName}</span>}
                                </div>

                                {/* Monthly Income Range */}
                                <div className="flex flex-col">
                                    <label htmlFor="incomeRange" className={`text-gray-700 text-sm mb-1 ${poppins.className}`}>Monthly Income Range</label>
                                    <select
                                        id="incomeRange"
                                        className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 ${poppins.className} ${errors.incomeRange ? "border-red-500" : ""}`}
                                        value={formData.incomeRange}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Range</option>
                                        <option value="0-20000">0 - 20,000</option>
                                        <option value="20001-50000">20,001 - 50,000</option>
                                        <option value="50001-100000">50,001 - 1,00,000</option>
                                        <option value="100001+">1,00,001+</option>
                                    </select>
                                    {errors.incomeRange && <span className="text-red-500 text-xs">{errors.incomeRange}</span>}
                                </div>

                                {/* Preferred City */}
                                <div className="flex flex-col">
                                    <label htmlFor="preferredCity" className={`text-gray-700 text-sm mb-1 ${poppins.className}`}>Preferred City / Location</label>
                                    <select
                                        id="preferredCity"
                                        className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 ${poppins.className} ${errors.preferredCity ? "border-red-500" : ""}`}
                                        value={formData.preferredCity}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select City</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Thane">Thane</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Nagpur">Nagpur</option>
                                    </select>
                                    {errors.preferredCity && <span className="text-red-500 text-xs">{errors.preferredCity}</span>}
                                </div>

                                {/* Duration of Stay */}
                                <div className="flex flex-col sm:col-span-2">
                                    <label htmlFor="durationOfStay" className={`text-gray-700 text-sm mb-1 ${poppins.className}`}>Intended Duration of Stay</label>
                                    <input
                                        id="durationOfStay"
                                        type="text"
                                        placeholder="+91 98989 98989"
                                        className={`w-1/2 p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.durationOfStay ? "border-red-500" : ""}`}
                                        value={formData.durationOfStay}
                                        onChange={handleChange}
                                    />
                                    {errors.durationOfStay && <span className="text-red-500 text-xs">{errors.durationOfStay}</span>}
                                </div>


                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 w-full">

                                {/* Previous */}
                                <button onClick={handlePrev}

                                    className={`w-full sm:w-[118px] h-[34px]
      px-[12px] py-[7px]
      rounded-[8px]
      bg-gray-200 text-gray-500
      border-2 border-gray-300
      cursor-pointer
      text-[14px] font-semibold leading-[20px]
      text-center ${poppins.className}`}
                                >
                                    Previous
                                </button>

                                {/* Right buttons */}
                                {/* Right buttons */}
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
                                        type="button"
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
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenantProfileinfo;
