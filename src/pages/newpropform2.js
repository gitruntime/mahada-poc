import React, { useState } from 'react';
import { Poppins, Arimo } from 'next/font/google';
import Link from 'next/link';
import BlankNavbar from '@/Components/BlankNavbar';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const NewPropForm2 = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [documentFiles, setDocumentFiles] = useState([]);
  const [dragActiveImages, setDragActiveImages] = useState(false);
  const [dragActiveDocs, setDragActiveDocs] = useState(false);

  const handleDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      type === 'images' ? setDragActiveImages(true) : setDragActiveDocs(true);
    } else if (e.type === 'dragleave') {
      type === 'images' ? setDragActiveImages(false) : setDragActiveDocs(false);
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    type === 'images' ? setDragActiveImages(false) : setDragActiveDocs(false);

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

    const mappedFiles = fileArray.map(file => ({
      name: file.name,
      type: file.type,
      preview: URL.createObjectURL(file),
    }));

    if (type === 'images') {
      const updatedImages = [...imageFiles, ...mappedFiles];
      setImageFiles(updatedImages);
      localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
    } else {
      const updatedDocs = [...documentFiles, ...mappedFiles];
      setDocumentFiles(updatedDocs);
      localStorage.setItem('uploadedDocs', JSON.stringify(updatedDocs));
    }
  };


  const removeFile = (index, type) => {
    type === 'images'
      ? setImageFiles(prev => prev.filter((_, i) => i !== index))
      : setDocumentFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BlankNavbar />

      <div className={`px-4 sm:px-8 lg:px-20 mt-6 ${poppins.className}`}>
        <Link
          href="/dashboard"
          className={`text-[16px] font-medium leading-[100%] text-black cursor-pointer ${poppins.className}`}
          style={{ fontStyle: 'medium', letterSpacing: '0%' }}
        >
          Go Back
        </Link>
      </div>

      <div className={`flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-10 ${poppins.className}`}>
        <div className="w-full max-w-[900px] bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-6">
          {/* Header */}
          <div className="text-left px-2 sm:px-4 mb-6 sm:mb-10 space-y-2">
            <h1 className="text-[24px] sm:text-[30px] font-bold text-[#0F1729]">Upload Images and Documents</h1>
            <p className={`text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#717182] ${arimo.className}`}>
              Please upload clear, colored scans or photos of your documents. All documents are required.
            </p>
          </div>

          {/* Upload Images */}
          <div
            className={`border-2 border-gray-300 rounded-xl p-4 sm:p-6 flex flex-col items-center space-y-3 bg-[#F7FBFF] w-full`}
            onDragEnter={(e) => handleDrag(e, 'images')}
            onDragOver={(e) => handleDrag(e, 'images')}
            onDragLeave={(e) => handleDrag(e, 'images')}
            onDrop={(e) => handleDrop(e, 'images')}
          >
            <Image src="/upload.png" width={32} height={32} alt="Upload" className="mb-2" />
            <h3 className={`text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-center text-slate-900 font-normal ${arimo.className}`}>
              Upload Images
            </h3>
            <p className={`text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-center text-gray-500 font-normal ${arimo.className}`}>
              Upload multiple images for better leads
            </p>

            <input
              type="file"
              id="image-upload"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => handleChange(e, 'images')}
            />
            <label
              htmlFor="image-upload"
              className="flex items-center justify-center w-[140px] sm:w-[187px] h-10 gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200"
            >
              <Image src="/blackuploadicon.png" width={16} height={16} alt="Upload Icon" />
              <span className="text-xs sm:text-sm text-gray-700">Choose File</span>
            </label>
            <p className={`text-[12px] leading-[16px] text-center text-[#717182] ${arimo.className} mt-1`}>
              or drag and drop your file here
            </p>

            {imageFiles.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 w-full">
                {imageFiles.map((file, index) => (
                  <div key={index} className="relative group rounded-lg overflow-hidden border shadow-sm">
                    <img
                     src={file.preview}
                      alt={file.name}
                      className="w-full h-28 object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(index, 'images')}
                      className="absolute top-2 right-2 bg-gray-200 hover:bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                    <p className="text-xs text-center truncate mt-1 px-1">{file.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upload Documents */}
          <div
            className={`border-2 border-gray-300 rounded-xl p-4 sm:p-6 flex flex-col items-center space-y-3 bg-[#F7FBFF] w-full`}
            onDragEnter={(e) => handleDrag(e, 'documents')}
            onDragOver={(e) => handleDrag(e, 'documents')}
            onDragLeave={(e) => handleDrag(e, 'documents')}
            onDrop={(e) => handleDrop(e, 'documents')}
          >
            <Image src="/upload.png" width={32} height={32} alt="Upload" className="mb-2" />
            <h3 className={`text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-center text-slate-900 font-normal ${arimo.className}`}>
              Upload Documents
            </h3>
            <p className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] text-center text-gray-500 w-full sm:w-[234px] font-normal">
              These documents help verify ownership
            </p>

            <input
              type="file"
              id="document-upload"
              multiple
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="hidden"
              onChange={(e) => handleChange(e, 'documents')}
            />
            <label
              htmlFor="document-upload"
              className="flex items-center justify-center w-[140px] sm:w-[187px] h-10 gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200"
            >
              <Image src="/blackuploadicon.png" width={16} height={16} alt="Upload Icon" />
              <span className="text-xs sm:text-sm text-gray-700">Choose File</span>
            </label>
            <p className={`text-[12px] leading-[16px] text-center text-[#717182] ${arimo.className} mt-1`}>
              or drag and drop your file here
            </p>


            {documentFiles.length > 0 && (
              <div className="flex gap-2 mt-4 overflow-x-auto py-2 w-full">
                {documentFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-1 bg-white border rounded-lg shadow-sm flex-shrink-0">
                    <span className="text-xs text-center truncate max-w-[160px]">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index, 'documents')}
                      className="bg-gray-300 hover:bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-6">
            <Link
              href="/addproperty"
              className="px-6 py-2 bg-white border-2 border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition w-full sm:w-auto text-center"
            >
              Previous
            </Link>
            <div className="flex justify-end w-full">
              <Link href="/newpropform3"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPropForm2;
