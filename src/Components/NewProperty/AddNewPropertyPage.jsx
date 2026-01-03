import React, { useState } from 'react'
import Image from 'next/image'
import { Poppins, Arimo } from "next/font/google";
import Link from 'next/link';
import BlankNavbar from '../BlankNavbar';
const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "700"],
});
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const inputBaseClass = `
    w-full 
    h-[36px]
    px-[12px] py-[4px]
    rounded-[12px]
    border border-[#D4D7E3]
    bg-[#F7FBFF]
    text-[14px]
    text-[#717182]
    focus:outline-none
`;

const AddNewPropertyPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        propertyType: '',
        rent: '',
        deposit: '',
        description: '',
        address: '',
        city: '',
        state: '',
        pin: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validation
    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.propertyType) newErrors.propertyType = "Property type is required";
        if (!formData.rent.trim()) newErrors.rent = "Expected Monthly Rent is required";
        if (!formData.deposit.trim()) newErrors.deposit = "Security Deposit is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.state || formData.state === "Select State") newErrors.state = "State is required";
        if (!formData.pin.trim()) newErrors.pin = "PIN is required";
        else if (!/^\d{6}$/.test(formData.pin)) newErrors.pin = "Enter a valid 6-digit PIN";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Next
    const handleNext = (e) => {
        e.preventDefault();
        if (validateForm()) {
            window.location.href = "/newpropform2";
        }
    };

    return (
        <div className="w-full h-auto mb-[30px]">
            {/* MAIN CARD */}
            <section
                className="
        w-full 
        mx-auto
        rounded-[14px]
        px-[10px] sm:px-[40px]
        py-[10px]
      "
            >
                {/* FORM */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {/* Title */}
                    <div>
                        <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Type property title here"
                            className={`${inputBaseClass}${errors.title ? " border-red-500" : ""}`}
                            value={formData.title}
                            onChange={handleChange}
                        />
                        {errors.title && <span className="text-red-500 text-xs">{errors.title}</span>}
                    </div>

                    {/* Property Type */}
                    <div className="flex flex-col">
                        <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            Property Type *
                        </label>

                        <div className="relative">
                            <select
                                name="propertyType"
                                className={`${inputBaseClass} appearance-none pr-10${errors.propertyType ? " border-red-500" : ""}`}
                                value={formData.propertyType}
                                onChange={handleChange}
                            >
                                <option value="">Select property type</option>
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa</option>
                                <option value="flat">Flat</option>
                                <option value="office">Office</option>
                            </select>

                            <svg
                                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0A0A0A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                        {errors.propertyType && <span className="text-red-500 text-xs">{errors.propertyType}</span>}
                    </div>
                </div>

                {/* Address */}
                <div className="mb-2">
                    <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                        Address *
                    </label>
                    <textarea
                        name="address"
                        placeholder="Enter your complete address"
                        rows={3}
                        className={`w-full rounded-xl border border-[#D5DEEF] bg-[#F8FBFF] px-3 py-2${errors.address ? " border-red-500" : ""}`}
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
                </div>

                {/* City / State / PIN */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {/* City */}
                    <div>
                        <label className={`text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            City *
                        </label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className={`${inputBaseClass}${errors.city ? " border-red-500" : ""}`}
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {errors.city && <span className="text-red-500 text-xs">{errors.city}</span>}
                    </div>

                    {/* State */}
                    <div>
                        <label className={`text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            State *
                        </label>
                        <select
                            name="state"
                            className={`${inputBaseClass}${errors.state ? " border-red-500" : ""}`}
                            value={formData.state}
                            onChange={handleChange}
                        >
                            <option value="">Select State</option>
                            <option value="Maharashtra">Maharashtra</option>
                        </select>
                        {errors.state && <span className="text-red-500 text-xs">{errors.state}</span>}
                    </div>

                    {/* PIN */}
                    <div>
                        <label className={`text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            PIN Code *
                        </label>
                        <input
                            type="text"
                            placeholder="6-digit PIN"
                            inputMode="numeric"
                            maxLength={6}
                            className={`w-full p-2 rounded-lg bg-gray-50 ${poppins.className} ${errors.pin ? "border border-red-500" : "border border-gray-300"}`}
                            value={formData.pin}
                            onChange={(e) =>
                                setFormData({ ...formData, pin: e.target.value.replace(/\D/g, "").slice(0, 6) })
                            }
                        />
                        {errors.pin && <span className="text-red-500 text-xs">{errors.pin}</span>}
                    </div>
                </div>

                {/* NEXT BUTTON */}
                <div className="flex justify-end w-full">
                    <button
                        onClick={handleNext}
                        className={`group bg-orange-500 text-white ${poppins.className}
            flex items-center gap-2 text-[14px]
            px-6 py-2.5 rounded-lg
            transition-all duration-300
            hover:bg-orange-600 hover:shadow-md`}
                    >
                        Next
                        <img
                            src="/righticon.png"
                            className="w-[16px] h-[16px] transition-transform duration-300 group-hover:translate-x-1"
                            alt=""
                        />
                    </button>
                </div>
            </section>
        </div>
    );

}

export default AddNewPropertyPage;
