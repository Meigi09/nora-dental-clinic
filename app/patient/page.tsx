"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function PatientDashboardPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="patient" userName={user?.name || "Patient"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            My Health Dashboard
          </h1>
          <p className="text-gray-700 mt-2">
            Welcome! Here's your dental health overview
          </p>
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Upcoming Appointment
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              Jan 20, 2025
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Dr. James Smith • 2:00 PM
            </p>
            <button className="mt-3 text-blue-600 hover:text-blue-800 font-semibold text-sm">
              Reschedule
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">
              Treatment Status
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              40% Complete
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Braces Installation Plan
            </p>
            <button className="mt-3 text-blue-600 hover:text-blue-800 font-semibold text-sm">
              View Plan
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">
              Pending Payment
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-2">$400</p>
            <p className="text-gray-600 text-sm mt-1">Invoice: INV-2025-0061</p>
            <button className="mt-3 text-blue-600 hover:text-blue-800 font-semibold text-sm">
              Pay Now
            </button>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Appointments */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Appointment History
            </h3>
            <div className="space-y-3">
              <div className="border-b border-gray-200 pb-3">
                <p className="text-gray-900 font-semibold">Check-up</p>
                <p className="text-gray-700 text-sm">
                  Dr. James Smith • Jan 15, 2025
                </p>
                <p className="text-gray-600 text-xs">
                  Regular examination completed
                </p>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <p className="text-gray-900 font-semibold">Filling</p>
                <p className="text-gray-700 text-sm">
                  Dr. James Smith • Jan 8, 2025
                </p>
                <p className="text-gray-600 text-xs">
                  Cavity treatment completed
                </p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Consultation</p>
                <p className="text-gray-700 text-sm">
                  Dr. Robert Chen • Jan 1, 2025
                </p>
                <p className="text-gray-600 text-xs">Braces consultation</p>
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
                Book Appointment
              </button>
              <button className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700">
                View Medical History
              </button>
              <button className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700">
                Download Prescriptions
              </button>
              <button className="w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700">
                Billing Information
              </button>
            </div>
          </div>
        </div>

        {/* Health Summary */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Your Health Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-700 font-semibold">Last Check-up</p>
              <p className="text-gray-900 mt-1">Jan 15, 2025</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Overall Status</p>
              <p className="text-green-600 font-bold mt-1">Excellent</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Next Scheduled</p>
              <p className="text-gray-900 mt-1">Jan 20, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
