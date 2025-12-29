import React, { useState } from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import Link from 'next/link';
import BlankNavbar from '../BlankNavbar';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const inputBaseClass = `
    w-full sm:max-w-[415.33px]
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
        <div className="w-full h-auto mb-[30px] bg-[#F9FAFB]">

            {/* NAVBAR */}
            <BlankNavbar />

            {/* GO BACK */}
            <div className={`px-[20px] sm:px-[40px] lg:px-[80px] mt-6 ${poppins.className}`}>
                <Link href="/dashboard" className={`text-[16px] font-medium ${poppins.className} text-black cursor-pointer`}>
                    Go Back
                </Link>
            </div>

            {/* MAIN CARD */}
            <section className="
                    w-full max-w-[900px]
                    mx-auto mt-6
                    rounded-[14px]
                    border border-[#0000001A]
                    bg-white
                    px-[20px] sm:px-[40px]
                    py-[30px]
                ">

                {/* HEADER */}
                <div className="w-full mb-6">
                    <span className={`text-[#0F1729] ${poppins.className} font-bold text-[24px] sm:text-[30px]`}>
                        Add Property
                    </span>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className={`w-full sm:w-[73px] h-[48px] border-2 border-[#FF6A00] rounded-[12px]
                            text-[#FF6A00] text-[14px] font-medium ${poppins.className}`}>
                        Rental
                    </button>

                    <button className={`w-full sm:w-[59px] h-[48px] border-2 border-[#9E9E9E] rounded-[12px]
                            text-[#9E9E9E] text-[14px] font-medium ${poppins.className}`}>
                        Sale
                    </button>
                </div>

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
                            className={inputBaseClass + (errors.title ? " border-red-500" : "")}
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
                                className={`${inputBaseClass} appearance-none pr-10` + (errors.propertyType ? " border-red-500" : "")}
                                value={formData.propertyType}
                                onChange={handleChange}
                            >
                                <option value="">Select property type</option>
                                <option value="apartment">Apartment</option>
                                <option value="villa">Villa</option>
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

                {/* Rent + Deposit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">

                    <div>
                        <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            Expected Monthly Rent *
                        </label>
                        <input
                            type="number"
                            name="rent"
                            placeholder="Type here"
                            className={inputBaseClass + (errors.rent ? " border-red-500" : "")}
                            value={formData.rent}
                            onChange={handleChange}
                        />
                        {errors.rent && <span className="text-red-500 text-xs">{errors.rent}</span>}
                    </div>

                    <div>
                        <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            Security Deposit *
                        </label>

                        <input
                            type="number"
                            name="deposit"
                            placeholder="Type here"
                            className={inputBaseClass + (errors.deposit ? " border-red-500" : "")}
                            value={formData.deposit}
                            onChange={handleChange}
                        />
                        {errors.deposit && <span className="text-red-500 text-xs">{errors.deposit}</span>}

                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                        Additional Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Type description here"
                        className={`${inputBaseClass} w-full sm:max-w-none pt-2`}
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>



                {/* Address */}
                <div className="mb-6">
                    <label className={`block text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                        Address *
                    </label>
                    <input
                        name="address"
                        placeholder='Enter your complete address'
                        className={`w-full rounded-xl border flex justify-center place-items-start border-[#D5DEEF] bg-[#F8FBFF] px-2 h-[64px]` + (errors.address ? " border-red-500" : "")}
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
                </div>

                {/* City / State / PIN */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                    {/* City */}
                    <div className="flex flex-col">
                        <label className={`text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            City *
                        </label>
                        <input
                            name="city"
                            placeholder="City"
                            className={inputBaseClass + (errors.city ? " border-red-500" : "")}
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {errors.city && <span className="text-red-500 text-xs">{errors.city}</span>}
                    </div>

                    {/* State */}
                    <div className="flex flex-col">
                        <label className={`text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            State *
                        </label>

                        <div className="relative">
                            <select
                                name="state"
                                className={`${inputBaseClass} appearance-none pr-10` + (errors.state ? " border-red-500" : "")}
                                value={formData.state}
                                onChange={handleChange}
                            >
                                <option value="">Select State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="West Bengal">West Bengal</option>
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
                        {errors.state && <span className="text-red-500 text-xs">{errors.state}</span>}
                    </div>

                    {/* PIN */}
                    <div className="flex flex-col">
                        <label className={`text-[14px] text-[#0A0A0A] ${poppins.className} font-medium mb-1`}>
                            PIN Code *
                        </label>
                        <input
                            type="number"
                            name="pin"
                            placeholder="6-digit PIN"
                            className={inputBaseClass + (errors.pin ? " border-red-500" : "")}
                            value={formData.pin}
                            onChange={handleChange}
                        />

                        {errors.pin && <span className="text-red-500 text-xs">{errors.pin}</span>}
                    </div>

                </div>

                {/* NEXT BUTTON */}
                <div className="flex justify-end w-full">
                    <button
                        onClick={handleNext}
                        className={`bg-orange-500 text-white ${poppins.className} 
            flex justify-center items-center gap-2 text-[14px] 
            px-6 py-2.5 rounded-lg 
            cursor-pointer 
            transition-all duration-300 ease-in-out
            hover:bg-orange-600 hover:shadow-md hover:scale-[1.02]
            active:scale-[0.98]`}
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
    )
}

export default AddNewPropertyPage;
