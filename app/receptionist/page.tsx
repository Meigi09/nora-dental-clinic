"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function ReceptionistDashboardPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout
      role="receptionist"
      userName={user?.name || "Receptionist"}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Receptionist Dashboard
          </h1>
          <p className="text-gray-700 mt-2">
            Welcome! Today's overview and quick tasks
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Today's Appointments
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
            <p className="text-gray-600 text-xs mt-2">8 completed, 4 pending</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">
              New Registrations
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
            <p className="text-gray-600 text-xs mt-2">Awaiting verification</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">
              Pending Payments
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">$2,100</p>
            <p className="text-gray-600 text-xs mt-2">5 invoices</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">Queue Status</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">4</p>
            <p className="text-gray-600 text-xs mt-2">Patients waiting</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Today's Appointments
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div>
                  <p className="text-gray-900 font-semibold">
                    9:00 AM - John Doe
                  </p>
                  <p className="text-gray-700 text-sm">
                    Dr. James Smith • Check-up
                  </p>
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
                  <p className="text-gray-700 text-sm">
                    Dr. James Smith • Filling
                  </p>
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
                  <p className="text-gray-700 text-sm">
                    Dr. Sarah Wilson • Scaling
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                  In Progress
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-semibold">
                    2:00 PM - Jennifer Martinez
                  </p>
                  <p className="text-gray-700 text-sm">
                    Dr. Robert Chen • Consultation
                  </p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                  Scheduled
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 text-sm">
                New Appointment
              </button>
              <button className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 text-sm">
                Register Patient
              </button>
              <button className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 text-sm">
                Process Payment
              </button>
              <button className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 text-sm">
                View Queue
              </button>
            </div>
          </div>
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
            <p className="text-gray-700 text-sm font-semibold">
              Registered This Month
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">42</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">
              Appointments This Week
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">85</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">No-Shows Rate</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">3.2%</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
