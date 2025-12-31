import React, { useState, useEffect, useRef } from "react";

const PanOtp = ({ open, onClose, onSuccess }) => {
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const inputRef = useRef(null);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
      setOtp("");
      setVerified(false);
    }
  }, [open]);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // numeric only
    if (value.length <= 6) setOtp(value);
  };

  const handleSubmit = () => {
    if (otp.length === 6) {
      setVerified(true);

      // simulate verification
      setTimeout(() => {
        onSuccess(); // lock PAN input
        onClose();   // close modal
      }, 800);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-md w-[95%] max-w-md p-6">

        <h2 className="text-lg font-semibold mb-4">
          Verify PAN OTP
        </h2>

        <div className="bg-green-100 text-green-800 text-sm p-3 rounded mb-4">
         UTIITSL has sent a temporary OTP to your mobile number ending in ******7898 (Valid for 10 mins)
        </div>

        <p className="text-sm mb-2">Enter OTP to complete verification</p>

        <div className="relative mb-4">
          <input
            ref={inputRef}
            type="tel"
            value={otp}
            onChange={handleChange}
            maxLength={6}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
          />

          {verified && (
            <img
              src="/check_icon.png"
              alt="verified"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={otp.length !== 6}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-3 rounded-md font-semibold mb-3"
        >
          Submit
        </button>

        <p className="text-sm text-center text-gray-600">
          Didn&apos;t get the OTP?{" "}
          <button className="text-blue-600 hover:underline">
            Resend OTP
          </button>
        </p>

      </div>
    </div>
  );
};

export default PanOtp;
