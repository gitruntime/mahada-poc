import BlankNavbar from '@/Components/BlankNavbar'
import AddNewPropertyPage2 from '@/Components/NewProperty/AddNewPropertyPage2'
import React from 'react'
import { Poppins } from "next/font/google";
import Link from 'next/link';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const addnewprop = () => {
  return (
    <div>
      <BlankNavbar/>
      <div className={`px-4 sm:px-8 lg:px-20 mt-6 ${poppins.className}`}>
        <Link
          href="/Landlord"
          className={`text-[16px] font-medium leading-[100%] text-black cursor-pointer ${poppins.className}`}
          style={{ fontStyle: 'medium', letterSpacing: '0%' }}
        >
          Go Back
        </Link>
      </div>
    
        <AddNewPropertyPage2/>
      
    </div>
  )
}

export default addnewprop
