import React, { useState } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import RightForm from './RentalAgreement/RightForm';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const property = {
    title: "2 BHK Residential Flat",
    location: "Andheri West, Near DN Nagar Metro",
    bhk: "2BHK",
    floor: "5th Floor",
    capabilities: [
        "Tenant discovery",
        "Rental agreement generation",
        "Police verification",
        "Grievance management",
    ],
};

const RentPropertyForm = () => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row mx-auto gap-6 mt-10 px-4 max-w-[1360px]">

            {/* LEFT PROPERTY CARD */}
            <div className="w-full lg:w-[400px] bg-white border border-gray-200 rounded-[12px] overflow-hidden shadow-sm flex-shrink-0">
                {/* Image Section */}
                <div className="relative w-full h-56">
                    <Image
                        src="/room22.png"
                        alt="Property"
                        fill
                        className="object-cover"
                        unoptimized
                    />

                    {/* Verified Badge */}
                    <div className="absolute top-3 left-3 flex items-center bg-green-600 rounded-full px-2 py-1 text-white text-xs font-bold">
                        <img src="/verified_logo.png" alt="verified" className="w-3 h-3 mr-1" />
                        Verified
                    </div>

                    {/* BHK Badge */}
                    <div className="absolute top-3 right-3 bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {property.bhk}
                    </div>
                </div>

                {/* Property Info */}
                <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                        <h3 className={`text-lg font-bold ${poppins.className}`}>{property.title}</h3>
                        <p className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                            <img src="/location.png" alt="location" className="w-4 h-4" />
                            {property.location}
                        </p>

                        <div className="flex gap-4 text-gray-600 text-sm mt-3">
                            <div className="flex items-center gap-1">
                                <img src="/bed.png" alt="bed" className="w-4 h-4" />
                                {property.bhk}
                            </div>
                            <div className="flex items-center gap-1">
                                <img src="/scale.png" alt="floor" className="w-4 h-4" />
                                {property.floor}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-4"></div>

                        {/* Capabilities Section */}
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Capabilities</h4>
                            <ul className="flex flex-col gap-2 text-sm text-gray-600">
                                {property.capabilities.map((cap, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <img src="/check_icon.png" alt="check" className="w-4 h-4" />
                                        {cap}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full lg:flex-1">
                <RightForm />
            </div>

        </div>
    )
}

export default RentPropertyForm;
