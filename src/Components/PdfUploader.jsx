import React, { useState } from "react";
import Image from "next/image";

import { Arimo, Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "700"],
});
const PdfUploader = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFile = (selectedFile) => {
        if (selectedFile.type !== "application/pdf") {
            alert("Only PDF files are allowed");
            return;
        }
        setFile(selectedFile);
    };

    const handleChange = (e) => {
        if (e.target.files?.[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files?.[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const uploadPdf = async () => {
        if (!file) return;

        onUploadSuccess(true);
        setUploading(true);
        try {
            const formData = new FormData();
            formData.append("pdf", file);

            const res = await fetch("/api/upload-pdf", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (!res.ok) throw new Error("Upload failed");

            setUploadedFile({ name: data.file || file.name });
            setFile(null);
        } catch (err) {
            alert("Upload failed");
        } finally {
            setUploading(false);
        }
    };


    return (
        <div>
            <div className="w-full flex flex-col gap-6 p-4">
                <h4 className={`text-gray-900  font-normal text-md ${poppins.className}`}>Document Upload</h4>
                <div className={`w-full border text-[#717182] border-[#0000001A] h-[46px] flex justify-center ${arimo.className} mx-auto py-2 rounded-[10px] text-center`}>
                    <h1>Please upload clear, colored scans or photos of your documents. All documents are required.</h1>
                </div>
            </div>
            <div
                className="border-2 border-gray-300 rounded-xl p-4 sm:p-6 flex flex-col items-center space-y-3 bg-[#F7FBFF] w-full"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            >
                {/* Icon */}
                <Image src="/upload.png" width={32} height={32} alt="Upload PDF" />

                {/* Heading */}
                <h3 className={`text-[14px] ${arimo.className} font-normal text-[16px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-center text-slate-900 font-normal`}>
                    Upload PCC Certificate
                </h3>

                {/* Description */}
                <p className={`text-[12px] font-normal sm:text-[14px] leading-[16px] sm:leading-[20px] text-center text-[#717182] ${arimo.className}`}>
                    Upload your PDF file for verification
                </p>

                {/* Hidden Input */}
                <input
                    type="file"
                    id="pdf-upload"
                    accept="application/pdf"
                    className="hidden"
                    onChange={handleChange}
                />

                {/* Choose Button */}
                <label
                    htmlFor="pdf-upload"
                    className="flex items-center justify-center w-[140px] sm:w-[187px] h-10 gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                >
                    <Image src="/blackuploadicon.png" width={16} height={16} alt="Upload" />
                    <span className={`text-[14px] ${arimo.className} sm:text-sm text-[#717182]`}>Choose File</span>
                </label>

                {/* Drag Text */}
                <p className="text-[12px] leading-[16px] text-center text-[#717182]">
                    or drag and drop your file here
                </p>

                {/* Selected File */}
                {file && (
                    <div className="w-full mt-3 bg-white border rounded-lg px-4 py-2 flex items-center justify-between">
                        <p className="text-xs text-gray-700 truncate max-w-[200px]">
                            {file.name}
                        </p>
                        <button
                            onClick={() => setFile(null)}
                            className="text-xs text-red-500 hover:underline"
                        >
                            Remove
                        </button>
                    </div>
                )}

                {/* Upload Button */}
                <button
                    onClick={uploadPdf}
                    disabled={!file || uploading}
                    className="mt-3 bg-orange-500 text-white px-6 py-2 rounded-lg text-sm disabled:opacity-50"
                >
                    {uploading ? "Uploading..." : "Upload"}
                </button>


                {/* Uploaded File */}
                {uploadedFile && (
  <div className="w-full mt-4 flex items-center justify-between rounded-lg border ...">
    <div className="flex items-center gap-3 min-w-0">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white text-sm">
        ✓
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-emerald-700 truncate max-w-[220px]">
          {uploadedFile.name}
        </p>
        <p className="text-xs text-emerald-600">
          Upload successful
        </p>
      </div>
    </div>

    {/* Remove Button */}
    <button
  onClick={() => {
    setUploadedFile(null);
    onUploadSuccess(false); // notify parent that upload is removed
  }}
  className="text-xs font-medium text-gray-500 hover:text-red-600 transition-colors"
>
  Remove
</button>
  </div>
)}

            </div>
        </div>

    );
};

export default PdfUploader;
