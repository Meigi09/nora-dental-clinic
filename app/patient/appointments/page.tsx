"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function PatientAppointmentsPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="patient" userName={user?.name || "Patient"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <p className="text-gray-700 mt-2">
            View and manage your appointments
          </p>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Upcoming Appointments
          </h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-bold">Braces Installation</p>
                  <p className="text-gray-700 text-sm">Dr. Robert Chen</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                  Scheduled
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                📅 Jan 20, 2025 • ⏰ 2:00 PM • 📍 Room 2
              </p>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Reschedule
                </button>
                <button className="text-red-600 hover:text-red-800 font-semibold text-sm">
                  Cancel
                </button>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-bold">Follow-up Check</p>
                  <p className="text-gray-700 text-sm">Dr. Sarah Wilson</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                  Upcoming
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                📅 Feb 5, 2025 • ⏰ 10:00 AM • 📍 Room 1
              </p>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Reschedule
                </button>
                <button className="text-red-600 hover:text-red-800 font-semibold text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Past Appointments */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Past Appointments
          </h3>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 p-4 bg-green-50 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-bold">Regular Check-up</p>
                  <p className="text-gray-700 text-sm">Dr. James Smith</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Completed
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                📅 Jan 15, 2025 • Status: Excellent condition
              </p>
            </div>

            <div className="border-l-4 border-green-500 p-4 bg-green-50 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-bold">Cavity Filling</p>
                  <p className="text-gray-700 text-sm">Dr. James Smith</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Completed
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                📅 Jan 8, 2025 • Status: Treatment successful
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">Total Visits</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">Upcoming</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">
              Membership Status
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">Active</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
