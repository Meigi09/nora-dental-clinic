"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function DoctorDashboardPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="doctor" userName={user?.name || "Doctor"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
          <p className="text-gray-700 mt-2">
            Welcome back! Here's your overview for today
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Today's Appointments
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
            <p className="text-gray-600 text-xs mt-2">5 completed, 3 pending</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">
              Patients in Queue
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
            <p className="text-gray-600 text-xs mt-2">
              Check queue for details
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">Pending Tasks</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">6</p>
            <p className="text-gray-600 text-xs mt-2">3 high priority</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">Messages</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
            <p className="text-gray-600 text-xs mt-2">2 unread</p>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Today's Schedule
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div>
                  <p className="text-gray-900 font-semibold">
                    9:00 AM - John Doe
                  </p>
                  <p className="text-gray-700 text-sm">Regular Check-up</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Completed
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div>
                  <p className="text-gray-900 font-semibold">
                    10:30 AM - Mary Johnson
                  </p>
                  <p className="text-gray-700 text-sm">Cavity Filling</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Completed
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div>
                  <p className="text-gray-900 font-semibold">
                    12:00 PM - Robert Williams
                  </p>
                  <p className="text-gray-700 text-sm">Cleaning & Scaling</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                  In Progress
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div>
                  <p className="text-gray-900 font-semibold">
                    2:00 PM - Jennifer Martinez
                  </p>
                  <p className="text-gray-700 text-sm">Root Canal</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                  Scheduled
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-semibold">
                    4:00 PM - David Taylor
                  </p>
                  <p className="text-gray-700 text-sm">Consultation</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                  Scheduled
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
                View Appointments
              </button>
              <button className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700">
                My Patients
              </button>
              <button className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700">
                Treatment Plans
              </button>
              <button className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700">
                My Tasks
              </button>
              <button className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700">
                Messages
              </button>
            </div>
          </div>
        </div>

        {/* Recent Patients */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Recent Patient Interactions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Patient Name
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Last Visit
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Treatment
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 text-sm">John Doe</td>
                  <td className="py-3 px-4 text-gray-700 text-sm">Today</td>
                  <td className="py-3 px-4 text-gray-700 text-sm">Check-up</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Mary Johnson
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">Today</td>
                  <td className="py-3 px-4 text-gray-700 text-sm">Filling</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Robert Williams
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    2 days ago
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">Scaling</td>
                  <td className="py-3 px-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      Follow-up
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
