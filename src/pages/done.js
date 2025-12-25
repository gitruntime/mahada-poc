import BlankNavbar from '@/Components/BlankNavbar'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})
const property = {
    title: "Modern 2BHK in Andheri West",
    location: "Andheri West, Near DN Nagar Metro",
    bhk: "2 BHK",
    floor: "1200 sq.ft",
    amenities: ["Wi-Fi", "Parking", "Gym", "Security", "+2 more"],
    price: "35,000",
    deposit: "100,000",
};

const Done = () => {
    const [uploadedImage, setUploadedImage] = useState(null)

    useEffect(() => {
        const storedImages =
            JSON.parse(localStorage.getItem('uploadedImages')) || []

        if (storedImages.length > 0) {
            setUploadedImage(storedImages[0].preview || storedImages[0])
        }
    }, [])

    return (
        <div className={poppins.className}>
            <BlankNavbar />

            {/* Go Back */}
            <div className="px-4 sm:px-8 lg:px-20 mt-6">
                <Link
                    href="/dashboard"
                    className="text-[16px] font-medium text-black"
                >
                    Go Back
                </Link>
            </div>

            {/* MAIN CARD WRAPPER */}
            <div className="flex justify-center mt-10 px-4">
                <div
                    className="
            w-full max-w-[806px] h-[417px]
            flex gap-[40px]
            rounded-[14px]
            
          "
                >
                    {/* LEFT CARD */}
                    <div
                        className="
              w-[440px] h-[440px]
              rounded-[12px]
              border border-[#0000001A]
               shadow-[0px_4px_20px_-2px_rgba(229,231,235,0.8)]

              bg-white
              overflow-hidden
            "
                    >
                        {/* IMAGE */}
                        <div className="relative w-full h-[192px]">
                            <Image
                                src={uploadedImage || '/property.jpg'}
                                alt="Property"
                                fill
                                className="object-cover"
                                unoptimized
                            />

                            {/* BADGES */}
                            <div className="absolute top-3  ml-2 w-[80px] h-[22px] flex items-center bg-[#028541] rounded-full px-1 h-6">
                                <img src="/verified_logo.png" alt="" className="w-3 h-3 ml-1" />
                                <span className="ml-1 text-white text-[12px] font-bold">Verified</span>
                            </div>

                            <div className={`absolute w-[55px] h-[22px] top-3 right-3 bg-[#1E3A8A] text-white text-[12px] font-bold px-3 py-1 rounded-full`}>
                                2BHK
                            </div>
                            <div className={`
                        absolute bottom-0 left-0 w-full
                        flex items-center gap-1 text-white text-[14px] font-medium
                        px-3 py-1
                        rounded-t-lg
                        bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]

                    `}>
                                <img src="/start_rating.png" alt="" className="w-4 h-4" />
                                <h1 className="text-[14px] text-white">2</h1>
                                <span className="text-white/80">(23 review)</span>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="flex flex-col justify-between flex-1 p-5">
                            <div>
                                {/* Title */}
                                <h3 className="text-[18px] font-bold text-gray-900 leading-[28px] tracking-[-0.45px]">
                                    {property.title}
                                </h3>

                                {/* Location */}
                                <p className="flex items-center gap-2 text-gray-500 text-[14px] mt-1">
                                    <img src="/location.png" alt="" className="w-4 h-4" />
                                    {property.location}
                                </p>

                                {/* Info */}
                                <div className="flex items-center gap-6 text-[#6B7280] text-[14px] mt-3">
                                    <div className="flex items-center gap-2">
                                        <img src="/bed.png" alt="" className="w-4 h-4" />
                                        {property.bhk}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="/scale.png" alt="" className="w-4 h-4" />
                                        {property.floor}
                                    </div>
                                </div>

                                {/* Amenities */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {property.amenities.map((item, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 border rounded-full font-bold text-[12px] text-gray-700"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between mt-3">
                                <div>
                                    <p className="text-[#F97316] text-[20px] font-bold">
                                        ₹{property.price}
                                        <span className="text-gray-500 text-[14px] font-medium"> /month</span>
                                    </p>
                                    <p className="text-gray-500 text-[13px]">
                                        Deposit: ₹{property.deposit}
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* RIGHT SUCCESS CARD */}
                    <div
                        className="
              w-[326px] h-full
              rounded-[12px]
              border border-[#0000001A]
              bg-white
              flex flex-col items-center justify-center
              gap-[14px]
              text-center
              px-6
            "
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full border border-green-600">
                            <span className="text-green-600 text-3xl">✓</span>
                        </div>

                        <h3 className="text-lg font-semibold">
                            New Property added
                        </h3>

                        <p className="text-sm text-gray-500">
                            Your application is under review. You’ll receive an update soon
                        </p>

                        <button
                            className="
                mt-4
                bg-orange-500
                text-white
                px-6 py-2
                rounded-lg
                hover:bg-orange-600
                transition
              "
                        >
                            Go to Homepage
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Done
