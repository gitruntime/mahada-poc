import BlankNavbar from '@/Components/BlankNavbar'
import DashboardNavbar from '@/Components/Dashboard/DashboardNavbar'
import React from 'react'

import { Poppins } from "next/font/google";
import Link from "next/link";
import Footer from '@/Components/Layout/Footer';
import PropertyDetails from '@/Components/Homepage/Properties/PropertyDetails';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const propertydetails = () => {
  return (
    <div>
       <DashboardNavbar/>
       <div className="w-full max-w-[1440px] h-[64px] flex items-center px-[100px] py-[20px] border-b border-gray-300">
            <nav className={`flex items-center gap-2 text-[16px]  ${poppins.className}`}>
                <span className="text-gray-400 font-medium"> <Link href="/">Home</Link></span>
                <span className="text-black font-semibold">{`>`}  Rental property</span>
            </nav>
        </div>
        <PropertyDetails/>

        <Footer/>
       
      
    </div>
  )
}

export default propertydetails
