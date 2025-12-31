import { useState, useEffect } from "react"
import BreadCrumbs from "@/Components/Dashboard/BreadCrumbs"
import ButtonSection from "@/Components/Dashboard/ButtonSection"
import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar"
import LandlordDash from "@/Components/Dashboard/LandloardDash"
import TenantDash from "@/Components/Dashboard/TenantDash"
import ProfileSection from "@/Components/Dashboard/ProfileSection"
import Profile2 from "@/Components/RentalAgreement/Profile2"
import Footer from "@/Components/Layout/Footer"
import MyProperties from "@/Components/Dashboard/MyProperties"
import MyTProperties from "@/Components/Dashboard/MyTProperties"
import Tenant from "@/Components/Homepage/Properties/Tenant"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("landlord")
  const [showProfile2, setShowProfile2] = useState(false)

  useEffect(() => {
    const success = localStorage.getItem("agreementSuccess")

    if (success === "true") {
      setShowProfile2(true)
      localStorage.removeItem("agreementSuccess") // remove if one-time
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNavbar />
      <BreadCrumbs />

      {/* 👇 Profile switch */}
      {showProfile2 ? <Profile2 /> : <ProfileSection />}

      <ButtonSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "landlord" && <LandlordDash />}
      {activeTab === "tenant" && <TenantDash />}

      <div className="flex-1 p-8">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8">

          {activeTab === "landlord" && (
            <>
              <div className="flex-1">
                <MyProperties />
              </div>

              <div className="w-full lg:w-[330px] max-h-[80vh] overflow-y-auto">
                <Tenant />
              </div>
            </>
          )}

          {activeTab === "tenant" && <MyTProperties />}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard
