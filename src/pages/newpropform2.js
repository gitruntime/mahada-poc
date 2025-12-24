import React, { useState } from 'react';
import { Poppins } from "next/font/google";
import Link from 'next/link';
import BlankNavbar from '@/Components/BlankNavbar';
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const NewPropForm2 = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [documentFiles, setDocumentFiles] = useState([]);
  const [dragActiveImages, setDragActiveImages] = useState(false);
  const [dragActiveDocs, setDragActiveDocs] = useState(false);

  const handleDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      if (type === 'images') setDragActiveImages(true);
      else setDragActiveDocs(true);
    } else if (e.type === "dragleave") {
      if (type === 'images') setDragActiveImages(false);
      else setDragActiveDocs(false);
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (type === 'images') setDragActiveImages(false);
    else setDragActiveDocs(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files, type);
    }
  };

  const handleChange = (e, type) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files, type);
    }
  };

  const handleFiles = (files, type) => {
    const fileArray = Array.from(files);
    if (type === 'images') {
      setImageFiles(prev => [...prev, ...fileArray]);
    } else {
      setDocumentFiles(prev => [...prev, ...fileArray]);
    }
  };

  const removeFile = (index, type) => {
    if (type === 'images') {
      setImageFiles(prev => prev.filter((_, i) => i !== index));
    } else {
      setDocumentFiles(prev => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen ">
      <BlankNavbar />
      
      <div className={`px-[20px] sm:px-[40px]  lg:px-[80px] mt-6 ${poppins.className}`}>
        <Link 
          href="/dashboard" 
          className={`inline-flex items-center gap-2 text-[16px] font-medium text-slate-700 hover:text-indigo-600 transition-all duration-300 group ${poppins.className}`}
        >
          <svg 
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Go Back
        </Link>
      </div>

      <div className={`px-[20px] flex just sm:px-[40px] lg:px-[80px] w-[895px] h-[720ppx] py-10 ${poppins.className}`}>
        <div className="mx-auto" style={{ maxWidth: '894.67px' }}>
          {/* Header */}
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Upload Images and Documents
            </h1>
            <p className="text-slate-600 text-lg">
              Please upload clear, colored scans or photos of your documents. All documents are required.
            </p>
          </div>

          {/* Upload Images Section */}
          <div className="animate-slideUp" style={{ animationDelay: '0.1s', marginBottom: '20px' }}>
            <div 
              className="bg-white overflow-hidden transition-all duration-300"
              style={{
                width: '894.67px',
                maxWidth: '100%',
                borderRadius: '14px',
                border: '0.67px solid #e2e8f0'
              }}
            >
              <div 
                className={`relative border-dashed transition-all duration-300 ${
                  dragActiveImages 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-slate-300 bg-slate-50/50'
                }`}
                style={{
                  width: '853.33px',
                  maxWidth: '100%',
                  height: '236px',
                  padding: '26px',
                  borderWidth: '2px',
                  borderRadius: '10px',
                  margin: '20.67px auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '13px'
                }}
                onDragEnter={(e) => handleDrag(e, 'images')}
                onDragLeave={(e) => handleDrag(e, 'images')}
                onDragOver={(e) => handleDrag(e, 'images')}
                onDrop={(e) => handleDrop(e, 'images')}
              >
                <input
                  id="image-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleChange(e, 'images')}
                  className="hidden"
                />
                
                <div className="flex flex-col items-center justify-center text-center flex-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center" style={{ marginBottom: '13px' }}>
                    <Image src="/upload.png" width={32} height={32}/>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900" style={{ marginBottom: '6px' }}>
                    Upload Images
                  </h3>
                  <p className="text-slate-500 text-sm" style={{ marginBottom: '13px' }}>
                    Upload Multiple images for better leads
                  </p>
                  
                  <label 
                    htmlFor="image-upload"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-700 font-medium cursor-pointer hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                      />
                    </svg>
                    Choose File
                  </label>
                  
                  <p className="text-slate-400 text-sm" style={{ marginTop: '13px' }}>
                    or drag and drop your file here
                  </p>
                </div>
              </div>

              {imageFiles.length > 0 && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    {imageFiles.length} file{imageFiles.length > 1 ? 's' : ''} selected
                  </p>
                  <div className="space-y-2">
                    {imageFiles.map((file, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-900 truncate">{file.name}</p>
                            <p className="text-xs text-slate-500">{(file.size / 1024).toFixed(2)} KB</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(index, 'images')}
                          className="ml-2 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Property Documents Section */}
          <div className="animate-slideUp" style={{ animationDelay: '0.2s', marginBottom: '20px' }}>
            <div 
              className="bg-white overflow-hidden transition-all duration-300"
              style={{
                width: '894.67px',
                maxWidth: '100%',
                borderRadius: '14px',
                border: '0.67px solid #e2e8f0'
              }}
            >
              <div 
                className={`relative border-dashed transition-all duration-300 ${
                  dragActiveDocs 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-slate-300 bg-slate-50/50'
                }`}
                style={{
                  width: '853.33px',
                  maxWidth: '100%',
                  height: '236px',
                  padding: '26px',
                  borderWidth: '2px',
                  borderRadius: '10px',
                  margin: '20.67px auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '13px'
                }}
                onDragEnter={(e) => handleDrag(e, 'documents')}
                onDragLeave={(e) => handleDrag(e, 'documents')}
                onDragOver={(e) => handleDrag(e, 'documents')}
                onDrop={(e) => handleDrop(e, 'documents')}
              >
                <input
                  id="document-upload"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={(e) => handleChange(e, 'documents')}
                  className="hidden"
                />
                
                <div className="flex flex-col items-center justify-center text-center flex-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center" style={{ marginBottom: '13px' }}>
                    <svg 
                      className="w-8 h-8 text-amber-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                      />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900" style={{ marginBottom: '6px' }}>
                    Property Documents
                  </h3>
                  <p className="text-slate-500 text-sm" style={{ marginBottom: '13px' }}>
                    These documents help verify ownership
                  </p>
                  
                  <label 
                    htmlFor="document-upload"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-700 font-medium cursor-pointer hover:border-amber-500 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                      />
                    </svg>
                    Choose File
                  </label>
                  
                  <p className="text-slate-400 text-sm" style={{ marginTop: '13px' }}>
                    or drag and drop your file here
                  </p>
                </div>
              </div>

              {documentFiles.length > 0 && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    {documentFiles.length} file{documentFiles.length > 1 ? 's' : ''} selected
                  </p>
                  <div className="space-y-2">
                    {documentFiles.map((file, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-amber-300 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-900 truncate">{file.name}</p>
                            <p className="text-xs text-slate-500">{(file.size / 1024).toFixed(2)} KB</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(index, 'documents')}
                          className="ml-2 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/addproperty"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </Link>

            <button
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Next
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </div>
  );
}

export default NewPropForm2;