import BreadCrumbs from '@/Components/Dashboard/BreadCrumbs'
import ButtonSection from '@/Components/Dashboard/ButtonSection'
import DashboardNavbar from '@/Components/Dashboard/DashboardNavbar'
import LandloardDash from '@/Components/Dashboard/LandloardDash'
import MyProperties from '@/Components/Dashboard/MyProperties'
import ProfileSection from '@/Components/Dashboard/ProfileSection'
import Applications from '@/Components/Homepage/Properties/Applications'
import TenantCard from '@/Components/Homepage/Properties/Tenant'
import Footer from '@/Components/Layout/Footer'
import React from 'react'

const dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <BreadCrumbs />
      <ProfileSection />
      <ButtonSection />
      <LandloardDash />
      <div className=" min-h-screen p-8">
        {/* Main Container */}
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center">

          {/* Left Side: Properties (Takes up more space) */}
          <div className="flex-1 w-full lg:w-auto">
            <MyProperties />
          </div>

          {/* Right Side: Tenants (Fixed sidebar width) */}
          <div className="w-full lg:w-[330px] flex-shrink-0">
            <TenantCard />
          </div>

        </div>
      </div>
       <Footer/>
    



    </div>
   
  )
}

export default dashboard
