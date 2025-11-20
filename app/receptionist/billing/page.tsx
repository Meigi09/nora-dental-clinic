"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function ReceptionistBillingPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout
      role="receptionist"
      userName={user?.name || "Receptionist"}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Billing & Invoices
          </h1>
          <p className="text-gray-700 mt-2">
            Manage patient invoices and payments
          </p>
        </div>

        {/* Financial Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">
              Total Collected
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">$18,450</p>
            <p className="text-gray-600 text-xs">This month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
            <p className="text-gray-700 text-sm font-semibold">Outstanding</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">$2,100</p>
            <p className="text-gray-600 text-xs">5 invoices</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Total Invoices
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">87</p>
            <p className="text-gray-600 text-xs">This month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
            <p className="text-gray-700 text-sm font-semibold">Avg Invoice</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">$212</p>
            <p className="text-gray-600 text-xs">Per patient</p>
          </div>
        </div>

        {/* Pending Payments */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Pending Payments
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Invoice#
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Patient
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Due Date
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Days Overdue
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-semibold">
                    INV-2025-0042
                  </td>
                  <td className="py-3 px-4 text-gray-700">John Doe</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    $350
                  </td>
                  <td className="py-3 px-4 text-gray-700">Jan 10, 2025</td>
                  <td className="py-3 px-4">
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                      5 days
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Send Reminder
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-semibold">
                    INV-2025-0048
                  </td>
                  <td className="py-3 px-4 text-gray-700">Mary Johnson</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    $450
                  </td>
                  <td className="py-3 px-4">Jan 12, 2025</td>
                  <td className="py-3 px-4">
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                      3 days
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Send Reminder
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-semibold">
                    INV-2025-0055
                  </td>
                  <td className="py-3 px-4 text-gray-700">Robert Williams</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    $600
                  </td>
                  <td className="py-3 px-4">Jan 14, 2025</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                      1 day
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Send Reminder
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-semibold">
                    INV-2025-0061
                  </td>
                  <td className="py-3 px-4 text-gray-700">Jennifer Martinez</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    $400
                  </td>
                  <td className="py-3 px-4">Jan 15, 2025</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Due Today
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Send Invoice
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-semibold">
                    INV-2025-0068
                  </td>
                  <td className="py-3 px-4 text-gray-700">David Taylor</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    $300
                  </td>
                  <td className="py-3 px-4">Jan 16, 2025</td>
                  <td className="py-3 px-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      Due Tomorrow
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Send Invoice
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700">
            Create Invoice
          </button>
          <button className="bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700">
            Record Payment
          </button>
          <button className="bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-purple-700">
            Generate Report
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
