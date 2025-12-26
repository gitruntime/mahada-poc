import React, { useState, useEffect } from "react";
import { Poppins, Arimo } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import BlankNavbar from "@/Components/BlankNavbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DocInfoCard = () => {
  const [aadhaarFiles, setAadhaarFiles] = useState([]);
  const [panFiles, setPanFiles] = useState([]);
  const [dragActiveAadhaar, setDragActiveAadhaar] = useState(false);
  const [dragActivePan, setDragActivePan] = useState(false);

  // Load files from localStorage on client-side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAadhaar = JSON.parse(localStorage.getItem("aadhaarFiles") || "[]");
      const savedPan = JSON.parse(localStorage.getItem("panFiles") || "[]");
      setAadhaarFiles(savedAadhaar);
      setPanFiles(savedPan);
    }
  }, []);

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
    const mappedFiles = Array.from(files).map((file) => ({
      name: file.name,
      type: file.type,
      preview: URL.createObjectURL(file),
    }));

    if (type === "aadhaar") {
      const updated = [...aadhaarFiles, ...mappedFiles];
      setAadhaarFiles(updated);
      localStorage.setItem("aadhaarFiles", JSON.stringify(updated));
    } else {
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

  return (
    <div>
        <BlankNavbar/>
    <div className="relative mt-24 px-4 sm:px-6 lg:px-12 w-full flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h2 className={`text-gray-500 text-lg sm:text-xl font-normal text-center sm:text-left ${poppins.className}`}>
            Complete your Know Your Customer verification quickly and securely
          </h2>
          <Link
            href="/"
            className={`px-4 py-2 text-center border-2 border-orange-500 rounded-lg text-orange-500 font-medium hover:bg-orange-500 hover:text-white hover:shadow-md transition-all duration-300 ${poppins.className}`}
          >
            Skip for now
          </Link>
        </div>

        {/* KYC Card */}
        <div className="w-full bg-white border border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col gap-6">

          {/* Progress */}
          <div className="flex flex-col items-center w-full">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">KYC Verification</h3>
            <div className="w-full relative h-2 mb-6 bg-gray-300 rounded-full">
              <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full" style={{ width: "50%" }}></div>
            </div>
            <div className="flex justify-between w-full">
              {[
                { icon: "/personalinfo_icon.png", label: "Personal Info" },
                { icon: "/document_icon.png", label: "Documents" },
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
              <Link href="/personalinfo" className="px-6 py-2 bg-white border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-center w-full sm:w-auto">
                Previous
              </Link>
              <Link href="/review" className={`bg-orange-500 text-white ${poppins.className} flex justify-center items-center gap-2 px-6 py-2.5 rounded-lg w-full sm:w-auto transition-all duration-300 hover:bg-orange-600 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]`}>
                Next
                <img src="/righticon.png" className="w-4 h-4 transition-transform duration-300" alt="" />
              </Link>
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

export default DocInfoCard;
