"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function DirectorUsersPage() {
  const { user } = useAuthStore();

  const staff = [
    {
      id: 1,
      name: "Dr. James Smith",
      role: "Doctor",
      email: "doctor@clinic.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Sarah Wilson",
      role: "Doctor",
      email: "dr.sarah@clinic.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Dr. Robert Chen",
      role: "Doctor",
      email: "dr.robert@clinic.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Receptionist",
      email: "receptionist@clinic.com",
      status: "Active",
    },
    {
      id: 5,
      name: "Emily Davis",
      role: "Receptionist",
      email: "emily.davis@clinic.com",
      status: "Active",
    },
    {
      id: 6,
      name: "Dr. Michael Brown",
      role: "Director",
      email: "director@clinic.com",
      status: "Active",
    },
  ];

  return (
    <DashboardLayout role="director" userName={user?.name || "Director"}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Users & Roles Management
            </h1>
            <p className="text-gray-700 mt-2">
              Manage staff members and their roles
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            Add Staff Member
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm">Total Staff</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">6</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm">Active</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">6</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm">Inactive</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">0</p>
          </div>
        </div>

        {/* Staff Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-gray-900 font-semibold">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-gray-900 font-semibold">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-gray-900 font-semibold">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-gray-900 font-semibold">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-gray-900 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {staff.map((person) => (
                <tr
                  key={person.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3 text-gray-900 font-medium">
                    {person.name}
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {person.role}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-gray-700">{person.email}</td>
                  <td className="px-6 py-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {person.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
