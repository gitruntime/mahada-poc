"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import Clerk2Navbar from '@/Components/Admin/Clerk2Navbar';
import Contentclerk2 from '@/Components/Admin/Contentclerk2';
import Clerk2Overview from '@/Components/Admin/Clerk2Overview';
import Footer from '@/Components/Layout/Footer';
import { Poppins } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const clerk2 = () => {
  const router = useRouter();



  useEffect(() => {
    const auth = sessionStorage.getItem("isAuthenticated");
    const role = sessionStorage.getItem("role");

    if (!auth || role !== "clerk2") {
      router.push("/adminlogin");
    }
  }, []);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <div >
        <div class="flex justify-center   items-center gap-2 px-3 py-1.5 border border-[#D1D5DC] rounded-md bg-[#F3F4F6] text-[13px] text-gray-700">

          <span class="text-gray-500">
            Logged in as:
          </span>

          <div class="px-2 py-0.5 bg-[#FFFFFF] border border-[#D1D5DC] rounded font-semibold text-gray-900">
            Verification Officer – Mumbai District
          </div>

          <span class="text-gray-500 text-xs">
            (Actions available are based on assigned role and jurisdiction)
          </span>

        </div>

        <div className="bg-[linear-gradient(92.21deg,_#1D134A_-16.31%,_#410F14_116.56%)] m-4 rounded-[20px]">
          <Clerk2Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "overview" && (
            <div className='w-full'>
              <Contentclerk2/>


            </div>


          )}


        </div>





        <div>
          <div className="w-full">




            {/* Modal / Content Panel */}
            <div className="bg-white border  border-gray-200 rounded-xl w-full p-5 shadow-sm min-h-[140px] transition-all">

              {activeTab === "overview" && (
                <div>
                  {/* <Content /> */}
                  <Clerk2Overview />

                </div>


              )}


              {activeTab === "properties" && (
                <div className="bg-white border border-gray-200 rounded-xl w-full p-5 shadow-sm overflow-x-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Audit Logs</h3>
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      placeholder="Custom Date Range"
                      className="border border-gray-300 rounded-lg px-3 py-2 w-48 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Type text to filter"
                      className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Download CSV
                    </button>
                  </div>

                  <table className="min-w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Time</th>
                        <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Resource Name</th>
                        <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Type</th>
                        <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Action</th>
                        <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Performed by</th>
                        <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Parameters</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:15:12 AM</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">User Login</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Authentication</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Logged In</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">pravin.gouda</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">IP: 192.168.1.12, Browser: Chrome</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:18:45 AM</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Property MH-1023</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Property</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Rented</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">pravin.gouda</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant: Tena Yadav, Duration: 11 months</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:25:10 AM</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Agreement MH-1023</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Legal Document</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Signed</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tendulal Yadav</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Signed via Digilocker, Agreement ID: AGR-9876</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:30:55 AM</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Payment MH-1023</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Transaction</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Payment Done</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Nitin Yadav</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Amount: ₹12,000, Mode: UPI, TXN ID: TXN56432</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:35:12 AM</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Payment Verification</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Verification</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Verified</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">pravin.gouda</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Payment verified by Admin, Status: Success</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:45:03 AM</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Property MH-1023</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Maintenance</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Scheduled</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">pravin.gouda</td>
                        <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Next maintenance date: Feb 2, 2026</td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              )}

              {activeTab === "users" && (
                <div class="p-4 bg-white rounded-lg shadow-md w-full">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Users</h3>
                  <p class="text-sm text-gray-600 mb-4">
                    Manage landlords, tenants, and admin accounts.
                  </p>

                  <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse border border-gray-200">
                      <thead class="bg-gray-100">
                        <tr>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Role</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Property Name</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Address</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Aadhar Verified</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">PAN Verified</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Pravin Gouda</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Sunrise Apartments</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">123 MG Road, Mumbai</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9876543210</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Aniket Yadav</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Ocean View Residency</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">45 Park Street, Delhi</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9123456780</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Rahul Sharma</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Greenwood Apartments</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">22 Ring Road, Pune</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9988776655</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Neha Verma</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Blue Sky Residency</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">11 MG Marg, Jaipur</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9871122334</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Siddharth Jain</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Lotus Apartments</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">7 Brigade Road, Bangalore</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9122334455</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Priya Kapoor</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Sunset Villas</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">56 Marine Drive, Mumbai</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9988223344</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Ankit Mehta</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">River View Flats</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">14 Nehru Street, Kolkata</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9876654321</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                        </tr>
                      </tbody>

                    </table>
                  </div>
                </div>

              )}

              {activeTab === "grievances" && (
                <div class="p-4 bg-white rounded-lg shadow-md w-full">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Applications</h3>
                  <p class="text-sm text-gray-600 mb-4">
                    Review property applications from tenants (for rent) and landlords (for purchase).
                  </p>

                  <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse border border-gray-200">
                      <thead class="bg-gray-100">
                        <tr>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Application ID</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Applicant Name</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Role</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Property Name</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Address</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
                          <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Application Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A001</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Pravin Gouda</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Sunrise Apartments</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">123 MG Road, Mumbai</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9876543210</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-yellow-600 font-semibold">Pending</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A002</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Nitin Yadav</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Ocean View Residency</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">45 Park Street, Delhi</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9123456780</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Approved</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A003</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Rahul Sharma</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Greenwood Apartments</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">22 Ring Road, Pune</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9988776655</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">Rejected</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A004</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Neha Verma</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Blue Sky Residency</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">11 MG Marg, Jaipur</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9871122334</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-yellow-600 font-semibold">Pending</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A005</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Siddharth Jain</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Lotus Apartments</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">7 Brigade Road, Bangalore</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9122334455</td>
                          <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Approved</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              )}

            </div>





          </div>




        </div>

        <Footer />
      </div>

    </div>


  )
}

export default clerk2
