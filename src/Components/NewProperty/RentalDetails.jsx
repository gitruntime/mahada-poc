"use client";

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
  w-full h-[36px]
  px-[12px] py-[6px]
  rounded-[12px]
  border border-[#D4D7E3]
  bg-[#F7FBFF]
  text-[14px] text-[#717182]
  focus:outline-none
`;

const SectionTitle = ({ title }) => (
  <h3 className={`text-[14px] text-[#0A0A0A] font-semibold mb-3 ${poppins.className}`}>
    {title}
  </h3>
);

const Field = ({ label, name, value, onChange, placeholder, error }) => (
  <div>
    <label className={`block text-[13px] mb-1 text-[#0A0A0A] ${poppins.className}`}>
      {label}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${inputBaseClass} ${error ? "border-red-500" : ""}`}
    />
    {error && <p className="text-red-500 text-[11px] mt-1">{error}</p>}
  </div>
);

const RentalDetailsForm = () => {
  /* ✅ PRE-ADDED DATA */
  const [formData, setFormData] = useState({
    monthlyRent: "15000",
    securityDeposit: "50000",
    availableFrom: "2026-02-01",
    minimumTenure: "11 Months",
    tenantType: "Family",
    description: "Well maintained 2BHK apartment",

    carpetArea: "650",
    builtUpArea: "800",
    superBuiltUpArea: "900",
    bedrooms: "2",
    bathrooms: "2",
    balconies: "1",
    floorNumber: "3",
    totalFloors: "10",
    unitFacing: "East",
    constructionType: "RCC",
    furnishingStatus: "Semi-Furnished",
    parkingSlots: "1",

    waterSupply: "Municipal",
    powerBackup: "Yes",
    gasConnection: "PNG",
    liftAvailability: "Available",
    fireSafety: "Compliant",
  });

  const [errors, setErrors] = useState({});

  /* ✅ HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ✅ VALIDATION */
  const validate = () => {
    const newErrors = {};

    if (!formData.monthlyRent) newErrors.monthlyRent = "Monthly rent is required";
    if (!formData.securityDeposit) newErrors.securityDeposit = "Deposit is required";
    if (isNaN(formData.monthlyRent)) newErrors.monthlyRent = "Must be a number";
    if (isNaN(formData.securityDeposit)) newErrors.securityDeposit = "Must be a number";
    if (!formData.bedrooms) newErrors.bedrooms = "Bedrooms required";
    if (!formData.bathrooms) newErrors.bathrooms = "Bathrooms required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Validated Data:", formData);
      alert("Form validated successfully ✅");
    }
  };

  return (
    <div className="w-full bg-white rounded-[14px] px-[20px] py-[20px] space-y-8">

      {/* RENTAL DETAILS */}
      <div>
        <SectionTitle title="Rental Details" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Expected Monthly Rent" name="monthlyRent" value={formData.monthlyRent} onChange={handleChange} error={errors.monthlyRent} />
          <Field label="Security Deposit" name="securityDeposit" value={formData.securityDeposit} onChange={handleChange} error={errors.securityDeposit} />
          <Field label="Available From" name="availableFrom" value={formData.availableFrom} onChange={handleChange} />
          <Field label="Minimum Tenure" name="minimumTenure" value={formData.minimumTenure} onChange={handleChange} />
          <Field label="Preferred Tenant Type" name="tenantType" value={formData.tenantType} onChange={handleChange} />
        </div>

        <div className="mt-4">
          <Field label="Additional Description" name="description" value={formData.description} onChange={handleChange} />
        </div>
      </div>

      {/* PROPERTY SPECIFICATIONS */}
      <div>
        <SectionTitle title="Property Specifications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Carpet Area (sq. ft.)" name="carpetArea" value={formData.carpetArea} onChange={handleChange} />
          <Field label="Built-up Area (sq. ft.)" name="builtUpArea" value={formData.builtUpArea} onChange={handleChange} />
          <Field label="Super Built-up Area" name="superBuiltUpArea" value={formData.superBuiltUpArea} onChange={handleChange} />
          <Field label="Number of Bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} error={errors.bedrooms} />
          <Field label="Number of Bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} error={errors.bathrooms} />
          <Field label="Balconies" name="balconies" value={formData.balconies} onChange={handleChange} />
          <Field label="Floor Number" name="floorNumber" value={formData.floorNumber} onChange={handleChange} />
          <Field label="Total Floors" name="totalFloors" value={formData.totalFloors} onChange={handleChange} />
          <Field label="Unit Facing" name="unitFacing" value={formData.unitFacing} onChange={handleChange} />
          <Field label="Construction Type" name="constructionType" value={formData.constructionType} onChange={handleChange} />
          <Field label="Furnishing Status" name="furnishingStatus" value={formData.furnishingStatus} onChange={handleChange} />
          <Field label="Parking Slots" name="parkingSlots" value={formData.parkingSlots} onChange={handleChange} />
        </div>
      </div>

      {/* UTILITIES & SAFETY */}
      <div>
        <SectionTitle title="Utilities & Safety Details" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Water Supply" name="waterSupply" value={formData.waterSupply} onChange={handleChange} />
          <Field label="Power Backup" name="powerBackup" value={formData.powerBackup} onChange={handleChange} />
          <Field label="Gas Connection" name="gasConnection" value={formData.gasConnection} onChange={handleChange} />
          <Field label="Lift Availability" name="liftAvailability" value={formData.liftAvailability} onChange={handleChange} />
        </div>

        <div className="mt-4 max-w-[50%]">
          <Field label="Fire Safety Compliance" name="fireSafety" value={formData.fireSafety} onChange={handleChange} />
        </div>
      </div>



    </div>
  );
};

export default RentalDetailsForm;
