import { useState } from 'react'
import BreadCrumbs from '@/Components/Dashboard/BreadCrumbs'
import ButtonSection from '@/Components/Dashboard/ButtonSection'
import DashboardNavbar from '@/Components/Dashboard/DashboardNavbar'
import LandlordDash from '@/Components/Dashboard/LandloardDash'
import TenantDash from '@/Components/Dashboard/TenantDash'
import ProfileSection from '@/Components/Dashboard/ProfileSection'
import Footer from '@/Components/Layout/Footer'
import MyProperties from '@/Components/Dashboard/MyProperties'
import MyTProperties from '@/Components/Dashboard/MyTProperties'
import Tenant from '@/Components/Homepage/Properties/Tenant'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('landlord') // default tab

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNavbar />
      <BreadCrumbs />
      <ProfileSection />

      {/* Tabs */}
      <ButtonSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Conditional Dashboard Content */}
      {activeTab === 'landlord' && <LandlordDash />}
      {activeTab === 'tenant' && <TenantDash />}

      {/* Properties & Tenants Section */}
      <div className="flex-1 p-8">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center">

          {activeTab === 'landlord' && (
            <>
              {/* Left: Properties */}
              <div className="flex-1 w-full lg:w-auto">
                <MyProperties />
              </div>

              {/* Right: Tenants */}
              <div className="w-full lg:w-[330px] flex-shrink-0 overflow-y-auto max-h-[80vh]">
                <Tenant />
              </div>
            </>
          )}

          {activeTab === 'tenant' && (
            <div className="flex-1 w-full lg:w-auto">
              <MyTProperties />
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard
