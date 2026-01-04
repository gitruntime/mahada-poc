import React, { useState } from "react";
import { Poppins, Arimo } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
import Link from "next/link";
const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

import { useRouter } from "next/navigation";
const inputClass =
    "w-full h-[40px] px-3 rounded-lg border border-gray-300 bg-[#F9FBFF] text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400";

const RightForm = () => {
    const [form, setForm] = useState({
        rent: "",
        deposit: "",
        availableFrom: "",
        tenure: "",
        tenantType: "",
        description: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.rent) newErrors.rent = "Monthly rent is required";
        if (!form.deposit) newErrors.deposit = "Security deposit is required";
        if (!form.availableFrom) newErrors.availableFrom = "Select availability date";
        if (!form.tenure) newErrors.tenure = "Minimum tenure is required";
        if (!form.tenantType) newErrors.tenantType = "Tenant type is required";
        return newErrors;
    };
    const router = useRouter();
    const handleSubmit = () => {
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("Form Submitted", form);

        // Navigate to home page
        router.push("/reviewrent");
    };


    return (
        <div className="w-full  bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col gap-4">
            <h2 className={`text-[30px] font-bold text-[#0C1421] ${poppins.className}`}>
                Rent Property
            </h2>
            <p className={`text-[#717182] ${arimo.className} text-[14px] leading-5 `}>
                List this property for residential rental through the MHADA Estate portal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {/* Expected Rent */}
                <div>
                    <label className={`text-[14px] ${poppins.className} font-normal mb-1 block`}>
                        Expected Monthly Rent
                    </label>
                    <input
                        name="rent"
                        type="tel"
                        placeholder="Type here"
                        value={form.rent}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.rent && "border-red-500"}`}
                    />
                    {errors.rent && <p className="text-xs text-red-500 mt-1">{errors.rent}</p>}
                </div>

                {/* Security Deposit */}
                <div>
                    <label className={`text-[14px] ${poppins.className} font-normal mb-1 block`}>
                        Security Deposit
                    </label>
                    <input
                        name="deposit"
                        type="tel"
                        placeholder="Type here"
                        value={form.deposit}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.deposit && "border-red-500"}`}
                    />
                    {errors.deposit && (
                        <p className="text-xs text-red-500 mt-1">{errors.deposit}</p>
                    )}
                </div>

                {/* Available From */}
                <div>
                    <label className={`text-[14px] ${poppins.className} font-normal mb-1 block`}>
                        Available From
                    </label>
                    <input
                        name="availableFrom"
                        type="date"
                        value={form.availableFrom}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.availableFrom && "border-red-500"}`}
                    />
                    {errors.availableFrom && (
                        <p className="text-xs text-red-500 mt-1">{errors.availableFrom}</p>
                    )}
                </div>

                {/* Minimum Tenure */}
                <div>
                    <label className={`text-[14px] ${poppins.className} font-normal mb-1 block`}>
                        Minimum Tenure
                    </label>
                    <input
                        name="tenure"
                        type="text"
                        placeholder="Type here"
                        value={form.tenure}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.tenure && "border-red-500"}`}
                    />
                    {errors.tenure && (
                        <p className="text-xs text-red-500 mt-1">{errors.tenure}</p>
                    )}
                </div>

                {/* Preferred Tenant */}
                <div className="sm:col-span-2">
                    <label className={`text-[14px] ${poppins.className} font-normal mb-1 block`}>
                        Preferred Tenant Type
                    </label>
                    <input
                        name="tenantType"
                        type="text"
                        placeholder="Type here"
                        value={form.tenantType}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.tenantType && "border-red-500"}`}
                    />
                    {errors.tenantType && (
                        <p className="text-xs text-red-500 mt-1">{errors.tenantType}</p>
                    )}
                </div>

                {/* Description */}
                <div className="sm:col-span-2">
                    <label className={`text-[14px] ${poppins.className} font-normal mb-1 block`}>
                        Additional Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="Type here"
                        value={form.description}
                        onChange={handleChange}
                        rows={3}
                        className={`${inputClass} h-auto resize-none`}
                    />
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center mt-6">
                <Link href="/propertydetails" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-100">
                    ← Cancel
                </Link>
                <button
                    onClick={handleSubmit}
                    className={`flex items-center ${poppins.className} gap-2 px-6 py-2 text-[14px] rounded-lg bg-[#F97415] text-white text-sm hover:bg-orange-600`}
                >
                    Next <Image src="/righticon.png" width={16} height={16} />
                </button>
            </div>
        </div>
    );
};

export default RightForm;
