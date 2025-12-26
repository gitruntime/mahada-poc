import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const InfoCard = () => {
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

          {/* Progress Bar & Title */}
          <div className="flex flex-col items-center w-full">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">KYC Verification</h3>

            {/* Progress Bar */}
            <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
              <div
                className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                style={{ width: "33.33%" }}
              ></div>
            </div>

            {/* Steps */}
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
                    className={`text-[12px] mt-1 ${poppins.className} ${
                      step.inactive ? "text-gray-400" : "text-black"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Info Section */}
          <div className="w-full flex flex-col gap-4">
            <h4 className={`text-gray-900 font-normal text-md ${poppins.className}`}>Personal Information</h4>

            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 flex flex-col">
                <label htmlFor="firstName" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className}`}
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="lastname" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Last Name *</label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Enter your last name"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className}`}
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 flex flex-col">
                <label htmlFor="email" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Email Address *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className}`}
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="number" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Phone Number *</label>
                <input
                  id="number"
                  type="text"
                  placeholder="Enter 10-digit mobile number"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className}`}
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col w-full">
              <label htmlFor="dob" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Date of Birth *</label>
              <input
                id="dob"
                type="text"
                placeholder="DD/MM/YYYY"
                className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className}`}
              />
            </div>

            {/* Address */}
            <div className="flex flex-col w-full">
              <label htmlFor="address" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>Address *</label>
              <textarea
                placeholder="Enter your complete address"
                className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className}`}
              />
            </div>

            {/* City, State, PIN */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 flex flex-col">
                <label htmlFor="city" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>City *</label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className}`}
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="state" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>State *</label>
                <select
                  id="state"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 ${poppins.className}`}
                >
                  <option>Select State</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="pin" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>PIN Code *</label>
                <input
                  id="pin"
                  type="text"
                  placeholder="6-digit PIN"
                  className={`w-full p-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 ${poppins.className}`}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 w-full">
              <Link
                href="/login"
                className="px-6 py-2 bg-white border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-center w-full sm:w-auto"
              >
                Previous
              </Link>
              <Link
                href="/document_info"
                className={`bg-orange-500 text-white ${poppins.className} flex justify-center items-center gap-2 px-6 py-2.5 rounded-lg w-full sm:w-auto transition-all duration-300 hover:bg-orange-600 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]`}
              >
                Next
                <img
                  src="/righticon.png"
                  className="w-4 h-4 transition-transform duration-300"
                  alt=""
                />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
