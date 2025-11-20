"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function ReceptionistPatientsPage() {
  const { user } = useAuthStore();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <DashboardLayout
      role="receptionist"
      userName={user?.name || "Receptionist"}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-700 mt-2">View and manage all patients</p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <input
            type="text"
            placeholder="Search by name, phone, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Total Patients
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">485</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">Active</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">478</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
            <p className="text-gray-700 text-sm font-semibold">
              New This Month
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">42</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">Inactive</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">7</p>
          </div>
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Name
                </th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Phone
                </th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Email
                </th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                  Last Visit
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
                <td className="py-3 px-4 text-gray-700">(555) 123-4567</td>
                <td className="py-3 px-4 text-gray-700">john@email.com</td>
                <td className="py-3 px-4 text-gray-700">Today</td>
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
                <td className="py-3 px-4 text-gray-700">(555) 234-5678</td>
                <td className="py-3 px-4 text-gray-700">mary@email.com</td>
                <td className="py-3 px-4 text-gray-700">Today</td>
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
                <td className="py-3 px-4 text-gray-700">(555) 345-6789</td>
                <td className="py-3 px-4 text-gray-700">robert@email.com</td>
                <td className="py-3 px-4 text-gray-700">2 days ago</td>
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
                <td className="py-3 px-4 text-gray-700">(555) 456-7890</td>
                <td className="py-3 px-4 text-gray-700">jennifer@email.com</td>
                <td className="py-3 px-4 text-gray-700">1 week ago</td>
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
                  David Taylor
                </td>
                <td className="py-3 px-4 text-gray-700">(555) 567-8901</td>
                <td className="py-3 px-4 text-gray-700">david@email.com</td>
                <td className="py-3 px-4 text-gray-700">1 month ago</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    Inactive
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
      </div>
    </DashboardLayout>
  );
}
