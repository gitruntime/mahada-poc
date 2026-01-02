import TenantProfileinfo from '@/Components/TenantProfileinfo'
import React from 'react'
import BlankNavbar from '@/Components/BlankNavbar';
import { Poppins, Arimo } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const profile = () => {
  return (
    <div>
        <BlankNavbar />
        <TenantProfileinfo/>
      
    </div>
  )
}

export default profile
