import React, { useState, useRef } from "react";
import Link from "next/link";

const EsignOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-[896px] h-[391.33px] bg-white rounded-[14px] border border-gray-200 p-[16px]">
      {/* Header */}
      <h2 className="text-[22px] font-semibold text-gray-900 mb-2">
        E-Sign OTP Verification
      </h2>
      <p className="text-[14px] text-gray-600 mb-6">
        OTP sent to your Aadhaar-linked mobile number
      </p>

      {/* OTP Box */}
      <div className="bg-[#F8FBFF] border border-gray-200 rounded-[12px] p-6">
        <p className="text-[14px] text-gray-800 mb-4">
          Enter OTP sent to <span className="font-medium">+91 ***** **123</span>
        </p>

        {/* OTP Inputs */}
        <div className="flex gap-3 mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-[44px] h-[44px] text-center text-[18px] border border-gray-300 rounded-[10px]
              bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          ))}
        </div>

        {/* Timer + Resend */}
        <div className="flex justify-between items-center bg-white border border-gray-200 rounded-[10px] px-4 py-3">
          <span className="text-[14px] text-gray-600">05:00 Left</span>
          <button className="text-[14px] text-orange-500 font-medium hover:underline">
            Resend OTP
          </button>
        </div>
      </div>

      {/* Verify Button */}
      <div className="flex justify-end mt-6">
        <Link
          href={otp.includes("") ? "#" : "/sucessagreement"}
          onClick={(e) => {
            if (otp.includes("")) e.preventDefault();
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-[10px]
            text-[14px] font-medium text-white
            ${otp.includes("")
              ? "bg-orange-400 opacity-50 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
            }`}
        >
          Verify & Sign →
        </Link>
      </div>
    </div>
  );
};

export default EsignOtp;
