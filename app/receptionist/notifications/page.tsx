"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function ReceptionistNotificationsPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout
      role="receptionist"
      userName={user?.name || "Receptionist"}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-700 mt-2">
            System alerts and important messages
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap">
          {["all", "appointments", "payments", "system", "messages"].map(
            (f) => (
              <button
                key={f}
                className="px-4 py-2 rounded-lg font-semibold text-sm bg-white text-gray-900 border border-gray-300 hover:border-blue-500"
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Notifications */}
        <div className="space-y-3">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-900 font-bold">
                  New Patient Registered
                </p>
                <p className="text-gray-700 text-sm">
                  Sarah Anderson registered as new patient
                </p>
                <p className="text-gray-600 text-xs mt-1">5 minutes ago</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-900 font-bold">Payment Received</p>
                <p className="text-gray-700 text-sm">
                  John Doe paid $350 for Invoice INV-2025-0042
                </p>
                <p className="text-gray-600 text-xs mt-1">15 minutes ago</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-900 font-bold">Appointment Reminder</p>
                <p className="text-gray-700 text-sm">
                  Robert Williams appointment in 30 minutes
                </p>
                <p className="text-gray-600 text-xs mt-1">30 minutes ago</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-900 font-bold">Overdue Payment Alert</p>
                <p className="text-gray-700 text-sm">
                  Mary Johnson has overdue invoice - 3 days past due
                </p>
                <p className="text-gray-600 text-xs mt-1">1 hour ago</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-900 font-bold">Staff Message</p>
                <p className="text-gray-700 text-sm">
                  Dr. James Smith: Room 2 is ready for next patient
                </p>
                <p className="text-gray-600 text-xs mt-1">2 hours ago</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-900 font-bold">System Maintenance</p>
                <p className="text-gray-700 text-sm">
                  Scheduled backup will occur tonight at 2:00 AM
                </p>
                <p className="text-gray-600 text-xs mt-1">3 hours ago</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-500 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-900 font-bold">Daily Report</p>
                <p className="text-gray-700 text-sm">
                  Daily performance summary has been generated
                </p>
                <p className="text-gray-600 text-xs mt-1">Yesterday</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Total Notifications
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
            <p className="text-gray-600 text-xs">This week</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
            <p className="text-gray-700 text-sm font-semibold">Unread</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
            <p className="text-gray-600 text-xs">Requires action</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">Read</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">21</p>
            <p className="text-gray-600 text-xs">Archived</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">Alerts Today</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">6</p>
            <p className="text-gray-600 text-xs">Real-time</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
