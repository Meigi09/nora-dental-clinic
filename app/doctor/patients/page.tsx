"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function DoctorPatientsPage() {
  const { user } = useAuthStore();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <DashboardLayout role="doctor" userName={user?.name || "Doctor"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Patients</h1>
          <p className="text-gray-700 mt-2">
            View and manage your patient list
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <input
            type="text"
            placeholder="Search patients by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Patient Name
                </th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Age
                </th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Last Visit
                </th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Medical History
                </th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900 font-semibold">
                  John Doe
                </td>
                <td className="py-3 px-4 text-gray-700">35</td>
                <td className="py-3 px-4 text-gray-700">Today</td>
                <td className="py-3 px-4 text-gray-700">No allergies</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900 font-semibold">
                  Mary Johnson
                </td>
                <td className="py-3 px-4 text-gray-700">42</td>
                <td className="py-3 px-4 text-gray-700">Today</td>
                <td className="py-3 px-4 text-gray-700">Diabetes</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900 font-semibold">
                  Robert Williams
                </td>
                <td className="py-3 px-4 text-gray-700">28</td>
                <td className="py-3 px-4 text-gray-700">2 days ago</td>
                <td className="py-3 px-4 text-gray-700">Hypertension</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900 font-semibold">
                  Jennifer Martinez
                </td>
                <td className="py-3 px-4 text-gray-700">38</td>
                <td className="py-3 px-4 text-gray-700">1 week ago</td>
                <td className="py-3 px-4 text-gray-700">Anxiety disorder</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    Scheduled
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900 font-semibold">
                  David Taylor
                </td>
                <td className="py-3 px-4 text-gray-700">55</td>
                <td className="py-3 px-4 text-gray-700">1 month ago</td>
                <td className="py-3 px-4 text-gray-700">Heart disease</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    New
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Patient Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Total Patients
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">147</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">
              Active Patients
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">142</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">
              New This Month
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">
              Follow-ups Due
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
