import BlankNavbar from '@/Components/BlankNavbar'
import Pcc from '@/Components/Login/PCC/Pcc'
import React from 'react'
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const pcc = () => {
  return (
    <div>
       <BlankNavbar/>
         <div className="w-full max-w-[1440px] h-[64px] flex items-center px-[80px] py-[20px] border-b border-gray-300">
            <nav className={`flex items-center gap-2 text-[16px]  ${poppins.className}`}>
                <span className="text-gray-400 font-medium"> <Link href="/">Home</Link></span>
                <span className="text-gray-400 font-medium">{`>`} My Dashboard</span>
                 <span className="text-black font-semibold">{`>`} Complete Verification</span>
            </nav>
        </div>
        <Pcc/>
      
    </div>
  )
}

export default pcc
