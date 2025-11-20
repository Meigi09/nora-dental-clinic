"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function DirectorReportsSettingsPage() {
  const { user } = useAuthStore();
  const [selectedReport, setSelectedReport] = useState("monthly");

  return (
    <DashboardLayout role="director" userName={user?.name || "Director"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Reports & Settings
          </h1>
          <p className="text-gray-700 mt-2">
            Generate reports and configure clinic settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reports Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Report Generation */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Generate Reports
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <label className="text-gray-900 font-semibold text-sm mb-2">
                    Report Type
                  </label>
                  <select
                    value={selectedReport}
                    onChange={(e) => setSelectedReport(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="monthly">Monthly Performance Report</option>
                    <option value="quarterly">
                      Quarterly Financial Report
                    </option>
                    <option value="annual">Annual Summary Report</option>
                    <option value="patient">Patient Demographics Report</option>
                    <option value="staff">Staff Performance Report</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
                    Generate PDF
                  </button>
                  <button className="flex-1 bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700">
                    Export CSV
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
                      December 2024 Performance Report
                    </p>
                    <p className="text-gray-600 text-sm">
                      Generated 2 days ago
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Q4 2024 Financial Summary
                    </p>
                    <p className="text-gray-600 text-sm">
                      Generated 1 week ago
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Patient Demographics Analysis
                    </p>
                    <p className="text-gray-600 text-sm">
                      Generated 2 weeks ago
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Clinic Settings
            </h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-3">
                <label className="text-gray-900 font-semibold text-sm">
                  Clinic Name
                </label>
                <input
                  type="text"
                  defaultValue="Nora Dental Clinic"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="border-b border-gray-200 pb-3">
                <label className="text-gray-900 font-semibold text-sm">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="info@noradentalclinic.com"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="border-b border-gray-200 pb-3">
                <label className="text-gray-900 font-semibold text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="border-b border-gray-200 pb-3">
                <label className="text-gray-900 font-semibold text-sm">
                  Address
                </label>
                <input
                  type="text"
                  defaultValue="123 Dental Street, City, State"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pb-3">
                <label className="text-gray-900 font-semibold text-sm">
                  Business Hours
                </label>
                <div className="space-y-2 mt-2">
                  <div className="flex gap-2">
                    <input
                      type="time"
                      defaultValue="08:00"
                      className="flex-1 border border-gray-300 rounded-lg p-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-sm self-center">
                      to
                    </span>
                    <input
                      type="time"
                      defaultValue="18:00"
                      className="flex-1 border border-gray-300 rounded-lg p-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700">
                Save Settings
              </button>
            </div>
          </div>
        </div>

        {/* Notifications & Preferences */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Notifications & Preferences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-900 font-semibold">Email Alerts</p>
                <p className="text-gray-600 text-sm">
                  Receive email notifications for important events
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-900 font-semibold">SMS Notifications</p>
                <p className="text-gray-600 text-sm">
                  Receive SMS for urgent matters
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-900 font-semibold">Daily Summary</p>
                <p className="text-gray-600 text-sm">
                  Get daily clinic performance summary
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between pb-4">
              <div>
                <p className="text-gray-900 font-semibold">Payment Reminders</p>
                <p className="text-gray-600 text-sm">
                  Get notified about overdue payments
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
