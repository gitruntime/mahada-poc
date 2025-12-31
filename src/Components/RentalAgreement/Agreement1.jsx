import React from 'react'
import Hud from './Hud'
import Image from 'next/image';
import { Poppins } from "next/font/google";
import AgreementOverview from './AgreementOverview';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
const Agreement1 = () => {
  return (
    <div>
        <Hud/>
        <AgreementOverview/>
      
    </div>
  )
}

export default Agreement1
