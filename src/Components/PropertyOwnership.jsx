import React, { useState } from 'react';
import { Poppins, Arimo } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import AddNewPropertyPage from './NewProperty/AddNewPropertyPage';
import RentalDetails from './NewProperty/RentalDetails';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const PropertyOwnership = () => {
    // State for property files
    const [propertyImages, setPropertyImages] = useState([]);
    const [propertyDocs, setPropertyDocs] = useState([]);
    const [dragActivePropertyImg, setDragActivePropertyImg] = useState(false);
    const [dragActivePropertyDoc, setDragActivePropertyDoc] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    // Drag handlers
    const handleDrag = (e, type) => {
        e.preventDefault();
        e.stopPropagation();
        if (type === "propertyImg") setDragActivePropertyImg(e.type === "dragenter" || e.type === "dragover");
        if (type === "propertyDoc") setDragActivePropertyDoc(e.type === "dragenter" || e.type === "dragover");
    };

    const handleDrop = (e, type) => {
        e.preventDefault();
        e.stopPropagation();
        const files = Array.from(e.dataTransfer.files).map(file => ({
            file,
            preview: URL.createObjectURL(file),
            name: file.name,
            type: file.type
        }));
        if (type === "propertyImg") setPropertyImages(prev => [...prev, ...files]);
        if (type === "propertyDoc") setPropertyDocs(prev => [...prev, ...files]);
        if (type === "propertyImg") setDragActivePropertyImg(false);
        if (type === "propertyDoc") setDragActivePropertyDoc(false);
    };

    const handleChange = (e, type) => {
        const files = Array.from(e.target.files).map(file => ({
            file,
            preview: URL.createObjectURL(file),
            name: file.name,
            type: file.type
        }));
        if (type === "propertyImg") setPropertyImages(prev => [...prev, ...files]);
        if (type === "propertyDoc") setPropertyDocs(prev => [...prev, ...files]);
    };

    const removeFile = (index, type) => {
        if (type === "propertyImg") setPropertyImages(prev => prev.filter((_, i) => i !== index));
        if (type === "propertyDoc") setPropertyDocs(prev => prev.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    return (
        <div className="relative mt-24 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-0">
                    <h1
                        className={`text-[#0C1421] text-[20px] sm:text-[24px] font-semibold text-center sm:text-left ${poppins.className}`}
                    >
                        Landlord Registration
                    </h1>
                </div>

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                    <h2 className={`text-gray-500 text-lg sm:text-xl font-normal text-center sm:text-left ${poppins.className}`}>
                        Complete your Know Your Customer verification quickly and securely
                    </h2>
                </div>

                {/* KYC Card */}
                <div className="w-full bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col gap-6">
                    {/* Progress */}
                    <div className="flex flex-col items-center w-full">
                        <h4 className={`text-gray-900 font-normal mb-[20px] text-md ${poppins.className}`}>
                            Landlord Identity Verification
                        </h4>

                        <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
                            <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full" style={{ width: "49%" }}></div>
                        </div>

                        <div className="flex justify-between w-full">
                            {[
                                { icon: "/personalinfo_icon.png", label: "Personal Info" },
                                { icon: "/document_icon.png", label: "Documents" },
                                { icon: "/personalinfo_icon.png", label: "Profile Info", inactive: true },
                                { icon: "/document_icon.png", label: "Bank Details", inactive: true },

                                { icon: "/review_icon.png", label: "Review & Submit", inactive: true },
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.inactive ? "bg-gray-100" : ""}`}>
                                        <img src={step.icon} alt={step.label} className="w-5 h-5" />
                                    </div>
                                    <span className={`text-[12px] mt-1 ${poppins.className} ${step.inactive ? "text-gray-400" : "text-black"}`}>
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`w-full border text-[#717182] border-[#0000001A] h-[46px] flex items-center justify-between px-4 rounded-[10px] ${arimo.className}`}>
                        <h4 className={`text-gray-900 font-normal text-md ${poppins.className}`}>
                            Enlist a property
                        </h4>
                        <Image src="/downarrow.png" width={16} height={16} alt="Dropdown Arrow" />
                    </div>


                    <AddNewPropertyPage />



                    {/* Document Upload */}
                    <div className="w-full flex flex-col gap-6 p-4">



                        <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-8">
                            <div className="flex flex-col gap-5 w-full max-w-[940px]">
                                <FileUploadBox
                                    files={propertyImages}
                                    dragActive={dragActivePropertyImg}
                                    handleDrag={handleDrag}
                                    handleDrop={handleDrop}
                                    handleChange={handleChange}
                                    removeFile={removeFile}
                                    type="propertyImg"
                                    title="Property Image"
                                    description="Upload clear images of your property"
                                    inputId="property-image-upload"
                                />

                                <FileUploadBox
                                    files={propertyDocs}
                                    dragActive={dragActivePropertyDoc}
                                    handleDrag={handleDrag}
                                    handleDrop={handleDrop}
                                    handleChange={handleChange}
                                    removeFile={removeFile}
                                    type="propertyDoc"
                                    title="Property Document"
                                    description="Upload legal documents of your property"
                                    inputId="property-doc-upload"
                                />
                            </div>
                        </div>
                        <RentalDetails />
                        <div className={`w-full border text-[#717182] border-[#0000001A] h-[46px] flex items-center justify-between px-4 rounded-[10px] ${arimo.className}`}>
                            <h4 className={`text-gray-900 font-normal text-md ${poppins.className}`}>
                                Add more property (Optional)
                            </h4>
                            <Image src="/managelogo.png" className='cursor-pointer' width={16} height={16} alt="Dropdown Arrow" />
                        </div>



                        {/* Navigation */}
                        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 w-full">

                            {/* Previous */}
                            <Link
                                href="/Landlord/personalinfo"
                                className={`
      px-6 h-[36px]
      flex items-center justify-center
      bg-white border-2 border-gray-300
      rounded-lg text-gray-700
      hover:bg-gray-50 transition
      w-full sm:w-auto
    `}
                            >
                                Previous
                            </Link>

                            {/* Draft Saved Popup */}
                            {showPopup && (
                                <div className="
      fixed top-5 right-5
      bg-green-500 text-white
      px-4 py-2 rounded-lg
      shadow-lg z-[999]
      animate-fade-in
    ">
                                    Draft saved successfully!
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex gap-3 w-full sm:w-auto">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className={`
        bg-[#6B7280] text-white ${poppins.className}
        w-full sm:w-[118px] h-[36px]
        rounded-[8px]
        text-[14px] font-semibold
        hover:bg-[#4B5563] transition
      `}
                                >
                                    Save as draft
                                </button>

                                <Link
                                    href="/Landlord/bankinfo"
                                    className={`
        group bg-orange-500 text-white ${poppins.className}
        flex items-center justify-center gap-2
        w-full sm:w-auto h-[36px]
        px-6 rounded-lg
        text-[14px] font-semibold
        hover:bg-orange-600 transition
      `}
                                >
                                    Next
                                    <img
                                        src="/righticon.png"
                                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

const FileUploadBox = ({ files, dragActive, handleDrag, handleDrop, handleChange, removeFile, type, title, description, inputId }) => (
    <div
        className={`flex-1 p-6 border rounded-lg flex flex-col items-center justify-center gap-3 bg-white shadow-sm hover:shadow-md transition ${dragActive ? "border-blue-400" : "border-gray-300"}`}
        onDragEnter={(e) => handleDrag(e, type)}
        onDragOver={(e) => handleDrag(e, type)}
        onDragLeave={(e) => handleDrag(e, type)}
        onDrop={(e) => handleDrop(e, type)}
    >
        <div className="text-gray-500">
            <Image src="/upload.png" width={32} height={32} alt="Upload" />
        </div>
        <h3 className={`text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-center text-slate-900 font-normal ${arimo.className}`}>{title}</h3>
        <p className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-center text-gray-500 w-full sm:w-[234px] font-normal">{description}</p>
        <input id={inputId} type="file" multiple className="hidden" onChange={(e) => handleChange(e, type)} />
        <label htmlFor={inputId} className="flex items-center justify-center w-[140px] sm:w-[187px] h-10 gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200">
            <Image src="/blackuploadicon.png" width={16} height={16} alt="Upload Icon" />
            <span className="text-xs sm:text-sm text-gray-700">Choose File</span>
        </label>
        <p className={`text-[12px] leading-[16px] text-center text-[#717182] ${arimo.className} mt-1`}>or drag and drop your file here</p>

        {files.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mt-4 w-full">
                {files.map((file, index) => (
                    <div key={index} className="relative border rounded-lg overflow-hidden">
                        {file.type.startsWith("image") ? (
                            <img src={file.preview} alt={file.name} className="w-full h-24 object-cover" />
                        ) : (
                            <p className="text-xs p-2 truncate">{file.name}</p>
                        )}
                        <button
                            onClick={() => removeFile(index, type)}
                            className="absolute top-1 right-1 bg-gray-300 hover:bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default PropertyOwnership;
