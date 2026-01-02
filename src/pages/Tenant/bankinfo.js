import BlankNavbar from '@/Components/BlankNavbar'
import BankInfo2 from '@/Components/Login/BankInfo/BankInfo2'
import React from 'react'
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const bankinfo = () => {
  return (
    <div>
        <BlankNavbar/>
        
        <BankInfo2 />
      
    </div>
  )
}

export default bankinfo
