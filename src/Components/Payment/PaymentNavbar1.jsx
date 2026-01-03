import React from "react";
import Link from "next/link";
import Image from "next/image";
const PaymentNavbar1 = () => {
    return (
        <nav className="w-full h-[64px] bg-white
      shadow-[0px_3px_14.4px_0px_rgba(0,0,0,0.25)]
      px-[20px] sm:px-[40px] lg:px-[80px]
      flex items-center justify-between"
        >
            {/* Left */}
            <Link href="/" className="flex flex-col ">
                <h1
                    className="text-black"
                    style={{
                        fontFamily: "Arial",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "32px",
                        letterSpacing: "0px",
                    }}
                >
                    Secure Payment Gateway
                </h1>

                <span
                    className="text-[#717182]"
                    style={{
                        fontFamily: "Arial",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "20px",
                    }}
                >
                    Complete your payment securely
                </span>
            </Link>

            {/* Right */}
            <div className="flex items-center gap-2">
                <Image
                    src="/greenverified.png"
                    width={16}
                    height={16}
                    alt="SSL Secured"
                />

                <span className="flex items-center text-green-600 px-3 py-1
                   rounded-[8px] border border-[#B9F8CF]
                   font-normal text-[12px] leading-4 font-[Arial]">
                    SSL Secured
                </span>
            </div>


        </nav>
    );
};

export default PaymentNavbar1;
