import React, { useState } from "react";
import { Poppins, Arimo } from "next/font/google";

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
  h-[44px]
  px-4
  rounded-[14px]
  border border-[#D4D7E3]
  bg-[#F7FBFF]
  text-[14px]
  text-[#0A0A0A]
  placeholder:text-[#8A8FA3]
  focus:outline-none
  focus:border-orange-400
`;

const AddNewPropertyPage2 = () => {
  const [formData, setFormData] = useState({
    title: "",
    propertyType: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    ownershipDate: "",
    latitude: "",
    longitude: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.propertyType) newErrors.propertyType = "Property type is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.pin.trim()) newErrors.pin = "PIN is required";
    else if (!/^\d{6}$/.test(formData.pin)) newErrors.pin = "Enter a valid 6-digit PIN";

    // Ownership date validation
    if (!formData.ownershipDate) {
      newErrors.ownershipDate = "Ownership start date is required";
    } else {
      const selectedDate = new Date(formData.ownershipDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate > today) newErrors.ownershipDate = "Date cannot be in the future";
    }

    // Latitude / Longitude validation
    if (!formData.latitude.trim()) newErrors.latitude = "Latitude is required";
    else if (isNaN(formData.latitude) || Number(formData.latitude) < -90 || Number(formData.latitude) > 90)
      newErrors.latitude = "Latitude must be between -90 and 90";

    if (!formData.longitude.trim()) newErrors.longitude = "Longitude is required";
    else if (isNaN(formData.longitude) || Number(formData.longitude) < -180 || Number(formData.longitude) > 180)
      newErrors.longitude = "Longitude must be between -180 and 180";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      window.location.href = "/newpropform2"; // you can change this route
    }
  };

  return (
    <div className="w-full flex justify-center py-10">
      <section className="w-full max-w-[1240px] bg-white border border-[#E6E8F0] rounded-[20px] px-6 sm:px-10 py-8">

        {/* HEADER */}
        <h2 className={`text-[24px] font-semibold text-[#0A0A0A] mb-6 ${poppins.className}`}>
          Add Property
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-8">

          {/* TITLE */}
          <div>
            <label className={`block text-[14px] font-medium mb-1 ${poppins.className}`}>Title *</label>
            <input
              type="text"
              name="title"
              placeholder="Type property title here"
              className={`${inputBaseClass} ${errors.title ? "border-red-500" : ""}`}
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* PROPERTY TYPE */}
          <div>
            <label className={`block text-[14px] font-medium mb-1 ${poppins.className}`}>Property Type *</label>
            <div className="relative">
              <select
                name="propertyType"
                className={`${inputBaseClass} appearance-none pr-10 ${errors.propertyType ? "border-red-500" : ""}`}
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
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>}
          </div>
        </div>

        {/* OWNERSHIP DATE */}
        <div className="flex mb-4 flex-col w-full">
          <label htmlFor="dob" className={`text-gray-900 text-sm mb-1 ${poppins.className}`}>
            Ownership start date *
          </label>
          <input
            id="ownershipDate"
            name="ownershipDate"
            type="date"
            className={`${inputBaseClass} ${errors.ownershipDate ? "border-red-500" : ""}`}
            value={formData.ownershipDate}
            onChange={handleChange}
          />
          {errors.ownershipDate && <span className="text-red-500 text-xs">{errors.ownershipDate}</span>}
        </div>

        {/* ADDRESS */}
        <div className="mb-8">
          <label className={`block text-[14px] font-medium mb-1 ${poppins.className}`}>Address *</label>
          <textarea
            rows={4}
            name="address"
            placeholder="Enter your complete address"
            className={`${inputBaseClass} resize-none h-[100px] ${errors.address ? "border-red-500" : ""}`}
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>

        {/* CITY / STATE / PIN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className={`block text-[14px] font-medium mb-1 ${poppins.className}`}>City *</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              className={`${inputBaseClass} ${errors.city ? "border-red-500" : ""}`}
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          <div>
            <label className={`block text-[14px] font-medium mb-1 ${poppins.className}`}>State *</label>
            <select
              name="state"
              className={`${inputBaseClass} ${errors.state ? "border-red-500" : ""}`}
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>

          <div>
            <label className={`block text-[14px] font-medium mb-1 ${poppins.className}`}>PIN Code *</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="6-digit PIN"
              className={`${inputBaseClass} ${errors.pin ? "border-red-500" : ""}`}
              value={formData.pin}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  pin: e.target.value.replace(/\D/g, "").slice(0, 6),
                })
              }
            />
            {errors.pin && <p className="text-red-500 text-xs mt-1">{errors.pin}</p>}
          </div>
        </div>

        {/* LATITUDE / LONGITUDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className={`block text-[14px] font-medium mb-1 ${poppins.className}`}>Latitude *</label>
            <input
              type="text"
              name="latitude"
              placeholder="19.120112"
              className={`${inputBaseClass} ${errors.latitude ? "border-red-500" : ""}`}
              value={formData.latitude}
              onChange={handleChange}
            />
            {errors.latitude && <p className="text-red-500 text-xs mt-1">{errors.latitude}</p>}
          </div>

          <div>
            <label className={`block text-[14px] font-medium mb-1 ${poppins.className}`}>Longitude *</label>
            <input
              type="text"
              name="longitude"
              placeholder="72.848229"
              className={`${inputBaseClass} ${errors.longitude ? "border-red-500" : ""}`}
              value={formData.longitude}
              onChange={handleChange}
            />
            {errors.longitude && <p className="text-red-500 text-xs mt-1">{errors.longitude}</p>}
          </div>
        </div>

        {/* MAP PREVIEW */}
        {formData.latitude && formData.longitude && (
          <div className="w-full h-[300px] mb-6">
            <iframe
              width="100%"
              height="100%"
              className="rounded-lg border"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${formData.latitude},${formData.longitude}&z=15&output=embed`}
            ></iframe>
          </div>
        )}

        {/* NEXT BUTTON */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className={`flex items-center gap-2 bg-orange-500 hover:bg-orange-600
            text-white text-[14px] font-medium px-6 py-3 rounded-[12px]
            transition-all ${poppins.className}`}
          >
            Next
            <img src="/righticon.png" className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AddNewPropertyPage2;
