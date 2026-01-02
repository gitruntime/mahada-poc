import { useState, useEffect } from "react"
import BreadCrumbs from "@/Components/Dashboard/BreadCrumbs"
import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar"
import TenantDash from "@/Components/Dashboard/TenantDash"

import Profile2 from "@/Components/RentalAgreement/Profile2"
import Footer from "@/Components/Layout/Footer"
import MyTProperties from "@/Components/Dashboard/MyTProperties"

const Dashboard = () => {
  const [showProfile2, setShowProfile2] = useState(false)

  useEffect(() => {
    const logindone2 = localStorage.getItem("logindone2")
    if (logindone2 === "true") {
      setShowProfile2(true)
      localStorage.removeItem("logindone2") // optional
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNavbar />
      <BreadCrumbs />

      {/* Profile */}
      <Profile2 /> 

      {/* Tenant Dashboard */}
      <TenantDash />

      <div className="flex-1 p-8">
        <div className="max-w-[1240px] mx-auto">
          <MyTProperties />
        </div>
      </div>

     <Footer/>
    </div>
  )
}

export default Dashboard
