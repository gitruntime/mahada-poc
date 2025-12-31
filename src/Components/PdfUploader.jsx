import React, { useState, useEffect } from "react";
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

  // Convert file → Base64
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  // Load stored PDF on refresh
  useEffect(() => {
    const storedPdf = localStorage.getItem("pcc_pdf");
    if (storedPdf) {
      const parsed = JSON.parse(storedPdf);
      setUploadedFile({ name: parsed.name });
      onUploadSuccess(true);
    }
  }, []);

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
    setUploading(true);

    try {
      const base64 = await fileToBase64(file);

      localStorage.setItem(
        "pcc_pdf",
        JSON.stringify({
          name: file.name,
          data: base64,
        })
      );

      setUploadedFile({ name: file.name });
      setFile(null);
      onUploadSuccess(true);
    } catch {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col gap-6 p-4">
        <h4 className={`text-gray-900 text-md ${poppins.className}`}>
          Document Upload
        </h4>

        <div
          className={`w-full border text-[#717182] border-[#0000001A] h-[46px] flex justify-center ${arimo.className} py-2 rounded-[10px]`}
        >
          <h1>
            Please upload clear, colored scans or photos of your documents.
          </h1>
        </div>
      </div>

      <div
        className="border-2 border-gray-300 rounded-xl p-6 flex flex-col items-center space-y-3 bg-[#F7FBFF]"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <Image src="/upload.png" width={32} height={32} alt="Upload PDF" />

        <h3 className={`${arimo.className} text-[16px] text-slate-900`}>
          Upload PCC Certificate
        </h3>

        <p className={`${arimo.className} text-sm text-[#717182]`}>
          Upload your PDF file for verification
        </p>

        <input
          type="file"
          id="pdf-upload"
          accept="application/pdf"
          className="hidden"
          onChange={handleChange}
        />

        <label
          htmlFor="pdf-upload"
          className="flex items-center justify-center w-[180px] h-10 gap-2 bg-white border-2 border-gray-300 rounded-lg cursor-pointer"
        >
          <Image src="/blackuploadicon.png" width={16} height={16} alt="Upload" />
          <span className={`${arimo.className} text-[#717182]`}>
            Choose File
          </span>
        </label>

        <p className="text-xs text-[#717182]">
          or drag and drop your file here
        </p>

        {file && (
          <div className="w-full bg-white border rounded-lg px-4 py-2 flex justify-between">
            <p className="text-xs truncate">{file.name}</p>
            <button
              onClick={() => setFile(null)}
              className="text-xs text-red-500"
            >
              Remove
            </button>
          </div>
        )}

        <button
          onClick={uploadPdf}
          disabled={!file || uploading}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {uploadedFile && (
          <div className="w-full flex justify-between items-center border rounded-lg p-3 mt-2">
            <div className="flex gap-3">
              <div className="h-7 w-7 flex items-center justify-center rounded-full bg-emerald-500 text-white">
                ✓
              </div>
              <div>
                <p className="text-sm text-emerald-700 truncate max-w-[220px]">
                  {uploadedFile.name}
                </p>
                <p className="text-xs text-emerald-600">
                  Upload successful
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                localStorage.removeItem("pcc_pdf");
                setUploadedFile(null);
                onUploadSuccess(false);
              }}
              className="text-xs text-gray-500 hover:text-red-600"
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
