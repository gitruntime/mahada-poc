import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Poppins, Arimo } from "next/font/google";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Done2 = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const applicationNumber = "MHADA-TN-PAY-000123";

  const handleCopy = () => {
    navigator.clipboard.writeText(applicationNumber)
      .then(() => {
        setShowPopup(true);

        // Hide popup after 1.5 seconds and redirect
        setTimeout(() => {
          setShowPopup(false);
          router.push("/signup");
        }, 1500);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="w-[672px] h-[280px] border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center px-6">

        {/* Icon */}
        <div className="rounded-full flex items-center mt-[30px] justify-center mb-4">
          <Image src="/check_icon.png" height={64} width={64} alt="check" />
        </div>

        {/* Title */}
        <h2 className={`text-[16px] font-normal ${arimo.className} text-[#0A0A0A] mb-1`}>
          Payment Completed & KYC Application Submitted Successfully!
        </h2>

        {/* Subtitle */}
        <p className={`text-[16px] ${arimo.className} text-[#717182] mb-5`}>
          Your application is under review. You'll receive an update within 2-3 business days via email and SMS
        </p>

        {/* Application Number */}
        <h2 className={`text-[16px] font-normal ${arimo.className} text-[#0A0A0A] mb-1`}>
          Receipt ID
        </h2>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[20px] font-normal text-[#717182] tracking-wide">
            {applicationNumber}
          </span>
          <Image
            src="/copy.png"
            width={24}
            height={24}
            alt="copy"
            className="cursor-pointer"
            onClick={handleCopy}
          />
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-md shadow-md">
          Number copied
        </div>
      )}
    </div>
  );
};

export default Done2;
