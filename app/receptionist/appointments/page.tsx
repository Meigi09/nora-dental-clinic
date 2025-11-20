"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function ReceptionistAppointmentsPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout
      role="receptionist"
      userName={user?.name || "Receptionist"}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-700 mt-2">Manage all clinic appointments</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">Today's Total</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">Completed</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
            <p className="text-gray-700 text-sm font-semibold">Scheduled</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
            <p className="text-gray-700 text-sm font-semibold">Cancelled</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
          </div>
        </div>

        {/* Calendar View */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Weekly Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Time
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Patient
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Doctor
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Service
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
                  <td className="py-3 px-4 text-gray-700 text-sm">9:00 AM</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    John Doe
                  </td>
                  <td className="py-3 px-4 text-gray-700">Dr. James Smith</td>
                  <td className="py-3 px-4 text-gray-700">Check-up</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Completed
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Reschedule
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 text-sm">12:00 PM</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    Mary Johnson
                  </td>
                  <td className="py-3 px-4 text-gray-700">Dr. Sarah Wilson</td>
                  <td className="py-3 px-4 text-gray-700">Filling</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                      Scheduled
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Reschedule
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* New Appointment Button */}
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 w-full">
          + Create New Appointment
        </button>
      </div>
    </DashboardLayout>
  );
}
