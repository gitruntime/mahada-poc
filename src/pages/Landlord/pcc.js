import BlankNavbar from '@/Components/BlankNavbar'
import Pcc3 from '@/Components/Login/PCC/Pcc3'
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
        
        <Pcc3/>
      
    </div>
  )
}

export default pcc
