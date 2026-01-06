import React, { useState, useEffect } from "react";
import { Poppins, Arimo } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import BlankNavbar from "@/Components/BlankNavbar";
import AdharOtp from "./AdharOtp";
import PanOtp from "./PanOtp";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const DocInfoCard2 = () => {
  const [aadhaarFiles, setAadhaarFiles] = useState([]);
  const [panFiles, setPanFiles] = useState([]);
  const [dragActiveAadhaar, setDragActiveAadhaar] = useState(false);
  const [dragActivePan, setDragActivePan] = useState(false);

  const [formData, setFormData] = useState({

    adhar: "1234 5678 9012",
    adharOtp: "",
    pan: "",
    panOtp: "",

  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!formData.adhar) tempErrors.adhar = "Aadhaar is required";
    else if (!/^\d{12}$/.test(formData.adhar))
      tempErrors.adhar = "Enter valid 12-digit Aadhaar number";

    if (!formData.adharOtp)
      tempErrors.adharOtp = "Aadhaar OTP is required";
    else if (!/^\d{6}$/.test(formData.adharOtp))
      tempErrors.adharOtp = "Enter valid 6-digit OTP";

    if (!formData.pan)
      tempErrors.pan = "PAN is required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan.toUpperCase()))
      tempErrors.pan = "Enter valid PAN number";

    if (!formData.panOtp)
      tempErrors.panOtp = "PAN OTP is required";
    else if (!/^\d{6}$/.test(formData.panOtp))
      tempErrors.panOtp = "Enter valid 6-digit OTP";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const [showPopup, setShowPopup] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "tenant_personal_info_draft",
      JSON.stringify(formData)
    );

    // Show popup instead of alert
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };





  // Load files from localStorage on client-side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAadhaar = JSON.parse(localStorage.getItem("aadhaarFiles") || "[]");
      const savedPan = JSON.parse(localStorage.getItem("panFiles") || "[]");
      setAadhaarFiles(savedAadhaar);
      setPanFiles(savedPan);
    }
  }, []);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      type === "aadhaar" ? setDragActiveAadhaar(true) : setDragActivePan(true);
    } else if (e.type === "dragleave") {
      type === "aadhaar" ? setDragActiveAadhaar(false) : setDragActivePan(false);
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    type === "aadhaar" ? setDragActiveAadhaar(false) : setDragActivePan(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files, type);
    }
  };

  const handleChange = (e, type) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files, type);
    }
  };

  const handleFiles = (files, type) => {
    // Allowed file types
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    const validFiles = Array.from(files).filter((file) => allowedTypes.includes(file.type));

    if (type === "aadhaar") {
      const remainingSlots = 2 - aadhaarFiles.length;
      const filesToAdd = validFiles.slice(0, remainingSlots);

      if (filesToAdd.length < validFiles.length) {
        alert("Aadhaar upload limit is 2 files. Extra files are ignored.");
      }

      const mappedFiles = filesToAdd.map((file) => ({
        name: file.name,
        type: file.type,
        preview: URL.createObjectURL(file),
      }));

      const updated = [...aadhaarFiles, ...mappedFiles];
      setAadhaarFiles(updated);
      localStorage.setItem("aadhaarFiles", JSON.stringify(updated));

    } else if (type === "pan") {
      if (validFiles.length + panFiles.length > 1) {
        alert("PAN upload limit is 1 file. Extra files are ignored.");
      }

      const filesToAdd = validFiles.slice(0, 1 - panFiles.length); // Only 1 file allowed
      const mappedFiles = filesToAdd.map((file) => ({
        name: file.name,
        type: file.type,
        preview: URL.createObjectURL(file),
      }));

      const updated = [...panFiles, ...mappedFiles];
      setPanFiles(updated);
      localStorage.setItem("panFiles", JSON.stringify(updated));
    }
  };


  const removeFile = (index, type) => {
    if (type === "aadhaar") {
      const updated = aadhaarFiles.filter((_, i) => i !== index);
      setAadhaarFiles(updated);
      localStorage.setItem("aadhaarFiles", JSON.stringify(updated));
    } else {
      const updated = panFiles.filter((_, i) => i !== index);
      setPanFiles(updated);
      localStorage.setItem("panFiles", JSON.stringify(updated));
    }
  };
  const [adharVerified, setAdharVerified] = useState(false);

  const [showAadhaarOtp, setShowAadhaarOtp] = useState(false);
  const [aadhaarVerified, setAadhaarVerified] = useState(false);

  const [showPanOtp, setShowPanOtp] = useState(false);      // controls PAN OTP modal visibility
  const [panVerified, setPanVerified] = useState(false);

  return (
    <div>
      <BlankNavbar />
      <div className="relative mt-24 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
        <div className="w-full max-w-5xl flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-0">
            <h1
              className={`text-[#0C1421] text-[20px] sm:text-[24px] font-semibold text-center sm:text-left ${poppins.className}`}
            >
              Tenant Registration
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
              <h4 className={`text-gray-900 font-normal mb-[20px] text-md ${poppins.className}`}>Tenant Identity Verification</h4>

              <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
                <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full" style={{ width: "22%" }}></div>
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


            <div>
              <div className="flex flex-col sm:flex-row gap-4 w-full">

                {/* Aadhaar Number */}
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="adhar"
                    className={`text-gray-900 text-sm mb-1 ${poppins.className}`}
                  >
                    Aadhaar number
                  </label>

                  <div className="relative">

                    <input
                      disabled={aadhaarVerified}
                      id="adhar"
                      type="tel"
                      placeholder="Enter your Aadhaar number"
                      value={formData.adhar}
                      onChange={handleInputChange}
                      className={`w-full p-2 pr-24 border rounded-lg ${poppins.className}
      ${aadhaarVerified
                          ? "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
                          : "bg-gray-50 border-gray-300"
                        }
      ${errors.adhar ? "border-red-500" : ""}
    `}
                    />

                    <button
                      type="button"
                      disabled={aadhaarVerified}
                      onClick={() => setShowAadhaarOtp(true)}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-[14px] ${poppins.className}
      ${aadhaarVerified
                          ? "text-green-600 font-semibold cursor-not-allowed"
                          : "text-[#F97415]"
                        }
    `}
                    >
                      {aadhaarVerified ? "Verified" : "Send OTP"}
                    </button>

                    <AdharOtp
                      open={showAadhaarOtp}
                      onClose={() => setShowAadhaarOtp(false)}
                      onSuccess={() => setAadhaarVerified(true)}
                    />

                  </div>


                  {errors.adhar && (
                    <span className="text-red-500 text-xs mt-1">{errors.adhar}</span>
                  )}
                </div>

                {/* PAN Number */}
                <div className="flex-1 flex flex-col relative">

                  {/* PAN Card Input */}
                  <label
                    htmlFor="pan"
                    className={`text-gray-900 text-sm mb-1 ${poppins.className}`}
                  >
                    PAN Card Number
                  </label>

                  <div className="relative">
                    <input
                      disabled={panVerified}
                      id="pan"
                      type="text"
                      placeholder="Enter your PAN number"
                      value={formData.pan}
                      onChange={handleInputChange}
                      className={`w-full p-2 pr-24 border rounded-lg ${poppins.className} ${panVerified
                        ? "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
                        : "bg-gray-50 border-gray-300"
                        } ${errors.pan ? "border-red-500" : ""}`}
                    />

                    <button
                      type="button"
                      disabled={panVerified}
                      onClick={() => setShowPanOtp(true)}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-[14px] ${poppins.className} ${panVerified
                        ? "text-green-600 font-semibold cursor-not-allowed"
                        : "text-[#F97415]"
                        }`}
                    >
                      {panVerified ? "Verified" : "Send OTP"}
                    </button>
                  </div>

                  {errors.pan && (
                    <span className="text-red-500 text-xs mt-1">{errors.pan}</span>
                  )}

                  {/* PAN OTP Modal */}
                  <PanOtp
                    open={showPanOtp}
                    onClose={() => setShowPanOtp(false)}
                    onSuccess={() => setPanVerified(true)}
                  />

                </div>


              </div>





            </div>


            <div className="w-full  mx-auto mt-6 border border-gray-200 rounded-xl p-5 bg-white shadow-sm">

              {/* Heading */}
              <h3 className="text-lg font-semibold text-gray-900 text-center">
               Upload documents through DigiLocker
              </h3>

              {/* DigiLocker Button */}
              <Link
                href="https://accounts.digilocker.gov.in/v3/4621c59a6ad0255c2ef65877756585af9e8fe2093a22285b275ec5536249ec76--en"
                target="_blank"
                type="button"
                className="
    mt-4 w-full flex items-center justify-center gap-3
    border border-blue-600 text-blue-600
    rounded-lg font-medium
    transition-all duration-300 ease-in-out
    hover:bg-blue-600 hover:text-white
    hover:shadow-lg hover:-translate-y-[2px]
    active:translate-y-0
  "
              >
                <img
                  src="/digi3.webp"
                  alt="DigiLocker"
                  className="
      h-[50px] w-auto
      transition-transform duration-300
      group-hover:scale-110
    "
                />
                <span className="transition-all duration-300">
                  Verify via DigiLocker
                </span>
              </Link>

              {/* Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-sm text-gray-500">OR</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Manual Upload */}
              <p className={`text-[14px] text-gray-600 ${poppins.className} text-center`}>
                Don’t have an account on DigiLocker?
              </p>

              <button
                type="button"
                className={`mt-2 w-full text-[14px] text-gray-700  ${poppins.className} hover:text-gray-900`}
              >
                Upload documents manually below 
              </button>

            </div>

            {/* Document Upload */}
            <div className="w-full flex flex-col gap-6 p-4">
              <h4 className={`text-gray-900 ml-[30px] font-normal text-md ${poppins.className}`}>Document Upload</h4>
              <div className={`w-full border text-[#717182] border-[#0000001A] h-[46px] flex justify-center ${arimo.className} mx-auto py-2 rounded-[10px] text-center`}>
                <h1>Please upload clear, colored scans or photos of your documents. All documents are required.</h1>
              </div>

              <div className=" flex flex-col items-center justify-center py-10 px-4 sm:px-8">
                <div className="flex flex-col sm:flex-row gap-5 w-full max-w-[940px]">
                  <FileUploadBox
                    files={aadhaarFiles}
                    dragActive={dragActiveAadhaar}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                    handleChange={handleChange}
                    removeFile={removeFile}
                    type="aadhaar"
                    title="Aadhaar Card"
                    description="Upload front and back sides of your Aadhaar card"
                    inputId="aadhaar-upload"
                  />
                  <FileUploadBox
                    files={panFiles}
                    dragActive={dragActivePan}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                    handleChange={handleChange}
                    removeFile={removeFile}
                    type="pan"
                    title="PAN Card"
                    description="Upload a clear photo of your PAN card"
                    inputId="pan-upload"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 w-full">
                <Link href="/Tenant/personalinfo" className="px-6 py-2 bg-white border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-center w-full sm:w-auto">
                  Previous
                </Link>
                
                  {/* Popup */}
{showPopup && (
  <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadeIn">
    Draft saved successfully!
  </div>
)}
                <div className="flex  gap-2 justify-center items-center">
                  <button
                    type="button"
                    onClick={handleSave}
                    className={`bg-[#6B7280] text-white ${poppins.className} cursor-pointer
flex justify-center items-center
gap-[15px]
w-full sm:w-[118px] h-[34px]
px-[12px] py-[7px]
rounded-[8px]
text-[14px] font-semibold leading-[20px]
transition-colors duration-200
hover:bg-[#4B5563]`}
                  >
                    Save as draft
                  </button>


                  <Link href="/Tenant/profile" className={`bg-orange-500 text-white ${poppins.className} flex justify-center items-center gap-2 px-4  py-1 rounded-lg w-full sm:w-auto transition-all duration-300 hover:bg-orange-600 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]`}>
                    Next
                    <img src="/righticon.png" className="w-4 h-4 transition-transform duration-300" alt="" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Upload Box
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

export default DocInfoCard2;
