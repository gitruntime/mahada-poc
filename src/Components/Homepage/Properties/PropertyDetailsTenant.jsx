import React from 'react'
import ContentTenantLeft from './ContentTenantLeft'
import ContentTenantRIght from './ContentTenantRIght'
import { Poppins } from "next/font/google";
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const PropertyDetailsTenant = () => {
  return (
    <div className="max-w-[1368px] mb-[30px] mt-[30px] mx-auto flex gap-[40px] relative h-auto">
      
      {/* Left Side */}
      <div className="w-full h-auto">
        <ContentTenantLeft />
      </div>

      {/* Right Side */}
      <div className="w-full h-auto">
        <ContentTenantRIght />
      </div>

     
    </div>
  )
}

export default PropertyDetailsTenant
