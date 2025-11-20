"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function ReceptionistReportsPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout
      role="receptionist"
      userName={user?.name || "Receptionist"}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-700 mt-2">Generate and view clinic reports</p>
        </div>

        {/* Daily Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Today's Appointments
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
            <p className="text-gray-600 text-xs">8 completed, 4 pending</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">
              Patients Registered
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
            <p className="text-gray-600 text-xs">This week</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">Revenue Today</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">$1,850</p>
            <p className="text-gray-600 text-xs">Collected</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">No-Show Rate</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">3.2%</p>
            <p className="text-gray-600 text-xs">This month</p>
          </div>
        </div>

        {/* Report Generation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Daily Reports
            </h3>
            <div className="space-y-3">
              <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 text-left flex justify-between items-center">
                <span>Today's Summary</span>
                <span>→</span>
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 text-left flex justify-between items-center">
                <span>Appointment Report</span>
                <span>→</span>
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 text-left flex justify-between items-center">
                <span>Revenue Report</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Period Reports
            </h3>
            <div className="space-y-3">
              <button className="w-full border-2 border-green-600 text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-50 text-left flex justify-between items-center">
                <span>Weekly Report</span>
                <span>→</span>
              </button>
              <button className="w-full border-2 border-green-600 text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-50 text-left flex justify-between items-center">
                <span>Monthly Report</span>
                <span>→</span>
              </button>
              <button className="w-full border-2 border-green-600 text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-50 text-left flex justify-between items-center">
                <span>Quarterly Report</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Recent Reports
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <p className="text-gray-900 font-semibold">
                  January 15 Daily Summary
                </p>
                <p className="text-gray-600 text-sm">
                  Generated today at 5:00 PM
                </p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                Download
              </button>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <p className="text-gray-900 font-semibold">
                  January 8-14 Weekly Report
                </p>
                <p className="text-gray-600 text-sm">Generated 1 week ago</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                Download
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900 font-semibold">
                  December 2024 Monthly Report
                </p>
                <p className="text-gray-600 text-sm">Generated 2 weeks ago</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Performance Metrics
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold">
                Average Wait Time
              </span>
              <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <span className="text-gray-900 font-semibold">12 min</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold">
                Appointment Completion
              </span>
              <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <span className="text-gray-900 font-semibold">95%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold">
                Payment Collection Rate
              </span>
              <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-600"
                  style={{ width: "88%" }}
                ></div>
              </div>
              <span className="text-gray-900 font-semibold">88%</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
