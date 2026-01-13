import { useState, useEffect } from "react"
import Link from "next/link"
import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar"
import { Poppins } from "next/font/google"
import Footer from "@/Components/Layout/Footer"
import Profilestrack2 from "@/Components/RentalAgreement/Profilestrack2"
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const trackapppage2 = () => {
    const [activeTab, setActiveTab] = useState("landlord")
    const [showProfile2, setShowProfile2] = useState(false)

    useEffect(() => {
        const logindone2 = localStorage.getItem("logindone2")
        if (logindone2 === "true") {
            setShowProfile2(true)
            localStorage.removeItem("logindone2") // optional, if one-time
        }
    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            <DashboardNavbar />
            <div className="ml-[30px]  bg-gray-50 mt-[30px] "   >
                <Link
                    href="/"
                    className={`text-[16px] font-medium leading-[100%] text-black cursor-pointer ${poppins.className}`}
                    style={{ fontStyle: 'medium', letterSpacing: '0%' }}
                >
                    Go Back
                </Link>
            </div>


            <Profilestrack2 />
            <div className="flex mb-3 flex-col items-center w-full p-6 bg-gray-50">
                {/* Title */}
                <h1 className={`text-[#0C1421] text-[18px] sm:text-[24px] font-normal mb-6 ${poppins.className}`}>
                    Tenant Application status
                </h1>

                {/* Progress Bar */}
                <div className="relative w-full max-w-[850px] h-2 bg-gray-300 rounded-full mb-2">
                    <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full" style={{ width: "50%" }}></div>
                </div>

               {/* Steps */}
<div className="flex justify-between w-full max-w-[850px] mb-6">
    {[
        { icon: "/personalinfo_icon.png", label: "Submitted", active: true },
        { icon: "/reddocu.png", label: "Not Verified", active: false },
        { icon: "/personalinfo_icon.png", label: "Approved", active: false },
    ].map((step, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
            <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.active
                        ? "text-green-600"
                        : step.label === "Not Verified"
                        ? "text-red-500"
                        : "text-gray-400"
                }`}
            >
                <img src={step.icon} alt={step.label} className="w-5 h-5" />
            </div>
            <span
                className={`text-[12px] mt-1 ${poppins.className} ${
                    step.active
                        ? "text-green-600"
                        : step.label === "Not Verified"
                        ? "text-red-500"
                        : "text-gray-400"
                }`}
            >
                {step.label}
            </span>
        </div>
    ))}
</div>

                {/* Info Text */}
                <div className="w-full max-w-[1360px] bg-[#FF00000F] border border-[#FF000099] rounded-md p-4 text-center mb-6">
                    <p className={`text-[14px] ${poppins.className} text-[#D8232A]`}>
                      Your Aadhar card image is unclear, please re-upload the image to register again.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button
                        className={`px-2 py-2 border max-w-[137px] border-2 border-orange-500 text-orange-500 rounded-[12px] text-[14px] font-medium ${poppins.className} 
    hover:bg-orange-100 hover:text-orange-500 transition-colors duration-300`}
                    >
                        Raise grievance
                    </button>
                    <Link
                        href="#"
                        className={`px-2 py-3 text-[16px] bg-orange-500 text-white rounded-[12px] font-medium ${poppins.className} 
    hover:bg-orange-600 transition-colors duration-300`}
                    >
                       Update Application
                    </Link>
                </div>

            </div>







            <Footer />
        </div>
    )
}

export default trackapppage2
