import React, { useState } from 'react';
import { Clock, CheckCircle, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Applications = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'Vikram Singh',
      initial: 'V',
      property: 'Modern 2BHK in Andheri West',
      date: '1/8/2024',
      status: 'pending',
      color: '#FFE5D9'
    },
    {
      id: 2,
      name: 'Neha Gupta',
      initial: 'N',
      property: 'Modern 2BHK in Andheri West',
      date: '1/5/2024',
      status: 'approved',
      color: '#FFE5D9'
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      initial: 'R',
      property: 'Spacious 3BHK in Baner',
      date: '1/9/2024',
      status: 'pending',
      color: '#FFE5D9'
    }
  ]);

  const handleAccept = (id) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: 'approved' } : app
    ));
  };

  const handleReject = (id) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: 'rejected' } : app
    ));
  };

  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-4 sm:p-6 md:p-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <h1 className={`text-[22px] sm:text-[24px] ${poppins.className} font-bold text-[#0F1729]`}>
            Recent Applications
          </h1>
          <button className="flex items-center gap-2 text-[14px] text-[#0F1729] hover:text-gray-900 font-medium">
            View All
            <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Applications */}
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition-shadow"
              style={{
                minHeight: '98px',
                gap: '16px',
                borderRadius: '12px',
                padding: '16px'
              }}
            >
              {/* Left Side */}
              <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-semibold shrink-0"
                  style={{ backgroundColor: app.color, color: '#FF6B35' }}
                >
                  {app.initial}
                </div>

                <div>
                  <h3 className={`text-[16px] ${poppins.className} font-medium text-[#0F1729]`}>
                    {app.name}
                  </h3>
                  <p
                    className={`text-[14px] text-[#6B7280] ${poppins.className} break-words max-w-[260px] md:max-w-full`}
                  >
                    Applied for {app.property}
                  </p>
                  <p className="text-[14px] text-[#6B7280] mt-0.5">
                    {app.date}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-wrap md:flex-nowrap items-center gap-3 w-full md:w-auto justify-start md:justify-end">
                
                {app.status === 'pending' && (
                  <>
                    <div className="flex items-center gap-2 px-3 py-1 border border-[#E5E7EB] bg-gray-50 rounded-full">
                      <Clock size={16} className="text-[#0F1729]" />
                      <span className="text-[12px] font-bold text-[#0F1729]">Pending</span>
                    </div>

                    <button className="w-[44px] h-[36px] border-2 border-orange-500 rounded-lg hover:bg-orange-50 flex items-center justify-center">
                      <MessageSquare size={18} className="text-orange-500" />
                    </button>

                    <button
                      onClick={() => handleAccept(app.id)}
                      className="px-5 py-2 bg-orange-500 text-white text-[14px] font-semibold rounded-lg hover:bg-orange-600 w-full sm:w-auto"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => handleReject(app.id)}
                      className="px-5 py-2 text-gray-700 text-[14px] font-semibold hover:bg-gray-100 rounded-lg w-full sm:w-auto"
                    >
                      Reject
                    </button>
                  </>
                )}

                {app.status === 'approved' && (
                  <>
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-full">
                      <CheckCircle size={16} />
                      <span className="text-[14px] font-medium">Approved</span>
                    </div>

                    <button className="w-10 h-10 border-2 border-orange-500 rounded-lg hover:bg-orange-50 flex items-center justify-center">
                      <MessageSquare size={18} className="text-orange-500" />
                    </button>
                  </>
                )}

                {app.status === 'rejected' && (
                  <>
                    <div className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-full">
                      <span className="text-[14px] font-medium">Rejected</span>
                    </div>

                    <button className="w-10 h-10 border-2 border-orange-500 rounded-lg hover:bg-orange-50 flex items-center justify-center">
                      <MessageSquare size={18} className="text-orange-500" />
                    </button>
                  </>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
