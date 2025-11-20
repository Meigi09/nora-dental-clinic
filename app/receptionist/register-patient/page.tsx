"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function ReceptionistRegisterPatientPage() {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    allergies: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <DashboardLayout
      role="receptionist"
      userName={user?.name || "Receptionist"}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Register New Patient
          </h1>
          <p className="text-gray-700 mt-2">
            Add a new patient to the clinic system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Registration Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Patient Information
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-900 font-semibold text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-900 font-semibold text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="patient@example.com"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-900 font-semibold text-sm">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-900 font-semibold text-sm">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Known Allergies
                </label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  placeholder="List any known allergies"
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Medical History
                </label>
                <textarea
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  placeholder="Relevant medical conditions"
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Register Patient
                </button>
                <button
                  type="reset"
                  className="flex-1 bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Registration Information
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ All fields are required</li>
                <li>✓ Ensure email is valid and unique</li>
                <li>✓ Phone number should include country code</li>
                <li>✓ Date of birth must be at least 3 years ago</li>
                <li>✓ Record all allergies and medical conditions</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Recent Registrations
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Sarah Anderson</span> -
                  Registered today
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Michael Brown</span> -
                  Registered yesterday
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Lisa Chen</span> - Registered
                  2 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
