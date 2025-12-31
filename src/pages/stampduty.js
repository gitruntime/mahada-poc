import React from 'react'
import BlankNavbar from '@/Components/BlankNavbar'
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from "next/font/google";
import { Stamp } from 'lucide-react';
import StampDuty from '@/Components/RentalAgreement/StampDuty';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const stampduty = () => {
    return (
        <div>
            <BlankNavbar />
            <div className={`px-[20px] sm:px-[40px] lg:px-[80px] mt-6 ${poppins.className}`}>
                <Link href="/rentalagreement1" className={`text-[16px] font-medium ${poppins.className} text-black cursor-pointer`}>
                    Go Back
                </Link>
            </div>
            <StampDuty />


        </div>
    )
}

export default stampduty
