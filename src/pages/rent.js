import BlankNavbar from '@/Components/BlankNavbar'
import Rent from '@/Components/Rent'
import React from 'react'
import { Poppins, Arimo } from 'next/font/google';
import Link from 'next/link';
  

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const rent = () => {
  return (
    <div>
      <BlankNavbar/>
          <div className={`px-4 sm:px-8 lg:px-20 mt-6 ${poppins.className}`}>
        <Link
          href="/propertydetails"
          className={`text-[16px] font-medium leading-[100%] text-black cursor-pointer ${poppins.className}`}
          style={{ fontStyle: 'medium', letterSpacing: '0%' }}
        >
          Go Back
        </Link>
      </div>
        <Rent/>
      
    </div>
  )
}

export default rent
