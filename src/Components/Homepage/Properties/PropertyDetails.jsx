import React from 'react'
import PropertyLeft from './PropertyLeft'
import PropertyRight from './PropertyRight'
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const PropertyDetails = () => {
  return (
    <div>
       <div className='max-w-[1368px] mb-[30px] h-auto mx-auto flex  gap-[40px]'>
        <div className='w-[901px] h-[auto]'>
           <PropertyLeft/>

        </div>
        <div className='w-[435px] h-[auto]'>
            <PropertyRight/>

        </div>

       </div>
      
    </div>
  )
}

export default PropertyDetails
