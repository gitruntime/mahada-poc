import React from 'react'
import PropertyLeft from './PropertyLeft'
import PropertyRight from './PropertyRight'
import { Poppins } from "next/font/google";
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const PropertyDetails = () => {
  return (
    <div className="max-w-[1368px] mb-[30px] mt-[30px] mx-auto flex gap-[40px] relative h-auto">
      
      {/* Left Side */}
      <div className="w-full h-auto">
        <PropertyLeft />
      </div>

      {/* Right Side */}
      <div className="w-full h-auto">
        <PropertyRight />
      </div>

     
    </div>
  )
}

export default PropertyDetails
