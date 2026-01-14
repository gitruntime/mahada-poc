import BlankNavbar from '@/Components/BlankNavbar'
import React from 'react'
import { Poppins } from "next/font/google";
import Link from 'next/link';
import AllPropertiesGuest from '@/Components/Homepage/Properties/AllPropertiesGuest';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const allpropertyguest = () => {
  return (
    <div>
        {/* <BlankNavbar/> */}
        
        <AllPropertiesGuest/>

      
    </div>
  )
}

export default allpropertyguest
