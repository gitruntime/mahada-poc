import BlankNavbar from '@/Components/BlankNavbar'
import Agreement1 from '@/Components/RentalAgreement/Agreement1'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const rentalagreement1 = () => {
  return (
    <div>
      <BlankNavbar />

      <div className={`px-[20px] sm:px-[40px] lg:px-[80px] mb-[10px] mt-6 ${poppins.className}`}>
        <Link href="/dashboard" className={`text-[16px] font-medium ${poppins.className} text-black cursor-pointer`}>
          Go Back
        </Link>
      </div>
      <Agreement1 />

    </div>
  )
}

export default rentalagreement1
