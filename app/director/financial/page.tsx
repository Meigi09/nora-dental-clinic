"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function DirectorFinancialPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="director" userName={user?.name || "Director"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Financial Reports
          </h1>
          <p className="text-gray-700 mt-2">
            Revenue, expenses, and profitability analysis
          </p>
        </div>

        {/* Financial Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">
              Total Revenue (This Month)
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">$18,450</p>
            <p className="text-gray-600 text-xs mt-2">↑ 8% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <p className="text-gray-700 text-sm font-semibold">
              Total Expenses
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">$8,200</p>
            <p className="text-gray-600 text-xs mt-2">↓ 3% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">Net Profit</p>
            <p className="text-3xl font-bold text-green-600 mt-2">$10,250</p>
            <p className="text-gray-600 text-xs mt-2">55.6% profit margin</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">
              Outstanding Bills
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">$2,100</p>
            <p className="text-gray-600 text-xs mt-2">5 unpaid invoices</p>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Revenue by Service
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">General Checkups</span>
                <span className="font-bold text-gray-900">$5,200</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Fillings</span>
                <span className="font-bold text-gray-900">$4,800</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Cleanings</span>
                <span className="font-bold text-gray-900">$3,450</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Orthodontics</span>
                <span className="font-bold text-gray-900">$5,000</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Expense Breakdown
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Salaries</span>
                <span className="font-bold text-gray-900">$5,200</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Supplies</span>
                <span className="font-bold text-gray-900">$1,500</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Utilities</span>
                <span className="font-bold text-gray-900">$800</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Equipment Maintenance</span>
                <span className="font-bold text-gray-900">$700</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            6-Month Trend
          </h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-600">
              Chart visualization will display here
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
