import BlankNavbar from '@/Components/BlankNavbar'
import Pcc2 from '@/Components/Login/PCC/Pcc2'
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
        
        <Pcc2/>
      
    </div>
  )
}

export default pcc
