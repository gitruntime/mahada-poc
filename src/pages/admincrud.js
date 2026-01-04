import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { Bar } from "react-chartjs-2";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("roles");

  const [tenants] = useState([{ id: 1, name: "Rahul Sharma" }, { id: 2, name: "Sneha Patil" }]);
  const [landlords] = useState([{ id: 1, name: "Amit Rao" }, { id: 2, name: "Sunita Deshmukh" }]);

  const [properties] = useState([
    {
      id: 1,
      name: "Flat #101",
      owner: "Amit Rao",
      tenant: "Rahul Sharma",
      status: "Occupied",
      type: "Flat",
      address: "Sector 12, Pune, Maharashtra",
      location: "Pune",
      price: "₹25,000 / month",
      area: "1200 sq.ft",
      rooms: 3,
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["Parking", "Lift", "Gym"],
      yearBuilt: 2018,
      image: "/images/flat101.jpg",
    },
    {
      id: 2,
      name: "Plot #45",
      owner: "Sunita Deshmukh",
      tenant: "",
      status: "Available",
      type: "Plot",
      address: "Sector 23, Mumbai, Maharashtra",
      location: "Mumbai",
      price: "₹1,50,00,000",
      area: "2500 sq.ft",
      rooms: 0,
      bedrooms: 0,
      bathrooms: 0,
      amenities: ["Garden", "Electricity"],
      yearBuilt: 0,
      image: "/images/plot45.jpg",
    },
    {
      id: 3,
      name: "Villa #12",
      owner: "Rohit Singh",
      tenant: "Neha Patil",
      status: "Occupied",
      type: "Villa",
      address: "Baner, Pune, Maharashtra",
      location: "Pune",
      price: "₹75,000 / month",
      area: "3500 sq.ft",
      rooms: 6,
      bedrooms: 4,
      bathrooms: 3,
      amenities: ["Swimming Pool", "Parking", "Garden", "Gym"],
      yearBuilt: 2020,
      image: "/images/villa12.jpg",
    },
    {
      id: 4,
      name: "Flat #203",
      owner: "Sanjay Mehta",
      tenant: "",
      status: "Available",
      type: "Flat",
      address: "Andheri East, Mumbai, Maharashtra",
      location: "Mumbai",
      price: "₹35,000 / month",
      area: "1400 sq.ft",
      rooms: 4,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["Lift", "Parking", "Gym"],
      yearBuilt: 2019,
      image: "/images/flat203.jpg",
    },
  ]);

  const [notifications] = useState([
    {
      id: 1,
      type: "application",
      title: "New Landlord Application",
      message: "Landlord Amit Rao has applied for Plot #45. Please review.",
      date: "2026-01-04 10:30 AM",
    },
    {
      id: 2,
      type: "completed",
      title: "Police Verification Complete",
      message: "Tenant Rahul Sharma has completed Police Verification.",
      date: "2026-01-04 09:45 AM",
    },
    {
      id: 3,
      type: "general",
      title: "Document Submission",
      message: "Landlord Sunita Deshmukh submitted documents for Flat #101.",
      date: "2026-01-03 04:20 PM",
    },
  ]);

  const [roleSteps, setRoleSteps] = useState({
    tenants: [
      { name: "Personal Info", fields: ["Full Name", "Date of Birth"] },
      { name: "Aadhar Verification", fields: ["Aadhar ID", "OTP"] },
    ],
    landlords: [
      { name: "Property Verification", fields: ["Property ID", "Ownership Document"] },
    ],
  });

  const [newRoleStepName, setNewRoleStepName] = useState({ tenants: "", landlords: "" });
  const [newStepFields, setNewStepFields] = useState({ tenants: [""], landlords: [""] });

  const addFieldInput = (role) =>
    setNewStepFields({
      ...newStepFields,
      [role]: [...newStepFields[role], ""],
    });

  const updateFieldName = (role, index, value) => {
    const updated = [...newStepFields[role]];
    updated[index] = value;
    setNewStepFields({ ...newStepFields, [role]: updated });
  };

  const addStep = (role) => {
    const stepName = newRoleStepName[role].trim();
    if (!stepName) return;
    setRoleSteps({
      ...roleSteps,
      [role]: [
        ...roleSteps[role],
        { name: stepName, fields: newStepFields[role].filter(f => f.trim() !== "") },
      ],
    });
    setNewRoleStepName({ ...newRoleStepName, [role]: "" });
    setNewStepFields({ ...newStepFields, [role]: [""] });
  };

  const deleteStep = (role, index) => {
    const updated = roleSteps[role].filter((_, i) => i !== index);
    setRoleSteps({ ...roleSteps, [role]: updated });
  };

  const chartData = {
    labels: Object.keys(roleSteps),
    datasets: [
      {
        label: "Number of Steps per Role",
        data: Object.values(roleSteps).map((steps) => steps.length),
        backgroundColor: ["#F97316", "#FB923C"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Steps Progress per Role", font: { size: 16 } },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${poppins.className}`}>
      {/* NAVBAR */}
      <nav className="w-full h-[64px] shadow-md px-6 md:px-20 flex items-center bg-white">
        <h1 className="text-2xl font-bold">
          Mhada <span className="text-orange-500">Estate</span>
        </h1>
      </nav>
       <div className={`px-4 sm:px-8 lg:px-20 mt-6 ${poppins.className}`}>
        <Link
          href="/Admin/admindashboard"
          className={`text-[16px] font-medium leading-[100%] text-black cursor-pointer ${poppins.className}`}
          style={{ fontStyle: 'medium', letterSpacing: '0%' }}
        >
          Go Back
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Maharashtra State Rental Housing Portal - Control Center
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-20 flex gap-4 mb-8 flex-wrap">
        {["roles", "properties", "notifications"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow-md"
                : "bg-white text-gray-700 shadow hover:bg-gray-100"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">

        {/* ROLE STEPS */}
        {activeTab === "roles" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["tenants", "landlords"].map((role) => (
              <div
                key={role}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-semibold capitalize flex items-center gap-2 mb-4">
                  <span className="text-orange-500">⚙️</span>
                  {role} Steps
                </h2>

                {/* Steps List */}
                <ul className="space-y-2">
                  {roleSteps[role].map((step, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 shadow-sm"
                    >
                      <div>
                        <span className="font-medium text-gray-800">{step.name}</span>
                        {step.fields.length > 0 && (
                          <p className="text-sm text-gray-500 mt-1">
                            Fields: {step.fields.join(", ")}
                          </p>
                        )}
                      </div>
                      <button
                        className="text-red-500 text-sm hover:underline"
                        onClick={() => deleteStep(role, index)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Add Step */}
                <div className="mt-4 border-t pt-4">
                  <input
                    type="text"
                    placeholder={`Step Name for ${role}`}
                    value={newRoleStepName[role]}
                    onChange={(e) =>
                      setNewRoleStepName({ ...newRoleStepName, [role]: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />

                  <h4 className="font-medium mb-1 text-gray-700">Fields for this step:</h4>
                  {newStepFields[role].map((field, idx) => (
                    <input
                      key={idx}
                      type="text"
                      placeholder={`Field ${idx + 1}`}
                      value={field}
                      onChange={(e) => updateFieldName(role, idx, e.target.value)}
                      className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  ))}

                  <div className="flex gap-2 mt-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => addFieldInput(role)}
                    >
                      + Add Field
                    </button>
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                      onClick={() => addStep(role)}
                    >
                      Add Step
                    </button>
                  </div>
                </div>

                {/* Chart */}
                <div className="mt-6">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PROPERTIES */}
        {activeTab === "properties" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{property.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      property.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {property.status}
                  </span>
                </div>
                <div className="text-gray-700 text-sm mb-3 space-y-1">
                  <p><span className="font-medium">Owner:</span> {property.owner || "N/A"}</p>
                  <p><span className="font-medium">Tenant:</span> {property.tenant || "Vacant"}</p>
                  <p><span className="font-medium">Type:</span> {property.type}</p>
                  <p><span className="font-medium">Location:</span> {property.location}</p>
                  <p><span className="font-medium">Price:</span> {property.price}</p>
                </div>
                <div className="flex justify-end gap-2 mt-3">
                  <button className="text-blue-500 text-sm hover:underline">View</button>
                  <button className="text-orange-500 text-sm hover:underline">Edit</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NOTIFICATIONS */}
        {activeTab === "notifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notifications.map((note) => (
              <div
                key={note.id}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 text-lg">
                      {note.type === "application" ? "📝" : note.type === "completed" ? "✅" : "🔔"}
                    </span>
                    <h4 className="font-semibold text-gray-800">{note.title}</h4>
                  </div>
                  <span className="text-gray-400 text-sm">{note.date}</span>
                </div>
                <p className="text-gray-700 mb-3">{note.message}</p>
                {note.type === "application" && (
                  <button className="bg-orange-500 text-white text-sm px-3 py-1 rounded hover:bg-orange-600 transition">
                    View Application
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
