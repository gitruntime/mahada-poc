import BlankNavbar from '@/Components/BlankNavbar'
import AllProperties from '@/Components/Homepage/Properties/AllProperties'
import React from 'react'
import { Poppins } from "next/font/google";
import Link from 'next/link';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const allpropertyTenant = () => {
  return (
    <div>
        <BlankNavbar/>
        
        <AllProperties/>

      
    </div>
  )
}

export default allpropertyTenant
