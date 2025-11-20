"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function DirectorSystemPage() {
  const { user } = useAuthStore();
  const [backupInProgress, setBackupInProgress] = useState(false);

  const handleBackup = () => {
    setBackupInProgress(true);
    setTimeout(() => setBackupInProgress(false), 2000);
  };

  return (
    <DashboardLayout role="director" userName={user?.name || "Director"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            System Administration
          </h1>
          <p className="text-gray-700 mt-2">
            System settings, backups, and maintenance
          </p>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            System Status
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Database Health</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Good
                </span>
              </div>
              <p className="text-gray-600 text-xs mt-2">
                All systems operational
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">API Status</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-gray-600 text-xs mt-2">99.8% uptime</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Server Load</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Normal
                </span>
              </div>
              <p className="text-gray-600 text-xs mt-2">
                CPU: 34%, Memory: 52%
              </p>
            </div>
          </div>
        </div>

        {/* Backup Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Backup Management
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-900 font-semibold">Last Backup</p>
                <p className="text-gray-600 text-sm">Today at 02:15 AM</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                Completed
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-900 font-semibold">Backup Location</p>
                <p className="text-gray-600 text-sm">/backups/clinic_data</p>
              </div>
              <span className="text-gray-700 text-xs font-semibold">
                3.2 GB
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900 font-semibold">Backup Frequency</p>
                <p className="text-gray-600 text-sm">Daily at 2:00 AM</p>
              </div>
            </div>
            <button
              onClick={handleBackup}
              disabled={backupInProgress}
              className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
              {backupInProgress ? "Backing up..." : "Perform Manual Backup"}
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Security Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-900 font-semibold">
                  Two-Factor Authentication
                </p>
                <p className="text-gray-600 text-sm">
                  Enhanced security for admin accounts
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
                <p className="text-gray-900 font-semibold">Session Timeout</p>
                <p className="text-gray-600 text-sm">
                  Auto-logout after 30 minutes
                </p>
              </div>
              <span className="text-gray-900 font-semibold">Enabled</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900 font-semibold">Data Encryption</p>
                <p className="text-gray-600 text-sm">
                  AES-256 encryption for sensitive data
                </p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Audit Logs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Recent Audit Logs
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Date/Time
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    User
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Action
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    2025-01-15 14:32:10
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Dr. Michael Brown
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Accessed Financial Report
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      Success
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    2025-01-15 13:45:22
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Sarah Johnson
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Created New Appointment
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Success
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    2025-01-15 12:15:45
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Dr. James Smith
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Updated Patient Record
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Success
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    2025-01-15 11:02:33
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Dr. Michael Brown
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    System Backup Initiated
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Success
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
