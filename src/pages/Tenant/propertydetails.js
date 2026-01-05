import BlankNavbar from '@/Components/BlankNavbar'
import DashboardNavbar from '@/Components/Dashboard/DashboardNavbar'
import React from 'react'
import { Poppins } from "next/font/google";
import { useRouter } from "next/router"; // <-- import useRouter
import Footer from '@/Components/Layout/Footer';
import PropertyDetails from '@/Components/Homepage/Properties/PropertyDetails';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const PropertyDetailsPage = () => {
  const router = useRouter(); // <-- initialize router

  const handleGoBack = () => {
    router.back(); // <-- goes back to the previous page
  };

  return (
    <div>
      <DashboardNavbar />
      <div className="w-full max-w-[1440px] h-[64px] flex items-center px-[100px] py-[20px] border-b border-gray-300">
        <nav className={`flex items-center gap-2 text-[16px]  ${poppins.className}`}>
          {/* Replace Link with a button to go back */}
          <button onClick={handleGoBack} className="text-gray-400 font-medium hover:underline">
            Home
          </button>
          <span className="text-black font-semibold">{`>`} Rental property</span>
        </nav>
      </div>
      <PropertyDetails />
      <Footer />
    </div>
  )
}

export default PropertyDetailsPage;
