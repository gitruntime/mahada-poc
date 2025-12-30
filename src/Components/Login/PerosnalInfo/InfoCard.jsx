import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const InfoCard = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.number) tempErrors.number = "Phone Number is required";
    else if (!/^\d{10}$/.test(formData.number)) tempErrors.number = "Enter a valid 10-digit number";
    if (!formData.dob) tempErrors.dob = "Date of Birth is required";
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.state || formData.state === "Select State") tempErrors.state = "State is required";
    if (!formData.pin) tempErrors.pin = "PIN Code is required";
    else if (!/^\d{6}$/.test(formData.pin)) tempErrors.pin = "Enter a valid 6-digit PIN";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      // Navigate to next step
      window.location.href = "/document_info";
    }
  };

  return (
    <div className="relative mt-24 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-6">

        {/* Header: Complete your KYC and Skip button */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h2 className={`text-gray-500 text-lg sm:text-xl font-normal text-center sm:text-left ${poppins.className}`}>
            Complete your Know Your Customer verification quickly and securely
          </h2>
          <Link
            href="/"
            className={`px-4 py-2 text-center border-2 border-orange-500 rounded-lg text-orange-500 font-medium hover:bg-orange-500 hover:text-white hover:shadow-md transition-all duration-300 ${poppins.className}`}
          >
            Skip for now
          </Link>
        </div>

        {/* KYC Verification Card */}
        <div className="w-full bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col gap-6">
          <div className="flex flex-col items-center w-full">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">KYC Verification</h3>
            <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
              <div
                className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                style={{ width: "5.33%" }}
              ></div>
            </div>
            <div className="flex justify-between w-full">
              {[
                { icon: "/personalinfo_icon.png", label: "Personal Info" },
                { icon: "/document_icon.png", label: "Documents", inactive: true },
                { icon: "/review_icon.png", label: "Review & Submit", inactive: true },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.inactive ? "bg-gray-100" : ""}`}>
                    <img src={step.icon} alt={step.label} className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[12px] mt-1 ${poppins.className} ${step.inactive ? "text-gray-400" : "text-black"}`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Info Form */}
          <form className="w-full flex flex-col gap-4">
            <h4 className={`text-gray-900 font-normal text-md ${poppins.className}`}>Personal Information</h4>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 flex flex-col">
                <label htmlFor="firstName" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.firstName ? "border-red-500" : ""}`}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="lastName" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Last Name *</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.lastName ? "border-red-500" : ""}`}
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 flex flex-col">
                <label htmlFor="email" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Email Address *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.email ? "border-red-500" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="number" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Phone Number *</label>
                <input
                  id="number"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.number ? "border-red-500" : ""}`}
                  value={formData.number}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // remove non-numbers
                    if (value.length <= 10) {
                      handleChange({
                        target: {
                          id: "number",
                          value: value,
                        },
                      });
                    }
                  }}
                />

                {errors.number && <span className="text-red-500 text-xs">{errors.number}</span>}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="dob" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>
                Date of Birth *
              </label>

              <div className="relative w-full">
                {/* Calendar icon on the left */}
                <button
                  type="button"
                  onClick={() => document.getElementById("dob").showPicker?.()} // triggers native date picker
                  className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </button>

                {/* Date input */}
                <input
                  id="dob"
                  type="date"
                  className={`w-full p-2 pl-10 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.dob ? "border-red-500" : ""} appearance-none [&::-webkit-calendar-picker-indicator]:hidden`}
                  value={formData.dob}
                  onChange={handleChange}
                />

              </div>

              {errors.dob && <span className="text-red-500 text-xs">{errors.dob}</span>}
            </div>



            <div className="flex flex-col w-full">
              <label htmlFor="address" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Address *</label>
              <textarea
                id="address"
                placeholder="Enter your complete address"
                className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.address ? "border-red-500" : ""}`}
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 flex flex-col">
                <label htmlFor="city" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>City *</label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.city ? "border-red-500" : ""}`}
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <span className="text-red-500 text-xs">{errors.city}</span>}
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="state" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>State *</label>
                <select
                  id="state"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 ${poppins.className} ${errors.state ? "border-red-500" : ""}`}
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
                {errors.state && <span className="text-red-500 text-xs">{errors.state}</span>}
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="pin" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>PIN Code *</label>
                <input
                  id="pin"
                  type="text"
                  placeholder="6-digit PIN"
                  inputMode="numeric"
                  maxLength={6}
                  pattern="[0-9]{6}"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className} ${errors.pin ? "border-red-500" : ""}`}
                  value={formData.pin}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // remove non-numbers
                    if (value.length <= 6) {
                      handleChange({
                        target: {
                          id: "pin",
                          value: value,
                        },
                      });
                    }
                  }}
                />

                {errors.pin && <span className="text-red-500 text-xs">{errors.pin}</span>}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 w-full">
              <button
                disabled
                className="px-6 py-2 w-full sm:w-auto bg-gray-200 text-gray-500 border-2 border-gray-300 rounded-lg cursor-not-allowed text-center"
              >
                Previous
              </button>
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
};

export default InfoCard;
