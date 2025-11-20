"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";

export default function DirectorPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="director" userName={user?.name || "Director"}>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Director Dashboard
          </h1>
          <p className="text-gray-700 mt-2">
            Comprehensive clinic management and analytics
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Total Patients
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">485</p>
            <p className="text-gray-600 text-xs mt-2">↑ 12% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">
              Monthly Revenue
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">$18,450</p>
            <p className="text-gray-600 text-xs mt-2">↑ 8% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">Staff Count</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">7</p>
            <p className="text-gray-600 text-xs mt-2">
              3 Doctors, 2 Receptionists, 1 Director, 1 Admin
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">
              Completion Rate
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">94.5%</p>
            <p className="text-gray-600 text-xs mt-2">
              Appointments completed successfully
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              This Month Overview
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Total Appointments</span>
                <span className="font-bold text-gray-900">156</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Completed</span>
                <span className="font-bold text-gray-900">147</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Cancelled</span>
                <span className="font-bold text-gray-900">5</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">No-shows</span>
                <span className="font-bold text-gray-900">4</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Financial Overview
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Total Income</span>
                <span className="font-bold text-gray-900">$18,450</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Expenses</span>
                <span className="font-bold text-gray-900">$8,200</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Net Profit</span>
                <span className="font-bold text-green-600">$10,250</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Outstanding Bills</span>
                <span className="font-bold text-orange-600">$2,100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/director/users">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border-t-4 border-blue-500">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-gray-900">Users & Roles</h3>
              <p className="text-gray-700 text-sm mt-2">
                Manage staff members and their roles
              </p>
            </div>
          </Link>

          <Link href="/director/operations">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border-t-4 border-green-500">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold text-gray-900">Operations</h3>
              <p className="text-gray-700 text-sm mt-2">
                Manage clinic schedule and workflow
              </p>
            </div>
          </Link>

          <Link href="/director/financial">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border-t-4 border-purple-500">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-gray-900">
                Financial Reports
              </h3>
              <p className="text-gray-700 text-sm mt-2">
                View revenue and expense analysis
              </p>
            </div>
          </Link>

          <Link href="/director/inventory">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border-t-4 border-orange-500">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-bold text-gray-900">Inventory</h3>
              <p className="text-gray-700 text-sm mt-2">
                Track equipment and supplies
              </p>
            </div>
          </Link>

          <Link href="/director/analytics">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border-t-4 border-pink-500">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-gray-900">Analytics</h3>
              <p className="text-gray-700 text-sm mt-2">
                Performance metrics and insights
              </p>
            </div>
          </Link>

          <Link href="/director/system">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border-t-4 border-red-500">
              <div className="text-3xl mb-3">🖥️</div>
              <h3 className="text-lg font-bold text-gray-900">
                System Management
              </h3>
              <p className="text-gray-700 text-sm mt-2">
                Backups and audit logs
              </p>
            </div>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
