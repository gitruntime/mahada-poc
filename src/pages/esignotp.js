
import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

import BlankNavbar from "@/Components/BlankNavbar";
import EsignVerify from "@/Components/RentalAgreement/EsignVerify";
import FakeAgreement from "@/Components/RentalAgreement/FakeAgreement";
import EsignOtp from "@/Components/RentalAgreement/EsignOtp";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const esignotp = () => {
    return (
        <div className={poppins.className}>
            <BlankNavbar />

            {/* Go Back */}
            <div className="px-[20px] sm:px-[40px] lg:px-[80px] mt-6 mb-4">
                <Link
                    href="/paymentsucess"
                    className="text-[16px] font-medium text-black"
                >
                    Go Back
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-[20px] sm:px-[40px] lg:px-[80px] mb-10">
                <EsignOtp />
                <FakeAgreement />
            </div>
        </div>
    );
};

export default esignotp;

