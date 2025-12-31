import React from 'react'
import Hud from './Hud'
import Image from 'next/image';
import { Poppins } from "next/font/google";
import StampDutyOverview from './StampDutyOverview';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
const StampDuty = () => {
  return (
    <div>
        
        <Hud/>
        <StampDutyOverview/>
      
    </div>
      

  )
}

export default StampDuty
